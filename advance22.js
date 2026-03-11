

function updateDifference() {
  const runsA = parseInt(document.getElementById('totalrunsA1').textContent) || 0;
  const runsB = parseInt(document.getElementById('totalrunsB1').textContent) || 0;
  document.getElementById('result').textContent = runsA - runsB;
}

// Observe changes in totalrunsA1
const observerA = new MutationObserver(updateDifference);
observerA.observe(document.getElementById('totalrunsA1'), { childList: true, characterData: true, subtree: true });

// Observe changes in totalrunsB1
const observerB = new MutationObserver(updateDifference);
observerB.observe(document.getElementById('totalrunsB1'), { childList: true, characterData: true, subtree: true });

// Initial calculation
updateDifference();



function toggleCards() {
  const card1 = document.getElementById('cardchange1');
  const card2 = document.getElementById('cardchange2');

  if (card1.style.display === "none") {
    card1.style.display = "block";
    card2.style.display = "none";
  } else {
    card1.style.display = "none";
    card2.style.display = "block";
  }
}

function showTeam(){

let value = document.getElementById("teamMenu").value;

let teams = document.querySelectorAll(".teamBox");

teams.forEach(team=>{
team.style.display="none";
});

if(value){
document.getElementById(value).style.display="block";
}

}

function showTeam1(){

let value1 = document.getElementById("teamMenu1").value;

let teams1 = document.querySelectorAll(".teamBox1");

teams1.forEach(team=>{
team.style.display="none";
});

if(value1){
document.getElementById(value1).style.display="block";
}

}


const fileInput4 = document.getElementById("fileInput4");
const imgPreview4 = document.getElementById("preview4");
const videoPreview4 = document.getElementById("videoPreview4");

fileInput4.addEventListener("change", function(){

    const file = this.files[0];
    if(!file) return;

    const url = URL.createObjectURL(file);

    if(file.type.startsWith("image")){
        imgPreview4.src = url;
        imgPreview4.style.display = "block";
        videoPreview4.style.display = "none";
    }

    else if(file.type.startsWith("video")){
        videoPreview4.src = url;
        videoPreview4.style.display = "block";
        imgPreview4.style.display = "none";
    }

});


const fileInput = document.getElementById("fileInput");
const imgPreview = document.getElementById("preview");
const videoPreview = document.getElementById("videoPreview");

fileInput.addEventListener("change", function(){

    const file = this.files[0];
    if(!file) return;

    const url = URL.createObjectURL(file);

    if(file.type.startsWith("image")){
        imgPreview.src = url;
        imgPreview.style.display = "block";
        videoPreview.style.display = "none";
    }

    else if(file.type.startsWith("video")){
        videoPreview.src = url;
        videoPreview.style.display = "block";
        imgPreview.style.display = "none";
        videoPreview.play();
    }

});


const fileInput5 = document.getElementById("fileInput5");
const imgPreview5 = document.getElementById("preview5");
const videoPreview5 = document.getElementById("videoPreview5");

fileInput5.addEventListener("change", function(){

    const file = this.files[0];
    if(!file) return;

    const url = URL.createObjectURL(file);

    if(file.type.startsWith("image")){
        imgPreview5.src = url;
        imgPreview5.style.display = "block";
        videoPreview5.style.display = "none";
    }

    else if(file.type.startsWith("video")){
        videoPreview5.src = url;
        videoPreview5.style.display = "block";
        imgPreview5.style.display = "none";
        videoPreview5.play();
    }

});

const fileInput6 = document.getElementById("fileInput6");
const imgPreview6 = document.getElementById("preview6");
const videoPreview6 = document.getElementById("videoPreview6");

fileInput6.addEventListener("change", function(){

    const file = this.files[0];
    if(!file) return;

    const url = URL.createObjectURL(file);

    if(file.type.startsWith("image")){
        imgPreview6.src = url;
        imgPreview6.style.display = "block";
        videoPreview6.style.display = "none";
    }

    else if(file.type.startsWith("video")){
        videoPreview6.src = url;
        videoPreview6.style.display = "block";
        imgPreview6.style.display = "none";
        videoPreview6.play();
    }

});



const fileInput7 = document.getElementById("fileInput7");
const imgPreview7 = document.getElementById("preview7");
const videoPreview7 = document.getElementById("videoPreview7");

