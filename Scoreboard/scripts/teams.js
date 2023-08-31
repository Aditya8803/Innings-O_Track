document.addEventListener('DOMContentLoaded',()=>{
    let startPlaying = document.getElementById('startPlaying');
    startPlaying.addEventListener('click',redirectionToToss);
})


const redirectionToToss =() =>{
let teamOne=document.getElementById("teamOne").value;
let teamTwo=document.getElementById("teamTwo").value;
let gameOvers=parseInt(document.getElementById("gameOvers").value);
let icon1 = document.getElementById('teamOneIcon').value;
let icon2 = document.getElementById('teamTwoIcon').value;
if(teamOne && teamTwo && icon1&& icon2 ){
    if(teamOne!=teamTwo && icon1!=icon2){
localStorage.setItem('teamOne',teamOne);
localStorage.setItem('teamTwo',teamTwo);
localStorage.setItem('gameOvers',gameOvers);
localStorage.setItem('icon1',icon1);
localStorage.setItem('icon2',icon2);
window.location.href="toss.html";
}
else{
    alert("You selected same team names or icons");
}
}
else{
    alert("Please enter team names and their respective icons.")
}
}
