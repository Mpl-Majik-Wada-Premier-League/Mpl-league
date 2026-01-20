const yearSelect = document.getElementById('yearSelect');
const matchesDiv = document.getElementById('matches');

// Populate year dropdown
getAvailableYears().forEach(y=>{
  let o = document.createElement('option');
  o.value = y;
  o.text = y;
  yearSelect.appendChild(o);
});

yearSelect.onchange = async ()=>{
  const year = yearSelect.value;
  const data = await loadSeason(year);
  matchesDiv.innerHTML = '';

  data.matches.sort((a,b)=>a.id - b.id); // Sorted by match id

  data.matches.forEach(m=>{
    matchesDiv.innerHTML += `
      <div class="match">
        <h3>${m.teamA || 'Team A'} vs ${m.teamB || 'Team B'}</h3>
        <p>${m.date || 'DD-MM-YYYY'} | ${m.time || '00:00'}</p>
        <p>Score: ${m.score?.teamA || '0/0'} - ${m.score?.teamB || '0/0'}</p>
        <p>Top Run: ${m.top?.highestRuns || 'N/A'}</p>
        <p>Top Wicket: ${m.top?.topWicket || 'N/A'}</p>
      </div>`;
  });
};

// Default load
yearSelect.value = '2026';
yearSelect.onchange();

