let numberWicket = 0
let numberRuns = 0
let numberBalls = 0
let numberOvers = 0
let target=0
let timeline =[]
let teamOne;
let teamTwo;
let maxOvers=0;
let timelinePrev= []
let ballatNoball=0;
let teamOneBat;
let teamTwoBat;
let icons=['./images/Image0.jpg','./images/Image1.jpg','./images/Image2.jpg','./images/Image3.jpg','./images/Image4.jpg','./images/Image5.jpg'];
let icon1;
let icon2;
document.addEventListener('DOMContentLoaded',()=>{
    icon1 = parseInt(localStorage.getItem('icon1'));
    icon2 = parseInt(localStorage.getItem('icon2'));
    teamOne =localStorage.getItem('teamOne');
    teamTwo =localStorage.getItem('teamTwo');
    document.getElementById('leftImage').src=icons[icon1];
    document.getElementById('rightImage').src=icons[icon2];
    maxOvers = parseInt(localStorage.getItem('gameOvers'));
    document.getElementById('h11').textContent=teamOne;
    document.getElementById('h13').textContent=teamTwo;
    teamOneBat = parseInt(localStorage.getItem('teamOneBat'));
    teamTwoBat = parseInt(localStorage.getItem('teamTwoBat'));
    if(teamOneBat === 1){
        document.getElementById('teamOneStatus').textContent = 'Batting';
        document.getElementById('teamTwoStatus').textContent = 'Bowling';
    }
    if(teamTwoBat === 1){
        document.getElementById('teamOneStatus').textContent = 'Bowling';
        document.getElementById('teamTwoStatus').textContent = 'Batting';
    }
    let startButton = document.getElementById('startButton');
    startButton.addEventListener("click",showRuns);

    let wicketButton = document.getElementById('wicketButton');
    wicketButton.addEventListener("click",wicketFall);

    let zeroButton = document.getElementById('zeroButton');
    zeroButton.addEventListener("click",zeroScored);

    let oneButton = document.getElementById('oneButton');
    oneButton.addEventListener("click",oneScored);

    let twoButton = document.getElementById('twoButton');
    twoButton.addEventListener("click",twoScored);

    let threeButton = document.getElementById('threeButton');
    threeButton.addEventListener("click",threeScored);

    let fourButton = document.getElementById('fourButton');
    fourButton.addEventListener("click",fourScored);
    
    let fiveButton = document.getElementById('fiveButton');
    fiveButton.addEventListener('click',fiveScored);

    let sixButton = document.getElementById('sixButton');
    sixButton.addEventListener("click",sixScored);

    let wideButton = document.getElementById('wideButton');
    wideButton.addEventListener("click",wideScored);

    let noballButton = document.getElementById('noballButton');
    noballButton.addEventListener("click",noBall);

    let byeButton = document.getElementById('byeButton');
    byeButton.addEventListener("click",byeScored);

    let legbyeButton = document.getElementById('legbyeButton');
    legbyeButton.addEventListener("click",legbyeScored);

    let endInningsButton = document.getElementById('endInningsButton');
    endInningsButton.addEventListener("click",endInnings);

    let undoButton = document.getElementById('undoButton');
    undoButton.addEventListener("click",undo);

    // let welcomePage = document.getElementById('welcomePage');
    // welcomePage.addEventListener('click',goToWelcome);
}) 
const showRuns = (e) =>{
    e.preventDefault();
    //Initiating the values by innerHTML
    numberBalls=0;
    numberOvers=0;
    numberWicket=0;
    numberRuns=0;
    timeline =[]
    document.getElementById('h12').innerHTML="Score";
    document.getElementById('rr').innerHTML = "RunRate = "+ 0;
    document.getElementById('runs').innerHTML = numberRuns;
    document.getElementById('slash').innerHTML = "/";  
    document.getElementById('wicket').innerHTML = numberWicket;     
    document.getElementById('overs').innerHTML = numberOvers;
    document.getElementById('dot').innerHTML = ".";
    document.getElementById('balls').innerHTML = numberBalls;
    document.getElementById('textOvers').innerHTML = "Overs = ";
    document.getElementById('endInningsButton').disabled = false
    enable();
}

    //ENABLING THE DISABLED BUTTON
    const enable =() =>{
        document.getElementById('startButton').disabled = false
        document.getElementById('wicketButton').disabled = false
        document.getElementById('zeroButton').disabled = false
        document.getElementById('oneButton').disabled = false
        document.getElementById('twoButton').disabled = false
        document.getElementById('threeButton').disabled = false
        document.getElementById('fourButton').disabled = false
        document.getElementById('sixButton').disabled = false
        document.getElementById('wideButton').disabled = false
        document.getElementById('byeButton').disabled = false
        document.getElementById('legbyeButton').disabled = false
        document.getElementById('noballButton').disabled = false
        document.getElementById('undoButton').disabled = false
        document.getElementById('fiveButton').disabled = false
    }
