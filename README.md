<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Cricket Live Score</title>

<style>

body{
background:#0f172a;
font-family:Arial;
color:white;
text-align:center;
}

.scoreboard{
background:#1e293b;
padding:20px;
border-radius:10px;
width:300px;
margin:auto;
margin-top:50px;
}

.team{
font-size:22px;
font-weight:bold;
}

.score{
font-size:40px;
margin:10px;
}

.overs{
font-size:18px;
color:#38bdf8;
}

button{
padding:10px;
margin:5px;
font-size:16px;
}

</style>

</head>

<body>

<h2>🏏 Live Cricket Score</h2>

<div class="scoreboard">

<div class="team">IND vs AUS</div>

<div class="score" id="score">0/0</div>

<div class="overs" id="overs">0.0 overs</div>

</div>

<br>

<button onclick="run(1)">+1</button>
<button onclick="run(4)">FOUR</button>
<button onclick="run(6)">SIX</button>
<button onclick="wicket()">WICKET</button>

<script>

let runs=0;
let wickets=0;
let balls=0;

function run(r){

runs+=r;
balls++;

update();

}

function wicket(){

wickets++;
balls++;

update();

}

function update(){

document.getElementById("score").innerHTML=runs+"/"+wickets;

let over=Math.floor(balls/6)+"."+(balls%6);

document.getElementById("overs").innerHTML=over+" overs";

}

</script>

</body>
</html>
