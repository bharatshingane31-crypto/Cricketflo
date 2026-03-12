<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">


<title>Mirror Scoreboard</title>

<link rel="stylesheet" href="advanceboard.css">

<link rel="stylesheet" href="advanceboard1.css">

</head>
<body>

<div class="upload-box">
    <img id="preview">
    <video id="videoPreview" controls autoplay loop style="display:none;"></video>
</div>

<div class="wrapper">
    
        <div class="wrapper1">
        
        <div class="box4">
          <div class="upload-box4">
           <img id="preview4">
            <video id="videoPreview4" controls autoplay style="display:none;"></video>
        </div>
       </div>
       <div class="scorboard12">
            <div class="name-team12">
            <img id="preview20">
            <video id="videoPreview20" controls autoplay style="display:none;"></video>
            </div>
            <div class="run-card12">
              <div class="run12">
               <span style="color: white;" id="totalrunsB">0</span>
               <span style="color: white;">/</span>
               <span style="color: white;" id="totalWicketsA">0</span>
               </div>
              <div class="over12">
               <span style="color: white;" id="totalOversA">0</span>
               </div>
               
            </div>
            

        </div>

       
       </div>


       <div class="myvfx">
       <div id="vfxPopup" class="vfx-popup">
    <div class="vfx-content">
        <h1 id="vfxText">0</h1>
    </div>
       </div>
         </div>


        <div class="wrapper2">
         
        <div class="box5">
          
          <div class="upload-box5">
         <img id="preview5">
         <video id="videoPreview5" controls autoplay loop style="display:none;"></video>
       </div>

       </div>
       <div class="scorboard1">
            <div class="name-team11">
            <img id="preview21">
            <video id="videoPreview21" controls autoplay style="display:none;"></video>
            </div>

          <div id="cardchange1" class="cardchange">  
            <!-- First run card -->
          <div class="run-card">  
          
                <div class="run">
                <span style="color:white;" id="totalrunsA1">0</span> /
                <span style="color:white;" id="totalWicketsB1">0</span>
                </div>
                <div class="over">
                  <span style="color:white;" id="totalOversB1">0</span>
                </div>

            
           
         </div>
           </div>

             <div id="cardchange2" class="cardchange"> 
                <!-- second run card -->
          <div class="run-card">  
          
                <div class="run">
                <span style="color:white;" id="result">0</span> from
                <span style="color:white;" id="">10</span>
                </div>
                <div class="over">
                  <span style="color:white;" id="">10</span>
                </div>

            
            </div>
          </div>


         </div>



        </div>



           
        </div>
  
    


<div class="wrapper3">

<div class="wrapper3A">
<div>
<select id="teamMenu" onchange="showTeam()">
<option value="">Select Team</option>
<option value="team1">Team A1</option>
<option value="team2">Team A2</option>
<option value="team3">Team A3</option>
<option value="team4">Team A4</option>
<option value="team5">Team A5</option>
<option value="team6">Team A6</option>
<option value="team7">Team A7</option>
<option value="team8">Team A8</option>
<option value="team9">Team A9</option>
<option value="team10">Team A10</option>
<option value="team11">Team A11</option>

<option value="team12">Team B1</option>
<option value="team13">Team B2</option>
<option value="team14">Team B3</option>
<option value="team15">Team B4</option>
<option value="team16">Team B5</option>
<option value="team17">Team B6</option>
<option value="team18">Team B7</option>
<option value="team19">Team B8</option>
<option value="team20">Team B9</option>
<option value="team21">Team B10</option>
<option value="team22">Team B11</option>

</select>

</div> 
  
  <!-- ================= TEAM 1 CONTROLS ================= -->
<div id="team1" class="teamBox">
<div class="scoreboard-wrapper" id="scoreboard-wrapper1">

<!-- 101 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img101" width="80">
      <div class="extraplayer1">
      <div class="title" id="name101"></div>
    

    <input type="text" id="nameInput101" placeholder="Enter Player Name">
    <button onclick="addName(101)">Add </button>
    <button onclick="deleteName()">Delete</button>
    <button onclick="resetName(101)">Reset</button>

    <input type="file" id="imageInput101" accept="image/*">
    <button onclick="deleteImage()">Delete</button>
    <button onclick="resetImage(101)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs101">0</div>
    <div class="balls">Balls: <span id="balls101">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours101">0</span></div>
      <div class="stat">6s <span id="sixes101">0</span></div>
      <div class="stat">SR <span id="strikeRate101">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRuns(1)">1</button>
      <button onclick="addRuns(2)">2</button>
      <button onclick="minusRuns(1)">-1</button>
      <button onclick="minusRuns(2)">-2</button>
      <button onclick="addRuns(3)">3</button>
      <button onclick="addFour()">4</button>
      <button onclick="minusRuns(3)">-3</button>
      <button onclick="minusFour()">-4</button>
      <button onclick="addRuns(5)">5</button>
      <button onclick="addSix()">6</button> 
      <button onclick="minusRuns(5)">-5</button>
      <button onclick="minusSix()">-6</button>

      <button onclick="dotBall()">Dot</button>
      <button onclick="resetAll()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team2" class="teamBox">
   <!-- ================= TEAM 2 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper2">

<!-- 102 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img102" width="80">
      <div class="extraplayer1">
      <div class="title" id="name102"></div>
    

    <input type="text" id="nameInput102" placeholder="Enter Player Name">
    <button onclick="addNameTeam2(102)">Add </button>
    <button onclick="deleteNameTeam2()">Delete</button>
    <button onclick="resetNameTeam2(102)">Reset</button>

    <input type="file" id="imageInput102" accept="image/*">
    <button onclick="deleteImageTeam2()">Delete</button>
    <button onclick="resetImageTeam2(102)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs102">0</div>
    <div class="balls">Balls: <span id="balls102">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours102">0</span></div>
      <div class="stat">6s <span id="sixes102">0</span></div>
      <div class="stat">SR <span id="strikeRate102">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam2(1)">1</button>
      <button onclick="minusRunsTeam2(1)">-1</button>
      <button onclick="addRunsTeam2(2)">2</button>
      <button onclick="minusRunsTeam2(2)">-2</button>
      <button onclick="addRunsTeam2(3)">3</button>
      <button onclick="minusRunsTeam2(3)">-3</button>
      <button onclick="addFourTeam2()">4</button>
      <button onclick="minusFourTeam2()">-4</button>
      <button onclick="addRunsTeam2(5)">5</button>
      <button onclick="minusRunsTeam2(5)">-5</button>
      <button onclick="addSixTeam2()">6</button>
      <button onclick="minusSixTeam2()">-6</button>
      <button onclick="dotBallTeam2()">Dot</button>
      <button onclick="resetAllTeam2()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team3" class="teamBox">
   <!-- ================= TEAM 2 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper3">

<!-- 103 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img103" width="80">
      <div class="extraplayer1">
      <div class="title" id="name103"></div>
    

    <input type="text" id="nameInput103" placeholder="Enter Player Name">
    <button onclick="addNameTeam3(103)">Add </button>
    <button onclick="deleteNameTeam3()">Delete</button>
    <button onclick="resetNameTeam3(103)">Reset</button>

    <input type="file" id="imageInput103" accept="image/*">
    <button onclick="deleteImageTeam3()">Delete</button>
    <button onclick="resetImageTeam3(103)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs103">0</div>
    <div class="balls">Balls: <span id="balls103">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours103">0</span></div>
      <div class="stat">6s <span id="sixes103">0</span></div>
      <div class="stat">SR <span id="strikeRate103">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam3(1)">1</button>
      <button onclick="minusRunsTeam3(1)">-1</button>
      <button onclick="addRunsTeam3(2)">2</button>
      <button onclick="minusRunsTeam3(2)">-2</button>
      <button onclick="addRunsTeam3(3)">3</button>
      <button onclick="minusRunsTeam3(3)">-3</button>
      <button onclick="addFourTeam3()">4</button>
      <button onclick="minusFourTeam3()">-4</button>
      <button onclick="addRunsTeam3(5)">5</button>
      <button onclick="minusRunsTeam3(5)">-5</button>
      <button onclick="addSixTeam3()">6</button>
      <button onclick="minusSixTeam3()">-6</button>
      <button onclick="dotBallTeam3()">Dot</button>
      <button onclick="resetAllTeam3()">Reset</button>
    </div>
</div>

</div>
</div>

 <div id="team4" class="teamBox">
   <!-- ================= TEAM 4 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper4">

<!-- 104 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img104" width="80">
      <div class="extraplayer1">
      <div class="title" id="name104"></div>
    

    <input type="text" id="nameInput104" placeholder="Enter Player Name">
    <button onclick="addNameTeam4(104)">Add </button>
    <button onclick="deleteNameTeam4()">Delete</button>
    <button onclick="resetNameTeam4(104)">Reset</button>

    <input type="file" id="imageInput104" accept="image/*">
    <button onclick="deleteImageTeam4()">Delete</button>
    <button onclick="resetImageTeam4(104)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs104">0</div>
    <div class="balls">Balls: <span id="balls104">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours104">0</span></div>
      <div class="stat">6s <span id="sixes104">0</span></div>
      <div class="stat">SR <span id="strikeRate104">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam4(1)">1</button>
      <button onclick="minusRunsTeam4(1)">-1</button>
      <button onclick="addRunsTeam4(2)">2</button>
      <button onclick="minusRunsTeam4(2)">-2</button>
      <button onclick="addRunsTeam4(3)">3</button>
      <button onclick="minusRunsTeam4(3)">-3</button>
      <button onclick="addFourTeam4()">4</button>
      <button onclick="minusFourTeam4()">-4</button>
      <button onclick="addRunsTeam4(5)">5</button>
      <button onclick="minusRunsTeam4(5)">-5</button>
      <button onclick="addSixTeam4()">6</button>
      <button onclick="minusSixTeam4()">-6</button>
      <button onclick="dotBallTeam4()">Dot</button>
      <button onclick="resetAllTeam4()">Reset</button>
    </div>
</div>

</div>
 </div>
<div id="team5" class="teamBox">
   <!-- ================= TEAM 5 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper5">

<!-- 105 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img105" width="80">
      <div class="extraplayer1">
      <div class="title" id="name105"></div>
    

    <input type="text" id="nameInput105" placeholder="Enter Player Name">
    <button onclick="addNameTeam5(105)">Add </button>
    <button onclick="deleteNameTeam5()">Delete</button>
    <button onclick="resetNameTeam5(105)">Reset</button>

    <input type="file" id="imageInput105" accept="image/*">
    <button onclick="deleteImageTeam5()">Delete</button>
    <button onclick="resetImageTeam5(105)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs105">0</div>
    <div class="balls">Balls: <span id="balls105">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours105">0</span></div>
      <div class="stat">6s <span id="sixes105">0</span></div>
      <div class="stat">SR <span id="strikeRate105">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam5(1)">1</button>
      <button onclick="minusRunsTeam5(1)">-1</button>
      <button onclick="addRunsTeam5(2)">2</button>
      <button onclick="minusRunsTeam5(2)">-2</button>
      <button onclick="addRunsTeam5(3)">3</button>
      <button onclick="minusRunsTeam5(3)">-3</button>
      <button onclick="addFourTeam5()">4</button>
      <button onclick="minusFourTeam5()">-4</button>
      <button onclick="addRunsTeam5(5)">5</button>
      <button onclick="minusRunsTeam5(5)">-5</button>
      <button onclick="addSixTeam5()">6</button>
      <button onclick="minusSixTeam5()">-6</button>
      <button onclick="dotBallTeam5()">Dot</button>
      <button onclick="resetAllTeam5()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team6" class="teamBox">
   <!-- ================= TEAM 6 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper6">

<!-- 106 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img106" width="80">
      <div class="extraplayer1">
      <div class="title" id="name106"></div>
    

    <input type="text" id="nameInput106" placeholder="Enter Player Name">
    <button onclick="addNameTeam6(106)">Add </button>
    <button onclick="deleteNameTeam6()">Delete</button>
    <button onclick="resetNameTeam6(106)">Reset</button>

    <input type="file" id="imageInput106" accept="image/*">
    <button onclick="deleteImageTeam6()">Delete</button>
    <button onclick="resetImageTeam6(106)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs106">0</div>
    <div class="balls">Balls: <span id="balls106">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours106">0</span></div>
      <div class="stat">6s <span id="sixes106">0</span></div>
      <div class="stat">SR <span id="strikeRate106">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam6(1)">1</button>
      <button onclick="minusRunsTeam6(1)">-1</button>
      <button onclick="addRunsTeam6(2)">2</button>
      <button onclick="minusRunsTeam6(2)">-2</button>
      <button onclick="addRunsTeam6(3)">3</button>
      <button onclick="minusRunsTeam6(3)">-3</button>
      <button onclick="addFourTeam6()">4</button>
      <button onclick="minusFourTeam6()">-4</button>
      <button onclick="addRunsTeam6(5)">5</button>
      <button onclick="minusRunsTeam6(5)">-5</button>
      <button onclick="addSixTeam6()">6</button>
      <button onclick="minusSixTeam6()">-6</button>
      <button onclick="dotBallTeam6()">Dot</button>
      <button onclick="resetAllTeam6()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team7" class="teamBox">
   <!-- ================= TEAM 7CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper7">

<!-- 107 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img107" width="80">
      <div class="extraplayer1">
      <div class="title" id="name107"></div>
    

    <input type="text" id="nameInput107" placeholder="Enter Player Name">
    <button onclick="addNameTeam7(107)">Add </button>
    <button onclick="deleteNameTeam7()">Delete</button>
    <button onclick="resetNameTeam7(107)">Reset</button>

    <input type="file" id="imageInput107" accept="image/*">
    <button onclick="deleteImageTeam7()">Delete</button>
    <button onclick="resetImageTeam7(107)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs107">0</div>
    <div class="balls">Balls: <span id="balls107">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours107">0</span></div>
      <div class="stat">6s <span id="sixes107">0</span></div>
      <div class="stat">SR <span id="strikeRate107">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam7(1)">1</button>
      <button onclick="minusRunsTeam7(1)">-1</button>
      <button onclick="addRunsTeam7(2)">2</button>
      <button onclick="minusRunsTeam7(2)">-2</button>
      <button onclick="addRunsTeam7(3)">3</button>
      <button onclick="minusRunsTeam7(3)">-3</button>
      <button onclick="addFourTeam7()">4</button>
      <button onclick="minusFourTeam7()">-4</button>
      <button onclick="addRunsTeam7(5)">5</button>
      <button onclick="minusRunsTeam7(5)">-5</button>
      <button onclick="addSixTeam7()">6</button>
      <button onclick="minusSixTeam7()">-6</button>
      <button onclick="dotBallTeam7()">Dot</button>
      <button onclick="resetAllTeam7()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team8" class="teamBox">
   <!-- ================= TEAM 8 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper8">

<!-- 108 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img108" width="80">
      <div class="extraplayer1">
      <div class="title" id="name108"></div>
    

    <input type="text" id="nameInput108" placeholder="Enter Player Name">
    <button onclick="addNameTeam8(108)">Add </button>
    <button onclick="deleteNameTeam8()">Delete</button>
    <button onclick="resetNameTeam8(108)">Reset</button>

    <input type="file" id="imageInput108" accept="image/*">
    <button onclick="deleteImageTeam8()">Delete</button>
    <button onclick="resetImageTeam8(108)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs108">0</div>
    <div class="balls">Balls: <span id="balls108">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours108">0</span></div>
      <div class="stat">6s <span id="sixes108">0</span></div>
      <div class="stat">SR <span id="strikeRate108">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam8(1)">1</button>
      <button onclick="minusRunsTeam8(1)">-1</button>
      <button onclick="addRunsTeam8(2)">2</button>
      <button onclick="minusRunsTeam8(2)">-2</button>
      <button onclick="addRunsTeam8(3)">3</button>
      <button onclick="minusRunsTeam8(3)">-3</button>
      <button onclick="addFourTeam8()">4</button>
      <button onclick="minusFourTeam8()">-4</button>
      <button onclick="addRunsTeam8(5)">5</button>
      <button onclick="minusRunsTeam8(5)">-5</button>
      <button onclick="addSixTeam8()">6</button>
      <button onclick="minusSixTeam8()">-6</button>
      <button onclick="dotBallTeam8()">Dot</button>
      <button onclick="resetAllTeam8()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team9" class="teamBox">

   <!-- ================= TEAM 9 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper9">

<!-- 109 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img109" width="80">
      <div class="extraplayer1">
      <div class="title" id="name109"></div>
    

    <input type="text" id="nameInput109" placeholder="Enter Player Name">
    <button onclick="addNameTeam9(109)">Add </button>
    <button onclick="deleteNameTeam9()">Delete</button>
    <button onclick="resetNameTeam9(109)">Reset</button>

    <input type="file" id="imageInput109" accept="image/*">
    <button onclick="deleteImageTeam9()">Delete</button>
    <button onclick="resetImageTeam9(109)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs109">0</div>
    <div class="balls">Balls: <span id="balls109">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours109">0</span></div>
      <div class="stat">6s <span id="sixes109">0</span></div>
      <div class="stat">SR <span id="strikeRate109">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam9(1)">1</button>
      <button onclick="minusRunsTeam9(1)">-1</button>
      <button onclick="addRunsTeam9(2)">2</button>
      <button onclick="minusRunsTeam9(2)">-2</button>
      <button onclick="addRunsTeam9(3)">3</button>
      <button onclick="minusRunsTeam9(3)">-3</button>
      <button onclick="addFourTeam9()">4</button>
      <button onclick="minusFourTeam9()">-4</button>
      <button onclick="addRunsTeam9(5)">5</button>
      <button onclick="minusRunsTeam9(5)">-5</button>
      <button onclick="addSixTeam9()">6</button>
      <button onclick="minusSixTeam9()">-6</button>
      <button onclick="dotBallTeam9()">Dot</button>
      <button onclick="resetAllTeam9()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team10" class="teamBox">
   <!-- ================= TEAM 10 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper10">

<!-- 110 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img110" width="80">
      <div class="extraplayer1">
      <div class="title" id="name110"></div>
    

    <input type="text" id="nameInput110" placeholder="Enter Player Name">
    <button onclick="addNameTeam10(110)">Add </button>
    <button onclick="deleteNameTeam10()">Delete</button>
    <button onclick="resetNameTeam10(110)">Reset</button>

    <input type="file" id="imageInput110" accept="image/*">
    <button onclick="deleteImageTeam10()">Delete</button>
    <button onclick="resetImageTeam10(110)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs110">0</div>
    <div class="balls">Balls: <span id="balls110">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours110">0</span></div>
      <div class="stat">6s <span id="sixes110">0</span></div>
      <div class="stat">SR <span id="strikeRate110">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam10(1)">1</button>
      <button onclick="minusRunsTeam10(1)">-1</button>
      <button onclick="addRunsTeam10(2)">2</button>
      <button onclick="minusRunsTeam10(2)">-2</button>
      <button onclick="addRunsTeam10(3)">3</button>
      <button onclick="minusRunsTeam10(3)">-3</button>
      <button onclick="addFourTeam10()">4</button>
      <button onclick="minusFourTeam10()">-4</button>
      <button onclick="addRunsTeam10(5)">5</button>
      <button onclick="minusRunsTeam10(5)">-5</button>
      <button onclick="addSixTeam10()">6</button>
      <button onclick="minusSixTeam10()">-6</button>
      <button onclick="dotBallTeam10()">Dot</button>
      <button onclick="resetAllTeam10()">Reset</button>
    </div>
</div>

</div>
</div>

<div id="team11" class="teamBox">
   <!-- ================= TEAM 11 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper11">

<!-- 111 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img111" width="80">
      <div class="extraplayer1">
      <div class="title" id="name111"></div>
    

    <input type="text" id="nameInput111" placeholder="Enter Player Name">
    <button onclick="addNameTeam11(111)">Add </button>
    <button onclick="deleteNameTeam11()">Delete</button>
    <button onclick="resetNameTeam11(111)">Reset</button>

    <input type="file" id="imageInput111" accept="image/*">
    <button onclick="deleteImageTeam11()">Delete</button>
    <button onclick="resetImageTeam11(111)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs111">0</div>
    <div class="balls">Balls: <span id="balls111">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours111">0</span></div>
      <div class="stat">6s <span id="sixes111">0</span></div>
      <div class="stat">SR <span id="strikeRate111">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam11(1)">1</button>
      <button onclick="minusRunsTeam11(1)">-1</button>
      <button onclick="addRunsTeam11(2)">2</button>
      <button onclick="minusRunsTeam11(2)">-2</button>
      <button onclick="addRunsTeam11(3)">3</button>
      <button onclick="minusRunsTeam11(3)">-3</button>
      <button onclick="addFourTeam11()">4</button>
      <button onclick="minusFourTeam11()">-4</button>
      <button onclick="addRunsTeam11(5)">5</button>
      <button onclick="minusRunsTeam11(5)">-5</button>
      <button onclick="addSixTeam11()">6</button>
      <button onclick="minusSixTeam11()">-6</button>
      <button onclick="dotBallTeam11()">Dot</button>
      <button onclick="resetAllTeam11()">Reset</button>
    </div>
</div>

</div>
</div>





<div id="team12" class="teamBox">
   <!-- ================= TEAM b1 CONTROLS ================= -->
<div class="scoreboard-wrapper" id="scoreboard-wrapper12">

<!-- 112 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img112" width="80">
      <div class="extraplayer1">
      <div class="title" id="name112"></div>
    

    <input type="text" id="nameInput112" placeholder="Enter Player Name">
    <button onclick="addNameTeam12(112)">Add </button>
    <button onclick="deleteNameTeam12()">Delete</button>
    <button onclick="resetNameTeam12(112)">Reset</button>

    <input type="file" id="imageInput112" accept="image/*">
    <button onclick="deleteImageTeam12()">Delete</button>
    <button onclick="resetImageTeam12(112)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs112">0</div>
    <div class="balls">Balls: <span id="balls112">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours112">0</span></div>
      <div class="stat">6s <span id="sixes112">0</span></div>
      <div class="stat">SR <span id="strikeRate112">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam12(1)">1</button>
      <button onclick="minusRunsTeam12(1)">-1</button>
      <button onclick="addRunsTeam12(2)">2</button>
      <button onclick="minusRunsTeam12(2)">-2</button>
      <button onclick="addRunsTeam12(3)">3</button>
      <button onclick="minusRunsTeam12(3)">-3</button>
      <button onclick="addFourTeam12()">4</button>
      <button onclick="minusFourTeam12()">-4</button>
      <button onclick="addRunsTeam12(5)">5</button>
      <button onclick="minusRunsTeam12(5)">-5</button>
      <button onclick="addSixTeam12()">6</button>
      <button onclick="minusSixTeam12()">-6</button>
      <button onclick="dotBallTeam12()">Dot</button>
      <button onclick="resetAllTeam12()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team13" class="teamBox">
   <!-- ================= TEAM b2 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper13">

<!-- 113 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img113" width="80">
      <div class="extraplayer1">
      <div class="title" id="name113"></div>
    

    <input type="text" id="nameInput113" placeholder="Enter Player Name">
    <button onclick="addNameTeam13(113)">Add </button>
    <button onclick="deleteNameTeam13()">Delete</button>
    <button onclick="resetNameTeam13(113)">Reset</button>

    <input type="file" id="imageInput113" accept="image/*">
    <button onclick="deleteImageTeam13()">Delete</button>
    <button onclick="resetImageTeam13(113)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs113">0</div>
    <div class="balls">Balls: <span id="balls113">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours113">0</span></div>
      <div class="stat">6s <span id="sixes113">0</span></div>
      <div class="stat">SR <span id="strikeRate113">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam13(1)">1</button>
      <button onclick="minusRunsTeam13(1)">-1</button>
      <button onclick="addRunsTeam13(2)">2</button>
      <button onclick="minusRunsTeam13(2)">-2</button>
      <button onclick="addRunsTeam13(3)">3</button>
      <button onclick="minusRunsTeam13(3)">-3</button>
      <button onclick="addFourTeam13()">4</button>
      <button onclick="minusFourTeam13()">-4</button>
      <button onclick="addRunsTeam13(5)">5</button>
      <button onclick="minusRunsTeam13(5)">-5</button>
      <button onclick="addSixTeam13()">6</button>
      <button onclick="minusSixTeam13()">-6</button>
      <button onclick="dotBallTeam13()">Dot</button>
      <button onclick="resetAllTeam13()">Reset</button>
    </div>
</div>

</div>

</div>

<div id="team14" class="teamBox">
   <!-- ================= TEAM b3 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper14">

<!-- 114 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img114" width="80">
      <div class="extraplayer1">
      <div class="title" id="name114"></div>
    

    <input type="text" id="nameInput114" placeholder="Enter Player Name">
    <button onclick="addNameTeam14(114)">Add </button>
    <button onclick="deleteNameTeam14()">Delete</button>
    <button onclick="resetNameTeam14(114)">Reset</button>

    <input type="file" id="imageInput114" accept="image/*">
    <button onclick="deleteImageTeam14()">Delete</button>
    <button onclick="resetImageTeam14(114)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs114">0</div>
    <div class="balls">Balls: <span id="balls114">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours114">0</span></div>
      <div class="stat">6s <span id="sixes114">0</span></div>
      <div class="stat">SR <span id="strikeRate114">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam14(1)">1</button>
      <button onclick="minusRunsTeam14(1)">-1</button>
      <button onclick="addRunsTeam14(2)">2</button>
      <button onclick="minusRunsTeam14(2)">-2</button>
      <button onclick="addRunsTeam14(3)">3</button>
      <button onclick="minusRunsTeam14(3)">-3</button>
      <button onclick="addFourTeam14()">4</button>
      <button onclick="minusFourTeam14()">-4</button>
      <button onclick="addRunsTeam14(5)">5</button>
      <button onclick="minusRunsTeam14(5)">-5</button>
      <button onclick="addSixTeam14()">6</button>
      <button onclick="minusSixTeam14()">-6</button>
      <button onclick="dotBallTeam14()">Dot</button>
      <button onclick="resetAllTeam14()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team15" class="teamBox">

   <!-- ================= TEAM b4 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper15">

