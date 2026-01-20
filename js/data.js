<script>
const ADMIN_PASSWORD = "@mpl_abhi_ihba_2006_09_20_3107//pp2211";

let MPL = JSON.parse(localStorage.getItem("MPL_DATA")) || {
  years: {}
};

function saveData(){
  localStorage.setItem("MPL_DATA", JSON.stringify(MPL));
}

function getYear(year){
  if(!MPL.years[year]){
    MPL.years[year] = {
      matches: [],
      players: []
    };
  }
  return MPL.years[year];
}
</script>