fileInput7.addEventListener("change", function(){

    const file = this.files[0];
    if(!file) return;

    const url = URL.createObjectURL(file);

    if(file.type.startsWith("image")){
        imgPreview7.src = url;
        imgPreview7.style.display = "block";
        videoPreview7.style.display = "none";
    }

    else if(file.type.startsWith("video")){
        videoPreview7.src = url;
        videoPreview7.style.display = "block";
        imgPreview7.style.display = "none";
        videoPreview7.play();
    }

}); 


const fileInput8 = document.getElementById("fileInput8");
const imgPreview8 = document.getElementById("preview8");
const videoPreview8 = document.getElementById("videoPreview8");

fileInput8.addEventListener("change", function(){

    const file = this.files[0];
    if(!file) return;

    const url = URL.createObjectURL(file);

    if(file.type.startsWith("image")){
        imgPreview8.src = url;
        imgPreview8.style.display = "block";
        videoPreview8.style.display = "none";
    }

    else if(file.type.startsWith("video")){
        videoPreview8.src = url;
        videoPreview8.style.display = "block";
        imgPreview8.style.display = "none";
        videoPreview8.play();
    }

}); 



const fileInput20 = document.getElementById("fileInput20");
const imgPreview20 = document.getElementById("preview20");
const videoPreview20 = document.getElementById("videoPreview20");

fileInput20.addEventListener("change", function(){

    const file = this.files[0];
    if(!file) return;

    const url = URL.createObjectURL(file);

    if(file.type.startsWith("image")){
        imgPreview20.src = url;
        imgPreview20.style.display = "block";
        videoPreview20.style.display = "none";
    }

    else if(file.type.startsWith("video")){
        videoPreview20.src = url;
        videoPreview20.style.display = "block";
        imgPreview20.style.display = "none";
        videoPreview20.play();
    }

}); 

const fileInput21 = document.getElementById("fileInput21");
const imgPreview21 = document.getElementById("preview21");
const videoPreview21 = document.getElementById("videoPreview21");

fileInput21.addEventListener("change", function(){

    const file = this.files[0];
    if(!file) return;

    const url = URL.createObjectURL(file);

    if(file.type.startsWith("image")){
        imgPreview21.src = url;
        imgPreview21.style.display = "block";
        videoPreview21.style.display = "none";
    }

    else if(file.type.startsWith("video")){
        videoPreview21.src = url;
        videoPreview21.style.display = "block";
        imgPreview21.style.display = "none";
        videoPreview21.play();
    }

});



/* ========= MATCH DATA ========= */

let match={
team:"A",
runs:0,
wickets:0,
balls:0,
striker:101,
nonStriker:102,
bowler:1
};

/* ========= SAFE FUNCTIONS ========= */

function num(v){
return parseInt(v)||0;
}

function set(id,val){
let el=document.getElementById(id);
if(el) el.innerText=val;
}

/* ========= BALL ENGINE ========= */

function playBall(runs=0,extra=""){

let striker=match.striker;
let bowler=match.bowler;

/* TEAM RUN */

match.runs+=runs;

/* BATSMAN */

let pr=document.getElementById("runs"+striker);
let pb=document.getElementById("balls"+striker);

if(extra===""){

match.balls+=1;

if(pr) pr.innerText=num(pr.innerText)+runs;
if(pb) pb.innerText=num(pb.innerText)+1;

}

/* BOWLER */

let br=document.getElementById("bowlerRuns"+bowler);
let bb=document.getElementById("bowlerBalls"+bowler);

if(br) br.innerText=num(br.innerText)+runs;

if(extra===""){
if(bb) bb.innerText=num(bb.innerText)+1;
}

/* EXTRAS */

if(extra==="wide") match.runs+=1;
if(extra==="noball") match.runs+=1;

/* STRIKE CHANGE */

if(runs%2===1){
swapStrike();
}

/* OVER COMPLETE */

if(match.balls%6===0){
swapStrike();
}

/* UPDATE SCORE */

updateScoreboard();

}

/* ========= WICKET ========= */

function wicket(){

match.wickets+=1;

let bw=document.getElementById("bowlerWickets"+match.bowler);

if(bw) bw.innerText=num(bw.innerText)+1;

updateScoreboard();

}

/* ========= STRIKE CHANGE ========= */

function swapStrike(){

let temp=match.striker;
match.striker=match.nonStriker;
match.nonStriker=temp;

}

/* ========= SCOREBOARD UPDATE ========= */

function updateScoreboard(){

let overs=Math.floor(match.balls/6);
let balls=match.balls%6;

set("totalRuns",match.runs);
set("totalWickets",match.wickets);
set("totalOvers",overs+"."+balls);

}