<!-- 115 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img115" width="80">
      <div class="extraplayer1">
      <div class="title" id="name115"></div>
    

    <input type="text" id="nameInput115" placeholder="Enter Player Name">
    <button onclick="addNameTeam15(115)">Add </button>
    <button onclick="deleteNameTeam15()">Delete</button>
    <button onclick="resetNameTeam15(115)">Reset</button>

    <input type="file" id="imageInput115" accept="image/*">
    <button onclick="deleteImageTeam15()">Delete</button>
    <button onclick="resetImageTeam15(115)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs115">0</div>
    <div class="balls">Balls: <span id="balls115">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours115">0</span></div>
      <div class="stat">6s <span id="sixes115">0</span></div>
      <div class="stat">SR <span id="strikeRate115">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam15(1)">1</button>
      <button onclick="minusRunsTeam15(1)">-1</button>
      <button onclick="addRunsTeam15(2)">2</button>
      <button onclick="minusRunsTeam15(2)">-2</button>
      <button onclick="addRunsTeam15(3)">3</button>
      <button onclick="minusRunsTeam15(3)">-3</button>
      <button onclick="addFourTeam15()">4</button>
      <button onclick="minusFourTeam15()">-4</button>
      <button onclick="addRunsTeam15(5)">5</button>
      <button onclick="minusRunsTeam15(5)">-5</button>
      <button onclick="addSixTeam15()">6</button>
      <button onclick="minusSixTeam15()">-6</button>
      <button onclick="dotBallTeam15()">Dot</button>
      <button onclick="resetAllTeam15()">Reset</button>
    </div>
</div>

</div>
</div>

<div id="team16" class="teamBox">
   <!-- ================= TEAM b5 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper16">

<!-- 116 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img116" width="80">
      <div class="extraplayer1">
      <div class="title" id="name116"></div>
    

    <input type="text" id="nameInput116" placeholder="Enter Player Name">
    <button onclick="addNameTeam16(116)">Add </button>
    <button onclick="deleteNameTeam16()">Delete</button>
    <button onclick="resetNameTeam16(116)">Reset</button>

    <input type="file" id="imageInput116" accept="image/*">
    <button onclick="deleteImageTeam16()">Delete</button>
    <button onclick="resetImageTeam16(116)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs116">0</div>
    <div class="balls">Balls: <span id="balls116">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours116">0</span></div>
      <div class="stat">6s <span id="sixes116">0</span></div>
      <div class="stat">SR <span id="strikeRate116">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam16(1)">1</button>
      <button onclick="minusRunsTeam16(1)">-1</button>
      <button onclick="addRunsTeam16(2)">2</button>
      <button onclick="minusRunsTeam16(2)">-2</button>
      <button onclick="addRunsTeam16(3)">3</button>
      <button onclick="minusRunsTeam16(3)">-3</button>
      <button onclick="addFourTeam16()">4</button>
      <button onclick="minusFourTeam16()">-4</button>
      <button onclick="addRunsTeam16(5)">5</button>
      <button onclick="minusRunsTeam16(5)">-5</button>
      <button onclick="addSixTeam16()">6</button>
      <button onclick="minusSixTeam16()">-6</button>
      <button onclick="dotBallTeam16()">Dot</button>
      <button onclick="resetAllTeam16()">Reset</button>
    </div>
</div>

</div>
</div>

<div id="team17" class="teamBox">

   <!-- ================= TEAM b6 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper17">

<!-- 117 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img117" width="80">
      <div class="extraplayer1">
      <div class="title" id="name117"></div>
    

    <input type="text" id="nameInput117" placeholder="Enter Player Name">
    <button onclick="addNameTeam17(117)">Add </button>
    <button onclick="deleteNameTeam17()">Delete</button>
    <button onclick="resetNameTeam17(117)">Reset</button>

    <input type="file" id="imageInput117" accept="image/*">
    <button onclick="deleteImageTeam17()">Delete</button>
    <button onclick="resetImageTeam17(117)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs117">0</div>
    <div class="balls">Balls: <span id="balls117">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours117">0</span></div>
      <div class="stat">6s <span id="sixes117">0</span></div>
      <div class="stat">SR <span id="strikeRate117">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam17(1)">1</button>
      <button onclick="minusRunsTeam17(1)">-1</button>
      <button onclick="addRunsTeam17(2)">2</button>
      <button onclick="minusRunsTeam17(2)">-2</button>
      <button onclick="addRunsTeam17(3)">3</button>
      <button onclick="minusRunsTeam17(3)">-3</button>
      <button onclick="addFourTeam17()">4</button>
      <button onclick="minusFourTeam17()">-4</button>
      <button onclick="addRunsTeam17(5)">5</button>
      <button onclick="minusRunsTeam17(5)">-5</button>
      <button onclick="addSixTeam17()">6</button>
      <button onclick="minusSixTeam17()">-6</button>
      <button onclick="dotBallTeam17()">Dot</button>
      <button onclick="resetAllTeam17()">Reset</button>
    </div>
</div>

</div>
</div>

<div id="team18" class="teamBox">
 <!-- ================= TEAM b7 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper18">

<!-- 118 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img118" width="80">
      <div class="extraplayer1">
      <div class="title" id="name118"></div>
    

    <input type="text" id="nameInput118" placeholder="Enter Player Name">
    <button onclick="addNameTeam18(118)">Add </button>
    <button onclick="deleteNameTeam18()">Delete</button>
    <button onclick="resetNameTeam18(118)">Reset</button>

    <input type="file" id="imageInput118" accept="image/*">
    <button onclick="deleteImageTeam18()">Delete</button>
    <button onclick="resetImageTeam18(118)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs118">0</div>
    <div class="balls">Balls: <span id="balls118">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours118">0</span></div>
      <div class="stat">6s <span id="sixes118">0</span></div>
      <div class="stat">SR <span id="strikeRate118">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam18(1)">1</button>
      <button onclick="minusRunsTeam18(1)">-1</button>
      <button onclick="addRunsTeam18(2)">2</button>
      <button onclick="minusRunsTeam18(2)">-2</button>
      <button onclick="addRunsTeam18(3)">3</button>
      <button onclick="minusRunsTeam18(3)">-3</button>
      <button onclick="addFourTeam18()">4</button>
      <button onclick="minusFourTeam18()">-4</button>
      <button onclick="addRunsTeam18(5)">5</button>
      <button onclick="minusRunsTeam18(5)">-5</button>
      <button onclick="addSixTeam18()">6</button>
      <button onclick="minusSixTeam18()">-6</button>
      <button onclick="dotBallTeam18()">Dot</button>
      <button onclick="resetAllTeam18()">Reset</button>
    </div>
</div>

</div>
</div>

<div id="team19" class="teamBox">
   <!-- ================= TEAM b8 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper19">

<!-- 119 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img119" width="80">
      <div class="extraplayer1">
      <div class="title" id="name119"></div>
    

    <input type="text" id="nameInput119" placeholder="Enter Player Name">
    <button onclick="addNameTeam19(119)">Add </button>
    <button onclick="deleteNameTeam19()">Delete</button>
    <button onclick="resetNameTeam19(119)">Reset</button>

    <input type="file" id="imageInput119" accept="image/*">
    <button onclick="deleteImageTeam19()">Delete</button>
    <button onclick="resetImageTeam19(119)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs119">0</div>
    <div class="balls">Balls: <span id="balls119">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours119">0</span></div>
      <div class="stat">6s <span id="sixes119">0</span></div>
      <div class="stat">SR <span id="strikeRate119">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam19(1)">1</button>
      <button onclick="minusRunsTeam19(1)">-1</button>
      <button onclick="addRunsTeam19(2)">2</button>
      <button onclick="minusRunsTeam19(2)">-2</button>
      <button onclick="addRunsTeam19(3)">3</button>
      <button onclick="minusRunsTeam19(3)">-3</button>
      <button onclick="addFourTeam19()">4</button>
      <button onclick="minusFourTeam19()">-4</button>
      <button onclick="addRunsTeam19(5)">5</button>
      <button onclick="minusRunsTeam19(5)">-5</button>
      <button onclick="addSixTeam19()">6</button>
      <button onclick="minusSixTeam19()">-6</button>
      <button onclick="dotBallTeam19()">Dot</button>
      <button onclick="resetAllTeam19()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team20" class="teamBox">
 
   <!-- ================= TEAM b10 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper20">

<!-- 120 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img120" width="80">
      <div class="extraplayer1">
      <div class="title" id="name120"></div>
    

    <input type="text" id="nameInput120" placeholder="Enter Player Name">
    <button onclick="addNameTeam20(120)">Add </button>
    <button onclick="deleteNameTeam20()">Delete</button>
    <button onclick="resetNameTeam20(120)">Reset</button>

    <input type="file" id="imageInput120" accept="image/*">
    <button onclick="deleteImageTeam20()">Delete</button>
    <button onclick="resetImageTeam20(120)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs120">0</div>
    <div class="balls">Balls: <span id="balls120">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours120">0</span></div>
      <div class="stat">6s <span id="sixes120">0</span></div>
      <div class="stat">SR <span id="strikeRate120">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam20(1)">1</button>
      <button onclick="minusRunsTeam20(1)">-1</button>
      <button onclick="addRunsTeam20(2)">2</button>
      <button onclick="minusRunsTeam20(2)">-2</button>
      <button onclick="addRunsTeam20(3)">3</button>
      <button onclick="minusRunsTeam20(3)">-3</button>
      <button onclick="addFourTeam20()">4</button>
      <button onclick="minusFourTeam20()">-4</button>
      <button onclick="addRunsTeam20(5)">5</button>
      <button onclick="minusRunsTeam20(5)">-5</button>
      <button onclick="addSixTeam20()">6</button>
      <button onclick="minusSixTeam20()">-6</button>
      <button onclick="dotBallTeam20()">Dot</button>
      <button onclick="resetAllTeam20()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team21" class="teamBox">
   <!-- ================= TEAM b10 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper21">

<!-- 121 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img121" width="80">
      <div class="extraplayer1">
      <div class="title" id="name121"></div>
    

    <input type="text" id="nameInput121" placeholder="Enter Player Name">
    <button onclick="addNameTeam21(121)">Add </button>
    <button onclick="deleteNameTeam21()">Delete</button>
    <button onclick="resetNameTeam21(121)">Reset</button>

    <input type="file" id="imageInput121" accept="image/*">
    <button onclick="deleteImageTeam21()">Delete</button>
    <button onclick="resetImageTeam21(121)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs121">0</div>
    <div class="balls">Balls: <span id="balls121">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours121">0</span></div>
      <div class="stat">6s <span id="sixes121">0</span></div>
      <div class="stat">SR <span id="strikeRate121">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam21(1)">1</button>
      <button onclick="minusRunsTeam21(1)">-1</button>
      <button onclick="addRunsTeam21(2)">2</button>
      <button onclick="minusRunsTeam21(2)">-2</button>
      <button onclick="addRunsTeam21(3)">3</button>
      <button onclick="minusRunsTeam21(3)">-3</button>
      <button onclick="addFourTeam21()">4</button>
      <button onclick="minusFourTeam21()">-4</button>
      <button onclick="addRunsTeam21(5)">5</button>
      <button onclick="minusRunsTeam21(5)">-5</button>
      <button onclick="addSixTeam21()">6</button>
      <button onclick="minusSixTeam21()">-6</button>
      <button onclick="dotBallTeam21()">Dot</button>
      <button onclick="resetAllTeam21()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team22" class="teamBox">

   <!-- ================= TEAM b11 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper22">

<!-- 122 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img122" width="80">
      <div class="extraplayer1">
      <div class="title" id="name122"></div>
    

    <input type="text" id="nameInput122" placeholder="Enter Player Name">
    <button onclick="addNameTeam22(122)">Add </button>
    <button onclick="deleteNameTeam22()">Delete</button>
    <button onclick="resetNameTeam22(122)">Reset</button>

    <input type="file" id="imageInput122" accept="image/*">
    <button onclick="deleteImageTeam22()">Delete</button>
    <button onclick="resetImageTeam22(122)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs122">0</div>
    <div class="balls">Balls: <span id="balls122">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours122">0</span></div>
      <div class="stat">6s <span id="sixes122">0</span></div>
      <div class="stat">SR <span id="strikeRate122">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam22(1)">1</button>
      <button onclick="minusRunsTeam22(1)">-1</button>
      <button onclick="addRunsTeam22(2)">2</button>
      <button onclick="minusRunsTeam22(2)">-2</button>
      <button onclick="addRunsTeam22(3)">3</button>
      <button onclick="minusRunsTeam22(3)">-3</button>
      <button onclick="addFourTeam22()">4</button>
      <button onclick="minusFourTeam22()">-4</button>
      <button onclick="addRunsTeam22(5)">5</button>
      <button onclick="minusRunsTeam22(5)">-5</button>
      <button onclick="addSixTeam22()">6</button>
      <button onclick="minusSixTeam22()">-6</button>
      <button onclick="dotBallTeam22()">Dot</button>
      <button onclick="resetAllTeam22()">Reset</button>
    </div>
</div>

</div>
</div>
</div>


<button onclick="toggleCards()">Switch Cards</button>



   <div class="wrapper3B">

    <div>
<select id="teamMenu1" onchange="showTeam1()">
<option value="">Select Team</option>
<option value="team31">Team A1</option>
<option value="team32">Team A2</option>
<option value="team33">Team A3</option>
<option value="team34">Team A4</option>
<option value="team35">Team A5</option>
<option value="team36">Team A6</option>
<option value="team37">Team A7</option>
<option value="team38">Team A8</option>
<option value="team39">Team A9</option>
<option value="team40">Team A10</option>
<option value="team41">Team A11</option>

<option value="team42">Team B1</option>
<option value="team43">Team B2</option>
<option value="team44">Team B3</option>
<option value="team45">Team B4</option>
<option value="team46">Team B5</option>
<option value="team47">Team B6</option>
<option value="team48">Team B7</option>
<option value="team49">Team B8</option>
<option value="team50">Team B9</option>
<option value="team51">Team B10</option>
<option value="team52">Team B11</option>

</select>

</div> 

<div id="team31" class="teamBox1">  <!-- ================= TEAM 1 CONTROLS ================= -->
<div class="scoreboard-wrapper" id="scoreboard-wrapper01">

<!-- 201 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img201" width="80">
      <div class="extraplayer1">
      <div class="title" id="name201"></div>
    

    <input type="text" id="nameInput201" placeholder="Enter Player Name">
    <button onclick="addName(201)">Add </button>
    <button onclick="deleteName()">Delete</button>
    <button onclick="resetName(201)">Reset</button>

    <input type="file" id="imageInput201" accept="image/*">
    <button onclick="deleteImage()">Delete</button>
    <button onclick="resetImage(201)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs201">0</div>
    <div class="balls">Balls: <span id="balls201">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours201">0</span></div>
      <div class="stat">6s <span id="sixes201">0</span></div>
      <div class="stat">SR <span id="strikeRate201">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRuns(1)">1</button>
      <button onclick="minusRuns(1)">-1</button>
      <button onclick="addRuns(2)">2</button>
      <button onclick="minusRuns(2)">-2</button>
      <button onclick="addRuns(3)">3</button>
      <button onclick="minusRuns(3)">-3</button>
      <button onclick="addFour()">4</button>
      <button onclick="minusFour()">-4</button>
      <button onclick="addRuns(5)">5</button>
      <button onclick="minusRuns(5)">-5</button>
      <button onclick="addSix()">6</button>
      <button onclick="minusSix()">-6</button>
      <button onclick="dotBall()">Dot</button>
      <button onclick="resetAll()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team32" class="teamBox1">
   <!-- ================= TEAM 2 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper02">

<!-- 202 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img202" width="80">
      <div class="extraplayer1">
      <div class="title" id="name202"></div>
    

    <input type="text" id="nameInput202" placeholder="Enter Player Name">
    <button onclick="addNameTeam2(202)">Add </button>
    <button onclick="deleteNameTeam2()">Delete</button>
    <button onclick="resetNameTeam2(202)">Reset</button>

    <input type="file" id="imageInput202" accept="image/*">
    <button onclick="deleteImageTeam2()">Delete</button>
    <button onclick="resetImageTeam2(202)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs202">0</div>
    <div class="balls">Balls: <span id="balls202">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours202">0</span></div>
      <div class="stat">6s <span id="sixes202">0</span></div>
      <div class="stat">SR <span id="strikeRate202">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam2(1)">1</button>
      <button onclick="minusRunsTeam2(1)">-1</button>
      <button onclick="addRunsTeam2(2)">2</button>
      <button onclick="minusRunsTeam2(2)">-2</button>
      <button onclick="addRunsTeam2(3)">3</button>
      <button onclick="minusRunsTeam2(3)">-3</button>
      <button onclick="addFourTeam2()">4</button>
      <button onclick="minusFourTeam2()">-4</button>
      <button onclick="addRunsTeam2(5)">5</button>
      <button onclick="minusRunsTeam2(5)">-5</button>
      <button onclick="addSixTeam2()">6</button>
      <button onclick="minusSixTeam2()">-6</button>
      <button onclick="dotBallTeam2()">Dot</button>
      <button onclick="resetAllTeam2()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team33" class="teamBox1">
   <!-- ================= TEAM 3 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper03">

<!-- 203 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img203" width="80">
      <div class="extraplayer1">
      <div class="title" id="name203"></div>
    

    <input type="text" id="nameInput203" placeholder="Enter Player Name">
    <button onclick="addNameTeam3(203)">Add </button>
    <button onclick="deleteNameTeam3()">Delete</button>
    <button onclick="resetNameTeam3(203)">Reset</button>

    <input type="file" id="imageInput203" accept="image/*">
    <button onclick="deleteImageTeam3()">Delete</button>
    <button onclick="resetImageTeam3(203)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs203">0</div>
    <div class="balls">Balls: <span id="balls203">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours203">0</span></div>
      <div class="stat">6s <span id="sixes203">0</span></div>
      <div class="stat">SR <span id="strikeRate203">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam3(1)">1</button>
      <button onclick="minusRunsTeam3(1)">-1</button>
      <button onclick="addRunsTeam3(2)">2</button>
      <button onclick="minusRunsTeam3(2)">-2</button>
      <button onclick="addRunsTeam3(3)">3</button>
      <button onclick="minusRunsTeam3(3)">-3</button>
      <button onclick="addFourTeam3()">4</button>
      <button onclick="minusFourTeam3()">-4</button>
      <button onclick="addRunsTeam3(5)">5</button>
      <button onclick="minusRunsTeam3(5)">-5</button>
      <button onclick="addSixTeam3()">6</button>
      <button onclick="minusSixTeam3()">-6</button>
      <button onclick="dotBallTeam3()">Dot</button>
      <button onclick="resetAllTeam3()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team34" class="teamBox1">
   <!-- ================= TEAM 4 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper02">

<!-- 204 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img204" width="80">
      <div class="extraplayer1">
      <div class="title" id="name204"></div>
    

    <input type="text" id="nameInput204" placeholder="Enter Player Name">
    <button onclick="addNameTeam4(204)">Add </button>
    <button onclick="deleteNameTeam4()">Delete</button>
    <button onclick="resetNameTeam4(204)">Reset</button>

    <input type="file" id="imageInput204" accept="image/*">
    <button onclick="deleteImageTeam4()">Delete</button>
    <button onclick="resetImageTeam4(204)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs204">0</div>
    <div class="balls">Balls: <span id="balls204">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours204">0</span></div>
      <div class="stat">6s <span id="sixes204">0</span></div>
      <div class="stat">SR <span id="strikeRate204">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam4(1)">1</button>
      <button onclick="minusRunsTeam4(1)">-1</button>
      <button onclick="addRunsTeam4(2)">2</button>
      <button onclick="minusRunsTeam4(2)">-2</button>
      <button onclick="addRunsTeam4(3)">3</button>
      <button onclick="minusRunsTeam4(3)">-3</button>
      <button onclick="addFourTeam4()">4</button>
      <button onclick="minusFourTeam4()">-4</button>
      <button onclick="addRunsTeam4(5)">5</button>
      <button onclick="minusRunsTeam4(5)">-5</button>
      <button onclick="addSixTeam4()">6</button>
      <button onclick="minusSixTeam4()">-6</button>
      <button onclick="dotBallTeam4()">Dot</button>
      <button onclick="resetAllTeam4()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team35" class="teamBox1">

   <!-- ================= TEAM 5 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper05">

<!-- 205 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img205" width="80">
      <div class="extraplayer1">
      <div class="title" id="name205"></div>
    

    <input type="text" id="nameInput205" placeholder="Enter Player Name">
    <button onclick="addNameteam5(205)">Add </button>
    <button onclick="deleteNameteam5()">Delete</button>
    <button onclick="resetNameteam5(205)">Reset</button>

    <input type="file" id="imageInput205" accept="image/*">
    <button onclick="deleteImageteam5()">Delete</button>
    <button onclick="resetImageteam5(205)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs205">0</div>
    <div class="balls">Balls: <span id="balls205">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours205">0</span></div>
      <div class="stat">6s <span id="sixes205">0</span></div>
      <div class="stat">SR <span id="strikeRate205">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsteam5(1)">1</button>
      <button onclick="minusRunsteam5(1)">-1</button>
      <button onclick="addRunsteam5(2)">2</button>
      <button onclick="minusRunsteam5(2)">-2</button>
      <button onclick="addRunsteam5(3)">3</button>
      <button onclick="minusRunsteam5(3)">-3</button>
      <button onclick="addFourteam5()">4</button>
      <button onclick="minusFourteam5()">-4</button>
      <button onclick="addRunsteam5(5)">5</button>
      <button onclick="minusRunsteam5(5)">-5</button>
      <button onclick="addSixteam5()">6</button>
      <button onclick="minusSixteam5()">-6</button>
      <button onclick="dotBallteam5()">Dot</button>
      <button onclick="resetAllteam5()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team36" class="teamBox1">
   <!-- ================= TEAM 6 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper06">

<!-- 206 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img206" width="80">
      <div class="extraplayer1">
      <div class="title" id="name206"></div>
    

    <input type="text" id="nameInput206" placeholder="Enter Player Name">
    <button onclick="addNameTeam6(206)">Add </button>
    <button onclick="deleteNameTeam6()">Delete</button>
    <button onclick="resetNameTeam6(206)">Reset</button>

    <input type="file" id="imageInput206" accept="image/*">
    <button onclick="deleteImageTeam6()">Delete</button>
    <button onclick="resetImageTeam6(206)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs206">0</div>
    <div class="balls">Balls: <span id="balls206">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours206">0</span></div>
      <div class="stat">6s <span id="sixes206">0</span></div>
      <div class="stat">SR <span id="strikeRate206">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam6(1)">1</button>
      <button onclick="minusRunsTeam6(1)">-1</button>
      <button onclick="addRunsTeam6(2)">2</button>
      <button onclick="minusRunsTeam6(2)">-2</button>
      <button onclick="addRunsTeam6(3)">3</button>
      <button onclick="minusRunsTeam6(3)">-3</button>
      <button onclick="addFourTeam6()">4</button>
      <button onclick="minusFourTeam6()">-4</button>
      <button onclick="addRunsTeam6(5)">5</button>
      <button onclick="minusRunsTeam6(5)">-5</button>
      <button onclick="addSixTeam6()">6</button>
      <button onclick="minusSixTeam6()">-6</button>
      <button onclick="dotBallTeam6()">Dot</button>
      <button onclick="resetAllTeam6()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team37" class="teamBox1">
   <!-- ================= TEAM 7CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper07">

<!-- 207 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img207" width="80">
      <div class="extraplayer1">
      <div class="title" id="name207"></div>
    

    <input type="text" id="nameInput207" placeholder="Enter Player Name">
    <button onclick="addNameTeam7(207)">Add </button>
    <button onclick="deleteNameTeam7()">Delete</button>
    <button onclick="resetNameTeam7(207)">Reset</button>

    <input type="file" id="imageInput207" accept="image/*">
    <button onclick="deleteImageTeam7()">Delete</button>
    <button onclick="resetImageTeam7(207)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs207">0</div>
    <div class="balls">Balls: <span id="balls207">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours207">0</span></div>
      <div class="stat">6s <span id="sixes207">0</span></div>
      <div class="stat">SR <span id="strikeRate207">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam7(1)">1</button>
      <button onclick="minusRunsTeam7(1)">-1</button>
      <button onclick="addRunsTeam7(2)">2</button>
      <button onclick="minusRunsTeam7(2)">-2</button>
      <button onclick="addRunsTeam7(3)">3</button>
      <button onclick="minusRunsTeam7(3)">-3</button>
      <button onclick="addFourTeam7()">4</button>
      <button onclick="minusFourTeam7()">-4</button>
      <button onclick="addRunsTeam7(5)">5</button>
      <button onclick="minusRunsTeam7(5)">-5</button>
      <button onclick="addSixTeam7()">6</button>
      <button onclick="minusSixTeam7()">-6</button>
      <button onclick="dotBallTeam7()">Dot</button>
      <button onclick="resetAllTeam7()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team38" class="teamBox1">
   <!-- ================= TEAM 8 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper08">

<!-- 208 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img208" width="80">
      <div class="extraplayer1">
      <div class="title" id="name208"></div>
    

    <input type="text" id="nameInput208" placeholder="Enter Player Name">
    <button onclick="addNameTeam8(208)">Add </button>
    <button onclick="deleteNameTeam8()">Delete</button>
    <button onclick="resetNameTeam8(208)">Reset</button>

    <input type="file" id="imageInput208" accept="image/*">
    <button onclick="deleteImageTeam8()">Delete</button>
    <button onclick="resetImageTeam8(208)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs208">0</div>
    <div class="balls">Balls: <span id="balls208">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours208">0</span></div>
      <div class="stat">6s <span id="sixes208">0</span></div>
      <div class="stat">SR <span id="strikeRate208">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam8(1)">1</button>
      <button onclick="minusRunsTeam8(1)">-1</button>
      <button onclick="addRunsTeam8(2)">2</button>
      <button onclick="minusRunsTeam8(2)">-2</button>
      <button onclick="addRunsTeam8(3)">3</button>
      <button onclick="minusRunsTeam8(3)">-3</button>
      <button onclick="addFourTeam8()">4</button>
      <button onclick="minusFourTeam8()">-4</button>
      <button onclick="addRunsTeam8(5)">5</button>
      <button onclick="minusRunsTeam8(5)">-5</button>
      <button onclick="addSixTeam8()">6</button>
      <button onclick="minusSixTeam8()">-6</button>
      <button onclick="dotBallTeam8()">Dot</button>
      <button onclick="resetAllTeam8()">Reset</button>
    </div>
