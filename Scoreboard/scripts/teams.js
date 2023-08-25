document.addEventListener('DOMContentLoaded',()=>{
    let startPlaying = document.getElementById('startPlaying');
    startPlaying.addEventListener('click',redirectionToToss);
})
const redirectionToToss =() =>{
let teamOne=document.getElementById("teamOne").value;
let teamTwo=document.getElementById("teamTwo").value;
let gameOvers=parseInt(document.getElementById("gameOvers").value);
if(teamOne!="" && teamTwo!="" ){
localStorage.setItem('teamOne',teamOne);
localStorage.setItem('teamTwo',teamTwo);
localStorage.setItem('gameOvers',gameOvers);
let icon1 = document.getElementById('teamOneIcon').value;
let icon2 = document.getElementById('teamTwoIcon').value;
localStorage.setItem('icon1',icon1);
localStorage.setItem('icon2',icon2);
// console.log(typeof(document.getElementById('teamOneIcon').value));
window.location.href="toss.html";
}
}