//WHEN A WICKET FALLS INCREMENT BY 1
const wicketFall = () =>{
    enable();
    numberWicket++;
    numberBalls++;
    if (numberWicket<=10 && numberWicket>=0){
    document.getElementById('wicket').innerHTML = numberWicket;
    timeline.push("W");
    completeOvers();
    }
    else{
        document.getElementById('wicketButton').disabled = true
        document.getElementById('zeroButton').disabled = true
        document.getElementById('oneButton').disabled = true
        document.getElementById('twoButton').disabled = true
        document.getElementById('threeButton').disabled = true
        document.getElementById('fourButton').disabled = true
        document.getElementById('sixButton').disabled = true
        document.getElementById('wideButton').disabled = true
        document.getElementById('byeButton').disabled = true
        document.getElementById('legbyeButton').disabled = true
        document.getElementById('noballButton').disabled = true
    }
}
//WHEN 0 RUNS SCORED INCRMENET BY 0
const zeroScored =()=>{
    enable();
    numberRuns=numberRuns+0;
    numberBalls++;
    timeline.push(0)
    document.getElementById('runs').innerHTML = numberRuns;
    completeOvers()
}

//WHEN 1 RUNS IS SCORED INCREMENT BY 1
const oneScored = () => {
    enable();
    numberRuns = numberRuns + 1
    numberBalls++;
    timeline.push(1)
    document.getElementById('runs').innerHTML = numberRuns;
    completeOvers();
}
//WHEN 2 RUNS IS SCORED INCREMENT BY 2
const twoScored = () => {
    enable();
    numberRuns = numberRuns + 2
    numberBalls++
    timeline.push(2)
    document.getElementById('runs').innerHTML = numberRuns;
    completeOvers()

}

//WHEN 3 RUNS IS SCORED INCREMENT BY 3
const threeScored = () => {
    enable();
    numberRuns = numberRuns + 3
    numberBalls++;
    timeline.push(3)
    document.getElementById('runs').innerHTML = numberRuns;
    completeOvers()
}

//WHEN 4 RUNS IS SCORED INCREMENT BY 4
const fourScored = () => {
    enable();
    numberRuns = numberRuns + 4
    numberBalls++;
    timeline.push(4)
    document.getElementById('runs').innerHTML = numberRuns;
    completeOvers()
}
//When 5 Runs Scored
const fiveScored = () =>{
    enable();
    numberRuns = numberRuns + 5
    numberBalls++
    timeline.push(5)
    document.getElementById('runs').innerHTML = numberRuns;
    completeOvers()
}
//WHEN 6 RUNS IS SCORED INCREMENT BY 6
const sixScored = () => {
    enable();
    numberRuns = numberRuns + 6
    numberBalls++;
    timeline.push(6);
    document.getElementById('runs').innerHTML = numberRuns;
    completeOvers()
}

