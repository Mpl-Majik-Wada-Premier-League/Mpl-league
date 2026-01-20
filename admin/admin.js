<script>
let CURRENT_YEAR = null;

function login(){
  if(adminPass.value === ADMIN_PASSWORD){
    loginBox.style.display = "none";
    adminPanel.style.display = "block";
  } else {
    msg.textContent = "Wrong Password";
  }
}

function setYear(){
  CURRENT_YEAR = yearInput.value;
  getYear(CURRENT_YEAR);
  saveData();
  alert("Year Selected");
}

function addMatch(){
  getYear(CURRENT_YEAR).matches.push({
    id: Date.now(),
    status: status.value,
    teamA: teamA.value,
    teamB: teamB.value,
    date: date.value,
    time: time.value,
    score: {
      A:{r:0,w:0,o:0},
      B:{r:0,w:0,o:0}
    },
    balls:[]
  });
  saveData();
}

function addBall(){
  const m = getYear(CURRENT_YEAR).matches.find(x=>x.id==matchId.value);
  if(!m) return;
  m.balls.push({
    bowler: bowler.value,
    runs: Number(runs.value),
    wicket: wicket.value==="true"
  });
  saveData();
}

function addPlayer(){
  getYear(CURRENT_YEAR).players.push({
    name:pName.value,
    team:pTeam.value,
    role:pRole.value
  });
  saveData();
}
</script>
