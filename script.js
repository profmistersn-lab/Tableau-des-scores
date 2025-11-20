console.log("toto")
var scoreA=document.getElementById("scoreA")
console.log(scoreA.innerText)


function add(points,equipe){
    //1- Je récupère la valeur du score
        var score=parseInt(document.getElementById(equipe).innerText)
        console.log(scoreA)
    //2- J'ajoute 1 à la valeur récupéré
        score=score+points
        if (score<0){{
            score=0
        }}
        console.log(scoreA)

    //3- J'affiche le résultat
    document.getElementById(equipe).innerText=score

}
function resetpoints(selecteur){
    //1- Je récupère la valeur du score
        var score=parseInt(document.getElementById(selecteur).innerText)
        console.log(scoreA)
    //2- J'ajoute 2 à la valeur récupéré
        score=0

    //3- J'affiche le résultat
    document.getElementById(selecteur).innerText=score

}
function miness(points,equipe){
    //1- Je récupère la valeur du score
    var score=parseInt(document.getElementById(equipe).innerText)
    console.log(scoreA)
//2- J'ajoute 1 à la valeur récupéré
    score=score-points
    if (score<0){{
        score=0
    }}
    console.log(scoreA)

//3- J'affiche le résultat
document.getElementById(equipe).innerText=score

}

var startbis=0

const start=document.getElementById("start")
const stop=document.getElementById("stop")
const reset=document.getElementById("reset")
const timer=document.getElementById("timer")
let timeLeft=600;
let interval

function updateTimer() {
    const minutes=Math.floor(timeLeft/60);
    const seconds=timeLeft%60
     timer.innerHTML=minutes.toString().padStart(2,"0")+ ":" +seconds.toString().padStart(2, "0")
}


    
function startTimer () {
    start.style="visibility: hidden;"
    start.hidden=true;
    start.disabled=true;
    interval=setInterval(() => {
        timeLeft--;
        updateTimer();

        if(timeLeft===0){
            clearInterval(interval);
            alert("Time's up!")
            timeLeft = 600;
            updateTimer();
            

        }
    }, 
        1000)
}

function stopTimer() {
    start.style="visibility: visible;"
    start.hidden=false;
    start.disabled=false;
     clearInterval(interval)
}

        const resetTimer = () => {
            clearInterval(interval);
            timeLeft =  600;
            updateTimer();
        }
var fautes=document.getElementsByClassName(fautesA)


function fauteA(){
    var element = document.getElementById('fautesA'); 
    var fautes = parseInt(element.innerText) || 0;    
    fautes = fautes + 1;                               
    element.innerText = fautes;                        
    console.log(fautes);
}


function fauteB(){
    var element = document.getElementById('fautesB'); 
    var fautes = parseInt(element.innerText) || 0;
    fautes = fautes + 1;
    element.innerText = fautes;
    console.log(fautes);
}
function save(){
    var lcl=(document.getElementById("lcl"))
    var vstrs=(document.getElementById("vstrs"))
    console.log(lcl.value)
    console.log(vstrs.value)
    document.getElementById("local").innerText=lcl.value
    document.getElementById("visit").innerText=vstrs.value
}