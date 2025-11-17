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
function reset(selecteur){
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