</div>

</div>

</div>
<div id="team39" class="teamBox1">
   <!-- ================= TEAM 9 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper09">

<!-- 209 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img209" width="80">
      <div class="extraplayer1">
      <div class="title" id="name209"></div>
    

    <input type="text" id="nameInput209" placeholder="Enter Player Name">
    <button onclick="addNameTeam9(209)">Add </button>
    <button onclick="deleteNameTeam9()">Delete</button>
    <button onclick="resetNameTeam9(209)">Reset</button>

    <input type="file" id="imageInput209" accept="image/*">
    <button onclick="deleteImageTeam9()">Delete</button>
    <button onclick="resetImageTeam9(209)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs209">0</div>
    <div class="balls">Balls: <span id="balls209">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours209">0</span></div>
      <div class="stat">6s <span id="sixes209">0</span></div>
      <div class="stat">SR <span id="strikeRate209">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam9(1)">1</button>
      <button onclick="minusRunsTeam9(1)">-1</button>
      <button onclick="addRunsTeam9(2)">2</button>
      <button onclick="minusRunsTeam9(2)">-2</button>
      <button onclick="addRunsTeam9(3)">3</button>
      <button onclick="minusRunsTeam9(3)">-3</button>
      <button onclick="addFourTeam9()">4</button>
      <button onclick="minusFourTeam9()">-4</button>
      <button onclick="addRunsTeam9(5)">5</button>
      <button onclick="minusRunsTeam9(5)">-5</button>
      <button onclick="addSixTeam9()">6</button>
      <button onclick="minusSixTeam9()">-6</button>
      <button onclick="dotBallTeam9()">Dot</button>
      <button onclick="resetAllTeam9()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team40" class="teamBox1">

   <!-- ================= TEAM 10 CONTROLS ================= -->
<div class="scoreboard-wrapper" id="scoreboard-wrapper02">

<!-- 210 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img210" width="80">
      <div class="extraplayer1">
      <div class="title" id="name210"></div>
    

    <input type="text" id="nameInput210" placeholder="Enter Player Name">
    <button onclick="addNameTeam10(210)">Add </button>
    <button onclick="deleteNameTeam10()">Delete</button>
    <button onclick="resetNameTeam10(210)">Reset</button>

    <input type="file" id="imageInput210" accept="image/*">
    <button onclick="deleteImageTeam10()">Delete</button>
    <button onclick="resetImageTeam10(210)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs210">0</div>
    <div class="balls">Balls: <span id="balls210">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours210">0</span></div>
      <div class="stat">6s <span id="sixes210">0</span></div>
      <div class="stat">SR <span id="strikeRate210">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam10(1)">1</button>
      <button onclick="minusRunsTeam10(1)">-1</button>
      <button onclick="addRunsTeam10(2)">2</button>
      <button onclick="minusRunsTeam10(2)">-2</button>
      <button onclick="addRunsTeam10(3)">3</button>
      <button onclick="minusRunsTeam10(3)">-3</button>
      <button onclick="addFourTeam10()">4</button>
      <button onclick="minusFourTeam10()">-4</button>
      <button onclick="addRunsTeam10(5)">5</button>
      <button onclick="minusRunsTeam10(5)">-5</button>
      <button onclick="addSixTeam10()">6</button>
      <button onclick="minusSixTeam10()">-6</button>
      <button onclick="dotBallTeam10()">Dot</button>
      <button onclick="resetAllTeam10()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team41" class="teamBox1">
   <!-- ================= TEAM 11 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper03">

<!-- 211 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img211" width="80">
      <div class="extraplayer1">
      <div class="title" id="name211"></div>
    

    <input type="text" id="nameInput211" placeholder="Enter Player Name">
    <button onclick="addNameTeam11(211)">Add </button>
    <button onclick="deleteNameTeam11()">Delete</button>
    <button onclick="resetNameTeam11(211)">Reset</button>

    <input type="file" id="imageInput211" accept="image/*">
    <button onclick="deleteImageTeam11()">Delete</button>
    <button onclick="resetImageTeam11(211)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs211">0</div>
    <div class="balls">Balls: <span id="balls211">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours211">0</span></div>
      <div class="stat">6s <span id="sixes211">0</span></div>
      <div class="stat">SR <span id="strikeRate211">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam11(1)">1</button>
      <button onclick="minusRunsTeam11(1)">-1</button>
      <button onclick="addRunsTeam11(2)">2</button>
      <button onclick="minusRunsTeam11(2)">-2</button>
      <button onclick="addRunsTeam11(3)">3</button>
      <button onclick="minusRunsTeam11(3)">-3</button>
      <button onclick="addFourTeam11()">4</button>
      <button onclick="minusFourTeam11()">-4</button>
      <button onclick="addRunsTeam11(5)">5</button>
      <button onclick="minusRunsTeam11(5)">-5</button>
      <button onclick="addSixTeam11()">6</button>
      <button onclick="minusSixTeam11()">-6</button>
      <button onclick="dotBallTeam11()">Dot</button>
      <button onclick="resetAllTeam11()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team42" class="teamBox1">
   <!-- ================= TEAM b1 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper02">

<!-- 212 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img212" width="80">
      <div class="extraplayer1">
      <div class="title" id="name212"></div>
    

    <input type="text" id="nameInput212" placeholder="Enter Player Name">
    <button onclick="addNameTeam12(212)">Add </button>
    <button onclick="deleteNameTeam12()">Delete</button>
    <button onclick="resetNameTeam12(212)">Reset</button>

    <input type="file" id="imageInput212" accept="image/*">
    <button onclick="deleteImageTeam12()">Delete</button>
    <button onclick="resetImageTeam12(212)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs212">0</div>
    <div class="balls">Balls: <span id="balls212">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours212">0</span></div>
      <div class="stat">6s <span id="sixes212">0</span></div>
      <div class="stat">SR <span id="strikeRate212">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam12(1)">1</button>
      <button onclick="minusRunsTeam12(1)">-1</button>
      <button onclick="addRunsTeam12(2)">2</button>
      <button onclick="minusRunsTeam12(2)">-2</button>
      <button onclick="addRunsTeam12(3)">3</button>
      <button onclick="minusRunsTeam12(3)">-3</button>
      <button onclick="addFourTeam12()">4</button>
      <button onclick="minusFourTeam12()">-4</button>
      <button onclick="addRunsTeam12(5)">5</button>
      <button onclick="minusRunsTeam12(5)">-5</button>
      <button onclick="addSixTeam12()">6</button>
      <button onclick="minusSixTeam12()">-6</button>
      <button onclick="dotBallTeam12()">Dot</button>
      <button onclick="resetAllTeam12()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team43" class="teamBox1">
   <!-- ================= TEAM b2 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper03">

<!-- 213 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img213" width="80">
      <div class="extraplayer1">
      <div class="title" id="name213"></div>
    

    <input type="text" id="nameInput213" placeholder="Enter Player Name">
    <button onclick="addNameTeam13(213)">Add </button>
    <button onclick="deleteNameTeam13()">Delete</button>
    <button onclick="resetNameTeam13(213)">Reset</button>

    <input type="file" id="imageInput213" accept="image/*">
    <button onclick="deleteImageTeam13()">Delete</button>
    <button onclick="resetImageTeam13(213)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs213">0</div>
    <div class="balls">Balls: <span id="balls213">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours213">0</span></div>
      <div class="stat">6s <span id="sixes213">0</span></div>
      <div class="stat">SR <span id="strikeRate213">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam13(1)">1</button>
      <button onclick="minusRunsTeam13(1)">-1</button>
      <button onclick="addRunsTeam13(2)">2</button>
      <button onclick="minusRunsTeam13(2)">-2</button>
      <button onclick="addRunsTeam13(3)">3</button>
      <button onclick="minusRunsTeam13(3)">-3</button>
      <button onclick="addFourTeam13()">4</button>
      <button onclick="minusFourTeam13()">-4</button>
      <button onclick="addRunsTeam13(5)">5</button>
      <button onclick="minusRunsTeam13(5)">-5</button>
      <button onclick="addSixTeam13()">6</button>
      <button onclick="minusSixTeam13()">-6</button>
      <button onclick="dotBallTeam13()">Dot</button>
      <button onclick="resetAllTeam13()">Reset</button>
    </div>
</div>

</div>
</div>

<div id="team44" class="teamBox1">

   <!-- ================= TEAM b3 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper02">

<!-- 214 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img214" width="80">
      <div class="extraplayer1">
      <div class="title" id="name214"></div>
    

    <input type="text" id="nameInput214" placeholder="Enter Player Name">
    <button onclick="addNameTeam14(214)">Add </button>
    <button onclick="deleteNameTeam14()">Delete</button>
    <button onclick="resetNameTeam14(214)">Reset</button>

    <input type="file" id="imageInput214" accept="image/*">
    <button onclick="deleteImageTeam14()">Delete</button>
    <button onclick="resetImageTeam14(214)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs214">0</div>
    <div class="balls">Balls: <span id="balls214">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours214">0</span></div>
      <div class="stat">6s <span id="sixes214">0</span></div>
      <div class="stat">SR <span id="strikeRate214">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam14(1)">1</button>
      <button onclick="minusRunsTeam14(1)">-1</button>
      <button onclick="addRunsTeam14(2)">2</button>
      <button onclick="minusRunsTeam14(2)">-2</button>
      <button onclick="addRunsTeam14(3)">3</button>
      <button onclick="minusRunsTeam14(3)">-3</button>
      <button onclick="addFourTeam14()">4</button>
      <button onclick="minusFourTeam14()">-4</button>
      <button onclick="addRunsTeam14(5)">5</button>
      <button onclick="minusRunsTeam14(5)">-5</button>
      <button onclick="addSixTeam14()">6</button>
      <button onclick="minusSixTeam14()">-6</button>
      <button onclick="dotBallTeam14()">Dot</button>
      <button onclick="resetAllTeam14()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team45" class="teamBox1">
   <!-- ================= TEAM b4 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper05">

<!-- 215 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img215" width="80">
      <div class="extraplayer1">
      <div class="title" id="name215"></div>
    

    <input type="text" id="nameInput215" placeholder="Enter Player Name">
    <button onclick="addNameTeam15(215)">Add </button>
    <button onclick="deleteNameTeam15()">Delete</button>
    <button onclick="resetNameTeam15(215)">Reset</button>

    <input type="file" id="imageInput215" accept="image/*">
    <button onclick="deleteImageTeam15()">Delete</button>
    <button onclick="resetImageTeam15(215)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs215">0</div>
    <div class="balls">Balls: <span id="balls215">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours215">0</span></div>
      <div class="stat">6s <span id="sixes215">0</span></div>
      <div class="stat">SR <span id="strikeRate215">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam15(1)">1</button>
      <button onclick="minusRunsTeam15(1)">-1</button>
      <button onclick="addRunsTeam15(2)">2</button>
      <button onclick="minusRunsTeam15(2)">-2</button>
      <button onclick="addRunsTeam15(3)">3</button>
      <button onclick="minusRunsTeam15(3)">-3</button>
      <button onclick="addFourTeam15()">4</button>
      <button onclick="minusFourTeam15()">-4</button>
      <button onclick="addRunsTeam15(5)">5</button>
      <button onclick="minusRunsTeam15(5)">-5</button>
      <button onclick="addSixTeam15()">6</button>
      <button onclick="minusSixTeam15()">-6</button>
      <button onclick="dotBallTeam15()">Dot</button>
      <button onclick="resetAllTeam15()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team46" class="teamBox1">

   <!-- ================= TEAM b5 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper06">

<!-- 216 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img216" width="80">
      <div class="extraplayer1">
      <div class="title" id="name216"></div>
    

    <input type="text" id="nameInput216" placeholder="Enter Player Name">
    <button onclick="addNameTeam16(216)">Add </button>
    <button onclick="deleteNameTeam16()">Delete</button>
    <button onclick="resetNameTeam16(216)">Reset</button>

    <input type="file" id="imageInput216" accept="image/*">
    <button onclick="deleteImageTeam16()">Delete</button>
    <button onclick="resetImageTeam16(216)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs216">0</div>
    <div class="balls">Balls: <span id="balls216">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours216">0</span></div>
      <div class="stat">6s <span id="sixes216">0</span></div>
      <div class="stat">SR <span id="strikeRate216">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam16(1)">1</button>
      <button onclick="minusRunsTeam16(1)">-1</button>
      <button onclick="addRunsTeam16(2)">2</button>
      <button onclick="minusRunsTeam16(2)">-2</button>
      <button onclick="addRunsTeam16(3)">3</button>
      <button onclick="minusRunsTeam16(3)">-3</button>
      <button onclick="addFourTeam16()">4</button>
      <button onclick="minusFourTeam16()">-4</button>
      <button onclick="addRunsTeam16(5)">5</button>
      <button onclick="minusRunsTeam16(5)">-5</button>
      <button onclick="addSixTeam16()">6</button>
      <button onclick="minusSixTeam16()">-6</button>
      <button onclick="dotBallTeam16()">Dot</button>
      <button onclick="resetAllTeam16()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team47" class="teamBox1">
   <!-- ================= TEAM b6 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper07">

<!-- 217 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img217" width="80">
      <div class="extraplayer1">
      <div class="title" id="name217"></div>
    

    <input type="text" id="nameInput217" placeholder="Enter Player Name">
    <button onclick="addNameTeam17(217)">Add </button>
    <button onclick="deleteNameTeam17()">Delete</button>
    <button onclick="resetNameTeam17(217)">Reset</button>

    <input type="file" id="imageInput217" accept="image/*">
    <button onclick="deleteImageTeam17()">Delete</button>
    <button onclick="resetImageTeam17(217)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs217">0</div>
    <div class="balls">Balls: <span id="balls217">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours217">0</span></div>
      <div class="stat">6s <span id="sixes217">0</span></div>
      <div class="stat">SR <span id="strikeRate217">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam17(1)">1</button>
      <button onclick="minusRunsTeam17(1)">-1</button>
      <button onclick="addRunsTeam17(2)">2</button>
      <button onclick="minusRunsTeam17(2)">-2</button>
      <button onclick="addRunsTeam17(3)">3</button>
      <button onclick="minusRunsTeam17(3)">-3</button>
      <button onclick="addFourTeam17()">4</button>
      <button onclick="minusFourTeam17()">-4</button>
      <button onclick="addRunsTeam17(5)">5</button>
      <button onclick="minusRunsTeam17(5)">-5</button>
      <button onclick="addSixTeam17()">6</button>
      <button onclick="minusSixTeam17()">-6</button>
      <button onclick="dotBallTeam17()">Dot</button>
      <button onclick="resetAllTeam17()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team48" class="teamBox1">
   <!-- ================= TEAM b7 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper08">

<!-- 218 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img218" width="80">
      <div class="extraplayer1">
      <div class="title" id="name218"></div>
    

    <input type="text" id="nameInput218" placeholder="Enter Player Name">
    <button onclick="addNameTeam18(218)">Add </button>
    <button onclick="deleteNameTeam18()">Delete</button>
    <button onclick="resetNameTeam18(218)">Reset</button>

    <input type="file" id="imageInput218" accept="image/*">
    <button onclick="deleteImageTeam18()">Delete</button>
    <button onclick="resetImageTeam18(218)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs218">0</div>
    <div class="balls">Balls: <span id="balls218">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours218">0</span></div>
      <div class="stat">6s <span id="sixes218">0</span></div>
      <div class="stat">SR <span id="strikeRate218">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam18(1)">1</button>
      <button onclick="minusRunsTeam18(1)">-1</button>
      <button onclick="addRunsTeam18(2)">2</button>
      <button onclick="minusRunsTeam18(2)">-2</button>
      <button onclick="addRunsTeam18(3)">3</button>
      <button onclick="minusRunsTeam18(3)">-3</button>
      <button onclick="addFourTeam18()">4</button>
      <button onclick="minusFourTeam18()">-4</button>
      <button onclick="addRunsTeam18(5)">5</button>
      <button onclick="minusRunsTeam18(5)">-5</button>
      <button onclick="addSixTeam18()">6</button>
      <button onclick="minusSixTeam18()">-6</button>
      <button onclick="dotBallTeam18()">Dot</button>
      <button onclick="resetAllTeam18()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team49" class="teamBox1">


   <!-- ================= TEAM b8 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper09">

<!-- 219 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img219" width="80">
      <div class="extraplayer1">
      <div class="title" id="name219"></div>
    

    <input type="text" id="nameInput219" placeholder="Enter Player Name">
    <button onclick="addNameTeam19(219)">Add </button>
    <button onclick="deleteNameTeam19()">Delete</button>
    <button onclick="resetNameTeam19(219)">Reset</button>

    <input type="file" id="imageInput219" accept="image/*">
    <button onclick="deleteImageTeam19()">Delete</button>
    <button onclick="resetImageTeam19(219)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs219">0</div>
    <div class="balls">Balls: <span id="balls219">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours219">0</span></div>
      <div class="stat">6s <span id="sixes219">0</span></div>
      <div class="stat">SR <span id="strikeRate219">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam19(1)">1</button>
      <button onclick="minusRunsTeam19(1)">-1</button>
      <button onclick="addRunsTeam19(2)">2</button>
      <button onclick="minusRunsTeam19(2)">-2</button>
      <button onclick="addRunsTeam19(3)">3</button>
      <button onclick="minusRunsTeam19(3)">-3</button>
      <button onclick="addFourTeam19()">4</button>
      <button onclick="minusFourTeam19()">-4</button>
      <button onclick="addRunsTeam19(5)">5</button>
      <button onclick="minusRunsTeam19(5)">-5</button>
      <button onclick="addSixTeam19()">6</button>
      <button onclick="minusSixTeam19()">-6</button>
      <button onclick="dotBallTeam19()">Dot</button>
      <button onclick="resetAllTeam19()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team50" class="teamBox1">
   <!-- ================= TEAM b9 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper02">

<!-- 220 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img220" width="80">
      <div class="extraplayer1">
      <div class="title" id="name220"></div>
    

    <input type="text" id="nameInput220" placeholder="Enter Player Name">
    <button onclick="addNameTeam20(220)">Add </button>
    <button onclick="deleteNameTeam20()">Delete</button>
    <button onclick="resetNameTeam20(220)">Reset</button>

    <input type="file" id="imageInput220" accept="image/*">
    <button onclick="deleteImageTeam20()">Delete</button>
    <button onclick="resetImageTeam20(220)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs220">0</div>
    <div class="balls">Balls: <span id="balls220">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours220">0</span></div>
      <div class="stat">6s <span id="sixes220">0</span></div>
      <div class="stat">SR <span id="strikeRate220">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam20(1)">1</button>
      <button onclick="minusRunsTeam20(1)">-1</button>
      <button onclick="addRunsTeam20(2)">2</button>
      <button onclick="minusRunsTeam20(2)">-2</button>
      <button onclick="addRunsTeam20(3)">3</button>
      <button onclick="minusRunsTeam20(3)">-3</button>
      <button onclick="addFourTeam20()">4</button>
      <button onclick="minusFourTeam20()">-4</button>
      <button onclick="addRunsTeam20(5)">5</button>
      <button onclick="minusRunsTeam20(5)">-5</button>
      <button onclick="addSixTeam20()">6</button>
      <button onclick="minusSixTeam20()">-6</button>
      <button onclick="dotBallTeam20()">Dot</button>
      <button onclick="resetAllTeam20()">Reset</button>
    </div>
</div>

</div>
</div>

<div id="team51" class="teamBox1">   <!-- ================= TEAM b10 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper03">

<!-- 221 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img221" width="80">
      <div class="extraplayer1">
      <div class="title" id="name221"></div>
    

    <input type="text" id="nameInput221" placeholder="Enter Player Name">
    <button onclick="addNameTeam21(221)">Add </button>
    <button onclick="deleteNameTeam21()">Delete</button>
    <button onclick="resetNameTeam21(221)">Reset</button>

    <input type="file" id="imageInput221" accept="image/*">
    <button onclick="deleteImageTeam21()">Delete</button>
    <button onclick="resetImageTeam21(221)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs221">0</div>
    <div class="balls">Balls: <span id="balls221">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours221">0</span></div>
      <div class="stat">6s <span id="sixes221">0</span></div>
      <div class="stat">SR <span id="strikeRate221">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam21(1)">1</button>
      <button onclick="minusRunsTeam21(1)">-1</button>
      <button onclick="addRunsTeam21(2)">2</button>
      <button onclick="minusRunsTeam21(2)">-2</button>
      <button onclick="addRunsTeam21(3)">3</button>
      <button onclick="minusRunsTeam21(3)">-3</button>
      <button onclick="addFourTeam21()">4</button>
      <button onclick="minusFourTeam21()">-4</button>
      <button onclick="addRunsTeam21(5)">5</button>
      <button onclick="minusRunsTeam21(5)">-5</button>
      <button onclick="addSixTeam21()">6</button>
      <button onclick="minusSixTeam21()">-6</button>
      <button onclick="dotBallTeam21()">Dot</button>
      <button onclick="resetAllTeam21()">Reset</button>
    </div>
</div>

</div>
</div>
<div id="team52" class="teamBox1">
   <!-- ================= TEAM b11 CONTROLS ================= -->

<div class="scoreboard-wrapper" id="scoreboard-wrapper02">

<!-- 222 CONTROL -->
<div class="player">
    <div class="innerplayer">
      <img id="img222" width="80">
      <div class="extraplayer1">
      <div class="title" id="name222"></div>
    

    <input type="text" id="nameInput222" placeholder="Enter Player Name">
    <button onclick="addNameTeam22(222)">Add </button>
    <button onclick="deleteNameTeam22()">Delete</button>
    <button onclick="resetNameTeam22(222)">Reset</button>

    <input type="file" id="imageInput222" accept="image/*">
    <button onclick="deleteImageTeam22()">Delete</button>
    <button onclick="resetImageTeam22(222)">Reset</button>
    </div>
</div>
<div class="runsballs">
    <div class="runs" id="runs222">0</div>
    <div class="balls">Balls: <span id="balls222">0</span></div>
</div>
<div class="stats">
      <div class="stat">4s <span id="fours222">0</span></div>
      <div class="stat">6s <span id="sixes222">0</span></div>
      <div class="stat">SR <span id="strikeRate222">0.00</span></div>
 </div>

    <div class="controls">
      <button onclick="addRunsTeam22(1)">1</button>
      <button onclick="minusRunsTeam22(1)">-1</button>
      <button onclick="addRunsTeam22(2)">2</button>
      <button onclick="minusRunsTeam22(2)">-2</button>
      <button onclick="addRunsTeam22(3)">3</button>
      <button onclick="minusRunsTeam22(3)">-3</button>
      <button onclick="addFourTeam22()">4</button>
      <button onclick="minusFourTeam22()">-4</button>
      <button onclick="addRunsTeam22(5)">5</button>
      <button onclick="minusRunsTeam22(5)">-5</button>
      <button onclick="addSixTeam22()">6</button>
      <button onclick="minusSixTeam22()">-6</button>
      <button onclick="dotBallTeam22()">Dot</button>
      <button onclick="resetAllTeam22()">Reset</button>
    </div>
</div>

</div>
</div>





</div>
<button onclick="">switch2</button>
</div>

<div class="wrapper4">
  <div class="wrapper4A">
 
B1
<!-- ================= TEAM 12 BOWLING CONTROLS ================= -->
<div class="scoreboard-wrapper">

  <!-- 112 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname112"></div>
      <img id="bimg112" width="80">

      <input type="text" id="bnameInput112" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam12(112)">Add Name</button>
      <button onclick="deleteBNameTeam12()">Delete Name</button>
      <button onclick="resetBNameTeam12(112)">Reset Name</button>

      <input type="file" id="bimageInput112" accept="image/*">
      <button onclick="deleteBImageTeam12()">Delete Image</button>
      <button onclick="resetBImageTeam12(112)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs112">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens112">0</span></div>
        <div class="stat">Runs: <span id="bruns112">0</span></div>
        <div class="stat">Wickets: <span id="wickets112">0</span></div>
        <div class="stat">Econ: <span id="econ112">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam12()">+0.1 Over</button>
        <button onclick="minusOverTeam12()">-0.1 Over</button>

        <button onclick="addMaidenTeam12()">+Maiden</button>
        <button onclick="minusMaidenTeam12()">-Maiden</button>

        <button onclick="addBowlerRunsTeam12(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam12(2)">+2 Runs</button>
         <button onclick="minusBowlerRunsTeam12(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam12(2)">-2 Runs</button>
       
        <button onclick="addBowlerRunsTeam12(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam12(4)">+4 Runs</button>
         <button onclick="minusBowlerRunsTeam12(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam12(4)">-4 Runs</button>

        <button onclick="addBowlerRunsTeam12(5)">+5 Runs</button>
        <button onclick="addBowlerRunsTeam12(6)">+6 Runs</button>
        
        <button onclick="minusBowlerRunsTeam12(5)">-5 Runs</button>

        <button onclick="minusBowlerRunsTeam12(6)">-6 Runs</button>

        <button onclick="resetAllBowlingTeam12()">Reset</button>
        <button onclick="addWicketTeam12()">+Wicket</button>
         <button onclick="minusWicketTeam12()">-Wicket</button>
       <button onclick="extraBowlerRunsTeam12(1)">+1 extra</button>
        
       
      </div>
  </div>

  <!-- 212 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname212"></div>
      <img id="bimg212" width="80">

      <input type="text" id="bnameInput212" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam12(212)">Add Name</button>
      <button onclick="deleteBNameTeam12()">Delete Name</button>
      <button onclick="resetBNameTeam12(212)">Reset Name</button>

      <input type="file" id="bimageInput212" accept="image/*">
      <button onclick="deleteBImageTeam12()">Delete Image</button>
      <button onclick="resetBImageTeam12(212)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs212">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens212">0</span></div>
        <div class="stat">Runs: <span id="bruns212">0</span></div>
        <div class="stat">Wickets: <span id="wickets212">0</span></div>
        <div class="stat">Econ: <span id="econ212">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam12()">+0.1 Over</button>
        <button onclick="minusOverTeam12()">-0.1 Over</button>

        <button onclick="addMaidenTeam12()">+Maiden</button>
        <button onclick="minusMaidenTeam12()">-Maiden</button>

        <button onclick="addBowlerRunsTeam12(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam12(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam12(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam12(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam12(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam12(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam12(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam12(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam12(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam12(6)">-6 Runs</button>

        <button onclick="addWicketTeam12()">+Wicket</button>
        <button onclick="minusWicketTeam12()">-Wicket</button>

        <button onclick="resetAllBowlingTeam12()">Reset</button>
      </div>
  </div>

  
  <div class="player broadcast">
      <div class="title" id="bname712"></div>
      <img id="bimg712" width="80">
      <div class="stats">
        <div class="stat">Overs: <span id="overs712">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens712">0</span></div>
        <div class="stat">Runs: <span id="bruns712">0</span></div>
        <div class="stat">Wickets: <span id="wickets712">0</span></div>
        <div class="stat">Econ: <span id="econ712">0.00</span></div>
      </div>
  </div>

