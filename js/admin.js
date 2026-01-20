const yearSelectAdmin = document.getElementById('yearSelectAdmin');
const adminFormDiv = document.getElementById('adminForm');
const loadBtn = document.getElementById('loadYear');

getAvailableYears().forEach(y=>{
  let o=document.createElement('option'); o.value=y; o.text=y;
  yearSelectAdmin.appendChild(o);
});

loadBtn.onclick = async ()=>{
  const year = yearSelectAdmin.value;
  const data = await loadSeason(year);

  adminFormDiv.innerHTML = '';

  data.matches.forEach((m,index)=>{
    adminFormDiv.innerHTML += `
      <div class="matchEdit">
        <h4>Match ${index+1}</h4>
        Team A: <input type="text" value="${m.teamA || ''}" id="teamA${index}"><br>
        Team B: <input type="text" value="${m.teamB || ''}" id="teamB${index}"><br>
        Date: <input type="date" value="${m.date || ''}" id="date${index}"><br>
        Time: <input type="time" value="${m.time || ''}" id="time${index}"><br>
        Score A: <input type="text" value="${m.score?.teamA || ''}" id="scoreA${index}"><br>
        Score B: <input type="text" value="${m.score?.teamB || ''}" id="scoreB${index}"><br>
      </div>
      <hr>
    `;
  });

  adminFormDiv.innerHTML += `<button id="saveData">Save Data</button>`;

  document.getElementById('saveData').onclick = ()=>{
    alert('Save logic: Admin can edit JSON locally and push to GitHub. Direct save via static page is not possible.');
  }
};

