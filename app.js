// Load and display alerts
async function loadAlerts() {
    try {
        const response = await fetch('data/events.json');
        const alerts = await response.json();
        
        displayAlerts(alerts);
        updateStats(alerts);
    } catch (error) {
        console.error('Failed to load alerts:', error);
        document.getElementById('alerts-container').innerHTML = 
            '<div class="loading">Failed to load alerts. Please try again later.</div>';
    }
}

function displayAlerts(alerts) {
    const container = document.getElementById('alerts-container');
    
    if (!alerts || alerts.length === 0) {
        container.innerHTML = '<div class="loading">No alerts in the past week. Stay vigilant!</div>';
        return;
    }

    container.innerHTML = alerts.map(alert => `
        <div class="alert-card ${alert.severity || 'medium'}">
            <div class="alert-header">
                <div class="timestamp">${formatTimestamp(alert.timestamp)}</div>
                <div class="severity-badge ${alert.severity || 'medium'}">${(alert.severity || 'medium').toUpperCase()}</div>
            </div>
            
            <div class="alert-summary">${alert.summary}</div>
            
            ${alert.entities && alert.entities.length > 0 ? `
                <div class="entities">
                    ${alert.entities.map(entity => `<span class="entity-tag">${entity}</span>`).join('')}
                </div>
            ` : ''}
            
            ${alert.sources && alert.sources.length > 0 ? `
                <div class="sources">
                    ${alert.sources.map((source, i) => 
                        `<a href="${source}" target="_blank" class="source-link">Source ${i + 1}</a>`
                    ).join('')}
                </div>
            ` : ''}
        </div>
    `).join('');
}

function updateStats(alerts) {
    const totalAlerts = alerts.length;
    const criticalCount = alerts.filter(a => a.severity === 'critical').length;
    const highCount = alerts.filter(a => a.severity === 'high').length;
    
    document.getElementById('total-alerts').textContent = totalAlerts;
    document.getElementById('critical-count').textContent = criticalCount;
    document.getElementById('high-count').textContent = highCount;
    
    // Get the most recent timestamp
    if (alerts.length > 0) {
        const mostRecent = new Date(alerts[0].timestamp);
        document.getElementById('last-updated').textContent = formatTimestamp(alerts[0].timestamp);
    }
}

function formatTimestamp(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffDays = Math.floor(diffHours / 24);
    
    if (diffHours < 1) {
        return 'Just now';
    } else if (diffHours < 24) {
        return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
    } else if (diffDays < 7) {
        return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    } else {
        return date.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
    }
}

// Load alerts on page load
document.addEventListener('DOMContentLoaded', loadAlerts);

// Auto-refresh every 5 minutes
setInterval(loadAlerts, 5 * 60 * 1000);