</div> 

B2
<!-- ================= TEAM 13 BOWLING CONTROLS ================= -->
<div class="scoreboard-wrapper">

  <!-- 113 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname113"></div>
      <img id="bimg113" width="80">

      <input type="text" id="bnameInput113" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam13(113)">Add Name</button>
      <button onclick="deleteBNameTeam13()">Delete Name</button>
      <button onclick="resetBNameTeam13(113)">Reset Name</button>

      <input type="file" id="bimageInput113" accept="image/*">
      <button onclick="deleteBImageTeam13()">Delete Image</button>
      <button onclick="resetBImageTeam13(113)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs113">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens113">0</span></div>
        <div class="stat">Runs: <span id="bruns113">0</span></div>
        <div class="stat">Wickets: <span id="wickets113">0</span></div>
        <div class="stat">Econ: <span id="econ113">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam13()">+0.1 Over</button>
        <button onclick="minusOverTeam13()">-0.1 Over</button>

        <button onclick="addMaidenTeam13()">+Maiden</button>
        <button onclick="minusMaidenTeam13()">-Maiden</button>

        <button onclick="addBowlerRunsTeam13(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam13(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam13(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam13(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam13(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam13(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam13(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam13(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam13(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam13(6)">-6 Runs</button>

        <button onclick="addWicketTeam13()">+Wicket</button>
        <button onclick="minusWicketTeam13()">-Wicket</button>

        <button onclick="resetAllBowlingTeam13()">Reset</button>
      </div>
  </div>

  <!-- 213 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname213"></div>
      <img id="bimg213" width="80">

      <input type="text" id="bnameInput213" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam13(213)">Add Name</button>
      <button onclick="deleteBNameTeam13()">Delete Name</button>
      <button onclick="resetBNameTeam13(213)">Reset Name</button>

      <input type="file" id="bimageInput213" accept="image/*">
      <button onclick="deleteBImageTeam13()">Delete Image</button>
      <button onclick="resetBImageTeam13(213)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs213">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens213">0</span></div>
        <div class="stat">Runs: <span id="bruns213">0</span></div>
        <div class="stat">Wickets: <span id="wickets213">0</span></div>
        <div class="stat">Econ: <span id="econ213">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam13()">+0.1 Over</button>
        <button onclick="minusOverTeam13()">-0.1 Over</button>

        <button onclick="addMaidenTeam13()">+Maiden</button>
        <button onclick="minusMaidenTeam13()">-Maiden</button>

        <button onclick="addBowlerRunsTeam13(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam13(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam13(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam13(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam13(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam13(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam13(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam13(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam13(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam13(6)">-6 Runs</button>

        <button onclick="addWicketTeam13()">+Wicket</button>
        <button onclick="minusWicketTeam13()">-Wicket</button>

        <button onclick="resetAllBowlingTeam13()">Reset</button>
      </div>
  </div>

 
  <div class="player broadcast">
      <div class="title" id="bname713"></div>
      <img id="bimg713" width="80">
      <div class="stats">
        <div class="stat">Overs: <span id="overs713">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens713">0</span></div>
        <div class="stat">Runs: <span id="bruns713">0</span></div>
        <div class="stat">Wickets: <span id="wickets713">0</span></div>
        <div class="stat">Econ: <span id="econ713">0.00</span></div>
      </div>
  </div>

</div>


B3

<!-- ================= TEAM 14 BOWLING CONTROLS ================= -->
<div class="scoreboard-wrapper">

  <!-- 114 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname114"></div>
      <img id="bimg114" width="80">

      <input type="text" id="bnameInput114" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam14(114)">Add Name</button>
      <button onclick="deleteBNameTeam14()">Delete Name</button>
      <button onclick="resetBNameTeam14(114)">Reset Name</button>

      <input type="file" id="bimageInput114" accept="image/*">
      <button onclick="deleteBImageTeam14()">Delete Image</button>
      <button onclick="resetBImageTeam14(114)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs114">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens114">0</span></div>
        <div class="stat">Runs: <span id="bruns114">0</span></div>
        <div class="stat">Wickets: <span id="wickets114">0</span></div>
        <div class="stat">Econ: <span id="econ114">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam14()">+0.1 Over</button>
        <button onclick="minusOverTeam14()">-0.1 Over</button>

        <button onclick="addMaidenTeam14()">+Maiden</button>
        <button onclick="minusMaidenTeam14()">-Maiden</button>

        <button onclick="addBowlerRunsTeam14(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam14(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam14(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam14(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam14(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam14(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam14(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam14(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam14(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam14(6)">-6 Runs</button>

        <button onclick="addWicketTeam14()">+Wicket</button>
        <button onclick="minusWicketTeam14()">-Wicket</button>

        <button onclick="resetAllBowlingTeam14()">Reset</button>
      </div>
  </div>

  <!-- 214 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname214"></div>
      <img id="bimg214" width="80">

      <input type="text" id="bnameInput214" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam14(214)">Add Name</button>
      <button onclick="deleteBNameTeam14()">Delete Name</button>
      <button onclick="resetBNameTeam14(214)">Reset Name</button>

      <input type="file" id="bimageInput214" accept="image/*">
      <button onclick="deleteBImageTeam14()">Delete Image</button>
      <button onclick="resetBImageTeam14(214)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs214">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens214">0</span></div>
        <div class="stat">Runs: <span id="bruns214">0</span></div>
        <div class="stat">Wickets: <span id="wickets214">0</span></div>
        <div class="stat">Econ: <span id="econ214">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam14()">+0.1 Over</button>
        <button onclick="minusOverTeam14()">-0.1 Over</button>

        <button onclick="addMaidenTeam14()">+Maiden</button>
        <button onclick="minusMaidenTeam14()">-Maiden</button>

        <button onclick="addBowlerRunsTeam14(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam14(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam14(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam14(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam14(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam14(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam14(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam14(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam14(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam14(6)">-6 Runs</button>

        <button onclick="addWicketTeam14()">+Wicket</button>
        <button onclick="minusWicketTeam14()">-Wicket</button>

        <button onclick="resetAllBowlingTeam14()">Reset</button>
      </div>
  </div>

  <div class="player broadcast">
      <div class="title" id="bname714"></div>
      <img id="bimg714" width="80">
      <div class="stats">
        <div class="stat">Overs: <span id="overs714">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens714">0</span></div>
        <div class="stat">Runs: <span id="bruns714">0</span></div>
        <div class="stat">Wickets: <span id="wickets714">0</span></div>
        <div class="stat">Econ: <span id="econ714">0.00</span></div>
      </div>
  </div>

</div>


B4
<!-- ================= TEAM 15 BOWLING CONTROLS ================= -->
<div class="scoreboard-wrapper">

<!-- 115 BOWLING CONTROL -->
<div class="player">
    <div class="title" id="bname115"></div>
    <img id="bimg115" width="80">

    <input type="text" id="bnameInput115" placeholder="Enter Bowler Name">
    <button onclick="addBNameTeam15(115)">Add Name</button>
    <button onclick="deleteBNameTeam15()">Delete Name</button>
    <button onclick="resetBNameTeam15(115)">Reset Name</button>

    <input type="file" id="bimageInput115" accept="image/*">
    <button onclick="deleteBImageTeam15()">Delete Image</button>
    <button onclick="resetBImageTeam15(115)">Reset Image</button>

    <div class="stats">
      <div class="stat">Overs: <span id="overs115">0.0</span></div>
      <div class="stat">Maidens: <span id="maidens115">0</span></div>
      <div class="stat">Runs: <span id="bruns115">0</span></div>
      <div class="stat">Wickets: <span id="wickets115">0</span></div>
      <div class="stat">Econ: <span id="econ115">0.00</span></div>
    </div>

    <div class="controls">
      <button onclick="addOverTeam15()">+0.1 Over</button>
      <button onclick="minusOverTeam15()">-0.1 Over</button>

      <button onclick="addMaidenTeam15()">+Maiden</button>
      <button onclick="minusMaidenTeam15()">-Maiden</button>

      <button onclick="addBowlerRunsTeam15(1)">+1 Run</button>
      <button onclick="addBowlerRunsTeam15(2)">+2 Runs</button>
      <button onclick="addBowlerRunsTeam15(3)">+3 Runs</button>
      <button onclick="addBowlerRunsTeam15(4)">+4 Runs</button>
      <button onclick="addBowlerRunsTeam15(6)">+6 Runs</button>
      <button onclick="minusBowlerRunsTeam15(1)">-1 Run</button>
      <button onclick="minusBowlerRunsTeam15(2)">-2 Runs</button>
      <button onclick="minusBowlerRunsTeam15(3)">-3 Runs</button>
      <button onclick="minusBowlerRunsTeam15(4)">-4 Runs</button>
      <button onclick="minusBowlerRunsTeam15(6)">-6 Runs</button>

      <button onclick="addWicketTeam15()">+Wicket</button>
      <button onclick="minusWicketTeam15()">-Wicket</button>

      <button onclick="resetAllBowlingTeam15()">Reset</button>
    </div>
</div>

<!-- 215 BOWLING CONTROL -->
<div class="player">
    <div class="title" id="bname215"></div>
    <img id="bimg215" width="80">

    <input type="text" id="bnameInput215" placeholder="Enter Bowler Name">
    <button onclick="addBNameTeam15(215)">Add Name</button>
    <button onclick="deleteBNameTeam15()">Delete Name</button>
    <button onclick="resetBNameTeam15(215)">Reset Name</button>

    <input type="file" id="bimageInput215" accept="image/*">
    <button onclick="deleteBImageTeam15()">Delete Image</button>
    <button onclick="resetBImageTeam15(215)">Reset Image</button>

    <div class="stats">
      <div class="stat">Overs: <span id="overs215">0.0</span></div>
      <div class="stat">Maidens: <span id="maidens215">0</span></div>
      <div class="stat">Runs: <span id="bruns215">0</span></div>
      <div class="stat">Wickets: <span id="wickets215">0</span></div>
      <div class="stat">Econ: <span id="econ215">0.00</span></div>
    </div>

    <div class="controls">
      <button onclick="addOverTeam15()">+0.1 Over</button>
      <button onclick="minusOverTeam15()">-0.1 Over</button>

      <button onclick="addMaidenTeam15()">+Maiden</button>
      <button onclick="minusMaidenTeam15()">-Maiden</button>

      <button onclick="addBowlerRunsTeam15(1)">+1 Run</button>
      <button onclick="addBowlerRunsTeam15(2)">+2 Runs</button>
      <button onclick="addBowlerRunsTeam15(3)">+3 Runs</button>
      <button onclick="addBowlerRunsTeam15(4)">+4 Runs</button>
      <button onclick="addBowlerRunsTeam15(6)">+6 Runs</button>
      <button onclick="minusBowlerRunsTeam15(1)">-1 Run</button>
      <button onclick="minusBowlerRunsTeam15(2)">-2 Runs</button>
      <button onclick="minusBowlerRunsTeam15(3)">-3 Runs</button>
      <button onclick="minusBowlerRunsTeam15(4)">-4 Runs</button>
      <button onclick="minusBowlerRunsTeam15(6)">-6 Runs</button>

      <button onclick="addWicketTeam15()">+Wicket</button>
      <button onclick="minusWicketTeam15()">-Wicket</button>

      <button onclick="resetAllBowlingTeam15()">Reset</button>
    </div>
</div>

<div class="player broadcast">
    <div class="title" id="bname715"></div>
    <img id="bimg715" width="80">
    <div class="stats">
      <div class="stat">Overs: <span id="overs715">0.0</span></div>
      <div class="stat">Maidens: <span id="maidens715">0</span></div>
      <div class="stat">Runs: <span id="bruns715">0</span></div>
      <div class="stat">Wickets: <span id="wickets715">0</span></div>
      <div class="stat">Econ: <span id="econ715">0.00</span></div>
    </div>
</div>

</div>


B5
<!-- ================= TEAM 16 BOWLING CONTROLS ================= -->
<div class="scoreboard-wrapper">

<!-- 116 BOWLING CONTROL -->
<div class="player">
    <div class="title" id="bname116"></div>
    <img id="bimg116" width="80">

    <input type="text" id="bnameInput116" placeholder="Enter Bowler Name">
    <button onclick="addBNameTeam16(116)">Add Name</button>
    <button onclick="deleteBNameTeam16()">Delete Name</button>
    <button onclick="resetBNameTeam16(116)">Reset Name</button>

    <input type="file" id="bimageInput116" accept="image/*">
    <button onclick="deleteBImageTeam16()">Delete Image</button>
    <button onclick="resetBImageTeam16(116)">Reset Image</button>

    <div class="stats">
      <div class="stat">Overs: <span id="overs116">0.0</span></div>
      <div class="stat">Maidens: <span id="maidens116">0</span></div>
      <div class="stat">Runs: <span id="bruns116">0</span></div>
      <div class="stat">Wickets: <span id="wickets116">0</span></div>
      <div class="stat">Econ: <span id="econ116">0.00</span></div>
    </div>

    <div class="controls">
      <button onclick="addOverTeam16()">+0.1 Over</button>
      <button onclick="minusOverTeam16()">-0.1 Over</button>

      <button onclick="addMaidenTeam16()">+Maiden</button>
      <button onclick="minusMaidenTeam16()">-Maiden</button>

      <button onclick="addBowlerRunsTeam16(1)">+1 Run</button>
      <button onclick="addBowlerRunsTeam16(2)">+2 Runs</button>
      <button onclick="addBowlerRunsTeam16(3)">+3 Runs</button>
      <button onclick="addBowlerRunsTeam16(4)">+4 Runs</button>
      <button onclick="addBowlerRunsTeam16(6)">+6 Runs</button>
      <button onclick="minusBowlerRunsTeam16(1)">-1 Run</button>
      <button onclick="minusBowlerRunsTeam16(2)">-2 Runs</button>
      <button onclick="minusBowlerRunsTeam16(3)">-3 Runs</button>
      <button onclick="minusBowlerRunsTeam16(4)">-4 Runs</button>
      <button onclick="minusBowlerRunsTeam16(6)">-6 Runs</button>

      <button onclick="addWicketTeam16()">+Wicket</button>
      <button onclick="minusWicketTeam16()">-Wicket</button>

      <button onclick="resetAllBowlingTeam16()">Reset</button>
    </div>
</div>

<!-- 216 BOWLING CONTROL -->
<div class="player">
    <div class="title" id="bname216"></div>
    <img id="bimg216" width="80">

    <input type="text" id="bnameInput216" placeholder="Enter Bowler Name">
    <button onclick="addBNameTeam16(216)">Add Name</button>
    <button onclick="deleteBNameTeam16()">Delete Name</button>
    <button onclick="resetBNameTeam16(216)">Reset Name</button>

    <input type="file" id="bimageInput216" accept="image/*">
    <button onclick="deleteBImageTeam16()">Delete Image</button>
    <button onclick="resetBImageTeam16(216)">Reset Image</button>

    <div class="stats">
      <div class="stat">Overs: <span id="overs216">0.0</span></div>
      <div class="stat">Maidens: <span id="maidens216">0</span></div>
      <div class="stat">Runs: <span id="bruns216">0</span></div>
      <div class="stat">Wickets: <span id="wickets216">0</span></div>
      <div class="stat">Econ: <span id="econ216">0.00</span></div>
    </div>

    <div class="controls">
      <button onclick="addOverTeam16()">+0.1 Over</button>
      <button onclick="minusOverTeam16()">-0.1 Over</button>

      <button onclick="addMaidenTeam16()">+Maiden</button>
      <button onclick="minusMaidenTeam16()">-Maiden</button>

      <button onclick="addBowlerRunsTeam16(1)">+1 Run</button>
      <button onclick="addBowlerRunsTeam16(2)">+2 Runs</button>
      <button onclick="addBowlerRunsTeam16(3)">+3 Runs</button>
      <button onclick="addBowlerRunsTeam16(4)">+4 Runs</button>
      <button onclick="addBowlerRunsTeam16(6)">+6 Runs</button>
      <button onclick="minusBowlerRunsTeam16(1)">-1 Run</button>
      <button onclick="minusBowlerRunsTeam16(2)">-2 Runs</button>
      <button onclick="minusBowlerRunsTeam16(3)">-3 Runs</button>
      <button onclick="minusBowlerRunsTeam16(4)">-4 Runs</button>
      <button onclick="minusBowlerRunsTeam16(6)">-6 Runs</button>

      <button onclick="addWicketTeam16()">+Wicket</button>
      <button onclick="minusWicketTeam16()">-Wicket</button>

      <button onclick="resetAllBowlingTeam16()">Reset</button>
    </div>
</div>

<div class="player broadcast">
    <div class="title" id="bname716"></div>
    <img id="bimg716" width="80">
    <div class="stats">
      <div class="stat">Overs: <span id="overs716">0.0</span></div>
      <div class="stat">Maidens: <span id="maidens716">0</span></div>
      <div class="stat">Runs: <span id="bruns716">0</span></div>
      <div class="stat">Wickets: <span id="wickets716">0</span></div>
      <div class="stat">Econ: <span id="econ716">0.00</span></div>
    </div>
</div>

</div>

b6
<!-- ================= TEAM 17 BOWLING CONTROLS ================= -->
<div class="scoreboard-wrapper">

<!-- 117 BOWLING CONTROL -->
<div class="player">
    <div class="title" id="bname117"></div>
    <img id="bimg117" width="80">

    <input type="text" id="bnameInput117" placeholder="Enter Bowler Name">
    <button onclick="addBNameTeam17(117)">Add Name</button>
    <button onclick="deleteBNameTeam17()">Delete Name</button>
    <button onclick="resetBNameTeam17(117)">Reset Name</button>

    <input type="file" id="bimageInput117" accept="image/*">
    <button onclick="deleteBImageTeam17()">Delete Image</button>
    <button onclick="resetBImageTeam17(117)">Reset Image</button>

    <div class="stats">
      <div class="stat">Overs: <span id="overs117">0.0</span></div>
      <div class="stat">Maidens: <span id="maidens117">0</span></div>
      <div class="stat">Runs: <span id="bruns117">0</span></div>
      <div class="stat">Wickets: <span id="wickets117">0</span></div>
      <div class="stat">Econ: <span id="econ117">0.00</span></div>
    </div>

    <div class="controls">
      <button onclick="addOverTeam17()">+0.1 Over</button>
      <button onclick="minusOverTeam17()">-0.1 Over</button>

      <button onclick="addMaidenTeam17()">+Maiden</button>
      <button onclick="minusMaidenTeam17()">-Maiden</button>

      <button onclick="addBowlerRunsTeam17(1)">+1 Run</button>
      <button onclick="addBowlerRunsTeam17(2)">+2 Runs</button>
      <button onclick="addBowlerRunsTeam17(3)">+3 Runs</button>
      <button onclick="addBowlerRunsTeam17(4)">+4 Runs</button>
      <button onclick="addBowlerRunsTeam17(6)">+6 Runs</button>
      <button onclick="minusBowlerRunsTeam17(1)">-1 Run</button>
      <button onclick="minusBowlerRunsTeam17(2)">-2 Runs</button>
      <button onclick="minusBowlerRunsTeam17(3)">-3 Runs</button>
      <button onclick="minusBowlerRunsTeam17(4)">-4 Runs</button>
      <button onclick="minusBowlerRunsTeam17(6)">-6 Runs</button>

      <button onclick="addWicketTeam17()">+Wicket</button>
      <button onclick="minusWicketTeam17()">-Wicket</button>

      <button onclick="resetAllBowlingTeam17()">Reset</button>
    </div>
</div>

<!-- 217 BOWLING CONTROL -->
<div class="player">
    <div class="title" id="bname217"></div>
    <img id="bimg217" width="80">

    <input type="text" id="bnameInput217" placeholder="Enter Bowler Name">
    <button onclick="addBNameTeam17(217)">Add Name</button>
    <button onclick="deleteBNameTeam17()">Delete Name</button>
    <button onclick="resetBNameTeam17(217)">Reset Name</button>

    <input type="file" id="bimageInput217" accept="image/*">
    <button onclick="deleteBImageTeam17()">Delete Image</button>
    <button onclick="resetBImageTeam17(217)">Reset Image</button>

    <div class="stats">
      <div class="stat">Overs: <span id="overs217">0.0</span></div>
      <div class="stat">Maidens: <span id="maidens217">0</span></div>
      <div class="stat">Runs: <span id="bruns217">0</span></div>
      <div class="stat">Wickets: <span id="wickets217">0</span></div>
      <div class="stat">Econ: <span id="econ217">0.00</span></div>
    </div>

    <div class="controls">
      <button onclick="addOverTeam17()">+0.1 Over</button>
      <button onclick="minusOverTeam17()">-0.1 Over</button>

      <button onclick="addMaidenTeam17()">+Maiden</button>
      <button onclick="minusMaidenTeam17()">-Maiden</button>

      <button onclick="addBowlerRunsTeam17(1)">+1 Run</button>
      <button onclick="addBowlerRunsTeam17(2)">+2 Runs</button>
      <button onclick="addBowlerRunsTeam17(3)">+3 Runs</button>
      <button onclick="addBowlerRunsTeam17(4)">+4 Runs</button>
      <button onclick="addBowlerRunsTeam17(6)">+6 Runs</button>
      <button onclick="minusBowlerRunsTeam17(1)">-1 Run</button>
      <button onclick="minusBowlerRunsTeam17(2)">-2 Runs</button>
      <button onclick="minusBowlerRunsTeam17(3)">-3 Runs</button>
      <button onclick="minusBowlerRunsTeam17(4)">-4 Runs</button>
      <button onclick="minusBowlerRunsTeam17(6)">-6 Runs</button>

      <button onclick="addWicketTeam17()">+Wicket</button>
      <button onclick="minusWicketTeam17()">-Wicket</button>

      <button onclick="resetAllBowlingTeam17()">Reset</button>
    </div>
</div>

<!-- BROADCAST PANELS -->

<div class="player broadcast">
    <div class="title" id="bname717"></div>
    <img id="bimg717" width="80">
    <div class="stats">
      <div class="stat">Overs: <span id="overs717">0.0</span></div>
      <div class="stat">Maidens: <span id="maidens717">0</span></div>
      <div class="stat">Runs: <span id="bruns717">0</span></div>
      <div class="stat">Wickets: <span id="wickets717">0</span></div>
      <div class="stat">Econ: <span id="econ717">0.00</span></div>
    </div>
</div>

</div>


B7
<!-- ================= TEAM 18 BOWLING CONTROLS ================= -->
<div class="scoreboard-wrapper">

<!-- 118 BOWLING CONTROL -->
<div class="player">
    <div class="title" id="bname118"></div>
    <img id="bimg118" width="80">

    <input type="text" id="bnameInput118" placeholder="Enter Bowler Name">
    <button onclick="addBNameTeam18(118)">Add Name</button>
    <button onclick="deleteBNameTeam18()">Delete Name</button>
    <button onclick="resetBNameTeam18(118)">Reset Name</button>

    <input type="file" id="bimageInput118" accept="image/*">
    <button onclick="deleteBImageTeam18()">Delete Image</button>
    <button onclick="resetBImageTeam18(118)">Reset Image</button>

    <div class="stats">
      <div class="stat">Overs: <span id="overs118">0.0</span></div>
      <div class="stat">Maidens: <span id="maidens118">0</span></div>
      <div class="stat">Runs: <span id="bruns118">0</span></div>
      <div class="stat">Wickets: <span id="wickets118">0</span></div>
      <div class="stat">Econ: <span id="econ118">0.00</span></div>
    </div>

    <div class="controls">
      <button onclick="addOverTeam18()">+0.1 Over</button>
      <button onclick="minusOverTeam18()">-0.1 Over</button>

      <button onclick="addMaidenTeam18()">+Maiden</button>
      <button onclick="minusMaidenTeam18()">-Maiden</button>

      <button onclick="addBowlerRunsTeam18(1)">+1 Run</button>
      <button onclick="addBowlerRunsTeam18(2)">+2 Runs</button>
      <button onclick="addBowlerRunsTeam18(3)">+3 Runs</button>
      <button onclick="addBowlerRunsTeam18(4)">+4 Runs</button>
      <button onclick="addBowlerRunsTeam18(6)">+6 Runs</button>
      <button onclick="minusBowlerRunsTeam18(1)">-1 Run</button>
      <button onclick="minusBowlerRunsTeam18(2)">-2 Runs</button>
      <button onclick="minusBowlerRunsTeam18(3)">-3 Runs</button>
      <button onclick="minusBowlerRunsTeam18(4)">-4 Runs</button>
      <button onclick="minusBowlerRunsTeam18(6)">-6 Runs</button>

      <button onclick="addWicketTeam18()">+Wicket</button>
      <button onclick="minusWicketTeam18()">-Wicket</button>

      <button onclick="resetAllBowlingTeam18()">Reset</button>
    </div>
</div>

