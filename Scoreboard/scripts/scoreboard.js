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
let teamOneBat=0;
let teamTwoBat=0;
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
    zeroButton.addEventListener("click",function(){updateRuns(0)});

    let oneButton = document.getElementById('oneButton');
    oneButton.addEventListener("click",function(){updateRuns(1)});

    let twoButton = document.getElementById('twoButton');
    twoButton.addEventListener("click",function(){updateRuns(2)});

    let threeButton = document.getElementById('threeButton');
    threeButton.addEventListener("click",function(){updateRuns(3)});

    let fourButton = document.getElementById('fourButton');
    fourButton.addEventListener("click",function(){updateRuns(4)});
    
    let fiveButton = document.getElementById('fiveButton');
    fiveButton.addEventListener('click',function(){updateRuns(5)});

    let sixButton = document.getElementById('sixButton');
    sixButton.addEventListener("click",function(){updateRuns(6)});

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
    // alert("Tap on the start button to start scoring")
}) 
const showRuns = (e) =>{
    e.preventDefault();
    //Initiating the values by innerHTML
    numberBalls=0;
    numberOvers=0;
    numberWicket=0;
    numberRuns=0;
    timeline =[]
    document.getElementById('thisOver').innerHTML = "This Over: "
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
    document.getElementById('startButton').disabled = true;
}

    //ENABLING THE DISABLED BUTTON
const enable =() =>{
    console.log("Enable called")
        document.getElementById('wicketButton').disabled = false
        document.getElementById('zeroButton').disabled = false
        document.getElementById('oneButton').disabled = false
        document.getElementById('twoButton').disabled = false
        document.getElementById('threeButton').disabled = false
        document.getElementById('fourButton').disabled = false
        document.getElementById('fiveButton').disabled = false
        document.getElementById('sixButton').disabled = false
        document.getElementById('wideButton').disabled = false
        document.getElementById('byeButton').disabled = false
        document.getElementById('legbyeButton').disabled = false
        document.getElementById('noballButton').disabled = false
        document.getElementById('undoButton').disabled = false
    }
//WHEN A WICKET FALLS INCREMENT BY 1
const wicketFall = () =>{
    enable();
    numberWicket++;
    numberBalls++;
    if (numberWicket<=10 && numberWicket>=0){
    console.log("wicket "+ numberWicket)
    document.getElementById('wicket').innerHTML = numberWicket;
    timeline.push("W");
    completeOvers();
    // checkTarget();
}    
}
//0,1,2,3,4,5,6
const updateRuns = (a) =>{
    console.log(a)
    enable();
    numberRuns = numberRuns + a;
    numberBalls++;
    timeline.push(a);
    completeOvers();
    document.getElementById('runs').innerHTML = numberRuns;

}

//WHEN A WIDE BALL IS BOWLED INCREASE RUN BY 1 BUT NOT BALL
const wideScored = () => {
    enable();
    document.getElementById('wideButton').disabled = true
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
    document.getElementById('byeButton').disabled = true
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
    document.getElementById('legbyeButton').disabled = true
    document.getElementById('byeButton').disabled = true
    document.getElementById('noballButton').disabled = true
    document.getElementById('wideButton').disabled = true
    document.getElementById('wicketButton').disabled = true
    document.getElementById('startButton').disabled = true
    document.getElementById('endInningsButton').disabled = true
    timeline.push("Lb");

}
//WHEN A NO BALL IS BOWLED
const noBall = () =>{
    enable();
    ballatNoball = numberBalls;
    document.getElementById('noballButton').disabled = true
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
    else if(undoValue2 === "W" && undoValue === 'Nb'){
        timeline.pop();
        timeline.pop();
        numberWicket = numberWicket -1;
        numberRuns--;
        document.getElementById('wicket').innerHTML = numberWicket;
        document.getElementById('wicketButton').value = "Wicket";
    }
    else if(typeof(undoValue2)==="number" && (undoValue == "B"||undoValue === "Lb")){
        numberRuns = numberRuns - undoValue2;
        numberBalls = numberBalls -1;
        timeline.pop();
        timeline.pop();
    }
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
    if(numberBalls ===0 && numberOvers ===0){
        alert('Nothing to undo')
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
}
    timelineUpdate();
    completeOvers();
}
//Timeline Updation
const timelineUpdate=()=>{
    let timelineOvers = document.getElementById("timelineOvers");
    timelineOvers.innerHTML=timeline.join(' ');
}
//Complete Over Function with overs and balls
 const completeOvers = () =>{
    document.getElementById('runs').innerHTML = numberRuns;
    if(ballatNoball === numberBalls - 1){
        document.getElementById('wicketButton').value = 'Wicket';
    }
    if (numberBalls<=5 && numberBalls>=0){
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
        timelinePrev = [...timeline]
        timeline = []
    }
    if(numberBalls ===0 && numberOvers ===0){
        document.getElementById('rr').innerHTML = "RunRate = "+0
    }
    else{
        document.getElementById('rr').innerHTML = "RunRate = "+(numberRuns/(numberOvers*6+numberBalls)*6).toFixed(1);
}
    if((numberOvers === maxOvers && target === 0 )||(numberWicket ===10 && target===0)){
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
                console.log("Hi")
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
            if(numberRuns === target -1 && numberWicket===10){
                alert("Match Drawn")
                goToWelcome();
                localStorage.clear();
            }
        if(numberWicket ===10 && numberOvers !=maxOvers && numberRuns<target-1){
            console.log("Hello")
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
            if(numberRuns === target -1 && numberWicket===10){
                alert("Match Drawn")
                goToWelcome();
                localStorage.clear();
            }
        if(numberWicket ===10 && numberOvers!=maxOvers && numberRuns<target-1){
            alert(teamTwo + " is Winner")
             goToWelcome();
             localStorage.clear();

        }
    }
    }
}
//Redirection To Welcomwe Page
const goToWelcome =() =>{
    alert("You are being redirected to welcome page.All Information would be lost");
    window.location.replace("welcome.html")
}