//WHEN A WIDE BALL IS BOWLED INCREASE RUN BY 1 BUT NOT BALL
const wideScored = () => {
    enable();
    document.getElementById('legbyeButton').disabled = true
    document.getElementById('noballButton').disabled = true
    document.getElementById('byeButton').disabled = true
    document.getElementById('startButton').disabled = true
    document.getElementById('endInningsButton').disabled = true
    timeline.push("Wd");
    numberRuns = numberRuns + 1
    numberBalls=numberBalls-1
    document.getElementById('runs').innerHTML = numberRuns; 
}
//WHEN A BYE IS SCORED
const byeScored = () =>{
    enable();
    document.getElementById('legbyeButton').disabled = true
    document.getElementById('noballButton').disabled = true
    document.getElementById('wideButton').disabled = true
    document.getElementById('wicketButton').disabled = true
    document.getElementById('startButton').disabled = true
    document.getElementById('endInningsButton').disabled = true
    timeline.push("B");
}
//WHEN LEGBYE SCORED
const legbyeScored = () =>{
    enable();
    document.getElementById('byeButton').disabled = true
    document.getElementById('noballButton').disabled = true
    document.getElementById('wideButton').disabled = true
    document.getElementById('wicketButton').disabled = true
    document.getElementById('startButton').disabled = true
    document.getElementById('endInningsButton').disabled = true
    timeline.push("lb");

}
//WHEN A NO BALL IS BOWLED
const noBall = () =>{
    enable();
    ballatNoball = numberBalls;
    document.getElementById('byeButton').disabled = true
    document.getElementById('legbyeButton').disabled = true
    document.getElementById('wideButton').disabled = true
    document.getElementById('startButton').disabled = true
    document.getElementById('endInningsButton').disabled = true
    document.getElementById('wicketButton').value = "Runout";
    timeline.push("Nb");
    numberRuns = numberRuns + 1;
    document.getElementById('runs').innerHTML = numberRuns;
    numberBalls=numberBalls-1;
}
//EndInnings Buttons
const endInnings = () =>{
    enable();
    document.getElementById('innOneScore').innerHTML = "Innings 1 Score";
    document.getElementById('innOneRuns').innerHTML = "Runs= "+ numberRuns;
    document.getElementById('innOneWickets').innerHTML = "WK= " + numberWicket;
    target=numberRuns+1;
    document.getElementById('targetruns').innerHTML = "Target = " + (target);
    if(teamTwoBat === 1){
        document.getElementById('teamOneStatus').innerHTML = 'Batting';
        document.getElementById('teamTwoStatus').innerHTML = 'Bowling';
    }
    if(teamOneBat === 1){
        document.getElementById('teamOneStatus').innerHTML = 'Bowling';
        document.getElementById('teamTwoStatus').innerHTML = 'Batting';
    }
    numberBalls=0;
    numberOvers=0;
    numberWicket=0;
    numberRuns=0;
    document.getElementById('runs').innerHTML = numberRuns;
    document.getElementById('wicket').innerHTML = numberWicket;     
    document.getElementById('overs').innerHTML = numberOvers;
    document.getElementById('balls').innerHTML = numberBalls;
    document.getElementById('rr').innerHTML = "RunRate = "+ 0;
    timeline = [];
    timelineUpdate();
    document.getElementById('endInningsButton').disabled = true;
}
const undo = () =>{
    enable();
    if(numberBalls!=0){
    let undoValue2 = timeline[timeline.length-1];
    let undoValue = timeline[timeline.length -2];
    if((undoValue === "Wd"||undoValue === "Nb") && (typeof(undoValue2) === "number")){
        numberRuns = numberRuns - undoValue2;
        numberRuns =numberRuns -1;
        timeline.pop();
        timeline.pop();
        document.getElementById('wicketButton').value = "Wicket";
    }
    else if(undoValue2==="W" && undoValue === "Wd"){
        numberWicket--;
        numberRuns--;
        document.getElementById('wicket').innerHTML = numberWicket;
        timeline.pop();
        timeline.pop();
    }
    else if(undoValue2 === "W" && undoValue !="Nb"){
        timeline.pop();
        numberBalls =numberBalls - 1;
        numberWicket = numberWicket -1;
        document.getElementById('wicket').innerHTML = numberWicket;
    }
    //Current
    else if(undoValue2 === "W" && undoValue === 'Nb'){
        timeline.pop();
        timeline.pop();
        numberWicket = numberWicket -1;
        numberRuns--;
        document.getElementById('wicket').innerHTML = numberWicket;
        document.getElementById('wicketButton').value = "Wicket";
    }
    //WORKING
    else if(typeof(undoValue2)==="number" && (undoValue != "Wd"||undoValue != "Nb")){
        numberRuns = numberRuns - undoValue2;
        numberBalls = numberBalls -1;
        timeline.pop();
    }
    else{
        timeline.pop();
    }
}
else if(numberBalls===0 && (typeof(timeline[1])) ==='number' && (timeline[0] ==='Wd' || timeline[0]==='Nb')){
    numberRuns = numberRuns - timeline[1];
    numberRuns =numberRuns - 1;
    timeline.pop();
    timeline.pop();
    document.getElementById('wicketButton').value = "Wicket"
}
else if(numberBalls===0 && timeline[1] ==='W' && (timeline[0] ==='Wd' || timeline[0]==='Nb')){
    numberWicket = numberWicket-1;
    numberRuns =numberRuns - 1;
    timeline.pop();
    timeline.pop();
    document.getElementById('wicket').innerHTML = numberWicket;
    document.getElementById('wicketButton').value = "Wicket"
}
else{
 
    let undo0BallRuns = timelinePrev[timelinePrev.length -1 ];
    console.log(typeof(undo0BallRuns) + undo0BallRuns);
    numberRuns = numberRuns -undo0BallRuns;
    timelinePrev.pop();
    timeline = [...timelinePrev];
    numberBalls=5;
    numberOvers--;
    document.getElementById('overs').innerHTML = numberOvers;
}
    timelineUpdate();
    document.getElementById('runs').innerHTML = numberRuns;
    completeOvers();
}
//Timeline Updation
const timelineUpdate=()=>{
    let timelineOvers = document.getElementById("timelineOvers");
    timelineOvers.innerHTML=timeline.join(' ');
}
//Complete Over Function with overs and balls
 const completeOvers = () =>{
    if(ballatNoball === numberBalls - 1){
        document.getElementById('wicketButton').value = 'Wicket';
    }
    if (numberBalls<=5){
        document.getElementById('balls').innerHTML = numberBalls;
        }
    else {
        numberOvers++;
        document.getElementById('overs').innerHTML = numberOvers;
        numberBalls=0;
        document.getElementById('balls').innerHTML = numberBalls;
    }
    timelineUpdate();

    if(numberBalls === 0 && (timeline[0] != 'Wd' && timeline[0] !='Nb' )){
        console.log("Hweloo")
        timelinePrev = [...timeline]
        timeline = []
    }
    if(numberBalls ===0 && numberOvers ===0){
        document.getElementById('rr').innerHTML = "RunRate = "+0
    }
    else{
        document.getElementById('rr').innerHTML = "RunRate = "+(numberRuns/(numberOvers*6+numberBalls)*6).toFixed(1);
}
    if(numberOvers === maxOvers && target === 0){
        endInnings();
    }
    else{
        checkTarget();
    }
}
//Target Function
const checkTarget = ()=>{
    if(target!=0){
        if(teamOneBat === 1){

        if(numberRuns>=target){
            alert(teamTwo + " is Winner")
            goToWelcome();
            localStorage.clear();

        }
        if(numberOvers === maxOvers ){
            if(numberRuns<target-1){
                alert(teamOne + " is Winner")
                goToWelcome();
            localStorage.clear();

            }
                if(numberRuns === target -1 ){
                    alert("Match Drawn")
                    goToWelcome();
            localStorage.clear();

                }
            }
        if(numberWicket ===10){
            alert(teamOne + " is Winner")
            goToWelcome();
            localStorage.clear();

        }
    }
    if(teamTwoBat ===1){
        if(numberRuns>=target){
            alert(teamOne + " is Winner")
            goToWelcome();
            localStorage.clear();
        }
        if(numberOvers === maxOvers ){
            if(numberRuns<target-1){
                alert(teamTwo + " is Winner")
                goToWelcome();
                localStorage.clear();

            }
                if(numberRuns === target -1 ){
                    alert("Match Drawn")
                    goToWelcome();
                     localStorage.clear();

                }
            }
        if(numberWicket ===10){
            alert(teamTwo + " is Winner")
            goToWelcome();
            localStorage.clear();

        }
    }
    }
}
//Redirection To Welcomwe Page
const goToWelcome =() =>{
    alert("You Want to go to Match Setup? All Information would be lost");
    window.location.replace("welcome.html")
}