<!-- 218 BOWLING CONTROL -->
<div class="player">
    <div class="title" id="bname218"></div>
    <img id="bimg218" width="80">

    <input type="text" id="bnameInput218" placeholder="Enter Bowler Name">
    <button onclick="addBNameTeam18(218)">Add Name</button>
    <button onclick="deleteBNameTeam18()">Delete Name</button>
    <button onclick="resetBNameTeam18(218)">Reset Name</button>

    <input type="file" id="bimageInput218" accept="image/*">
    <button onclick="deleteBImageTeam18()">Delete Image</button>
    <button onclick="resetBImageTeam18(218)">Reset Image</button>

    <div class="stats">
      <div class="stat">Overs: <span id="overs218">0.0</span></div>
      <div class="stat">Maidens: <span id="maidens218">0</span></div>
      <div class="stat">Runs: <span id="bruns218">0</span></div>
      <div class="stat">Wickets: <span id="wickets218">0</span></div>
      <div class="stat">Econ: <span id="econ218">0.00</span></div>
    </div>

    <div class="controls">
      <button onclick="addOverTeam18()">+0.1 Over</button>
      <button onclick="minusOverTeam18()">-0.1 Over</button>

      <button onclick="addMaidenTeam18()">+Maiden</button>
      <button onclick="minusMaidenTeam18()">-Maiden</button>

      <button onclick="addBowlerRunsTeam18(1)">+1 Run</button>
      <button onclick="addBowlerRunsTeam18(2)">+2 Runs</button>
      <button onclick="addBowlerRunsTeam18(3)">+3 Runs</button>
      <button onclick="addBowlerRunsTeam18(4)">+4 Runs</button>
      <button onclick="addBowlerRunsTeam18(6)">+6 Runs</button>
      <button onclick="minusBowlerRunsTeam18(1)">-1 Run</button>
      <button onclick="minusBowlerRunsTeam18(2)">-2 Runs</button>
      <button onclick="minusBowlerRunsTeam18(3)">-3 Runs</button>
      <button onclick="minusBowlerRunsTeam18(4)">-4 Runs</button>
      <button onclick="minusBowlerRunsTeam18(6)">-6 Runs</button>

      <button onclick="addWicketTeam18()">+Wicket</button>
      <button onclick="minusWicketTeam18()">-Wicket</button>

      <button onclick="resetAllBowlingTeam18()">Reset</button>
    </div>
</div>

<!-- BROADCAST PANELS -->

<div class="player broadcast">
    <div class="title" id="bname718"></div>
    <img id="bimg718" width="80">
    <div class="stats">
      <div class="stat">Overs: <span id="overs718">0.0</span></div>
      <div class="stat">Maidens: <span id="maidens718">0</span></div>
      <div class="stat">Runs: <span id="bruns718">0</span></div>
      <div class="stat">Wickets: <span id="wickets718">0</span></div>
      <div class="stat">Econ: <span id="econ718">0.00</span></div>
    </div>
</div>

</div>


B8
<!-- ================= TEAM 19 BOWLING CONTROLS ================= -->
<div class="scoreboard-wrapper">

<!-- 119 BOWLING CONTROL -->
<div class="player">
    <div class="title" id="bname119"></div>
    <img id="bimg119" width="80">

    <input type="text" id="bnameInput119" placeholder="Enter Bowler Name">
    <button onclick="addBNameTeam19(119)">Add Name</button>
    <button onclick="deleteBNameTeam19()">Delete Name</button>
    <button onclick="resetBNameTeam19(119)">Reset Name</button>

    <input type="file" id="bimageInput119" accept="image/*">
    <button onclick="deleteBImageTeam19()">Delete Image</button>
    <button onclick="resetBImageTeam19(119)">Reset Image</button>

    <div class="stats">
      <div class="stat">Overs: <span id="overs119">0.0</span></div>
      <div class="stat">Maidens: <span id="maidens119">0</span></div>
      <div class="stat">Runs: <span id="bruns119">0</span></div>
      <div class="stat">Wickets: <span id="wickets119">0</span></div>
      <div class="stat">Econ: <span id="econ119">0.00</span></div>
    </div>

    <div class="controls">
      <button onclick="addOverTeam19()">+0.1 Over</button>
      <button onclick="minusOverTeam19()">-0.1 Over</button>

      <button onclick="addMaidenTeam19()">+Maiden</button>
      <button onclick="minusMaidenTeam19()">-Maiden</button>

      <button onclick="addBowlerRunsTeam19(1)">+1 Run</button>
      <button onclick="addBowlerRunsTeam19(2)">+2 Runs</button>
      <button onclick="addBowlerRunsTeam19(3)">+3 Runs</button>
      <button onclick="addBowlerRunsTeam19(4)">+4 Runs</button>
      <button onclick="addBowlerRunsTeam19(6)">+6 Runs</button>
      <button onclick="minusBowlerRunsTeam19(1)">-1 Run</button>
      <button onclick="minusBowlerRunsTeam19(2)">-2 Runs</button>
      <button onclick="minusBowlerRunsTeam19(3)">-3 Runs</button>
      <button onclick="minusBowlerRunsTeam19(4)">-4 Runs</button>
      <button onclick="minusBowlerRunsTeam19(6)">-6 Runs</button>

      <button onclick="addWicketTeam19()">+Wicket</button>
      <button onclick="minusWicketTeam19()">-Wicket</button>

      <button onclick="resetAllBowlingTeam19()">Reset</button>
    </div>
</div>

<!-- 219 BOWLING CONTROL -->
<div class="player">
    <div class="title" id="bname219"></div>
    <img id="bimg219" width="80">

    <input type="text" id="bnameInput219" placeholder="Enter Bowler Name">
    <button onclick="addBNameTeam19(219)">Add Name</button>
    <button onclick="deleteBNameTeam19()">Delete Name</button>
    <button onclick="resetBNameTeam19(219)">Reset Name</button>

    <input type="file" id="bimageInput219" accept="image/*">
    <button onclick="deleteBImageTeam19()">Delete Image</button>
    <button onclick="resetBImageTeam19(219)">Reset Image</button>

    <div class="stats">
      <div class="stat">Overs: <span id="overs219">0.0</span></div>
      <div class="stat">Maidens: <span id="maidens219">0</span></div>
      <div class="stat">Runs: <span id="bruns219">0</span></div>
      <div class="stat">Wickets: <span id="wickets219">0</span></div>
      <div class="stat">Econ: <span id="econ219">0.00</span></div>
    </div>

    <div class="controls">
      <button onclick="addOverTeam19()">+0.1 Over</button>
      <button onclick="minusOverTeam19()">-0.1 Over</button>

      <button onclick="addMaidenTeam19()">+Maiden</button>
      <button onclick="minusMaidenTeam19()">-Maiden</button>

      <button onclick="addBowlerRunsTeam19(1)">+1 Run</button>
      <button onclick="addBowlerRunsTeam19(2)">+2 Runs</button>
      <button onclick="addBowlerRunsTeam19(3)">+3 Runs</button>
      <button onclick="addBowlerRunsTeam19(4)">+4 Runs</button>
      <button onclick="addBowlerRunsTeam19(6)">+6 Runs</button>
      <button onclick="minusBowlerRunsTeam19(1)">-1 Run</button>
      <button onclick="minusBowlerRunsTeam19(2)">-2 Runs</button>
      <button onclick="minusBowlerRunsTeam19(3)">-3 Runs</button>
      <button onclick="minusBowlerRunsTeam19(4)">-4 Runs</button>
      <button onclick="minusBowlerRunsTeam19(6)">-6 Runs</button>

      <button onclick="addWicketTeam19()">+Wicket</button>
      <button onclick="minusWicketTeam19()">-Wicket</button>

      <button onclick="resetAllBowlingTeam19()">Reset</button>
    </div>
</div>

<!-- BROADCAST PANELS -->

<div class="player broadcast">
    <div class="title" id="bname719"></div>
    <img id="bimg719" width="80">
    <div class="stats">
      <div class="stat">Overs: <span id="overs719">0.0</span></div>
      <div class="stat">Maidens: <span id="maidens719">0</span></div>
      <div class="stat">Runs: <span id="bruns719">0</span></div>
      <div class="stat">Wickets: <span id="wickets719">0</span></div>
      <div class="stat">Econ: <span id="econ719">0.00</span></div>
    </div>
</div>

</div>


B9
<!-- ================= TEAM 20 BOWLING CONTROLS ================= -->
<div class="scoreboard-wrapper">

<!-- 120 BOWLING CONTROL -->
<div class="player">
    <div class="title" id="bname120"></div>
    <img id="bimg120" width="80">

    <input type="text" id="bnameInput120" placeholder="Enter Bowler Name">
    <button onclick="addBNameTeam20(120)">Add Name</button>
    <button onclick="deleteBNameTeam20()">Delete Name</button>
    <button onclick="resetBNameTeam20(120)">Reset Name</button>

    <input type="file" id="bimageInput120" accept="image/*">
    <button onclick="deleteBImageTeam20()">Delete Image</button>
    <button onclick="resetBImageTeam20(120)">Reset Image</button>

    <div class="stats">
      <div class="stat">Overs: <span id="overs120">0.0</span></div>
      <div class="stat">Maidens: <span id="maidens120">0</span></div>
      <div class="stat">Runs: <span id="bruns120">0</span></div>
      <div class="stat">Wickets: <span id="wickets120">0</span></div>
      <div class="stat">Econ: <span id="econ120">0.00</span></div>
    </div>

    <div class="controls">
      <button onclick="addOverTeam20()">+0.1 Over</button>
      <button onclick="minusOverTeam20()">-0.1 Over</button>

      <button onclick="addMaidenTeam20()">+Maiden</button>
      <button onclick="minusMaidenTeam20()">-Maiden</button>

      <button onclick="addBowlerRunsTeam20(1)">+1 Run</button>
      <button onclick="addBowlerRunsTeam20(2)">+2 Runs</button>
      <button onclick="addBowlerRunsTeam20(3)">+3 Runs</button>
      <button onclick="addBowlerRunsTeam20(4)">+4 Runs</button>
      <button onclick="addBowlerRunsTeam20(6)">+6 Runs</button>
      <button onclick="minusBowlerRunsTeam20(1)">-1 Run</button>
      <button onclick="minusBowlerRunsTeam20(2)">-2 Runs</button>
      <button onclick="minusBowlerRunsTeam20(3)">-3 Runs</button>
      <button onclick="minusBowlerRunsTeam20(4)">-4 Runs</button>
      <button onclick="minusBowlerRunsTeam20(6)">-6 Runs</button>

      <button onclick="addWicketTeam20()">+Wicket</button>
      <button onclick="minusWicketTeam20()">-Wicket</button>

      <button onclick="resetAllBowlingTeam20()">Reset</button>
    </div>
</div>

<!-- 220 BOWLING CONTROL -->
<div class="player">
    <div class="title" id="bname220"></div>
    <img id="bimg220" width="80">

    <input type="text" id="bnameInput220" placeholder="Enter Bowler Name">
    <button onclick="addBNameTeam20(220)">Add Name</button>
    <button onclick="deleteBNameTeam20()">Delete Name</button>
    <button onclick="resetBNameTeam20(220)">Reset Name</button>

    <input type="file" id="bimageInput220" accept="image/*">
    <button onclick="deleteBImageTeam20()">Delete Image</button>
    <button onclick="resetBImageTeam20(220)">Reset Image</button>

    <div class="stats">
      <div class="stat">Overs: <span id="overs220">0.0</span></div>
      <div class="stat">Maidens: <span id="maidens220">0</span></div>
      <div class="stat">Runs: <span id="bruns220">0</span></div>
      <div class="stat">Wickets: <span id="wickets220">0</span></div>
      <div class="stat">Econ: <span id="econ220">0.00</span></div>
    </div>

    <div class="controls">
      <button onclick="addOverTeam20()">+0.1 Over</button>
      <button onclick="minusOverTeam20()">-0.1 Over</button>

      <button onclick="addMaidenTeam20()">+Maiden</button>
      <button onclick="minusMaidenTeam20()">-Maiden</button>

      <button onclick="addBowlerRunsTeam20(1)">+1 Run</button>
      <button onclick="addBowlerRunsTeam20(2)">+2 Runs</button>
      <button onclick="addBowlerRunsTeam20(3)">+3 Runs</button>
      <button onclick="addBowlerRunsTeam20(4)">+4 Runs</button>
      <button onclick="addBowlerRunsTeam20(6)">+6 Runs</button>
      <button onclick="minusBowlerRunsTeam20(1)">-1 Run</button>
      <button onclick="minusBowlerRunsTeam20(2)">-2 Runs</button>
      <button onclick="minusBowlerRunsTeam20(3)">-3 Runs</button>
      <button onclick="minusBowlerRunsTeam20(4)">-4 Runs</button>
      <button onclick="minusBowlerRunsTeam20(6)">-6 Runs</button>

      <button onclick="addWicketTeam20()">+Wicket</button>
      <button onclick="minusWicketTeam20()">-Wicket</button>

      <button onclick="resetAllBowlingTeam20()">Reset</button>
    </div>
</div>

<!-- BROADCAST PANELS -->

<div class="player broadcast">
    <div class="title" id="bname720"></div>
    <img id="bimg720" width="80">
    <div class="stats">
      <div class="stat">Overs: <span id="overs720">0.0</span></div>
      <div class="stat">Maidens: <span id="maidens720">0</span></div>
      <div class="stat">Runs: <span id="bruns720">0</span></div>
      <div class="stat">Wickets: <span id="wickets720">0</span></div>
      <div class="stat">Econ: <span id="econ720">0.00</span></div>
    </div>
</div>

</div>


B10
<!-- ================= TEAM 21 BOWLING CONTROLS ================= -->
<div class="scoreboard-wrapper">

<!-- 121 BOWLING CONTROL -->
<div class="player">
    <div class="title" id="bname121"></div>
    <img id="bimg121" width="80">

    <input type="text" id="bnameInput121" placeholder="Enter Bowler Name">
    <button onclick="addBNameTeam21(121)">Add Name</button>
    <button onclick="deleteBNameTeam21()">Delete Name</button>
    <button onclick="resetBNameTeam21(121)">Reset Name</button>

    <input type="file" id="bimageInput121" accept="image/*">
    <button onclick="deleteBImageTeam21()">Delete Image</button>
    <button onclick="resetBImageTeam21(121)">Reset Image</button>

    <div class="stats">
      <div class="stat">Overs: <span id="overs121">0.0</span></div>
      <div class="stat">Maidens: <span id="maidens121">0</span></div>
      <div class="stat">Runs: <span id="bruns121">0</span></div>
      <div class="stat">Wickets: <span id="wickets121">0</span></div>
      <div class="stat">Econ: <span id="econ121">0.00</span></div>
    </div>

    <div class="controls">
      <button onclick="addOverTeam21()">+0.1 Over</button>
      <button onclick="minusOverTeam21()">-0.1 Over</button>

      <button onclick="addMaidenTeam21()">+Maiden</button>
      <button onclick="minusMaidenTeam21()">-Maiden</button>

      <button onclick="addBowlerRunsTeam21(1)">+1 Run</button>
      <button onclick="addBowlerRunsTeam21(2)">+2 Runs</button>
      <button onclick="addBowlerRunsTeam21(3)">+3 Runs</button>
      <button onclick="addBowlerRunsTeam21(4)">+4 Runs</button>
      <button onclick="addBowlerRunsTeam21(6)">+6 Runs</button>
      <button onclick="minusBowlerRunsTeam21(1)">-1 Run</button>
      <button onclick="minusBowlerRunsTeam21(2)">-2 Runs</button>
      <button onclick="minusBowlerRunsTeam21(3)">-3 Runs</button>
      <button onclick="minusBowlerRunsTeam21(4)">-4 Runs</button>
      <button onclick="minusBowlerRunsTeam21(6)">-6 Runs</button>

      <button onclick="addWicketTeam21()">+Wicket</button>
      <button onclick="minusWicketTeam21()">-Wicket</button>

      <button onclick="resetAllBowlingTeam21()">Reset</button>
    </div>
</div>

<!-- 221 BOWLING CONTROL -->
<div class="player">
    <div class="title" id="bname221"></div>
    <img id="bimg221" width="80">

    <input type="text" id="bnameInput221" placeholder="Enter Bowler Name">
    <button onclick="addBNameTeam21(221)">Add Name</button>
    <button onclick="deleteBNameTeam21()">Delete Name</button>
    <button onclick="resetBNameTeam21(221)">Reset Name</button>

    <input type="file" id="bimageInput221" accept="image/*">
    <button onclick="deleteBImageTeam21()">Delete Image</button>
    <button onclick="resetBImageTeam21(221)">Reset Image</button>

    <div class="stats">
      <div class="stat">Overs: <span id="overs221">0.0</span></div>
      <div class="stat">Maidens: <span id="maidens221">0</span></div>
      <div class="stat">Runs: <span id="bruns221">0</span></div>
      <div class="stat">Wickets: <span id="wickets221">0</span></div>
      <div class="stat">Econ: <span id="econ221">0.00</span></div>
    </div>

    <div class="controls">
      <button onclick="addOverTeam21()">+0.1 Over</button>
      <button onclick="minusOverTeam21()">-0.1 Over</button>

      <button onclick="addMaidenTeam21()">+Maiden</button>
      <button onclick="minusMaidenTeam21()">-Maiden</button>

      <button onclick="addBowlerRunsTeam21(1)">+1 Run</button>
      <button onclick="addBowlerRunsTeam21(2)">+2 Runs</button>
      <button onclick="addBowlerRunsTeam21(3)">+3 Runs</button>
      <button onclick="addBowlerRunsTeam21(4)">+4 Runs</button>
      <button onclick="addBowlerRunsTeam21(6)">+6 Runs</button>
      <button onclick="minusBowlerRunsTeam21(1)">-1 Run</button>
      <button onclick="minusBowlerRunsTeam21(2)">-2 Runs</button>
      <button onclick="minusBowlerRunsTeam21(3)">-3 Runs</button>
      <button onclick="minusBowlerRunsTeam21(4)">-4 Runs</button>
      <button onclick="minusBowlerRunsTeam21(6)">-6 Runs</button>

      <button onclick="addWicketTeam21()">+Wicket</button>
      <button onclick="minusWicketTeam21()">-Wicket</button>

      <button onclick="resetAllBowlingTeam21()">Reset</button>
    </div>
</div>

<!-- BROADCAST PANELS -->

<div class="player broadcast">
    <div class="title" id="bname721"></div>
    <img id="bimg721" width="80">
    <div class="stats">
      <div class="stat">Overs: <span id="overs721">0.0</span></div>
      <div class="stat">Maidens: <span id="maidens721">0</span></div>
      <div class="stat">Runs: <span id="bruns721">0</span></div>
      <div class="stat">Wickets: <span id="wickets721">0</span></div>
      <div class="stat">Econ: <span id="econ721">0.00</span></div>
    </div>
</div>

</div>

 b11
<!-- ================= TEAM 22 BOWLING CONTROLS ================= -->
<div class="scoreboard-wrapper">

<!-- 122 BOWLING CONTROL -->
<div class="player">
    <div class="title" id="bname122"></div>
    <img id="bimg122" width="80">

    <input type="text" id="bnameInput122" placeholder="Enter Bowler Name">
    <button onclick="addBNameTeam22(122)">Add Name</button>
    <button onclick="deleteBNameTeam22()">Delete Name</button>
    <button onclick="resetBNameTeam22(122)">Reset Name</button>

    <input type="file" id="bimageInput122" accept="image/*">
    <button onclick="deleteBImageTeam22()">Delete Image</button>
    <button onclick="resetBImageTeam22(122)">Reset Image</button>

    <div class="stats">
      <div class="stat">Overs: <span id="overs122">0.0</span></div>
      <div class="stat">Maidens: <span id="maidens122">0</span></div>
      <div class="stat">Runs: <span id="bruns122">0</span></div>
      <div class="stat">Wickets: <span id="wickets122">0</span></div>
      <div class="stat">Econ: <span id="econ122">0.00</span></div>
    </div>

    <div class="controls">
      <button onclick="addOverTeam22()">+0.1 Over</button>
      <button onclick="minusOverTeam22()">-0.1 Over</button>

      <button onclick="addMaidenTeam22()">+Maiden</button>
      <button onclick="minusMaidenTeam22()">-Maiden</button>

      <button onclick="addBowlerRunsTeam22(1)">+1 Run</button>
      <button onclick="addBowlerRunsTeam22(2)">+2 Runs</button>
      <button onclick="addBowlerRunsTeam22(3)">+3 Runs</button>
      <button onclick="addBowlerRunsTeam22(4)">+4 Runs</button>
      <button onclick="addBowlerRunsTeam22(6)">+6 Runs</button>
      <button onclick="minusBowlerRunsTeam22(1)">-1 Run</button>
      <button onclick="minusBowlerRunsTeam22(2)">-2 Runs</button>
      <button onclick="minusBowlerRunsTeam22(3)">-3 Runs</button>
      <button onclick="minusBowlerRunsTeam22(4)">-4 Runs</button>
      <button onclick="minusBowlerRunsTeam22(6)">-6 Runs</button>

      <button onclick="addWicketTeam22()">+Wicket</button>
      <button onclick="minusWicketTeam22()">-Wicket</button>

      <button onclick="resetAllBowlingTeam22()">Reset</button>
    </div>
</div>

<!-- 222 BOWLING CONTROL (same as above) -->
<div class="player">
    <div class="title" id="bname222"></div>
    <img id="bimg222" width="80">

    <input type="text" id="bnameInput222" placeholder="Enter Bowler Name">
    <button onclick="addBNameTeam22(222)">Add Name</button>
    <button onclick="deleteBNameTeam22()">Delete Name</button>
    <button onclick="resetBNameTeam22(222)">Reset Name</button>

    <input type="file" id="bimageInput222" accept="image/*">
    <button onclick="deleteBImageTeam22()">Delete Image</button>
    <button onclick="resetBImageTeam22(222)">Reset Image</button>

    <div class="stats">
      <div class="stat">Overs: <span id="overs222">0.0</span></div>
      <div class="stat">Maidens: <span id="maidens222">0</span></div>
      <div class="stat">Runs: <span id="bruns222">0</span></div>
      <div class="stat">Wickets: <span id="wickets222">0</span></div>
      <div class="stat">Econ: <span id="econ222">0.00</span></div>
    </div>

    <div class="controls">
      <button onclick="addOverTeam22()">+0.1 Over</button>
      <button onclick="minusOverTeam22()">-0.1 Over</button>

      <button onclick="addMaidenTeam22()">+Maiden</button>
      <button onclick="minusMaidenTeam22()">-Maiden</button>

      <button onclick="addBowlerRunsTeam22(1)">+1 Run</button>
      <button onclick="addBowlerRunsTeam22(2)">+2 Runs</button>
      <button onclick="addBowlerRunsTeam22(3)">+3 Runs</button>
      <button onclick="addBowlerRunsTeam22(4)">+4 Runs</button>
      <button onclick="addBowlerRunsTeam22(6)">+6 Runs</button>
      <button onclick="minusBowlerRunsTeam22(1)">-1 Run</button>
      <button onclick="minusBowlerRunsTeam22(2)">-2 Runs</button>
      <button onclick="minusBowlerRunsTeam22(3)">-3 Runs</button>
      <button onclick="minusBowlerRunsTeam22(4)">-4 Runs</button>
      <button onclick="minusBowlerRunsTeam22(6)">-6 Runs</button>

      <button onclick="addWicketTeam22()">+Wicket</button>
      <button onclick="minusWicketTeam22()">-Wicket</button>

      <button onclick="resetAllBowlingTeam22()">Reset</button>
    </div>
</div>

<!-- BROADCAST PANELS -->

<div class="player broadcast">
    <div class="title" id="bname722"></div>
    <img id="bimg722" width="80">
    <div class="stats">
      <div class="stat">Overs: <span id="overs722">0.0</span></div>
      <div class="stat">Maidens: <span id="maidens722">0</span></div>
      <div class="stat">Runs: <span id="bruns722">0</span></div>
      <div class="stat">Wickets: <span id="wickets722">0</span></div>
      <div class="stat">Econ: <span id="econ722">0.00</span></div>
    </div>
</div>

</div>



A1
<!-- ================= TEAM 1 BOWLING CONTROLS ================= -->
<div class="scoreboard-wrapper">

  <!-- 101 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname101"></div>
      <img id="bimg101" width="80">

      <input type="text" id="bnameInput101" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam1(101)">Add Name</button>
      <button onclick="deleteBNameTeam1()">Delete Name</button>
      <button onclick="resetBNameTeam1(101)">Reset Name</button>

      <input type="file" id="bimageInput101" accept="image/*">
      <button onclick="deleteBImageTeam1()">Delete Image</button>
      <button onclick="resetBImageTeam1(101)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs101">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens101">0</span></div>
        <div class="stat">Runs: <span id="bruns101">0</span></div>
        <div class="stat">Wickets: <span id="wickets101">0</span></div>
        <div class="stat">Econ: <span id="econ101">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam1()">+0.1 Over</button>
        <button onclick="minusOverTeam1()">-0.1 Over</button>

        <button onclick="addMaidenTeam1()">+Maiden</button>
        <button onclick="minusMaidenTeam1()">-Maiden</button>

        <button onclick="addBowlerRunsTeam1(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam1(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam1(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam1(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam1(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam1(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam1(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam1(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam1(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam1(6)">-6 Runs</button>

        <button onclick="addWicketTeam1()">+Wicket</button>
        <button onclick="minusWicketTeam1()">-Wicket</button>

        <button onclick="resetAllBowlingTeam1()">Reset</button>
      </div>
  </div>

  <!-- 201 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname201"></div>
      <img id="bimg201" width="80">

      <input type="text" id="bnameInput201" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam1(201)">Add Name</button>
      <button onclick="deleteBNameTeam1()">Delete Name</button>
      <button onclick="resetBNameTeam1(201)">Reset Name</button>

      <input type="file" id="bimageInput201" accept="image/*">
      <button onclick="deleteBImageTeam1()">Delete Image</button>
      <button onclick="resetBImageTeam1(201)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs201">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens201">0</span></div>
        <div class="stat">Runs: <span id="bruns201">0</span></div>
        <div class="stat">Wickets: <span id="wickets201">0</span></div>
        <div class="stat">Econ: <span id="econ201">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam1()">+0.1 Over</button>
        <button onclick="minusOverTeam1()">-0.1 Over</button>

        <button onclick="addMaidenTeam1()">+Maiden</button>
        <button onclick="minusMaidenTeam1()">-Maiden</button>

        <button onclick="addBowlerRunsTeam1(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam1(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam1(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam1(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam1(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam1(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam1(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam1(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam1(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam1(6)">-6 Runs</button>

        <button onclick="addWicketTeam1()">+Wicket</button>
        <button onclick="minusWicketTeam1()">-Wicket</button>

        <button onclick="resetAllBowlingTeam1()">Reset</button>
      </div>
  </div>

  
  <div class="player broadcast">
      <div class="title" id="bname701"></div>
      <img id="bimg701" width="80">
      <div class="stats">
        <div class="stat">Overs: <span id="overs701">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens701">0</span></div>
        <div class="stat">Runs: <span id="bruns701">0</span></div>
        <div class="stat">Wickets: <span id="wickets701">0</span></div>
        <div class="stat">Econ: <span id="econ701">0.00</span></div>
      </div>
  </div>

