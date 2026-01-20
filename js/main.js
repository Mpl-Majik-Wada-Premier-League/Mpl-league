const yearSelect = document.getElementById('yearSelect');
const liveMatchesDiv = document.getElementById('liveMatches');
const upcomingMatchesDiv = document.getElementById('upcomingMatches');

fetch('data.json')
  .then(res => res.json())
  .then(data => {
    // Populate year dropdown
    Object.keys(data).forEach(year => {
      const option = document.createElement('option');
      option.value = year;
      option.textContent = year;
      yearSelect.appendChild(option);
    });

    // Show matches for default year
    showMatches(Object.keys(data)[0], data);

    yearSelect.addEventListener('change', () => {
      showMatches(yearSelect.value, data);
    });
  });

// Function to display matches
function showMatches(year, data){
  const matches = data[year];

  liveMatchesDiv.innerHTML = '';
  upcomingMatchesDiv.innerHTML = '';

  if(!matches || matches.length === 0){
    liveMatchesDiv.innerHTML = '<p>No live matches. Admin will update live matches here.</p>';
    upcomingMatchesDiv.innerHTML = '<p>No upcoming matches. Admin will add them.</p>';
    return;
  }

  matches.forEach(match => {
    const card = document.createElement('div');
    card.classList.add('match-card');

    // Basic card template
    card.innerHTML = `
      <h3>${match.teamA || 'Team A'} vs ${match.teamB || 'Team B'}</h3>
      <p>Date: ${match.date || 'TBD'} | Time: ${match.time || 'TBD'}</p>
      <p>Status: ${match.status || 'Upcoming'}</p>
      <p>Score: ${match.teamA || '-'} ${match.scoreA || 0}/${match.wicketsA || 0} | ${match.teamB || '-'} ${match.scoreB || 0}/${match.wicketsB || 0}</p>
      <p>Overs: ${match.teamA || '-'} ${match.oversA || 0} | ${match.teamB || '-'} ${match.oversB || 0}</p>
      <p>Top Run Scorer: ${match.topRunScorer || '-'} | Top Wicket Taker: ${match.topWicketTaker || '-'}</p>
    `;

    if(match.status && match.status.toLowerCase() === 'live'){
      liveMatchesDiv.appendChild(card);
    } else {
      upcomingMatchesDiv.appendChild(card);
    }
  });

  // If no live matches
  if(liveMatchesDiv.innerHTML === ''){
    liveMatchesDiv.innerHTML = '<p>No live matches currently.</p>';
  }
  if(upcomingMatchesDiv.innerHTML === ''){
    upcomingMatchesDiv.innerHTML = '<p>No upcoming matches.</p>';
  }
}

