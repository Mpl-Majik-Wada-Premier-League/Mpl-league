async function loadSeason(year){
  try{
    const res = await fetch(`data/${year}.json`);
    if(!res.ok) return {matches: []}; // Empty if no data yet
    return await res.json();
  } catch(e){
    return {matches: []};
  }
}

function getAvailableYears(){
  return ['2026','2027']; // Add more future years as needed
}