</div>


A2
<!-- ================= TEAM 2 BOWLING CONTROLS ================= -->
<div class="scoreboard-wrapper">

  <!-- 102 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname102"></div>
      <img id="bimg102" width="80">

      <input type="text" id="bnameInput102" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam2(102)">Add Name</button>
      <button onclick="deleteBNameTeam2()">Delete Name</button>
      <button onclick="resetBNameTeam2(102)">Reset Name</button>

      <input type="file" id="bimageInput102" accept="image/*">
      <button onclick="deleteBImageTeam2()">Delete Image</button>
      <button onclick="resetBImageTeam2(102)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs102">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens102">0</span></div>
        <div class="stat">Runs: <span id="bruns102">0</span></div>
        <div class="stat">Wickets: <span id="wickets102">0</span></div>
        <div class="stat">Econ: <span id="econ102">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam2()">+0.1 Over</button>
        <button onclick="minusOverTeam2()">-0.1 Over</button>

        <button onclick="addMaidenTeam2()">+Maiden</button>
        <button onclick="minusMaidenTeam2()">-Maiden</button>

        <button onclick="addBowlerRunsTeam2(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam2(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam2(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam2(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam2(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam2(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam2(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam2(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam2(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam2(6)">-6 Runs</button>

        <button onclick="addWicketTeam2()">+Wicket</button>
        <button onclick="minusWicketTeam2()">-Wicket</button>

        <button onclick="resetAllBowlingTeam2()">Reset</button>
      </div>
  </div>

  <!-- 202 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname202"></div>
      <img id="bimg202" width="80">

      <input type="text" id="bnameInput202" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam2(202)">Add Name</button>
      <button onclick="deleteBNameTeam2()">Delete Name</button>
      <button onclick="resetBNameTeam2(202)">Reset Name</button>

      <input type="file" id="bimageInput202" accept="image/*">
      <button onclick="deleteBImageTeam2()">Delete Image</button>
      <button onclick="resetBImageTeam2(202)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs202">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens202">0</span></div>
        <div class="stat">Runs: <span id="bruns202">0</span></div>
        <div class="stat">Wickets: <span id="wickets202">0</span></div>
        <div class="stat">Econ: <span id="econ202">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam2()">+0.1 Over</button>
        <button onclick="minusOverTeam2()">-0.1 Over</button>

        <button onclick="addMaidenTeam2()">+Maiden</button>
        <button onclick="minusMaidenTeam2()">-Maiden</button>

        <button onclick="addBowlerRunsTeam2(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam2(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam2(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam2(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam2(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam2(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam2(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam2(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam2(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam2(6)">-6 Runs</button>

        <button onclick="addWicketTeam2()">+Wicket</button>
        <button onclick="minusWicketTeam2()">-Wicket</button>

        <button onclick="resetAllBowlingTeam2()">Reset</button>
      </div>
  </div>

  <div class="player broadcast">
      <div class="title" id="bname702"></div>
      <img id="bimg702" width="80">
      <div class="stats">
        <div class="stat">Overs: <span id="overs702">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens702">0</span></div>
        <div class="stat">Runs: <span id="bruns702">0</span></div>
        <div class="stat">Wickets: <span id="wickets702">0</span></div>
        <div class="stat">Econ: <span id="econ702">0.00</span></div>
      </div>
  </div>

</div>


A3
<!-- ================= TEAM 3 BOWLING CONTROLS ================= -->
<div class="scoreboard-wrapper">

  <!-- 103 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname103"></div>
      <img id="bimg103" width="80">

      <input type="text" id="bnameInput103" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam3(103)">Add Name</button>
      <button onclick="deleteBNameTeam3()">Delete Name</button>
      <button onclick="resetBNameTeam3(103)">Reset Name</button>

      <input type="file" id="bimageInput103" accept="image/*">
      <button onclick="deleteBImageTeam3()">Delete Image</button>
      <button onclick="resetBImageTeam3(103)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs103">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens103">0</span></div>
        <div class="stat">Runs: <span id="bruns103">0</span></div>
        <div class="stat">Wickets: <span id="wickets103">0</span></div>
        <div class="stat">Econ: <span id="econ103">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam3()">+0.1 Over</button>
        <button onclick="minusOverTeam3()">-0.1 Over</button>

        <button onclick="addMaidenTeam3()">+Maiden</button>
        <button onclick="minusMaidenTeam3()">-Maiden</button>

        <button onclick="addBowlerRunsTeam3(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam3(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam3(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam3(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam3(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam3(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam3(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam3(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam3(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam3(6)">-6 Runs</button>

        <button onclick="addWicketTeam3()">+Wicket</button>
        <button onclick="minusWicketTeam3()">-Wicket</button>

        <button onclick="resetAllBowlingTeam3()">Reset</button>
      </div>
  </div>

  <!-- 203 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname203"></div>
      <img id="bimg203" width="80">

      <input type="text" id="bnameInput203" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam3(203)">Add Name</button>
      <button onclick="deleteBNameTeam3()">Delete Name</button>
      <button onclick="resetBNameTeam3(203)">Reset Name</button>

      <input type="file" id="bimageInput203" accept="image/*">
      <button onclick="deleteBImageTeam3()">Delete Image</button>
      <button onclick="resetBImageTeam3(203)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs203">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens203">0</span></div>
        <div class="stat">Runs: <span id="bruns203">0</span></div>
        <div class="stat">Wickets: <span id="wickets203">0</span></div>
        <div class="stat">Econ: <span id="econ203">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam3()">+0.1 Over</button>
        <button onclick="minusOverTeam3()">-0.1 Over</button>

        <button onclick="addMaidenTeam3()">+Maiden</button>
        <button onclick="minusMaidenTeam3()">-Maiden</button>

        <button onclick="addBowlerRunsTeam3(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam3(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam3(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam3(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam3(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam3(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam3(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam3(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam3(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam3(6)">-6 Runs</button>

        <button onclick="addWicketTeam3()">+Wicket</button>
        <button onclick="minusWicketTeam3()">-Wicket</button>

        <button onclick="resetAllBowlingTeam3()">Reset</button>
      </div>
  </div>

  <div class="player broadcast">
      <div class="title" id="bname703"></div>
      <img id="bimg703" width="80">
      <div class="stats">
        <div class="stat">Overs: <span id="overs703">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens703">0</span></div>
        <div class="stat">Runs: <span id="bruns703">0</span></div>
        <div class="stat">Wickets: <span id="wickets703">0</span></div>
        <div class="stat">Econ: <span id="econ703">0.00</span></div>
      </div>
  </div>

</div>


A4
<!-- ================= TEAM 4 BOWLING CONTROLS ================= -->
<div class="scoreboard-wrapper">

  <!-- 104 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname104"></div>
      <img id="bimg104" width="80">

      <input type="text" id="bnameInput104" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam4(104)">Add Name</button>
      <button onclick="deleteBNameTeam4()">Delete Name</button>
      <button onclick="resetBNameTeam4(104)">Reset Name</button>

      <input type="file" id="bimageInput104" accept="image/*">
      <button onclick="deleteBImageTeam4()">Delete Image</button>
      <button onclick="resetBImageTeam4(104)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs104">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens104">0</span></div>
        <div class="stat">Runs: <span id="bruns104">0</span></div>
        <div class="stat">Wickets: <span id="wickets104">0</span></div>
        <div class="stat">Econ: <span id="econ104">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam4()">+0.1 Over</button>
        <button onclick="minusOverTeam4()">-0.1 Over</button>

        <button onclick="addMaidenTeam4()">+Maiden</button>
        <button onclick="minusMaidenTeam4()">-Maiden</button>

        <button onclick="addBowlerRunsTeam4(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam4(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam4(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam4(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam4(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam4(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam4(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam4(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam4(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam4(6)">-6 Runs</button>

        <button onclick="addWicketTeam4()">+Wicket</button>
        <button onclick="minusWicketTeam4()">-Wicket</button>

        <button onclick="resetAllBowlingTeam4()">Reset</button>
      </div>
  </div>

  <!-- 204 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname204"></div>
      <img id="bimg204" width="80">

      <input type="text" id="bnameInput204" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam4(204)">Add Name</button>
      <button onclick="deleteBNameTeam4()">Delete Name</button>
      <button onclick="resetBNameTeam4(204)">Reset Name</button>

      <input type="file" id="bimageInput204" accept="image/*">
      <button onclick="deleteBImageTeam4()">Delete Image</button>
      <button onclick="resetBImageTeam4(204)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs204">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens204">0</span></div>
        <div class="stat">Runs: <span id="bruns204">0</span></div>
        <div class="stat">Wickets: <span id="wickets204">0</span></div>
        <div class="stat">Econ: <span id="econ204">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam4()">+0.1 Over</button>
        <button onclick="minusOverTeam4()">-0.1 Over</button>

        <button onclick="addMaidenTeam4()">+Maiden</button>
        <button onclick="minusMaidenTeam4()">-Maiden</button>

        <button onclick="addBowlerRunsTeam4(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam4(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam4(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam4(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam4(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam4(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam4(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam4(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam4(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam4(6)">-6 Runs</button>

        <button onclick="addWicketTeam4()">+Wicket</button>
        <button onclick="minusWicketTeam4()">-Wicket</button>

        <button onclick="resetAllBowlingTeam4()">Reset</button>
      </div>
  </div>

  <div class="player broadcast">
      <div class="title" id="bname704"></div>
      <img id="bimg704" width="80">
      <div class="stats">
        <div class="stat">Overs: <span id="overs704">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens704">0</span></div>
        <div class="stat">Runs: <span id="bruns704">0</span></div>
        <div class="stat">Wickets: <span id="wickets704">0</span></div>
        <div class="stat">Econ: <span id="econ704">0.00</span></div>
      </div>
  </div>

</div>
A5
<!-- ================= TEAM 5 BOWLING CONTROLS ================= -->
<div class="scoreboard-wrapper">

  <!-- 105 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname105"></div>
      <img id="bimg105" width="80">

      <input type="text" id="bnameInput105" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam5(105)">Add Name</button>
      <button onclick="deleteBNameTeam5()">Delete Name</button>
      <button onclick="resetBNameTeam5(105)">Reset Name</button>

      <input type="file" id="bimageInput105" accept="image/*">
      <button onclick="deleteBImageTeam5()">Delete Image</button>
      <button onclick="resetBImageTeam5(105)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs105">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens105">0</span></div>
        <div class="stat">Runs: <span id="bruns105">0</span></div>
        <div class="stat">Wickets: <span id="wickets105">0</span></div>
        <div class="stat">Econ: <span id="econ105">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam5()">+0.1 Over</button>
        <button onclick="minusOverTeam5()">-0.1 Over</button>

        <button onclick="addMaidenTeam5()">+Maiden</button>
        <button onclick="minusMaidenTeam5()">-Maiden</button>

        <button onclick="addBowlerRunsTeam5(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam5(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam5(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam5(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam5(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam5(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam5(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam5(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam5(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam5(6)">-6 Runs</button>

        <button onclick="addWicketTeam5()">+Wicket</button>
        <button onclick="minusWicketTeam5()">-Wicket</button>

        <button onclick="resetAllBowlingTeam5()">Reset</button>
      </div>
  </div>

  <!-- 205 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname205"></div>
      <img id="bimg205" width="80">

      <input type="text" id="bnameInput205" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam5(205)">Add Name</button>
      <button onclick="deleteBNameTeam5()">Delete Name</button>
      <button onclick="resetBNameTeam5(205)">Reset Name</button>

      <input type="file" id="bimageInput205" accept="image/*">
      <button onclick="deleteBImageTeam5()">Delete Image</button>
      <button onclick="resetBImageTeam5(205)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs205">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens205">0</span></div>
        <div class="stat">Runs: <span id="bruns205">0</span></div>
        <div class="stat">Wickets: <span id="wickets205">0</span></div>
        <div class="stat">Econ: <span id="econ205">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam5()">+0.1 Over</button>
        <button onclick="minusOverTeam5()">-0.1 Over</button>

        <button onclick="addMaidenTeam5()">+Maiden</button>
        <button onclick="minusMaidenTeam5()">-Maiden</button>

        <button onclick="addBowlerRunsTeam5(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam5(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam5(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam5(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam5(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam5(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam5(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam5(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam5(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam5(6)">-6 Runs</button>

        <button onclick="addWicketTeam5()">+Wicket</button>
        <button onclick="minusWicketTeam5()">-Wicket</button>

        <button onclick="resetAllBowlingTeam5()">Reset</button>
      </div>
  </div>

  
  <div class="player broadcast">
      <div class="title" id="bname705"></div>
      <img id="bimg705" width="80">
      <div class="stats">
        <div class="stat">Overs: <span id="overs705">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens705">0</span></div>
        <div class="stat">Runs: <span id="bruns705">0</span></div>
        <div class="stat">Wickets: <span id="wickets705">0</span></div>
        <div class="stat">Econ: <span id="econ705">0.00</span></div>
      </div>
  </div>

</div>


A6
<!-- ================= TEAM 6 BOWLING CONTROLS ================= -->
<div class="scoreboard-wrapper">

  <!-- 106 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname106"></div>
      <img id="bimg106" width="80">

      <input type="text" id="bnameInput106" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam6(106)">Add Name</button>
      <button onclick="deleteBNameTeam6()">Delete Name</button>
      <button onclick="resetBNameTeam6(106)">Reset Name</button>

      <input type="file" id="bimageInput106" accept="image/*">
      <button onclick="deleteBImageTeam6()">Delete Image</button>
      <button onclick="resetBImageTeam6(106)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs106">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens106">0</span></div>
        <div class="stat">Runs: <span id="bruns106">0</span></div>
        <div class="stat">Wickets: <span id="wickets106">0</span></div>
        <div class="stat">Econ: <span id="econ106">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam6()">+0.1 Over</button>
        <button onclick="minusOverTeam6()">-0.1 Over</button>

        <button onclick="addMaidenTeam6()">+Maiden</button>
        <button onclick="minusMaidenTeam6()">-Maiden</button>

        <button onclick="addBowlerRunsTeam6(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam6(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam6(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam6(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam6(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam6(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam6(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam6(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam6(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam6(6)">-6 Runs</button>

        <button onclick="addWicketTeam6()">+Wicket</button>
        <button onclick="minusWicketTeam6()">-Wicket</button>

        <button onclick="resetAllBowlingTeam6()">Reset</button>
      </div>
  </div>

  <!-- 206 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname206"></div>
      <img id="bimg206" width="80">

      <input type="text" id="bnameInput206" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam6(206)">Add Name</button>
      <button onclick="deleteBNameTeam6()">Delete Name</button>
      <button onclick="resetBNameTeam6(206)">Reset Name</button>

      <input type="file" id="bimageInput206" accept="image/*">
      <button onclick="deleteBImageTeam6()">Delete Image</button>
      <button onclick="resetBImageTeam6(206)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs206">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens206">0</span></div>
        <div class="stat">Runs: <span id="bruns206">0</span></div>
        <div class="stat">Wickets: <span id="wickets206">0</span></div>
        <div class="stat">Econ: <span id="econ206">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam6()">+0.1 Over</button>
        <button onclick="minusOverTeam6()">-0.1 Over</button>

        <button onclick="addMaidenTeam6()">+Maiden</button>
        <button onclick="minusMaidenTeam6()">-Maiden</button>

        <button onclick="addBowlerRunsTeam6(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam6(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam6(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam6(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam6(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam6(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam6(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam6(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam6(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam6(6)">-6 Runs</button>

        <button onclick="addWicketTeam6()">+Wicket</button>
        <button onclick="minusWicketTeam6()">-Wicket</button>

        <button onclick="resetAllBowlingTeam6()">Reset</button>
      </div>
  </div>

  <div class="player broadcast">
      <div class="title" id="bname706"></div>
      <img id="bimg706" width="80">
      <div class="stats">
        <div class="stat">Overs: <span id="overs706">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens706">0</span></div>
        <div class="stat">Runs: <span id="bruns706">0</span></div>
        <div class="stat">Wickets: <span id="wickets706">0</span></div>
        <div class="stat">Econ: <span id="econ706">0.00</span></div>
      </div>
  </div>

</div>


A7

<!-- ================= TEAM 7 BOWLING CONTROLS ================= -->
<div class="scoreboard-wrapper">

  <!-- 107 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname107"></div>
      <img id="bimg107" width="80">

      <input type="text" id="bnameInput107" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam7(107)">Add Name</button>
      <button onclick="deleteBNameTeam7()">Delete Name</button>
      <button onclick="resetBNameTeam7(107)">Reset Name</button>

      <input type="file" id="bimageInput107" accept="image/*">
      <button onclick="deleteBImageTeam7()">Delete Image</button>
      <button onclick="resetBImageTeam7(107)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs107">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens107">0</span></div>
        <div class="stat">Runs: <span id="bruns107">0</span></div>
        <div class="stat">Wickets: <span id="wickets107">0</span></div>
        <div class="stat">Econ: <span id="econ107">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam7()">+0.1 Over</button>
        <button onclick="minusOverTeam7()">-0.1 Over</button>

        <button onclick="addMaidenTeam7()">+Maiden</button>
        <button onclick="minusMaidenTeam7()">-Maiden</button>

        <button onclick="addBowlerRunsTeam7(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam7(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam7(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam7(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam7(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam7(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam7(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam7(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam7(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam7(6)">-6 Runs</button>

        <button onclick="addWicketTeam7()">+Wicket</button>
        <button onclick="minusWicketTeam7()">-Wicket</button>

        <button onclick="resetAllBowlingTeam7()">Reset</button>
      </div>
  </div>

  <!-- 207 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname207"></div>
      <img id="bimg207" width="80">

      <input type="text" id="bnameInput207" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam7(207)">Add Name</button>
      <button onclick="deleteBNameTeam7()">Delete Name</button>
      <button onclick="resetBNameTeam7(207)">Reset Name</button>

      <input type="file" id="bimageInput207" accept="image/*">
      <button onclick="deleteBImageTeam7()">Delete Image</button>
      <button onclick="resetBImageTeam7(207)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs207">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens207">0</span></div>
        <div class="stat">Runs: <span id="bruns207">0</span></div>
        <div class="stat">Wickets: <span id="wickets207">0</span></div>
        <div class="stat">Econ: <span id="econ207">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam7()">+0.1 Over</button>
        <button onclick="minusOverTeam7()">-0.1 Over</button>

        <button onclick="addMaidenTeam7()">+Maiden</button>
        <button onclick="minusMaidenTeam7()">-Maiden</button>

        <button onclick="addBowlerRunsTeam7(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam7(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam7(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam7(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam7(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam7(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam7(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam7(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam7(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam7(6)">-6 Runs</button>

        <button onclick="addWicketTeam7()">+Wicket</button>
        <button onclick="minusWicketTeam7()">-Wicket</button>

        <button onclick="resetAllBowlingTeam7()">Reset</button>
      </div>
  </div>

  
  <div class="player broadcast">
      <div class="title" id="bname707"></div>
      <img id="bimg707" width="80">
      <div class="stats">
        <div class="stat">Overs: <span id="overs707">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens707">0</span></div>
        <div class="stat">Runs: <span id="bruns707">0</span></div>
        <div class="stat">Wickets: <span id="wickets707">0</span></div>
        <div class="stat">Econ: <span id="econ707">0.00</span></div>
      </div>
  </div>

</div>


A8
<!-- ================= TEAM 8 BOWLING CONTROLS ================= -->
<div class="scoreboard-wrapper">

  <!-- 108 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname108"></div>
      <img id="bimg108" width="80">

      <input type="text" id="bnameInput108" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam8(108)">Add Name</button>
      <button onclick="deleteBNameTeam8()">Delete Name</button>
      <button onclick="resetBNameTeam8(108)">Reset Name</button>

      <input type="file" id="bimageInput108" accept="image/*">
      <button onclick="deleteBImageTeam8()">Delete Image</button>
      <button onclick="resetBImageTeam8(108)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs108">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens108">0</span></div>
        <div class="stat">Runs: <span id="bruns108">0</span></div>
        <div class="stat">Wickets: <span id="wickets108">0</span></div>
        <div class="stat">Econ: <span id="econ108">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam8()">+0.1 Over</button>
        <button onclick="minusOverTeam8()">-0.1 Over</button>

        <button onclick="addMaidenTeam8()">+Maiden</button>
        <button onclick="minusMaidenTeam8()">-Maiden</button>

        <button onclick="addBowlerRunsTeam8(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam8(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam8(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam8(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam8(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam8(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam8(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam8(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam8(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam8(6)">-6 Runs</button>

        <button onclick="addWicketTeam8()">+Wicket</button>
        <button onclick="minusWicketTeam8()">-Wicket</button>

        <button onclick="resetAllBowlingTeam8()">Reset</button>
      </div>
  </div>

  <!-- 208 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname208"></div>
      <img id="bimg208" width="80">

      <input type="text" id="bnameInput208" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam8(208)">Add Name</button>
      <button onclick="deleteBNameTeam8()">Delete Name</button>
      <button onclick="resetBNameTeam8(208)">Reset Name</button>

      <input type="file" id="bimageInput208" accept="image/*">
      <button onclick="deleteBImageTeam8()">Delete Image</button>
      <button onclick="resetBImageTeam8(208)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs208">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens208">0</span></div>
        <div class="stat">Runs: <span id="bruns208">0</span></div>
        <div class="stat">Wickets: <span id="wickets208">0</span></div>
        <div class="stat">Econ: <span id="econ208">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam8()">+0.1 Over</button>
        <button onclick="minusOverTeam8()">-0.1 Over</button>

        <button onclick="addMaidenTeam8()">+Maiden</button>
        <button onclick="minusMaidenTeam8()">-Maiden</button>

        <button onclick="addBowlerRunsTeam8(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam8(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam8(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam8(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam8(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam8(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam8(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam8(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam8(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam8(6)">-6 Runs</button>

        <button onclick="addWicketTeam8()">+Wicket</button>
        <button onclick="minusWicketTeam8()">-Wicket</button>

        <button onclick="resetAllBowlingTeam8()">Reset</button>
      </div>
  </div>

 
  <div class="player broadcast">
      <div class="title" id="bname708"></div>
      <img id="bimg708" width="80">
      <div class="stats">
        <div class="stat">Overs: <span id="overs708">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens708">0</span></div>
        <div class="stat">Runs: <span id="bruns708">0</span></div>
        <div class="stat">Wickets: <span id="wickets708">0</span></div>
        <div class="stat">Econ: <span id="econ708">0.00</span></div>
      </div>
  </div>

</div>

A9
<!-- ================= TEAM 9 BOWLING CONTROLS ================= -->
<div class="scoreboard-wrapper">

  <!-- 109 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname109"></div>
      <img id="bimg109" width="80">

      <input type="text" id="bnameInput109" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam9(109)">Add Name</button>
      <button onclick="deleteBNameTeam9()">Delete Name</button>
      <button onclick="resetBNameTeam9(109)">Reset Name</button>

      <input type="file" id="bimageInput109" accept="image/*">
      <button onclick="deleteBImageTeam9()">Delete Image</button>
      <button onclick="resetBImageTeam9(109)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs109">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens109">0</span></div>
        <div class="stat">Runs: <span id="bruns109">0</span></div>
        <div class="stat">Wickets: <span id="wickets109">0</span></div>
        <div class="stat">Econ: <span id="econ109">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam9()">+0.1 Over</button>
        <button onclick="minusOverTeam9()">-0.1 Over</button>

        <button onclick="addMaidenTeam9()">+Maiden</button>
        <button onclick="minusMaidenTeam9()">-Maiden</button>

        <button onclick="addBowlerRunsTeam9(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam9(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam9(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam9(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam9(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam9(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam9(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam9(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam9(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam9(6)">-6 Runs</button>

        <button onclick="addWicketTeam9()">+Wicket</button>
        <button onclick="minusWicketTeam9()">-Wicket</button>

        <button onclick="resetAllBowlingTeam9()">Reset</button>
      </div>
  </div>

  <!-- 209 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname209"></div>
      <img id="bimg209" width="80">

      <input type="text" id="bnameInput209" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam9(209)">Add Name</button>
      <button onclick="deleteBNameTeam9()">Delete Name</button>
      <button onclick="resetBNameTeam9(209)">Reset Name</button>

      <input type="file" id="bimageInput209" accept="image/*">
      <button onclick="deleteBImageTeam9()">Delete Image</button>
      <button onclick="resetBImageTeam9(209)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs209">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens209">0</span></div>
        <div class="stat">Runs: <span id="bruns209">0</span></div>
        <div class="stat">Wickets: <span id="wickets209">0</span></div>
        <div class="stat">Econ: <span id="econ209">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam9()">+0.1 Over</button>
        <button onclick="minusOverTeam9()">-0.1 Over</button>

        <button onclick="addMaidenTeam9()">+Maiden</button>
        <button onclick="minusMaidenTeam9()">-Maiden</button>

        <button onclick="addBowlerRunsTeam9(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam9(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam9(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam9(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam9(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam9(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam9(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam9(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam9(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam9(6)">-6 Runs</button>

        <button onclick="addWicketTeam9()">+Wicket</button>
        <button onclick="minusWicketTeam9()">-Wicket</button>

        <button onclick="resetAllBowlingTeam9()">Reset</button>
      </div>
  </div>

  
  <div class="player broadcast">
      <div class="title" id="bname709"></div>
      <img id="bimg709" width="80">
      <div class="stats">
        <div class="stat">Overs: <span id="overs709">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens709">0</span></div>
        <div class="stat">Runs: <span id="bruns709">0</span></div>
        <div class="stat">Wickets: <span id="wickets709">0</span></div>
        <div class="stat">Econ: <span id="econ709">0.00</span></div>
      </div>
  </div>

</div>


