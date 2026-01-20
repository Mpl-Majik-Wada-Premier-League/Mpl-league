<script>
const yearSelect = document.getElementById("yearSelect");
const matchList = document.getElementById("matchList");
const playerList = document.getElementById("playerList");

function loadYears(){
  yearSelect.innerHTML = "";
  Object.keys(MPL.years).forEach(y=>{
    yearSelect.innerHTML += `<option value="${y}">${y}</option>`;
  });
}

function renderUser(){
  const year = yearSelect.value;
  const data = getYear(year);

  matchList.innerHTML = "";
  data.matches.forEach(m=>{
    matchList.innerHTML += `
      <div class="card match ${m.status}">
        <h3>${m.teamA} vs ${m.teamB}</h3>
        <p>${m.score.A.r}/${m.score.A.w} (${m.score.A.o} ov)</p>
        <p>${m.score.B.r}/${m.score.B.w} (${m.score.B.o} ov)</p>
        <p>Total Wickets: ${m.balls.filter(b=>b.wicket).length}</p>
      </div>
    `;
  });

  playerList.innerHTML = "";
  data.players.forEach(p=>{
    playerList.innerHTML += `
      <div class="player">
        <strong>${p.name}</strong><br>
        ${p.team} – ${p.role}
      </div>
    `;
  });
}

loadYears();
renderUser();
</script>
