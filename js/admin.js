const password = "@mpl_abhi_ihba_2006_09_20_3107//pp2211";
const loginDiv = document.getElementById('loginDiv');
const adminDiv = document.getElementById('adminDiv');
const loginMsg = document.getElementById('loginMsg');
const jsonData = document.getElementById('jsonData');

function login(){
  const pass = document.getElementById('adminPass').value;
  if(pass === password){
    loginDiv.style.display = 'none';
    adminDiv.style.display = 'block';
    fetch('data.json')
      .then(res => res.text())
      .then(data => jsonData.value = data);
  } else {
    loginMsg.textContent = "Incorrect password!";
  }
}

function saveData(){
  const blob = new Blob([jsonData.value], {type: "application/json"});
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "data.json";
  link.click();
  alert("Data updated! Upload new data.json to GitHub to persist.");
}