A10
<!-- ================= TEAM 10 BOWLING CONTROLS ================= -->
<div class="scoreboard-wrapper">

  <!-- 110 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname110"></div>
      <img id="bimg110" width="80">

      <input type="text" id="bnameInput110" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam10(110)">Add Name</button>
      <button onclick="deleteBNameTeam10()">Delete Name</button>
      <button onclick="resetBNameTeam10(110)">Reset Name</button>

      <input type="file" id="bimageInput110" accept="image/*">
      <button onclick="deleteBImageTeam10()">Delete Image</button>
      <button onclick="resetBImageTeam10(110)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs110">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens110">0</span></div>
        <div class="stat">Runs: <span id="bruns110">0</span></div>
        <div class="stat">Wickets: <span id="wickets110">0</span></div>
        <div class="stat">Econ: <span id="econ110">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam10()">+0.1 Over</button>
        <button onclick="minusOverTeam10()">-0.1 Over</button>

        <button onclick="addMaidenTeam10()">+Maiden</button>
        <button onclick="minusMaidenTeam10()">-Maiden</button>

        <button onclick="addBowlerRunsTeam10(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam10(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam10(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam10(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam10(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam10(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam10(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam10(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam10(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam10(6)">-6 Runs</button>

        <button onclick="addWicketTeam10()">+Wicket</button>
        <button onclick="minusWicketTeam10()">-Wicket</button>

        <button onclick="resetAllBowlingTeam10()">Reset</button>
      </div>
  </div>

  <!-- 210 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname210"></div>
      <img id="bimg210" width="80">

      <input type="text" id="bnameInput210" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam10(210)">Add Name</button>
      <button onclick="deleteBNameTeam10()">Delete Name</button>
      <button onclick="resetBNameTeam10(210)">Reset Name</button>

      <input type="file" id="bimageInput210" accept="image/*">
      <button onclick="deleteBImageTeam10()">Delete Image</button>
      <button onclick="resetBImageTeam10(210)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs210">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens210">0</span></div>
        <div class="stat">Runs: <span id="bruns210">0</span></div>
        <div class="stat">Wickets: <span id="wickets210">0</span></div>
        <div class="stat">Econ: <span id="econ210">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam10()">+0.1 Over</button>
        <button onclick="minusOverTeam10()">-0.1 Over</button>

        <button onclick="addMaidenTeam10()">+Maiden</button>
        <button onclick="minusMaidenTeam10()">-Maiden</button>

        <button onclick="addBowlerRunsTeam10(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam10(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam10(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam10(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam10(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam10(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam10(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam10(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam10(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam10(6)">-6 Runs</button>

        <button onclick="addWicketTeam10()">+Wicket</button>
        <button onclick="minusWicketTeam10()">-Wicket</button>

        <button onclick="resetAllBowlingTeam10()">Reset</button>
      </div>
  </div>

  
  <div class="player broadcast">
      <div class="title" id="bname710"></div>
      <img id="bimg710" width="80">
      <div class="stats">
        <div class="stat">Overs: <span id="overs710">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens710">0</span></div>
        <div class="stat">Runs: <span id="bruns710">0</span></div>
        <div class="stat">Wickets: <span id="wickets710">0</span></div>
        <div class="stat">Econ: <span id="econ710">0.00</span></div>
      </div>
  </div>

</div>


A11
<!-- ================= TEAM 11 BOWLING CONTROLS ================= -->


<div class="scoreboard-wrapper">

  <!-- 111 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname111"></div>
      <img id="bimg111" width="80">

      <input type="text" id="bnameInput111" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam11(111)">Add Name</button>
      <button onclick="deleteBNameTeam11()">Delete Name</button>
      <button onclick="resetBNameTeam11(111)">Reset Name</button>

      <input type="file" id="bimageInput111" accept="image/*">
      <button onclick="deleteBImageTeam11()">Delete Image</button>
      <button onclick="resetBImageTeam11(111)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs111">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens111">0</span></div>
        <div class="stat">Runs: <span id="bruns111">0</span></div>
        <div class="stat">Wickets: <span id="wickets111">0</span></div>
        <div class="stat">Econ: <span id="econ111">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam11()">+0.1 Over</button>
        <button onclick="minusOverTeam11()">-0.1 Over</button>

        <button onclick="addMaidenTeam11()">+Maiden</button>
        <button onclick="minusMaidenTeam11()">-Maiden</button>

        <button onclick="addBowlerRunsTeam11(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam11(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam11(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam11(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam11(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam11(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam11(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam11(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam11(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam11(6)">-6 Runs</button>

        <button onclick="addWicketTeam11()">+Wicket</button>
        <button onclick="minusWicketTeam11()">-Wicket</button>

        <button onclick="resetAllBowlingTeam11()">Reset</button>
      </div>
  </div>

  <!-- 211 BOWLING CONTROL -->
  <div class="player">
      <div class="title" id="bname211"></div>
      <img id="bimg211" width="80">

      <input type="text" id="bnameInput211" placeholder="Enter Bowler Name">
      <button onclick="addBNameTeam11(211)">Add Name</button>
      <button onclick="deleteBNameTeam11()">Delete Name</button>
      <button onclick="resetBNameTeam11(211)">Reset Name</button>

      <input type="file" id="bimageInput211" accept="image/*">
      <button onclick="deleteBImageTeam11()">Delete Image</button>
      <button onclick="resetBImageTeam11(211)">Reset Image</button>

      <div class="stats">
        <div class="stat">Overs: <span id="overs211">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens211">0</span></div>
        <div class="stat">Runs: <span id="bruns211">0</span></div>
        <div class="stat">Wickets: <span id="wickets211">0</span></div>
        <div class="stat">Econ: <span id="econ211">0.00</span></div>
      </div>

      <div class="controls">
        <button onclick="addOverTeam11()">+0.1 Over</button>
        <button onclick="minusOverTeam11()">-0.1 Over</button>

        <button onclick="addMaidenTeam11()">+Maiden</button>
        <button onclick="minusMaidenTeam11()">-Maiden</button>

        <button onclick="addBowlerRunsTeam11(1)">+1 Run</button>
        <button onclick="addBowlerRunsTeam11(2)">+2 Runs</button>
        <button onclick="addBowlerRunsTeam11(3)">+3 Runs</button>
        <button onclick="addBowlerRunsTeam11(4)">+4 Runs</button>
        <button onclick="addBowlerRunsTeam11(6)">+6 Runs</button>
        <button onclick="minusBowlerRunsTeam11(1)">-1 Run</button>
        <button onclick="minusBowlerRunsTeam11(2)">-2 Runs</button>
        <button onclick="minusBowlerRunsTeam11(3)">-3 Runs</button>
        <button onclick="minusBowlerRunsTeam11(4)">-4 Runs</button>
        <button onclick="minusBowlerRunsTeam11(6)">-6 Runs</button>

        <button onclick="addWicketTeam11()">+Wicket</button>
        <button onclick="minusWicketTeam11()">-Wicket</button>

        <button onclick="resetAllBowlingTeam11()">Reset</button>
      </div>
  </div>

  
  <div class="player broadcast">
      <div class="title" id="bname711"></div>
      <img id="bimg711" width="80">
      <div class="stats">
        <div class="stat">Overs: <span id="overs711">0.0</span></div>
        <div class="stat">Maidens: <span id="maidens711">0</span></div>
        <div class="stat">Runs: <span id="bruns711">0</span></div>
        <div class="stat">Wickets: <span id="wickets711">0</span></div>
        <div class="stat">Econ: <span id="econ711">0.00</span></div>
      </div>
  </div>

</div>


</div>

   <div class="wrapper4B">
  <label for="fileInput">Display</label>  
<input type="file" id="fileInput" accept="image/*,video/*">

<label for="fileInput5">TeamA</label>  

<input type="file" id="fileInput5" accept="image/*,video/*">

<label for="fileInput4">TeamB</label>  
<input type="file" id="fileInput4" accept="image/*,video/*">

<label for="fileInput6">Bowler</label>  
<input type="file" id="fileInput6" accept="image/*,video/*">

<label for="fileInput7">Batsman2</label>  
<input type="file" id="fileInput7" accept="image/*,video/*">


<label for="fileInput8">Batsman1
</label>  
<input type="file" id="fileInput8" accept="image/*,video/*">

<label for="fileInput20">TEAM B Name
</label>  
<input type="file" id="fileInput20" accept="image/*,video/*">
<label for="fileInput21">TEAM A Name
</label>  
<input type="file" id="fileInput21" accept="image/*,video/*">

   </div>
</div>

<div class="player1000">
     <div class="bowler"><div      class="upload-box6">
    <img id="preview6">
    <video id="videoPreview6" controls autoplay loop style="display:none;"></video>
    </div>

    <span style="color: white; margin-left:30px">BOWLER</span>


     </div>
     <div class="batsman2">
         <div class="upload-box7">
         <img id="preview7">
         
    <video id="videoPreview7" controls autoplay loop style="display:none;"></video>   
         </div>
         <span style="color: white; margin-left:30px">BATSMAN</span>

     </div>
     <div class="batsman1">
         <div class="upload-box8">
         <img id="preview8">
         
    <video id="videoPreview8" controls autoplay loop style="display:none;"></video>   
         </div>
         <span style="color: white; margin-left:30px">BATSMAN</span>

     </div>
    </div>

 <!-- ================= 501 ================= -->
<div class="wrapper5" id="outdiv501"><!-- BROADCAST PANELS -->
  <div class="broadcast100">

    <div class="upload-box1">
    <img id="bimg612">
    </div>
    <div class="box71">
       <div class="display-box71
       " id="bname612"></div>

       <div class="display-box72">

        <div class="stat"><span id="wickets612">0</span></div>
        <span style="color: azure;">-</span>
         <div class="stat"><span id="bruns612">0</span></div>
       
        </div>

    </div>
    <div class="bottom2">
        <div class="stat">Overs: <span id="overs612">0.0</span></div>
        
        <div class="stat">Econ: <span id="econ612">0.00</span></div>
          
      </div>

</div>
</div>


    <!-- ================= 502 ================= -->
<div class="wrapper5" id="outdiv502"><!-- BROADCAST PANELS -->
  <div class="broadcast100">

    <div class="upload-box1">
    <img id="bimg613">
    </div>
    <div class="box71">
       <div class="display-box71
       " id="bname613"></div>

       <div class="display-box72">

        <div class="stat"><span id="wickets613">0</span></div>
        <span style="color: azure;">-</span>
         <div class="stat"><span id="bruns613">0</span></div>
       
        </div>

    </div>
    <div class="bottom2">
        <div class="stat">Overs: <span id="overs613">0.0</span></div>
        
        <div class="stat">Econ: <span id="econ613">0.00</span></div>
          
      </div>

</div>
</div>


    <!-- ================= 503 ================= -->
<div class="wrapper5" id="outdiv503"><!-- BROADCAST PANELS -->
  <div class="broadcast100">

    <div class="upload-box1">
    <img id="bimg614">
    </div>
    <div class="box71">
       <div class="display-box71
       " id="bname614"></div>

       <div class="display-box72">

        <div class="stat"><span id="wickets614">0</span></div>
        <span style="color: azure;">-</span>
         <div class="stat"><span id="bruns614">0</span></div>
       
        </div>

    </div>
    <div class="bottom2">
        <div class="stat">Overs: <span id="overs614">0.0</span></div>
        
        <div class="stat">Econ: <span id="econ614">0.00</span></div>
          
      </div>

</div>
</div>


    <!-- ================= 504 ================= -->
<div class="wrapper5" id="outdiv504"><!-- BROADCAST PANELS -->
  <div class="broadcast100">

    <div class="upload-box1">
    <img id="bimg615">
    </div>
    <div class="box71">
       <div class="display-box71
       " id="bname615"></div>

       <div class="display-box72">

        <div class="stat"><span id="wickets615">0</span></div>
        <span style="color: azure;">-</span>
         <div class="stat"><span id="bruns615">0</span></div>
       
        </div>

    </div>
    <div class="bottom2">
        <div class="stat">Overs: <span id="overs615">0.0</span></div>
        
        <div class="stat">Econ: <span id="econ615">0.00</span></div>
          
      </div>

</div>
</div>


    <!-- ================= 505 ================= -->
<div class="wrapper5" id="outdiv505"><!-- BROADCAST PANELS -->
  <div class="broadcast100">

    <div class="upload-box1">
    <img id="bimg616">
    </div>
    <div class="box71">
       <div class="display-box71
       " id="bname616"></div>

       <div class="display-box72">

        <div class="stat"><span id="wickets616">0</span></div>
        <span style="color: azure;">-</span>
         <div class="stat"><span id="bruns616">0</span></div>
       
        </div>

    </div>
    <div class="bottom2">
        <div class="stat">Overs: <span id="overs616">0.0</span></div>
        
        <div class="stat">Econ: <span id="econ616">0.00</span></div>
          
      </div>

</div>
</div>


    <!-- ================= 506 ================= -->
<div class="wrapper5" id="outdiv506"><!-- BROADCAST PANELS -->
  <div class="broadcast100">

    <div class="upload-box1">
    <img id="bimg617">
    </div>
    <div class="box71">
       <div class="display-box71
       " id="bname617"></div>

       <div class="display-box72">

        <div class="stat"><span id="wickets617">0</span></div>
        <span style="color: azure;">-</span>
         <div class="stat"><span id="bruns617">0</span></div>
       
        </div>

    </div>
    <div class="bottom2">
        <div class="stat">Overs: <span id="overs617">0.0</span></div>
        
        <div class="stat">Econ: <span id="econ617">0.00</span></div>
          
      </div>

</div>
</div>


    <!-- ================= 507 ================= -->
<div class="wrapper5" id="outdiv507"><!-- BROADCAST PANELS -->
  <div class="broadcast100">

    <div class="upload-box1">
    <img id="bimg618">
    </div>
    <div class="box71">
       <div class="display-box71
       " id="bname618"></div>

       <div class="display-box72">

        <div class="stat"><span id="wickets618">0</span></div>
        <span style="color: azure;">-</span>
         <div class="stat"><span id="bruns618">0</span></div>
       
        </div>

    </div>
    <div class="bottom2">
        <div class="stat">Overs: <span id="overs618">0.0</span></div>
        
        <div class="stat">Econ: <span id="econ618">0.00</span></div>
          
      </div>

</div>
</div>


    <!-- ================= 508 ================= -->
<div class="wrapper5" id="outdiv508"><!-- BROADCAST PANELS -->
  <div class="broadcast100">

    <div class="upload-box1">
    <img id="bimg619">
    </div>
    <div class="box71">
       <div class="display-box71
       " id="bname619"></div>

       <div class="display-box72">

        <div class="stat"><span id="wickets619">0</span></div>
        <span style="color: azure;">-</span>
         <div class="stat"><span id="bruns619">0</span></div>
       
        </div>

    </div>
    <div class="bottom2">
        <div class="stat">Overs: <span id="overs619">0.0</span></div>
        
        <div class="stat">Econ: <span id="econ619">0.00</span></div>
          
      </div>

</div>
</div>


    <!-- ================= 509 ================= -->
<div class="wrapper5" id="outdiv509"><!-- BROADCAST PANELS -->
  <div class="broadcast100">

    <div class="upload-box1">
    <img id="bimg620">
    </div>
    <div class="box71">
       <div class="display-box71
       " id="bname620"></div>

       <div class="display-box72">

        <div class="stat"><span id="wickets620">0</span></div>
        <span style="color: azure;">-</span>
         <div class="stat"><span id="bruns620">0</span></div>
       
        </div>

    </div>
    <div class="bottom2">
        <div class="stat">Overs: <span id="overs620">0.0</span></div>
        
        <div class="stat">Econ: <span id="econ620">0.00</span></div>
          
      </div>

</div>
</div>

    <!-- ================= 510 ================= -->
<div class="wrapper5" id="outdiv510"><!-- BROADCAST PANELS -->
  <div class="broadcast100">

    <div class="upload-box1">
    <img id="bimg621">
    </div>
    <div class="box71">
       <div class="display-box71
       " id="bname621"></div>

       <div class="display-box72">

        <div class="stat"><span id="wickets621">0</span></div>
        <span style="color: azure;">-</span>
         <div class="stat"><span id="bruns621">0</span></div>
       
        </div>

    </div>
    <div class="bottom2">
        <div class="stat">Overs: <span id="overs621">0.0</span></div>
        
        <div class="stat">Econ: <span id="econ621">0.00</span></div>
          
      </div>

</div>
</div>


    <!-- ================= 511 ================= -->
<div class="wrapper5" id="outdiv511"><!-- BROADCAST PANELS -->
  <div class="broadcast100">

    <div class="upload-box1">
    <img id="bimg622">
    </div>
    <div class="box71">
       <div class="display-box71
       " id="bname622"></div>

       <div class="display-box72">

        <div class="stat"><span id="wickets622">0</span></div>
        <span style="color: azure;">-</span>
         <div class="stat"><span id="bruns622">0</span></div>
       
        </div>

    </div>
    <div class="bottom2">
        <div class="stat">Overs: <span id="overs622">0.0</span></div>
        
        <div class="stat">Econ: <span id="econ622">0.00</span></div>
          
      </div>

</div>
</div>

 <!-- ================= 501 ================= -->
<div class="wrapper5" id="outdiv512"><!-- BROADCAST PANELS -->
  <div class="broadcast100">

    <div class="upload-box1">
    <img id="bimg601">
    </div>
    <div class="box71">
       <div class="display-box71
       " id="bname601"></div>

       <div class="display-box72">

        <div class="stat"><span id="wickets601">0</span></div>
        <span style="color: azure;">-</span>
         <div class="stat"><span id="bruns601">0</span></div>
       
        </div>

    </div>
    <div class="bottom2">
        <div class="stat">Overs: <span id="overs601">0.0</span></div>
        
        <div class="stat">Econ: <span id="econ601">0.00</span></div>
          
      </div>

</div>
</div>


    <!-- ================= 502 ================= -->
<div class="wrapper5" id="outdiv513"><!-- BROADCAST PANELS -->
  <div class="broadcast100">

    <div class="upload-box1">
    <img id="bimg602">
    </div>
    <div class="box71">
       <div class="display-box71
       " id="bname602"></div>

       <div class="display-box72">

        <div class="stat"><span id="wickets602">0</span></div>
        <span style="color: azure;">-</span>
         <div class="stat"><span id="bruns602">0</span></div>
       
        </div>

    </div>
    <div class="bottom2">
        <div class="stat">Overs: <span id="overs602">0.0</span></div>
        
        <div class="stat">Econ: <span id="econ602">0.00</span></div>
          
      </div>

</div>
</div>


    <!-- ================= 503 ================= -->
<div class="wrapper5" id="outdiv514"><!-- BROADCAST PANELS -->
  <div class="broadcast100">

    <div class="upload-box1">
    <img id="bimg603">
    </div>
    <div class="box71">
       <div class="display-box71
       " id="bname603"></div>

       <div class="display-box72">

        <div class="stat"><span id="wickets603">0</span></div>
        <span style="color: azure;">-</span>
         <div class="stat"><span id="bruns603">0</span></div>
       
        </div>

    </div>
    <div class="bottom2">
        <div class="stat">Overs: <span id="overs603">0.0</span></div>
        
        <div class="stat">Econ: <span id="econ603">0.00</span></div>
          
      </div>

</div>
</div>


    <!-- ================= 504 ================= -->
<div class="wrapper5" id="outdiv515"><!-- BROADCAST PANELS -->
  <div class="broadcast100">

    <div class="upload-box1">
    <img id="bimg604">
    </div>
    <div class="box71">
       <div class="display-box71
       " id="bname604"></div>

       <div class="display-box72">

        <div class="stat"><span id="wickets604">0</span></div>
        <span style="color: azure;">-</span>
         <div class="stat"><span id="bruns604">0</span></div>
       
        </div>

    </div>
    <div class="bottom2">
        <div class="stat">Overs: <span id="overs604">0.0</span></div>
        
        <div class="stat">Econ: <span id="econ604">0.00</span></div>
          
      </div>

</div>
</div>


    <!-- ================= 505 ================= -->
<div class="wrapper5" id="outdiv516"><!-- BROADCAST PANELS -->
  <div class="broadcast100">

    <div class="upload-box1">
    <img id="bimg605">
    </div>
    <div class="box71">
       <div class="display-box71
       " id="bname605"></div>

       <div class="display-box72">

        <div class="stat"><span id="wickets605">0</span></div>
        <span style="color: azure;">-</span>
         <div class="stat"><span id="bruns605">0</span></div>
       
        </div>

    </div>
    <div class="bottom2">
        <div class="stat">Overs: <span id="overs605">0.0</span></div>
        
        <div class="stat">Econ: <span id="econ605">0.00</span></div>
          
      </div>

</div>
</div>


    <!-- ================= 506 ================= -->
<div class="wrapper5" id="outdiv517"><!-- BROADCAST PANELS -->
  <div class="broadcast100">

    <div class="upload-box1">
    <img id="bimg606">
    </div>
    <div class="box71">
       <div class="display-box71
       " id="bname606"></div>

       <div class="display-box72">

        <div class="stat"><span id="wickets606">0</span></div>
        <span style="color: azure;">-</span>
         <div class="stat"><span id="bruns606">0</span></div>
       
        </div>

    </div>
    <div class="bottom2">
        <div class="stat">Overs: <span id="overs606">0.0</span></div>
        
        <div class="stat">Econ: <span id="econ606">0.00</span></div>
          
      </div>

</div>
</div>


    <!-- ================= 507 ================= -->
<div class="wrapper5" id="outdiv518"><!-- BROADCAST PANELS -->
  <div class="broadcast100">

    <div class="upload-box1">
    <img id="bimg607">
    </div>
    <div class="box71">
       <div class="display-box71
       " id="bname607"></div>

       <div class="display-box72">

        <div class="stat"><span id="wickets607">0</span></div>
        <span style="color: azure;">-</span>
         <div class="stat"><span id="bruns607">0</span></div>
       
        </div>

    </div>
    <div class="bottom2">
        <div class="stat">Overs: <span id="overs607">0.0</span></div>
        
        <div class="stat">Econ: <span id="econ607">0.00</span></div>
          
      </div>

</div>
</div>


    <!-- ================= 508 ================= -->
<div class="wrapper5" id="outdiv519"><!-- BROADCAST PANELS -->
  <div class="broadcast100">

    <div class="upload-box1">
    <img id="bimg608">
    </div>
    <div class="box71">
       <div class="display-box71
       " id="bname608"></div>

       <div class="display-box72">

        <div class="stat"><span id="wickets608">0</span></div>
        <span style="color: azure;">-</span>
         <div class="stat"><span id="bruns608">0</span></div>
       
        </div>

    </div>
    <div class="bottom2">
        <div class="stat">Overs: <span id="overs608">0.0</span></div>
        
        <div class="stat">Econ: <span id="econ608">0.00</span></div>
          
      </div>

</div>
</div>


    <!-- ================= 509 ================= -->
<div class="wrapper5" id="outdiv520"><!-- BROADCAST PANELS -->
  <div class="broadcast100">

    <div class="upload-box1">
    <img id="bimg609">
    </div>
    <div class="box71">
       <div class="display-box71
       " id="bname609"></div>

       <div class="display-box72">

        <div class="stat"><span id="wickets609">0</span></div>
        <span style="color: azure;">-</span>
         <div class="stat"><span id="bruns609">0</span></div>
       
        </div>

    </div>
    <div class="bottom2">
        <div class="stat">Overs: <span id="overs609">0.0</span></div>
        
        <div class="stat">Econ: <span id="econ609">0.00</span></div>
          
      </div>

</div>
</div>

    <!-- ================= 510 ================= -->
<div class="wrapper5" id="outdiv521"><!-- BROADCAST PANELS -->
  <div class="broadcast100">

    <div class="upload-box1">
    <img id="bimg610">
    </div>
    <div class="box71">
       <div class="display-box71
       " id="bname610"></div>

       <div class="display-box72">

        <div class="stat"><span id="wickets610">0</span></div>
        <span style="color: azure;">-</span>
         <div class="stat"><span id="bruns610">0</span></div>
       
        </div>

    </div>
    <div class="bottom2">
        <div class="stat">Overs: <span id="overs610">0.0</span></div>
        
        <div class="stat">Econ: <span id="econ610">0.00</span></div>
          
      </div>

</div>
</div>


    <!-- ================= 511 ================= -->
<div class="wrapper5" id="outdiv522"><!-- BROADCAST PANELS -->
  <div class="broadcast100">

    <div class="upload-box1">
    <img id="bimg611">
    </div>
    <div class="box71">
       <div class="display-box71
       " id="bname611"></div>

       <div class="display-box72">

        <div class="stat"><span id="wickets611">0</span></div>
        <span style="color: azure;">-</span>
         <div class="stat"><span id="bruns611">0</span></div>
       
        </div>

    </div>
    <div class="bottom2">
        <div class="stat">Overs: <span id="overs611">0.0</span></div>
        
        <div class="stat">Econ: <span id="econ611">0.00</span></div>
          
      </div>

</div>
</div>
 




<div class="container2"> 

  <div class="bat2 left-pos1" id="bat2">
      <div class="upload-box21">
      <img id="batimage">
       </div>
       </div>


  
<!-- ================= 601 ================= -->

    <div class="wrapper6 right-pos" id="myDiv1">
        
<!-- 601 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img601">
    </div>


    <div class="box71">

          <div class="display-box71" id="name601"></div>
          <div class="display-box72">
            <div class="runs" id="runs601">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls601">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours601">0</span></div>
      <div class="stat100">6s <span id="sixes601">0</span></div>
      <div class="stat100">SR <span id="strikeRate601">0.00</span></div>
    </div>
</div>
</div>

 <div class="wrapper6 right-pos" id="myDiv2">
   
         
<!-- 602 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img602">
    </div>


    <div class="box71">

          <div class="display-box71" id="name602"></div>
          <div class="display-box72">
            <div class="runs" id="runs602">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls602">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours602">0</span></div>
      <div class="stat100">6s <span id="sixes602">0</span></div>
      <div class="stat100">SR <span id="strikeRate602">0.00</span></div>
    </div>
</div>
</div>

 <div class="wrapper6 right-pos" id="myDiv3">
   
       
<!-- 603 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img603">
    </div>


    <div class="box71">

          <div class="display-box71" id="name603"></div>
          <div class="display-box72">
            <div class="runs" id="runs603">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls603">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours603">0</span></div>
      <div class="stat100">6s <span id="sixes603">0</span></div>
      <div class="stat100">SR <span id="strikeRate603">0.00</span></div>
    </div>
</div>
</div>

  <div class="wrapper6 right-pos" id="myDiv4">
        
<!-- 604 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img604">
    </div>


    <div class="box71">

          <div class="display-box71" id="name604"></div>
          <div class="display-box72">
            <div class="runs" id="runs604">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls604">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours604">0</span></div>
      <div class="stat100">6s <span id="sixes604">0</span></div>
      <div class="stat100">SR <span id="strikeRate604">0.00</span></div>
    </div>
</div>
</div>

 <div class="wrapper6 right-pos" id="myDiv5">
   

       
<!-- 605 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img605">
    </div>


    <div class="box71">

          <div class="display-box71" id="name605"></div>
          <div class="display-box72">
            <div class="runs" id="runs605">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls605">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours605">0</span></div>
      <div class="stat100">6s <span id="sixes605">0</span></div>
      <div class="stat100">SR <span id="strikeRate605">0.00</span></div>
    </div>
</div>
</div>

 <div class="wrapper6 right-pos" id="myDiv6">
   
       
<!-- 606 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img606">
    </div>


    <div class="box71">

          <div class="display-box71" id="name606"></div>
          <div class="display-box72">
            <div class="runs" id="runs606">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls606">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours606">0</span></div>
      <div class="stat100">6s <span id="sixes606">0</span></div>
      <div class="stat100">SR <span id="strikeRate606">0.00</span></div>
    </div>
</div>
 </div>
 
  <div class="wrapper6 right-pos" id="myDiv7">
   
<!-- 607 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img607">
    </div>


    <div class="box71">

          <div class="display-box71" id="name607"></div>
          <div class="display-box72">
            <div class="runs" id="runs607">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls607">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours607">0</span></div>
      <div class="stat100">6s <span id="sixes607">0</span></div>
      <div class="stat100">SR <span id="strikeRate607">0.00</span></div>
    </div>
</div>
</div>
  <div class="wrapper6 right-pos" id="myDiv8">
         
<!-- 608 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img608">
    </div>


    <div class="box71">

          <div class="display-box71" id="name608"></div>
          <div class="display-box72">
            <div class="runs" id="runs608">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls608">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours608">0</span></div>
      <div class="stat100">6s <span id="sixes608">0</span></div>
      <div class="stat100">SR <span id="strikeRate608">0.00</span></div>
    </div>
</div>
</div>
  <div class="wrapper6 right-pos" id="myDiv9">
          
<!-- 609 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img609">
    </div>


    <div class="box71">

          <div class="display-box71" id="name609"></div>
          <div class="display-box72">
            <div class="runs" id="runs609">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls609">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours609">0</span></div>
      <div class="stat100">6s <span id="sixes609">0</span></div>
      <div class="stat100">SR <span id="strikeRate609">0.00</span></div>
    </div>
</div>
</div>
 <div class="wrapper6 right-pos" id="myDiv10">
             
<!-- 610 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img610">
    </div>


    <div class="box71">

          <div class="display-box71" id="name610"></div>
          <div class="display-box72">
            <div class="runs" id="runs610">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls610">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours610">0</span></div>
      <div class="stat100">6s <span id="sixes610">0</span></div>
      <div class="stat100">SR <span id="strikeRate610">0.00</span></div>
    </div>
</div>
</div>
  <div class="wrapper6 right-pos" id="myDiv11">
         
<!-- 611 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img611">
    </div>


    <div class="box71">

          <div class="display-box71" id="name611"></div>
          <div class="display-box72">
            <div class="runs" id="runs611">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls611">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours611">0</span></div>
      <div class="stat100">6s <span id="sixes611">0</span></div>
      <div class="stat100">SR <span id="strikeRate611">0.00</span></div>
    </div>
</div>
</div>
 <div class="wrapper6 right-pos" id="myDiv12">
   
 <!-- 612 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img612">
    </div>


    <div class="box71">

          <div class="display-box71" id="name612"></div>
          <div class="display-box72">
            <div class="runs" id="runs612">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls612">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours612">0</span></div>
      <div class="stat100">6s <span id="sixes612">0</span></div>
      <div class="stat100">SR <span id="strikeRate612">0.00</span></div>
    </div>
</div>
</div>
  <div class="wrapper6 right-pos" id="myDiv13">
           
<!-- 613 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img613">
    </div>


    <div class="box71">

          <div class="display-box71" id="name613"></div>
          <div class="display-box72">
            <div class="runs" id="runs613">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls613">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours613">0</span></div>
      <div class="stat100">6s <span id="sixes613">0</span></div>
      <div class="stat100">SR <span id="strikeRate613">0.00</span></div>
    </div>
</div>
</div>
 <div class="wrapper6 right-pos" id="myDiv14">
          
<!-- 614 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img614">
    </div>


    <div class="box71">

          <div class="display-box71" id="name614"></div>
          <div class="display-box72">
            <div class="runs" id="runs614">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls614">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours614">0</span></div>
      <div class="stat100">6s <span id="sixes614">0</span></div>
      <div class="stat100">SR <span id="strikeRate614">0.00</span></div>
    </div>
</div>
</div>
    <div class="wrapper6 right-pos" id="myDiv15">
      
<!-- 615 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img615">
    </div>


    <div class="box71">

          <div class="display-box71" id="name615"></div>
          <div class="display-box72">
            <div class="runs" id="runs615">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls615">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours615">0</span></div>
      <div class="stat100">6s <span id="sixes615">0</span></div>
      <div class="stat100">SR <span id="strikeRate615">0.00</span></div>
    </div>
</div>
</div>
  <div class="wrapper6 right-pos" id="myDiv16">
         
<!-- 616 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img616">
    </div>


    <div class="box71">

          <div class="display-box71" id="name616"></div>
          <div class="display-box72">
            <div class="runs" id="runs616">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls616">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours616">0</span></div>
      <div class="stat100">6s <span id="sixes616">0</span></div>
      <div class="stat100">SR <span id="strikeRate616">0.00</span></div>
    </div>
</div>
</div>
 <div class="wrapper6 right-pos" id="myDiv17">
          
<!-- 617 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img617">
    </div>


    <div class="box71">

          <div class="display-box71" id="name617"></div>
          <div class="display-box72">
            <div class="runs" id="runs617">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls617">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours617">0</span></div>
      <div class="stat100">6s <span id="sixes617">0</span></div>
      <div class="stat100">SR <span id="strikeRate617">0.00</span></div>
    </div>
</div>
</div>
  <div class="wrapper6 right-pos" id="myDiv18">
         
<!-- 618 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img618">
    </div>


    <div class="box71">

          <div class="display-box71" id="name618"></div>
          <div class="display-box72">
            <div class="runs" id="runs618">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls618">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours618">0</span></div>
      <div class="stat100">6s <span id="sixes618">0</span></div>
      <div class="stat100">SR <span id="strikeRate618">0.00</span></div>
    </div>
</div>
</div>
  <div class="wrapper6 right-pos" id="myDiv19">
         
<!-- 619 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img619">
    </div>


    <div class="box71">

          <div class="display-box71" id="name619"></div>
          <div class="display-box72">
            <div class="runs" id="runs619">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls619">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours619">0</span></div>
      <div class="stat100">6s <span id="sixes619">0</span></div>
      <div class="stat100">SR <span id="strikeRate619">0.00</span></div>
    </div>
</div>

</div>

  <div class="wrapper6 right-pos" id="myDiv20">
          
<!-- 620 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img620">
    </div>


    <div class="box71">

          <div class="display-box71" id="name620"></div>
          <div class="display-box72">
            <div class="runs" id="runs620">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls620">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours620">0</span></div>
      <div class="stat100">6s <span id="sixes620">0</span></div>
      <div class="stat100">SR <span id="strikeRate620">0.00</span></div>
    </div>
</div>
</div>

  <div class="wrapper6 right-pos" id="myDiv21">
            
<!-- 621 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img621">
    </div>


    <div class="box71">

          <div class="display-box71" id="name621"></div>
          <div class="display-box72">
            <div class="runs" id="runs621">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls621">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours621">0</span></div>
      <div class="stat100">6s <span id="sixes621">0</span></div>
      <div class="stat100">SR <span id="strikeRate621">0.00</span></div>
    </div>
</div>
</div>

<div class="wrapper6 right-pos" id="myDiv22">
        
<!-- 622 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img622">
    </div>


    <div class="box71">

          <div class="display-box71" id="name622"></div>
          <div class="display-box72">
            <div class="runs" id="runs622">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls622">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours622">0</span></div>
      <div class="stat100">6s <span id="sixes622">0</span></div>
      <div class="stat100">SR <span id="strikeRate622">0.00</span></div>
    </div>
</div>

</div>


    


<div class="bat1 right-pos1" id="bat1">
      <div class="upload-box21">
      <img id="batimage">
       </div>
       </div>




    
<!-- ================= 701 ================= -->
 <div class="wrapper7 left-pos" id="indiv1">        
<!-- 701 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img701">
    </div>


    <div class="box71">

          <div class="display-box71" id="name701"></div>
          <div class="display-box72">
            <div class="runs" id="runs701">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls701">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours701">0</span></div>
      <div class="stat100">6s <span id="sixes701">0</span></div>
      <div class="stat100">SR <span id="strikeRate701">0.00</span></div>
    </div>
</div>
</div>

<div class="wrapper7 left-pos" id="indiv2">        

<!-- 702 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img702">
    </div>


    <div class="box71">

          <div class="display-box71" id="name702"></div>
          <div class="display-box72">
            <div class="runs" id="runs702">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls702">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours702">0</span></div>
      <div class="stat100">6s <span id="sixes702">0</span></div>
      <div class="stat100">SR <span id="strikeRate702">0.00</span></div>
    </div>
</div>
</div>
<div class="wrapper7 left-pos" id="indiv3">        
         
<!-- 703 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img703">
    </div>


    <div class="box71">

          <div class="display-box71" id="name703"></div>
          <div class="display-box72">
            <div class="runs" id="runs703">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls703">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours703">0</span></div>
      <div class="stat100">6s <span id="sixes703">0</span></div>
      <div class="stat100">SR <span id="strikeRate703">0.00</span></div>
    </div>
</div>
</div>

 <div class="wrapper7 left-pos" id="indiv4">        
      
<!-- 704 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img704">
    </div>


    <div class="box71">

          <div class="display-box71" id="name704"></div>
          <div class="display-box72">
            <div class="runs" id="runs704">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls704">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours704">0</span></div>
      <div class="stat100">6s <span id="sixes704">0</span></div>
      <div class="stat100">SR <span id="strikeRate704">0.00</span></div>
    </div>
</div>
</div>
 <div class="wrapper7 left-pos" id="indiv5">        
     
<!-- 705 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img705">
    </div>


    <div class="box71">

          <div class="display-box71" id="name705"></div>
          <div class="display-box72">
            <div class="runs" id="runs705">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls705">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours705">0</span></div>
      <div class="stat100">6s <span id="sixes705">0</span></div>
      <div class="stat100">SR <span id="strikeRate705">0.00</span></div>
    </div>
</div>
</div>
 <div class="wrapper7 left-pos" id="indiv6">        
      
<!-- 706 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img706">
    </div>


    <div class="box71">

          <div class="display-box71" id="name706"></div>
          <div class="display-box72">
            <div class="runs" id="runs706">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls706">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours706">0</span></div>
      <div class="stat100">6s <span id="sixes706">0</span></div>
      <div class="stat100">SR <span id="strikeRate706">0.00</span></div>
    </div>
</div>
</div>
 <div class="wrapper7 left-pos" id="indiv7">        
      
<!-- 707 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img707">
    </div>


    <div class="box71">

          <div class="display-box71" id="name707"></div>
          <div class="display-box72">
            <div class="runs" id="runs707">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls707">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours707">0</span></div>
      <div class="stat100">6s <span id="sixes707">0</span></div>
      <div class="stat100">SR <span id="strikeRate707">0.00</span></div>
    </div>
</div>
 </div>
 <div class="wrapper7 left-pos" id="indiv8">        
      
<!-- 708 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img708">
    </div>


    <div class="box71">

          <div class="display-box71" id="name708"></div>
          <div class="display-box72">
            <div class="runs" id="runs708">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls708">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours708">0</span></div>
      <div class="stat100">6s <span id="sixes708">0</span></div>
      <div class="stat100">SR <span id="strikeRate708">0.00</span></div>
    </div>
</div>
</div>
<div class="wrapper7 left-pos" id="indiv9">        
       
<!-- 709 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img709">
    </div>


    <div class="box71">

          <div class="display-box71" id="name709"></div>
          <div class="display-box72">
            <div class="runs" id="runs709">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls709">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours709">0</span></div>
      <div class="stat100">6s <span id="sixes709">0</span></div>
      <div class="stat100">SR <span id="strikeRate709">0.00</span></div>
    </div>
</div>
</div>
 <div class="wrapper7 left-pos" id="indiv10">        
       
<!-- 710 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img710">
    </div>


    <div class="box71">

          <div class="display-box71" id="name710"></div>
          <div class="display-box72">
            <div class="runs" id="runs710">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls710">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours710">0</span></div>
      <div class="stat100">6s <span id="sixes710">0</span></div>
      <div class="stat100">SR <span id="strikeRate710">0.00</span></div>
    </div>
</div>
</div>
  <div class="wrapper7 left-pos" id="indiv11">        
        
<!-- 711 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img711">
    </div>


    <div class="box71">

          <div class="display-box71" id="name711"></div>
          <div class="display-box72">
            <div class="runs" id="runs711">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls711">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours711">0</span></div>
      <div class="stat100">6s <span id="sixes711">0</span></div>
      <div class="stat100">SR <span id="strikeRate711">0.00</span></div>
    </div>
</div>
</div>
 <div class="wrapper7 left-pos" id="indiv12">        
      
<!-- 712 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img712">
    </div>


    <div class="box71">

          <div class="display-box71" id="name712"></div>
          <div class="display-box72">
            <div class="runs" id="runs712">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls712">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours712">0</span></div>
      <div class="stat100">6s <span id="sixes712">0</span></div>
      <div class="stat100">SR <span id="strikeRate712">0.00</span></div>
    </div>
</div>
</div>
<div class="wrapper7 left-pos" id="indiv13">        

 <!-- 713 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img713">
    </div>


    <div class="box71">

          <div class="display-box71" id="name713"></div>
          <div class="display-box72">
            <div class="runs" id="runs713">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls713">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours713">0</span></div>
      <div class="stat100">6s <span id="sixes713">0</span></div>
      <div class="stat100">SR <span id="strikeRate713">0.00</span></div>
    </div>
</div>
</div>
 <div class="wrapper7 left-pos" id="indiv14">        
        
<!-- 714 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img714">
    </div>


    <div class="box71">

          <div class="display-box71" id="name714"></div>
          <div class="display-box72">
            <div class="runs" id="runs714">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls714">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours714">0</span></div>
      <div class="stat100">6s <span id="sixes714">0</span></div>
      <div class="stat100">SR <span id="strikeRate714">0.00</span></div>
    </div>
</div>
</div>
 <div class="wrapper7 left-pos" id="indiv15">        
      
<!-- 715 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img715">
    </div>


    <div class="box71">

          <div class="display-box71" id="name715"></div>
          <div class="display-box72">
            <div class="runs" id="runs715">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls715">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours715">0</span></div>
      <div class="stat100">6s <span id="sixes715">0</span></div>
      <div class="stat100">SR <span id="strikeRate715">0.00</span></div>
    </div>
</div>
</div>
 <div class="wrapper7 left-pos" id="indiv16">        
     
<!-- 716 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img716">
    </div>


    <div class="box71">

          <div class="display-box71" id="name716"></div>
          <div class="display-box72">
            <div class="runs" id="runs716">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls716">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours716">0</span></div>
      <div class="stat100">6s <span id="sixes716">0</span></div>
      <div class="stat100">SR <span id="strikeRate716">0.00</span></div>
    </div>
</div>
</div>
 <div class="wrapper7 left-pos" id="indiv17">        
      
<!-- 717 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img717">
    </div>


    <div class="box71">

          <div class="display-box71" id="name717"></div>
          <div class="display-box72">
            <div class="runs" id="runs717">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls717">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours717">0</span></div>
      <div class="stat100">6s <span id="sixes717">0</span></div>
      <div class="stat100">SR <span id="strikeRate717">0.00</span></div>
    </div>
</div>
</div>
 <div class="wrapper7 left-pos" id="indiv18">        
      
<!-- 718 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img718">
    </div>


    <div class="box71">

          <div class="display-box71" id="name718"></div>
          <div class="display-box72">
            <div class="runs" id="runs718">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls718">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours718">0</span></div>
      <div class="stat100">6s <span id="sixes718">0</span></div>
      <div class="stat100">SR <span id="strikeRate718">0.00</span></div>
    </div>
</div>
  </div>
  <div class="wrapper7 left-pos" id="indiv19">        
     
<!-- 719 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img719">
    </div>


    <div class="box71">

          <div class="display-box71" id="name719"></div>
          <div class="display-box72">
            <div class="runs" id="runs719">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls719">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours719">0</span></div>
      <div class="stat100">6s <span id="sixes719">0</span></div>
      <div class="stat100">SR <span id="strikeRate719">0.00</span></div>
    </div>
</div>
</div>
  <div class="wrapper7 left-pos" id="indiv20">        
     
<!-- 720 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img720">
    </div>


    <div class="box71">

          <div class="display-box71" id="name720"></div>
          <div class="display-box72">
            <div class="runs" id="runs720">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls720">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours720">0</span></div>
      <div class="stat100">6s <span id="sixes720">0</span></div>
      <div class="stat100">SR <span id="strikeRate720">0.00</span></div>
    </div>
</div>
</div>
 <div class="wrapper7 left-pos" id="indiv21">        
       
<!-- 721 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img721">
    </div>


    <div class="box71">

          <div class="display-box71" id="name721"></div>
          <div class="display-box72">
            <div class="runs" id="runs721">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls721">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours721">0</span></div>
      <div class="stat100">6s <span id="sixes721">0</span></div>
      <div class="stat100">SR <span id="strikeRate721">0.00</span></div>
    </div>
</div>
</div>
 <div class="wrapper7 left-pos" id="indiv22">        
         
<!-- 722 BROADCAST -->
<div class="broadcast100">
     <div class="upload-box1">
    <img id="img722">
    </div>


    <div class="box71">

          <div class="display-box71" id="name722"></div>
          <div class="display-box72">
            <div class="runs" id="runs722">0</div>
            <span style="color: azure;">/</span>
            <div class="balls"><span id="balls722">(0)</span>
            </div>
         </div>
   </div>

    <div class="bottom2">
      <div class="stat100">4s <span id="fours722">0</span></div>
      <div class="stat100">6s <span id="sixes722">0</span></div>
      <div class="stat100">SR <span id="strikeRate722">0.00</span></div>
    </div>
</div>
</div>
  
</div>
 

<div class="marker">
  <!-- Uploads Board -->
  
  
   <div class="popupbtn">
    <!-- Custom Input -->
    <input type="text" id="customVFXInput" placeholder="Enter text (e.g. SUPER SIX!)">

    <!-- Buttons -->
    <button id="btnCustom">Show Custom</button>
    <button id="btnSix">Show SIX</button>
    <button id="btnFour">Show FOUR</button>
    <button id="btnWicket">Show WICKET</button>

  
    </div>


<div class="superlowerbutton">
<div class="lowrebutton11">

<div class="lowerbutton1">
<button onclick="showOnly(501)">501</button>
<button onclick="showOnly(502)">502</button>
<button onclick="showOnly(503)">503</button>
<button onclick="showOnly(504)">504</button>
<button onclick="showOnly(505)">505</button>
<button onclick="showOnly(506)">506</button>
<button onclick="showOnly(507)">507</button>
<button onclick="showOnly(508)">508</button>
<button onclick="showOnly(509)">509</button>
<button onclick="showOnly(510)">510</button>
<button onclick="showOnly(511)">511</button>
</div>


<div class="lowerbutton2">
  
<button onclick="showOnly1(1)">601</button>
<button onclick="showOnly1(2)">602</button>
<button onclick="showOnly1(3)">603</button>
<button onclick="showOnly1(4)">604</button>
<button onclick="showOnly1(5)">605</button>
<button onclick="showOnly1(6)">606</button>
<button onclick="showOnly1(7)">607</button>
<button onclick="showOnly1(8)">608</button>
<button onclick="showOnly1(9)">609</button>
<button onclick="showOnly1(10)">610</button>
<button onclick="showOnly1(11)">611</button>

</div>


<div class="lowerbutton3">

<button onclick="showOnly2(1)">701</button>
<button onclick="showOnly2(2)">702</button>
<button onclick="showOnly2(3)">703</button>
<button onclick="showOnly2(4)">704</button>
<button onclick="showOnly2(5)">705</button>
<button onclick="showOnly2(6)">706</button>
<button onclick="showOnly2(7)">707</button>
<button onclick="showOnly2(8)">708</button>
<button onclick="showOnly2(9)">709</button>
<button onclick="showOnly2(10)">710</button>
<button onclick="showOnly2(11)">711</button>

</div>
</div>


<div class="lowrebutton12 hide">
<div class="lowerbutton1">
<button onclick="showOnly(512)">B501</button>
<button onclick="showOnly(513)">B502</button>
<button onclick="showOnly(514)">B503</button>
<button onclick="showOnly(515)">B504</button>
<button onclick="showOnly(516)">B505</button>
<button onclick="showOnly(517)">B506</button>
<button onclick="showOnly(518)">B507</B>507</button>
<button onclick="showOnly(519)">B508</button>
<button onclick="showOnly(520)">B509</button>
<button onclick="showOnly(521)">B510</button>
<button onclick="showOnly(522)">B511</button>
</div>


<div class="lowerbutton2">
  
<button onclick="showOnly1(12)">601</button>
<button onclick="showOnly1(13)">602</button>
<button onclick="showOnly1(14)">603</button>
<button onclick="showOnly1(15)">604</button>
<button onclick="showOnly1(16)">605</button>
<button onclick="showOnly1(17)">606</button>
<button onclick="showOnly1(18)">607</button>
<button onclick="showOnly1(19)">608</button>
<button onclick="showOnly1(20)">609</button>
<button onclick="showOnly1(21)">610</button>
<button onclick="showOnly1(22)">611</button>

</div>


<div class="lowerbutton3">

<button onclick="showOnly2(12)">701</button>
<button onclick="showOnly2(13)">702</button>
<button onclick="showOnly2(14)">703</button>
<button onclick="showOnly2(15)">704</button>
<button onclick="showOnly2(16)">705</button>
<button onclick="showOnly2(17)">706</button>
<button onclick="showOnly2(18)">707</button>
<button onclick="showOnly2(19)">708</button>
<button onclick="showOnly2(20)">709</button>
<button onclick="showOnly2(21)">710</button>
<button onclick="showOnly2(22)">711</button>

</div>


</div>
<button onclick="superbutton()">shift</button>
</div>
 



<div class="extras-bottom-bar">

<!-- ================== TEAM A EXTRAS ================== -->
<div class="player-broadcast21">
  

  teamA:<div class="extras-wrapper">
    <div class="extras-card">
      <h3>Wides</h3>
      <div class="count" id="widesCount">0</div>
      <button onclick="addExtraA('wides')">+1</button>
      <button onclick="minusExtraA('wides')">-1</button>
      <button onclick="resetExtraA('wides')">Reset</button>
    </div>

    <div class="extras-card">
      <h3>No Balls</h3>
      <div class="count" id="noballsCount">0</div>
      <button onclick="addExtraA('noballs')">+1</button>
      <button onclick="minusExtraA('noballs')">-1</button>
      <button onclick="resetExtraA('noballs')">Reset</button>
    </div>

    <div class="extras-card">
      <h3>Byes</h3>
      <div class="count" id="byesCount">0</div>
      <button onclick="addExtraA('byes')">+1</button>
      <button onclick="minusExtraA('byes')">-1</button>
      <button onclick="resetExtraA('byes')">Reset</button>
    </div>

    <div class="extras-card">
      <h3>Leg Byes</h3>
      <div class="count" id="legbyesCount">0</div>
      <button onclick="addExtraA('legbyes')">+1</button>
      <button onclick="minusExtraA('legbyes')">-1</button>
      <button onclick="resetExtraA('legbyes')">Reset</button>
    </div>
  </div>

  <div class="total-extras">
    Total Extras: <span id="totalExtras">0</span>
    <button onclick="resetAllExtrasA()">Reset All</button>
  </div>
</div>

<!-- ================== TEAM B EXTRAS ================== -->
<div class="player-broadcast22">
  

  teamB<div class="extras-wrapper">
    <div class="extras-card">
      <h3>Wides</h3>
      <div class="count" id="b_widesCount">0</div>
      <button onclick="addExtraB('wides')">+1</button>
      <button onclick="minusExtraB('wides')">-1</button>
      <button onclick="resetExtraB('wides')">Reset</button>
    </div>

    <div class="extras-card">
      <h3>No Balls</h3>
      <div class="count" id="b_noballsCount">0</div>
      <button onclick="addExtraB('noballs')">+1</button>
      <button onclick="minusExtraB('noballs')">-1</button>
      <button onclick="resetExtraB('noballs')">Reset</button>
    </div>

    <div class="extras-card">
      <h3>Byes</h3>
      <div class="count" id="b_byesCount">0</div>
      <button onclick="addExtraB('byes')">+1</button>
      <button onclick="minusExtraB('byes')">-1</button>
      <button onclick="resetExtraB('byes')">Reset</button>
    </div>

    <div class="extras-card">
      <h3>Leg Byes</h3>
      <div class="count" id="b_legbyesCount">0</div>
      <button onclick="addExtraB('legbyes')">+1</button>
      <button onclick="minusExtraB('legbyes')">-1</button>
      <button onclick="resetExtraB('legbyes')">Reset</button>
    </div>
  </div>

  <div class="total-extras">
    Total Extras: <span id="b_totalExtras">0</span>
    <button onclick="resetAllExtrasB()">Reset All</button>
  </div>
</div>

</div>
</div>




<script src="advance2.js"></script>

<script src="advance22.js">
</script>
</body>



</html>
