


const popup = document.getElementById("vfxPopup");
const text = document.getElementById("vfxText");

function showVFX(message){

    text.innerText = message;

    popup.classList.add("show");

    // Auto hide after 2 seconds
    setTimeout(()=>{
        popup.classList.remove("show");
    },2000);
}

/* Buttons */
document.getElementById("btnSix").onclick = () => showVFX("SIX!");
document.getElementById("btnFour").onclick = () => showVFX("FOUR!");
document.getElementById("btnWicket").onclick = () => showVFX("WICKET!");

document.getElementById("btnCustom").onclick = () => {
    const val = document.getElementById("customVFXInput").value;
    if(val.trim() !== ""){
        showVFX(val);
    }
};



function superbutton(){

const a = document.querySelector(".lowrebutton11");
const b = document.querySelector(".lowrebutton12");

a.classList.toggle("hide");
b.classList.toggle("hide");

}


function showOnly(num) {

    // Hide all
    document.querySelectorAll(".wrapper5").forEach(function(el){
        el.style.display = "none";
    });

    // Show selected
    let selectedBox = document.getElementById("outdiv" + num);

    if (selectedBox) {
        selectedBox.style.display = "flex"; // use flex if wrapper5 is flex
    }
}

function showOnly1(num) {

    // Hide all
    document.querySelectorAll(".wrapper6").forEach(function(el){
        el.style.display = "none";
    });

    // Show selected
    let selectedBox = document.getElementById("myDiv" + num);

    if (selectedBox) {
        selectedBox.style.display = "flex"; // use flex if wrapper5 is flex
    }
}function showOnly2(num) {
    document.querySelectorAll(".wrapper7").forEach(function(el){
        el.style.display = "none";
    });

    let selectedBox = document.getElementById("indiv" + num);

    if (selectedBox) {
        selectedBox.style.display = "flex";
    }


}










  // ================= TEAM A =================
  const extrasA = { wides:0, noballs:0, byes:0, legbyes:0 };

  function updateTotalA() {
    const total = extrasA.wides + extrasA.noballs + extrasA.byes + extrasA.legbyes;
    document.getElementById('totalExtras').innerText = total;
    updateTotalRunsA();
  }

  function addExtraA(type){ extrasA[type]++; document.getElementById(type+'Count').innerText=extrasA[type]; updateTotalA(); }
  function minusExtraA(type){ extrasA[type]=Math.max(0,extrasA[type]-1); document.getElementById(type+'Count').innerText=extrasA[type]; updateTotalA(); }
  function resetExtraA(type){ extrasA[type]=0; document.getElementById(type+'Count').innerText=0; updateTotalA(); }
  function resetAllExtrasA(){ for(let key in extrasA){ extrasA[key]=0; document.getElementById(key+'Count').innerText=0; } updateTotalA(); }

  function updateTotalRunsA(){
    const runIdsA = Array.from({length:11},(_,i)=>'runs'+(101+i));
    let total = 0;
    runIdsA.forEach(id=>{ const el=document.getElementById(id); if(el) total+=parseInt(el.innerText)||0; });
    total += extrasA.wides + extrasA.noballs + extrasA.byes + extrasA.legbyes;
    document.getElementById('totalrunsA').innerText = total;
  }

  const observerA = new MutationObserver(updateTotalRunsA);
  const idsToObserveA = ['totalExtras', ...Array.from({length:11},(_,i)=>'runs'+(101+i))];
  idsToObserveA.forEach(id=>{ const el=document.getElementById(id); if(el) observerA.observe(el,{childList:true, characterData:true, subtree:true}); });

  updateTotalRunsA();

  // ================= TEAM B =================
  const extrasB = { wides:0, noballs:0, byes:0, legbyes:0 };

  function updateTotalB() {
    const total = extrasB.wides + extrasB.noballs + extrasB.byes + extrasB.legbyes;
    document.getElementById('b_totalExtras').innerText = total;
    updateTotalRunsB();
  }

  function addExtraB(type){ extrasB[type]++; document.getElementById('b_'+type+'Count').innerText=extrasB[type]; updateTotalB(); }
  function minusExtraB(type){ extrasB[type]=Math.max(0,extrasB[type]-1); document.getElementById('b_'+type+'Count').innerText=extrasB[type]; updateTotalB(); }
  function resetExtraB(type){ extrasB[type]=0; document.getElementById('b_'+type+'Count').innerText=0; updateTotalB(); }
  function resetAllExtrasB(){ for(let key in extrasB){ extrasB[key]=0; document.getElementById('b_'+key+'Count').innerText=0; } updateTotalB(); }

  function updateTotalRunsB(){
    const runIdsB = Array.from({length:11},(_,i)=>'runs'+(112+i));
    let total = 0;
    runIdsB.forEach(id=>{ const el=document.getElementById(id); if(el) total+=parseInt(el.innerText)||0; });
    total += extrasB.wides + extrasB.noballs + extrasB.byes + extrasB.legbyes;
    document.getElementById('totalrunsB').innerText = total;
  }

  const observerB = new MutationObserver(updateTotalRunsB);
  const idsToObserveB = ['b_totalExtras', ...Array.from({length:11},(_,i)=>'runs'+(112+i))];
  idsToObserveB.forEach(id=>{ const el=document.getElementById(id); if(el) observerB.observe(el,{childList:true, characterData:true, subtree:true}); });

  updateTotalRunsB();

// ================= TEAM 1 BOWLING JS =================
const bowlers1 = [101,201,601,701];

// Sync function
function syncBTeam1(prefix,value){
    bowlers1.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

// Get value
function getValBTeam1(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseFloat(el.innerText)||0;
}

// Names
function addBNameTeam1(id){ const name=document.getElementById("bnameInput"+id).value; bowlers1.forEach(i=>document.getElementById("bname"+i).innerText=name);}
function deleteBNameTeam1(){ bowlers1.forEach(i=>document.getElementById("bname"+i).innerText="");}
function resetBNameTeam1(id){ document.getElementById("bnameInput"+id).value=""; deleteBNameTeam1();}

// Overs (6-ball)
function addOverTeam1(){
    let overs = getValBTeam1("overs101");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    balls += 1;
    if(balls >= 6){ whole += 1; balls = 0; }
    syncBTeam1("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam1();
}

function minusOverTeam1(){
    let overs = getValBTeam1("overs101");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    if(balls===0 && whole===0) return;
    if(balls===0){ whole-=1; balls=5; } else { balls-=1; }
    syncBTeam1("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam1();
}

// Maidens
function addMaidenTeam1(){
    syncBTeam1("maidens", getValBTeam1("maidens101") + 1);
}

function minusMaidenTeam1(){
    syncBTeam1("maidens", Math.max(0, getValBTeam1("maidens101") - 1));
}
// Runs

function addBowlerRunsTeam1(r){

    let runs = parseInt(getValBTeam1("bruns101")) || 0;

    runs += r;

    syncBTeam1("bruns", runs);

    addBallTeam1();   // run ke saath ball add

    updateEconTeam1();
}

function minusBowlerRunsTeam1(r){

    let runs = parseInt(getValBTeam1("bruns101")) || 0;

    runs = Math.max(0, runs - r);

    syncBTeam1("bruns", runs);

    minusBallTeam1();  // run minus → ball minus

    updateEconTeam1();
}

// Wickets
 function addWicketTeam1(){ syncBTeam1("wickets",getValBTeam1("wickets101")+1); }
function minusWicketTeam1(){ syncBTeam1("wickets",Math.max(0,getValBTeam1("wickets101")-1)); }

// Economy
function updateEconTeam1(){
    const runs=getValBTeam1("bruns101");
    const overs=getValBTeam1("overs101");
    const whole=Math.floor(overs);
    const balls=Math.round((overs-whole)*10);
    const totalBalls = whole*6 + balls;
    const econ = totalBalls>0 ? (runs/(totalBalls/6)).toFixed(2) : "0.00";
    syncBTeam1("econ",econ);
}

// Reset all
function resetAllBowlingTeam1(){
    syncBTeam1("overs",0.0);
    syncBTeam1("maidens",0);
    syncBTeam1("bruns",0);
    syncBTeam1("wickets",0);
    syncBTeam1("econ","0.00");
}

// Image Upload
document.getElementById("bimageInput101").addEventListener("change",loadBImageTeam1);
document.getElementById("bimageInput201").addEventListener("change",loadBImageTeam1);

function loadBImageTeam1(e){
    const reader=new FileReader();
    reader.onload=function(){
        bowlers1.forEach(i=>document.getElementById("bimg"+i).src=reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
}

function deleteBImageTeam1(){
    bowlers1.forEach(i=>document.getElementById("bimg"+i).src="");
}

function resetBImageTeam1(id){
    document.getElementById("bimageInput"+id).value="";
    deleteBImageTeam1();
}

// ================= TEAM 2 BOWLING JS =================
const bowlers2 = [102,202,602,702];

// Sync function
function syncBTeam2(prefix,value){
    bowlers2.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

// Get value
function getValBTeam2(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseFloat(el.innerText)||0;
}

// Names
function addBNameTeam2(id){ const name=document.getElementById("bnameInput"+id).value; bowlers2.forEach(i=>document.getElementById("bname"+i).innerText=name);}
function deleteBNameTeam2(){ bowlers2.forEach(i=>document.getElementById("bname"+i).innerText="");}
function resetBNameTeam2(id){ document.getElementById("bnameInput"+id).value=""; deleteBNameTeam2();}

// Overs (6-ball)
function addOverTeam2(){
    let overs = getValBTeam2("overs102");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    balls += 1;
    if(balls >= 6){ whole += 1; balls = 0; }
    syncBTeam2("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam2();
}

function minusOverTeam2(){
    let overs = getValBTeam2("overs102");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    if(balls===0 && whole===0) return;
    if(balls===0){ whole-=1; balls=5; } else { balls-=1; }
    syncBTeam2("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam2();
}

// Maidens
function addMaidenTeam2(){ syncBTeam2("maidens",getValBTeam2("maidens102")+1); }
function minusMaidenTeam2(){ syncBTeam2("maidens",Math.max(0,getValBTeam2("maidens102")-1)); }

// Runs
function addBowlerRunsTeam2(r){ syncBTeam2("bruns",getValBTeam2("bruns102")+r); updateEconTeam2(); }
function minusBowlerRunsTeam2(r){ syncBTeam2("bruns",Math.max(0,getValBTeam2("bruns102")-r)); updateEconTeam2(); }

// Wickets
function addWicketTeam2(){ syncBTeam2("wickets",getValBTeam2("wickets102")+1); }
function minusWicketTeam2(){ syncBTeam2("wickets",Math.max(0,getValBTeam2("wickets102")-1)); }

// Economy
function updateEconTeam2(){
    const runs=getValBTeam2("bruns102");
    const overs=getValBTeam2("overs102");
    const whole=Math.floor(overs);
    const balls=Math.round((overs-whole)*10);
    const totalBalls = whole*6 + balls;
    const econ = totalBalls>0 ? (runs/(totalBalls/6)).toFixed(2) : "0.00";
    syncBTeam2("econ",econ);
}

// Reset all
function resetAllBowlingTeam2(){
    syncBTeam2("overs",0.0);
    syncBTeam2("maidens",0);
    syncBTeam2("bruns",0);
    syncBTeam2("wickets",0);
    syncBTeam2("econ","0.00");
}

// Image Upload
document.getElementById("bimageInput102").addEventListener("change",loadBImageTeam2);
document.getElementById("bimageInput202").addEventListener("change",loadBImageTeam2);

function loadBImageTeam2(e){
    const reader=new FileReader();
    reader.onload=function(){
        bowlers2.forEach(i=>document.getElementById("bimg"+i).src=reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
}

function deleteBImageTeam2(){
    bowlers2.forEach(i=>document.getElementById("bimg"+i).src="");
}

function resetBImageTeam2(id){
    document.getElementById("bimageInput"+id).value="";
    deleteBImageTeam2();
}



// ================= TEAM 3 BOWLING JS =================
const bowlers3 = [103,203,603,703];

// Sync function
function syncBTeam3(prefix,value){
    bowlers3.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

// Get value
function getValBTeam3(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseFloat(el.innerText)||0;
}

// Names
function addBNameTeam3(id){ const name=document.getElementById("bnameInput"+id).value; bowlers3.forEach(i=>document.getElementById("bname"+i).innerText=name);}
function deleteBNameTeam3(){ bowlers3.forEach(i=>document.getElementById("bname"+i).innerText="");}
function resetBNameTeam3(id){ document.getElementById("bnameInput"+id).value=""; deleteBNameTeam3();}

// Overs (6-ball)
function addOverTeam3(){
    let overs = getValBTeam3("overs103");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    balls += 1;
    if(balls >= 6){ whole += 1; balls = 0; }
    syncBTeam3("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam3();
}

function minusOverTeam3(){
    let overs = getValBTeam3("overs103");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    if(balls===0 && whole===0) return;
    if(balls===0){ whole-=1; balls=5; } else { balls-=1; }
    syncBTeam3("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam3();
}

// Maidens
function addMaidenTeam3(){ syncBTeam3("maidens",getValBTeam3("maidens103")+1); }
function minusMaidenTeam3(){ syncBTeam3("maidens",Math.max(0,getValBTeam3("maidens103")-1)); }

// Runs
function addBowlerRunsTeam3(r){ syncBTeam3("bruns",getValBTeam3("bruns103")+r); updateEconTeam3(); }
function minusBowlerRunsTeam3(r){ syncBTeam3("bruns",Math.max(0,getValBTeam3("bruns103")-r)); updateEconTeam3(); }

// Wickets
function addWicketTeam3(){ syncBTeam3("wickets",getValBTeam3("wickets103")+1); }
function minusWicketTeam3(){ syncBTeam3("wickets",Math.max(0,getValBTeam3("wickets103")-1)); }

// Economy
function updateEconTeam3(){
    const runs=getValBTeam3("bruns103");
    const overs=getValBTeam3("overs103");
    const whole=Math.floor(overs);
    const balls=Math.round((overs-whole)*10);
    const totalBalls = whole*6 + balls;
    const econ = totalBalls>0 ? (runs/(totalBalls/6)).toFixed(2) : "0.00";
    syncBTeam3("econ",econ);
}

// Reset all
function resetAllBowlingTeam3(){
    syncBTeam3("overs",0.0);
    syncBTeam3("maidens",0);
    syncBTeam3("bruns",0);
    syncBTeam3("wickets",0);
    syncBTeam3("econ","0.00");
}

// Image Upload
document.getElementById("bimageInput103").addEventListener("change",loadBImageTeam3);
document.getElementById("bimageInput203").addEventListener("change",loadBImageTeam3);

function loadBImageTeam3(e){
    const reader=new FileReader();
    reader.onload=function(){
        bowlers3.forEach(i=>document.getElementById("bimg"+i).src=reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
}

function deleteBImageTeam3(){
    bowlers3.forEach(i=>document.getElementById("bimg"+i).src="");
}

function resetBImageTeam3(id){
    document.getElementById("bimageInput"+id).value="";
    deleteBImageTeam3();
}



// ================= TEAM 4 BOWLING JS =================
const bowlers4 = [104,204,604,704];

// Sync function
function syncBTeam4(prefix,value){
    bowlers4.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

// Get value
function getValBTeam4(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseFloat(el.innerText)||0;
}

// Names
function addBNameTeam4(id){ const name=document.getElementById("bnameInput"+id).value; bowlers4.forEach(i=>document.getElementById("bname"+i).innerText=name);}
function deleteBNameTeam4(){ bowlers4.forEach(i=>document.getElementById("bname"+i).innerText="");}
function resetBNameTeam4(id){ document.getElementById("bnameInput"+id).value=""; deleteBNameTeam4();}

// Overs (6-ball)
function addOverTeam4(){
    let overs = getValBTeam4("overs104");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    balls += 1;
    if(balls >= 6){ whole += 1; balls = 0; }
    syncBTeam4("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam4();
}

function minusOverTeam4(){
    let overs = getValBTeam4("overs104");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    if(balls===0 && whole===0) return;
    if(balls===0){ whole-=1; balls=5; } else { balls-=1; }
    syncBTeam4("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam4();
}

// Maidens
function addMaidenTeam4(){ syncBTeam4("maidens",getValBTeam4("maidens104")+1); }
function minusMaidenTeam4(){ syncBTeam4("maidens",Math.max(0,getValBTeam4("maidens104")-1)); }

// Runs
function addBowlerRunsTeam4(r){ syncBTeam4("bruns",getValBTeam4("bruns104")+r); updateEconTeam4(); }
function minusBowlerRunsTeam4(r){ syncBTeam4("bruns",Math.max(0,getValBTeam4("bruns104")-r)); updateEconTeam4(); }

// Wickets
function addWicketTeam4(){ syncBTeam4("wickets",getValBTeam4("wickets104")+1); }
function minusWicketTeam4(){ syncBTeam4("wickets",Math.max(0,getValBTeam4("wickets104")-1)); }

// Economy
function updateEconTeam4(){
    const runs=getValBTeam4("bruns104");
    const overs=getValBTeam4("overs104");
    const whole=Math.floor(overs);
    const balls=Math.round((overs-whole)*10);
    const totalBalls = whole*6 + balls;
    const econ = totalBalls>0 ? (runs/(totalBalls/6)).toFixed(2) : "0.00";
    syncBTeam4("econ",econ);
}

// Reset all
function resetAllBowlingTeam4(){
    syncBTeam4("overs",0.0);
    syncBTeam4("maidens",0);
    syncBTeam4("bruns",0);
    syncBTeam4("wickets",0);
    syncBTeam4("econ","0.00");
}

// Image Upload
document.getElementById("bimageInput104").addEventListener("change",loadBImageTeam4);
document.getElementById("bimageInput204").addEventListener("change",loadBImageTeam4);

function loadBImageTeam4(e){
    const reader=new FileReader();
    reader.onload=function(){
        bowlers4.forEach(i=>document.getElementById("bimg"+i).src=reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
}

function deleteBImageTeam4(){
    bowlers4.forEach(i=>document.getElementById("bimg"+i).src="");
}

function resetBImageTeam4(id){
    document.getElementById("bimageInput"+id).value="";
    deleteBImageTeam4();
}


// ================= TEAM 5 BOWLING JS =================
const bowlers5 = [105,205,605,705];

// Sync function
function syncBTeam5(prefix,value){
    bowlers5.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

// Get value
function getValBTeam5(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseFloat(el.innerText)||0;
}

// Names
function addBNameTeam5(id){ const name=document.getElementById("bnameInput"+id).value; bowlers5.forEach(i=>document.getElementById("bname"+i).innerText=name);}
function deleteBNameTeam5(){ bowlers5.forEach(i=>document.getElementById("bname"+i).innerText="");}
function resetBNameTeam5(id){ document.getElementById("bnameInput"+id).value=""; deleteBNameTeam5();}

// Overs (6-ball)
function addOverTeam5(){
    let overs = getValBTeam5("overs105");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    balls += 1;
    if(balls >= 6){ whole += 1; balls = 0; }
    syncBTeam5("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam5();
}

function minusOverTeam5(){
    let overs = getValBTeam5("overs105");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    if(balls===0 && whole===0) return;
    if(balls===0){ whole-=1; balls=5; } else { balls-=1; }
    syncBTeam5("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam5();
}

// Maidens
function addMaidenTeam5(){ syncBTeam5("maidens",getValBTeam5("maidens105")+1); }
function minusMaidenTeam5(){ syncBTeam5("maidens",Math.max(0,getValBTeam5("maidens105")-1)); }

// Runs
function addBowlerRunsTeam5(r){ syncBTeam5("bruns",getValBTeam5("bruns105")+r); updateEconTeam5(); }
function minusBowlerRunsTeam5(r){ syncBTeam5("bruns",Math.max(0,getValBTeam5("bruns105")-r)); updateEconTeam5(); }

// Wickets
function addWicketTeam5(){ syncBTeam5("wickets",getValBTeam5("wickets105")+1); }
function minusWicketTeam5(){ syncBTeam5("wickets",Math.max(0,getValBTeam5("wickets105")-1)); }

// Economy
function updateEconTeam5(){
    const runs=getValBTeam5("bruns105");
    const overs=getValBTeam5("overs105");
    const whole=Math.floor(overs);
    const balls=Math.round((overs-whole)*10);
    const totalBalls = whole*6 + balls;
    const econ = totalBalls>0 ? (runs/(totalBalls/6)).toFixed(2) : "0.00";
    syncBTeam5("econ",econ);
}

// Reset all
function resetAllBowlingTeam5(){
    syncBTeam5("overs",0.0);
    syncBTeam5("maidens",0);
    syncBTeam5("bruns",0);
    syncBTeam5("wickets",0);
    syncBTeam5("econ","0.00");
}

// Image Upload
document.getElementById("bimageInput105").addEventListener("change",loadBImageTeam5);
document.getElementById("bimageInput205").addEventListener("change",loadBImageTeam5);

function loadBImageTeam5(e){
    const reader=new FileReader();
    reader.onload=function(){
        bowlers5.forEach(i=>document.getElementById("bimg"+i).src=reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
}

function deleteBImageTeam5(){
    bowlers5.forEach(i=>document.getElementById("bimg"+i).src="");
}

function resetBImageTeam5(id){
    document.getElementById("bimageInput"+id).value="";
    deleteBImageTeam5();
}

// ================= TEAM 6 BOWLING JS =================
const bowlers6 = [106,206,606,706];

// Sync function
function syncBTeam6(prefix,value){
    bowlers6.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

// Get value
function getValBTeam6(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseFloat(el.innerText)||0;
}

// Names
function addBNameTeam6(id){ const name=document.getElementById("bnameInput"+id).value; bowlers6.forEach(i=>document.getElementById("bname"+i).innerText=name);}
function deleteBNameTeam6(){ bowlers6.forEach(i=>document.getElementById("bname"+i).innerText="");}
function resetBNameTeam6(id){ document.getElementById("bnameInput"+id).value=""; deleteBNameTeam6();}

// Overs (6-ball)
function addOverTeam6(){
    let overs = getValBTeam6("overs106");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    balls += 1;
    if(balls >= 6){ whole += 1; balls = 0; }
    syncBTeam6("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam6();
}

function minusOverTeam6(){
    let overs = getValBTeam6("overs106");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    if(balls===0 && whole===0) return;
    if(balls===0){ whole-=1; balls=5; } else { balls-=1; }
    syncBTeam6("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam6();
}

// Maidens
function addMaidenTeam6(){ syncBTeam6("maidens",getValBTeam6("maidens106")+1); }
function minusMaidenTeam6(){ syncBTeam6("maidens",Math.max(0,getValBTeam6("maidens106")-1)); }

// Runs
function addBowlerRunsTeam6(r){ syncBTeam6("bruns",getValBTeam6("bruns106")+r); updateEconTeam6(); }
function minusBowlerRunsTeam6(r){ syncBTeam6("bruns",Math.max(0,getValBTeam6("bruns106")-r)); updateEconTeam6(); }

// Wickets
function addWicketTeam6(){ syncBTeam6("wickets",getValBTeam6("wickets106")+1); }
function minusWicketTeam6(){ syncBTeam6("wickets",Math.max(0,getValBTeam6("wickets106")-1)); }

// Economy
function updateEconTeam6(){
    const runs=getValBTeam6("bruns106");
    const overs=getValBTeam6("overs106");
    const whole=Math.floor(overs);
    const balls=Math.round((overs-whole)*10);
    const totalBalls = whole*6 + balls;
    const econ = totalBalls>0 ? (runs/(totalBalls/6)).toFixed(2) : "0.00";
    syncBTeam6("econ",econ);
}

// Reset all
function resetAllBowlingTeam6(){
    syncBTeam6("overs",0.0);
    syncBTeam6("maidens",0);
    syncBTeam6("bruns",0);
    syncBTeam6("wickets",0);
    syncBTeam6("econ","0.00");
}

// Image Upload
document.getElementById("bimageInput106").addEventListener("change",loadBImageTeam6);
document.getElementById("bimageInput206").addEventListener("change",loadBImageTeam6);

function loadBImageTeam6(e){
    const reader=new FileReader();
    reader.onload=function(){
        bowlers6.forEach(i=>document.getElementById("bimg"+i).src=reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
}

function deleteBImageTeam6(){
    bowlers6.forEach(i=>document.getElementById("bimg"+i).src="");
}

function resetBImageTeam6(id){
    document.getElementById("bimageInput"+id).value="";
    deleteBImageTeam6();
}

// ================= TEAM 7 BOWLING JS =================
const bowlers7 = [107,207,607,707];

// Sync function
function syncBTeam7(prefix,value){
    bowlers7.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

// Get value
function getValBTeam7(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseFloat(el.innerText)||0;
}

// Names
function addBNameTeam7(id){ const name=document.getElementById("bnameInput"+id).value; bowlers7.forEach(i=>document.getElementById("bname"+i).innerText=name);}
function deleteBNameTeam7(){ bowlers7.forEach(i=>document.getElementById("bname"+i).innerText="");}
function resetBNameTeam7(id){ document.getElementById("bnameInput"+id).value=""; deleteBNameTeam7();}

// Overs (6-ball)
function addOverTeam7(){
    let overs = getValBTeam7("overs107");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    balls += 1;
    if(balls >= 6){ whole += 1; balls = 0; }
    syncBTeam7("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam7();
}

function minusOverTeam7(){
    let overs = getValBTeam7("overs107");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    if(balls===0 && whole===0) return;
    if(balls===0){ whole-=1; balls=5; } else { balls-=1; }
    syncBTeam7("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam7();
}

// Maidens
function addMaidenTeam7(){ syncBTeam7("maidens",getValBTeam7("maidens107")+1); }
function minusMaidenTeam7(){ syncBTeam7("maidens",Math.max(0,getValBTeam7("maidens107")-1)); }

// Runs
function addBowlerRunsTeam7(r){ syncBTeam7("bruns",getValBTeam7("bruns107")+r); updateEconTeam7(); }
function minusBowlerRunsTeam7(r){ syncBTeam7("bruns",Math.max(0,getValBTeam7("bruns107")-r)); updateEconTeam7(); }

// Wickets
function addWicketTeam7(){ syncBTeam7("wickets",getValBTeam7("wickets107")+1); }
function minusWicketTeam7(){ syncBTeam7("wickets",Math.max(0,getValBTeam7("wickets107")-1)); }

// Economy
function updateEconTeam7(){
    const runs=getValBTeam7("bruns107");
    const overs=getValBTeam7("overs107");
    const whole=Math.floor(overs);
    const balls=Math.round((overs-whole)*10);
    const totalBalls = whole*6 + balls;
    const econ = totalBalls>0 ? (runs/(totalBalls/6)).toFixed(2) : "0.00";
    syncBTeam7("econ",econ);
}

// Reset all
function resetAllBowlingTeam7(){
    syncBTeam7("overs",0.0);
    syncBTeam7("maidens",0);
    syncBTeam7("bruns",0);
    syncBTeam7("wickets",0);
    syncBTeam7("econ","0.00");
}

// Image Upload
document.getElementById("bimageInput107").addEventListener("change",loadBImageTeam7);
document.getElementById("bimageInput207").addEventListener("change",loadBImageTeam7);

function loadBImageTeam7(e){
    const reader=new FileReader();
    reader.onload=function(){
        bowlers7.forEach(i=>document.getElementById("bimg"+i).src=reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
}

function deleteBImageTeam7(){
    bowlers7.forEach(i=>document.getElementById("bimg"+i).src="");
}

function resetBImageTeam7(id){
    document.getElementById("bimageInput"+id).value="";
    deleteBImageTeam7();
}

// ================= TEAM 8 BOWLING JS =================
const bowlers8 = [108,208,608,708];

// Sync function
function syncBTeam8(prefix,value){
    bowlers8.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

// Get value
function getValBTeam8(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseFloat(el.innerText)||0;
}

// Names
function addBNameTeam8(id){ const name=document.getElementById("bnameInput"+id).value; bowlers8.forEach(i=>document.getElementById("bname"+i).innerText=name);}
function deleteBNameTeam8(){ bowlers8.forEach(i=>document.getElementById("bname"+i).innerText="");}
function resetBNameTeam8(id){ document.getElementById("bnameInput"+id).value=""; deleteBNameTeam8();}

// Overs (6-ball)
function addOverTeam8(){
    let overs = getValBTeam8("overs108");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    balls += 1;
    if(balls >= 6){ whole += 1; balls = 0; }
    syncBTeam8("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam8();
}

function minusOverTeam8(){
    let overs = getValBTeam8("overs108");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    if(balls===0 && whole===0) return;
    if(balls===0){ whole-=1; balls=5; } else { balls-=1; }
    syncBTeam8("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam8();
}

// Maidens
function addMaidenTeam8(){ syncBTeam8("maidens",getValBTeam8("maidens108")+1); }
function minusMaidenTeam8(){ syncBTeam8("maidens",Math.max(0,getValBTeam8("maidens108")-1)); }

// Runs
function addBowlerRunsTeam8(r){ syncBTeam8("bruns",getValBTeam8("bruns108")+r); updateEconTeam8(); }
function minusBowlerRunsTeam8(r){ syncBTeam8("bruns",Math.max(0,getValBTeam8("bruns108")-r)); updateEconTeam8(); }

// Wickets
function addWicketTeam8(){ syncBTeam8("wickets",getValBTeam8("wickets108")+1); }
function minusWicketTeam8(){ syncBTeam8("wickets",Math.max(0,getValBTeam8("wickets108")-1)); }

// Economy
function updateEconTeam8(){
    const runs=getValBTeam8("bruns108");
    const overs=getValBTeam8("overs108");
    const whole=Math.floor(overs);
    const balls=Math.round((overs-whole)*10);
    const totalBalls = whole*6 + balls;
    const econ = totalBalls>0 ? (runs/(totalBalls/6)).toFixed(2) : "0.00";
    syncBTeam8("econ",econ);
}

// Reset all
function resetAllBowlingTeam8(){
    syncBTeam8("overs",0.0);
    syncBTeam8("maidens",0);
    syncBTeam8("bruns",0);
    syncBTeam8("wickets",0);
    syncBTeam8("econ","0.00");
}

// Image Upload
document.getElementById("bimageInput108").addEventListener("change",loadBImageTeam8);
document.getElementById("bimageInput208").addEventListener("change",loadBImageTeam8);

function loadBImageTeam8(e){
    const reader=new FileReader();
    reader.onload=function(){
        bowlers8.forEach(i=>document.getElementById("bimg"+i).src=reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
}

function deleteBImageTeam8(){
    bowlers8.forEach(i=>document.getElementById("bimg"+i).src="");
}

function resetBImageTeam8(id){
    document.getElementById("bimageInput"+id).value="";
    deleteBImageTeam8();
}

// ================= TEAM 9 BOWLING JS =================
const bowlers9 = [109,209,609,709];

// Sync function
function syncBTeam9(prefix,value){
    bowlers9.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

// Get value
function getValBTeam9(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseFloat(el.innerText)||0;
}

// Names
function addBNameTeam9(id){ const name=document.getElementById("bnameInput"+id).value; bowlers9.forEach(i=>document.getElementById("bname"+i).innerText=name);}
function deleteBNameTeam9(){ bowlers9.forEach(i=>document.getElementById("bname"+i).innerText="");}
function resetBNameTeam9(id){ document.getElementById("bnameInput"+id).value=""; deleteBNameTeam9();}

// Overs (6-ball)
function addOverTeam9(){
    let overs = getValBTeam9("overs109");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    balls += 1;
    if(balls >= 6){ whole += 1; balls = 0; }
    syncBTeam9("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam9();
}

function minusOverTeam9(){
    let overs = getValBTeam9("overs109");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    if(balls===0 && whole===0) return;
    if(balls===0){ whole-=1; balls=5; } else { balls-=1; }
    syncBTeam9("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam9();
}

// Maidens
function addMaidenTeam9(){ syncBTeam9("maidens",getValBTeam9("maidens109")+1); }
function minusMaidenTeam9(){ syncBTeam9("maidens",Math.max(0,getValBTeam9("maidens109")-1)); }

// Runs
function addBowlerRunsTeam9(r){ syncBTeam9("bruns",getValBTeam9("bruns109")+r); updateEconTeam9(); }
function minusBowlerRunsTeam9(r){ syncBTeam9("bruns",Math.max(0,getValBTeam9("bruns109")-r)); updateEconTeam9(); }

// Wickets
function addWicketTeam9(){ syncBTeam9("wickets",getValBTeam9("wickets109")+1); }
function minusWicketTeam9(){ syncBTeam9("wickets",Math.max(0,getValBTeam9("wickets109")-1)); }

// Economy
function updateEconTeam9(){
    const runs=getValBTeam9("bruns109");
    const overs=getValBTeam9("overs109");
    const whole=Math.floor(overs);
    const balls=Math.round((overs-whole)*10);
    const totalBalls = whole*6 + balls;
    const econ = totalBalls>0 ? (runs/(totalBalls/6)).toFixed(2) : "0.00";
    syncBTeam9("econ",econ);
}

// Reset all
function resetAllBowlingTeam9(){
    syncBTeam9("overs",0.0);
    syncBTeam9("maidens",0);
    syncBTeam9("bruns",0);
    syncBTeam9("wickets",0);
    syncBTeam9("econ","0.00");
}

// Image Upload
document.getElementById("bimageInput109").addEventListener("change",loadBImageTeam9);
document.getElementById("bimageInput209").addEventListener("change",loadBImageTeam9);

function loadBImageTeam9(e){
    const reader=new FileReader();
    reader.onload=function(){
        bowlers9.forEach(i=>document.getElementById("bimg"+i).src=reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
}

function deleteBImageTeam9(){
    bowlers9.forEach(i=>document.getElementById("bimg"+i).src="");
}

function resetBImageTeam9(id){
    document.getElementById("bimageInput"+id).value="";
    deleteBImageTeam9();
}

// ================= TEAM 10 BOWLING JS =================
const bowlers10 = [110,210,610,710];

// Sync function
function syncBTeam10(prefix,value){
    bowlers10.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

// Get value
function getValBTeam10(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseFloat(el.innerText)||0;
}

// Names
function addBNameTeam10(id){ const name=document.getElementById("bnameInput"+id).value; bowlers10.forEach(i=>document.getElementById("bname"+i).innerText=name);}
function deleteBNameTeam10(){ bowlers10.forEach(i=>document.getElementById("bname"+i).innerText="");}
function resetBNameTeam10(id){ document.getElementById("bnameInput"+id).value=""; deleteBNameTeam10();}

// Overs (6-ball)
function addOverTeam10(){
    let overs = getValBTeam10("overs110");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    balls += 1;
    if(balls >= 6){ whole += 1; balls = 0; }
    syncBTeam10("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam10();
}

function minusOverTeam10(){
    let overs = getValBTeam10("overs110");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    if(balls===0 && whole===0) return;
    if(balls===0){ whole-=1; balls=5; } else { balls-=1; }
    syncBTeam10("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam10();
}

// Maidens
function addMaidenTeam10(){ syncBTeam10("maidens",getValBTeam10("maidens110")+1); }
function minusMaidenTeam10(){ syncBTeam10("maidens",Math.max(0,getValBTeam10("maidens110")-1)); }

// Runs
function addBowlerRunsTeam10(r){ syncBTeam10("bruns",getValBTeam10("bruns110")+r); updateEconTeam10(); }
function minusBowlerRunsTeam10(r){ syncBTeam10("bruns",Math.max(0,getValBTeam10("bruns110")-r)); updateEconTeam10(); }

// Wickets
function addWicketTeam10(){ syncBTeam10("wickets",getValBTeam10("wickets110")+1); }
function minusWicketTeam10(){ syncBTeam10("wickets",Math.max(0,getValBTeam10("wickets110")-1)); }

// Economy
function updateEconTeam10(){
    const runs=getValBTeam10("bruns110");
    const overs=getValBTeam10("overs110");
    const whole=Math.floor(overs);
    const balls=Math.round((overs-whole)*10);
    const totalBalls = whole*6 + balls;
    const econ = totalBalls>0 ? (runs/(totalBalls/6)).toFixed(2) : "0.00";
    syncBTeam10("econ",econ);
}

// Reset all
function resetAllBowlingTeam10(){
    syncBTeam10("overs",0.0);
    syncBTeam10("maidens",0);
    syncBTeam10("bruns",0);
    syncBTeam10("wickets",0);
    syncBTeam10("econ","0.00");
}

// Image Upload
document.getElementById("bimageInput110").addEventListener("change",loadBImageTeam10);
document.getElementById("bimageInput210").addEventListener("change",loadBImageTeam10);

function loadBImageTeam10(e){
    const reader=new FileReader();
    reader.onload=function(){
        bowlers10.forEach(i=>document.getElementById("bimg"+i).src=reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
}

function deleteBImageTeam10(){
    bowlers10.forEach(i=>document.getElementById("bimg"+i).src="");
}

function resetBImageTeam10(id){
    document.getElementById("bimageInput"+id).value="";
    deleteBImageTeam10();
}

// ================= TEAM 11 BOWLING JS =================
const bowlers11 = [111,211,611,711];

// Sync function
function syncBTeam11(prefix,value){
    bowlers11.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

// Get value
function getValBTeam11(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseFloat(el.innerText)||0;
}

// Names
function addBNameTeam11(id){ const name=document.getElementById("bnameInput"+id).value; bowlers11.forEach(i=>document.getElementById("bname"+i).innerText=name);}
function deleteBNameTeam11(){ bowlers11.forEach(i=>document.getElementById("bname"+i).innerText="");}
function resetBNameTeam11(id){ document.getElementById("bnameInput"+id).value=""; deleteBNameTeam11();}

// Overs (6-ball)
function addOverTeam11(){
    let overs = getValBTeam11("overs111");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    balls += 1;
    if(balls >= 6){ whole += 1; balls = 0; }
    syncBTeam11("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam11();
}

function minusOverTeam11(){
    let overs = getValBTeam11("overs111");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    if(balls===0 && whole===0) return;
    if(balls===0){ whole-=1; balls=5; } else { balls-=1; }
    syncBTeam11("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam11();
}

// Maidens
function addMaidenTeam11(){ syncBTeam11("maidens",getValBTeam11("maidens111")+1); }
function minusMaidenTeam11(){ syncBTeam11("maidens",Math.max(0,getValBTeam11("maidens111")-1)); }

// Runs
function addBowlerRunsTeam11(r){ syncBTeam11("bruns",getValBTeam11("bruns111")+r); updateEconTeam11(); }
function minusBowlerRunsTeam11(r){ syncBTeam11("bruns",Math.max(0,getValBTeam11("bruns111")-r)); updateEconTeam11(); }

// Wickets
function addWicketTeam11(){ syncBTeam11("wickets",getValBTeam11("wickets111")+1); }
function minusWicketTeam11(){ syncBTeam11("wickets",Math.max(0,getValBTeam11("wickets111")-1)); }

// Economy
function updateEconTeam11(){
    const runs=getValBTeam11("bruns111");
    const overs=getValBTeam11("overs111");
    const whole=Math.floor(overs);
    const balls=Math.round((overs-whole)*10);
    const totalBalls = whole*6 + balls;
    const econ = totalBalls>0 ? (runs/(totalBalls/6)).toFixed(2) : "0.00";
    syncBTeam11("econ",econ);
}

// Reset all
function resetAllBowlingTeam11(){
    syncBTeam11("overs",0.0);
    syncBTeam11("maidens",0);
    syncBTeam11("bruns",0);
    syncBTeam11("wickets",0);
    syncBTeam11("econ","0.00");
}

// Image Upload
document.getElementById("bimageInput111").addEventListener("change",loadBImageTeam11);
document.getElementById("bimageInput211").addEventListener("change",loadBImageTeam11);

function loadBImageTeam11(e){
    const reader=new FileReader();
    reader.onload=function(){
        bowlers11.forEach(i=>document.getElementById("bimg"+i).src=reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
}

function deleteBImageTeam11(){
    bowlers11.forEach(i=>document.getElementById("bimg"+i).src="");
}

function resetBImageTeam11(id){
    document.getElementById("bimageInput"+id).value="";
    deleteBImageTeam11();
}

// ================= TEAM 12 BOWLING JS =================
const bowlers12 = [112,212,612,712];

// Sync function
function syncBTeam12(prefix,value){
    bowlers12.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

// Get value
function getValBTeam12(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseFloat(el.innerText)||0;
}

// Names
function addBNameTeam12(id){ const name=document.getElementById("bnameInput"+id).value; bowlers12.forEach(i=>document.getElementById("bname"+i).innerText=name);}
function deleteBNameTeam12(){ bowlers12.forEach(i=>document.getElementById("bname"+i).innerText="");}
function resetBNameTeam12(id){ document.getElementById("bnameInput"+id).value=""; deleteBNameTeam12();}

// Overs (6-ball)
function addOverTeam12(){
    let overs = getValBTeam12("overs112");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    balls += 1;
    if(balls >= 6){ whole += 1; balls = 0; }
    syncBTeam12("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam12();
}

function minusOverTeam12(){
    let overs = getValBTeam12("overs112");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    if(balls===0 && whole===0) return;
    if(balls===0){ whole-=1; balls=5; } else { balls-=1; }
    syncBTeam12("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam12();
}

// Maidens
function addMaidenTeam12(){ syncBTeam12("maidens",getValBTeam12("maidens112")+1); }
function minusMaidenTeam12(){ syncBTeam12("maidens",Math.max(0,getValBTeam12("maidens112")-1)); }

// Runs
function addBowlerRunsTeam12(r){ syncBTeam12("bruns",getValBTeam12("bruns112")+r); updateEconTeam12(); addOverTeam12();}
function minusBowlerRunsTeam12(r){ syncBTeam12("bruns",Math.max(0,getValBTeam12("bruns112")-r)); updateEconTeam12(); minusOverTeam12();}

//extra

function extraBowlerRunsTeam12(r){ syncBTeam12("bruns",getValBTeam12("bruns112")+r); updateEconTeam12();}


// Wickets
function addWicketTeam12(){ syncBTeam12("wickets",getValBTeam12("wickets112")+1); addOverTeam12(); }
function minusWicketTeam12(){ syncBTeam12("wickets",Math.max(0,getValBTeam12("wickets112")-1)); }

// Economy
function updateEconTeam12(){
    const runs=getValBTeam12("bruns112");
    const overs=getValBTeam12("overs112");
    const whole=Math.floor(overs);
    const balls=Math.round((overs-whole)*10);
    const totalBalls = whole*6 + balls;
    const econ = totalBalls>0 ? (runs/(totalBalls/6)).toFixed(2) : "0.00";
    syncBTeam12("econ",econ);
}

// Reset all
function resetAllBowlingTeam12(){
    syncBTeam12("overs",0.0);
    syncBTeam12("maidens",0);
    syncBTeam12("bruns",0);
    syncBTeam12("wickets",0);
    syncBTeam12("econ","0.00");
}

// Image Upload
document.getElementById("bimageInput112").addEventListener("change",loadBImageTeam12);
document.getElementById("bimageInput212").addEventListener("change",loadBImageTeam12);

function loadBImageTeam12(e){
    const reader=new FileReader();
    reader.onload=function(){
        bowlers12.forEach(i=>document.getElementById("bimg"+i).src=reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
}

function deleteBImageTeam12(){
    bowlers12.forEach(i=>document.getElementById("bimg"+i).src="");
}

function resetBImageTeam12(id){
    document.getElementById("bimageInput"+id).value="";
    deleteBImageTeam12();
}



// ================= TEAM 13 BOWLING JS =================
const bowlers13 = [113,213,613,713];

// Sync function
function syncBTeam13(prefix,value){
    bowlers13.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

// Get value
function getValBTeam13(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseFloat(el.innerText)||0;
}

// Names
function addBNameTeam13(id){ const name=document.getElementById("bnameInput"+id).value; bowlers13.forEach(i=>document.getElementById("bname"+i).innerText=name);}
function deleteBNameTeam13(){ bowlers13.forEach(i=>document.getElementById("bname"+i).innerText="");}
function resetBNameTeam13(id){ document.getElementById("bnameInput"+id).value=""; deleteBNameTeam13();}

// Overs (6-ball)
function addOverTeam13(){
    let overs = getValBTeam13("overs113");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    balls += 1;
    if(balls >= 6){ whole += 1; balls = 0; }
    syncBTeam13("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam13();
}

function minusOverTeam13(){
    let overs = getValBTeam13("overs113");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    if(balls===0 && whole===0) return;
    if(balls===0){ whole-=1; balls=5; } else { balls-=1; }
    syncBTeam13("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam13();
}

// Maidens
function addMaidenTeam13(){ syncBTeam13("maidens",getValBTeam13("maidens113")+1); }
function minusMaidenTeam13(){ syncBTeam13("maidens",Math.max(0,getValBTeam13("maidens113")-1)); }

// Runs
function addBowlerRunsTeam13(r){ syncBTeam13("bruns",getValBTeam13("bruns113")+r); updateEconTeam13(); }
function minusBowlerRunsTeam13(r){ syncBTeam13("bruns",Math.max(0,getValBTeam13("bruns113")-r)); updateEconTeam13(); }

// Wickets
function addWicketTeam13(){ syncBTeam13("wickets",getValBTeam13("wickets113")+1); }
function minusWicketTeam13(){ syncBTeam13("wickets",Math.max(0,getValBTeam13("wickets113")-1)); }

// Economy
function updateEconTeam13(){
    const runs=getValBTeam13("bruns113");
    const overs=getValBTeam13("overs113");
    const whole=Math.floor(overs);
    const balls=Math.round((overs-whole)*10);
    const totalBalls = whole*6 + balls;
    const econ = totalBalls>0 ? (runs/(totalBalls/6)).toFixed(2) : "0.00";
    syncBTeam13("econ",econ);
}

// Reset all
function resetAllBowlingTeam13(){
    syncBTeam13("overs",0.0);
    syncBTeam13("maidens",0);
    syncBTeam13("bruns",0);
    syncBTeam13("wickets",0);
    syncBTeam13("econ","0.00");
}

// Image Upload
document.getElementById("bimageInput113").addEventListener("change",loadBImageTeam13);
document.getElementById("bimageInput213").addEventListener("change",loadBImageTeam13);

function loadBImageTeam13(e){
    const reader=new FileReader();
    reader.onload=function(){
        bowlers13.forEach(i=>document.getElementById("bimg"+i).src=reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
}

function deleteBImageTeam13(){
    bowlers13.forEach(i=>document.getElementById("bimg"+i).src="");
}

function resetBImageTeam13(id){
    document.getElementById("bimageInput"+id).value="";
    deleteBImageTeam13();
}

// ================= TEAM 14 BOWLING JS =================
const bowlers14 = [114,214,614,714];

// Sync function
function syncBTeam14(prefix,value){
    bowlers14.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

// Get value
function getValBTeam14(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseFloat(el.innerText)||0;
}

// Names
function addBNameTeam14(id){ const name=document.getElementById("bnameInput"+id).value; bowlers14.forEach(i=>document.getElementById("bname"+i).innerText=name);}
function deleteBNameTeam14(){ bowlers14.forEach(i=>document.getElementById("bname"+i).innerText="");}
function resetBNameTeam14(id){ document.getElementById("bnameInput"+id).value=""; deleteBNameTeam14();}

// Overs (6-ball)
function addOverTeam14(){
    let overs = getValBTeam14("overs114");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    balls += 1;
    if(balls >= 6){ whole += 1; balls = 0; }
    syncBTeam14("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam14();
}

function minusOverTeam14(){
    let overs = getValBTeam14("overs114");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    if(balls===0 && whole===0) return;
    if(balls===0){ whole-=1; balls=5; } else { balls-=1; }
    syncBTeam14("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam14();
}

// Maidens
function addMaidenTeam14(){ syncBTeam14("maidens",getValBTeam14("maidens114")+1); }
function minusMaidenTeam14(){ syncBTeam14("maidens",Math.max(0,getValBTeam14("maidens114")-1)); }

// Runs
function addBowlerRunsTeam14(r){ syncBTeam14("bruns",getValBTeam14("bruns114")+r); updateEconTeam14(); }
function minusBowlerRunsTeam14(r){ syncBTeam14("bruns",Math.max(0,getValBTeam14("bruns114")-r)); updateEconTeam14(); }

// Wickets
function addWicketTeam14(){ syncBTeam14("wickets",getValBTeam14("wickets114")+1); }
function minusWicketTeam14(){ syncBTeam14("wickets",Math.max(0,getValBTeam14("wickets114")-1)); }

// Economy
function updateEconTeam14(){
    const runs=getValBTeam14("bruns114");
    const overs=getValBTeam14("overs114");
    const whole=Math.floor(overs);
    const balls=Math.round((overs-whole)*10);
    const totalBalls = whole*6 + balls;
    const econ = totalBalls>0 ? (runs/(totalBalls/6)).toFixed(2) : "0.00";
    syncBTeam14("econ",econ);
}

// Reset all
function resetAllBowlingTeam14(){
    syncBTeam14("overs",0.0);
    syncBTeam14("maidens",0);
    syncBTeam14("bruns",0);
    syncBTeam14("wickets",0);
    syncBTeam14("econ","0.00");
}

// Image Upload
document.getElementById("bimageInput114").addEventListener("change",loadBImageTeam14);
document.getElementById("bimageInput214").addEventListener("change",loadBImageTeam14);

function loadBImageTeam14(e){
    const reader=new FileReader();
    reader.onload=function(){
        bowlers14.forEach(i=>document.getElementById("bimg"+i).src=reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
}

function deleteBImageTeam14(){
    bowlers14.forEach(i=>document.getElementById("bimg"+i).src="");
}

function resetBImageTeam14(id){
    document.getElementById("bimageInput"+id).value="";
    deleteBImageTeam14();
}

// ================= TEAM 15 BOWLING JS WITH 6-BALL OVERS & IMAGES =================
const bowlers15 = [115,215,615,715];

// Sync function
function syncBTeam15(prefix,value){
    bowlers15.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

// Get value
function getValBTeam15(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseFloat(el.innerText)||0;
}

// Names
function addBNameTeam15(id){ const name=document.getElementById("bnameInput"+id).value; bowlers15.forEach(i=>document.getElementById("bname"+i).innerText=name);}
function deleteBNameTeam15(){ bowlers15.forEach(i=>document.getElementById("bname"+i).innerText="");}
function resetBNameTeam15(id){ document.getElementById("bnameInput"+id).value=""; deleteBNameTeam15();}

// Overs (6-ball)
function addOverTeam15(){
    let overs = getValBTeam15("overs115");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    balls += 1;
    if(balls >= 6){ whole += 1; balls = 0; }
    syncBTeam15("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam15();
}

function minusOverTeam15(){
    let overs = getValBTeam15("overs115");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    if(balls===0 && whole===0) return;
    if(balls===0){ whole-=1; balls=5; } else { balls-=1; }
    syncBTeam15("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam15();
}

// Maidens
function addMaidenTeam15(){ syncBTeam15("maidens",getValBTeam15("maidens115")+1); }
function minusMaidenTeam15(){ syncBTeam15("maidens",Math.max(0,getValBTeam15("maidens115")-1)); }

// Runs
function addBowlerRunsTeam15(r){ syncBTeam15("bruns",getValBTeam15("bruns115")+r); updateEconTeam15(); }
function minusBowlerRunsTeam15(r){ syncBTeam15("bruns",Math.max(0,getValBTeam15("bruns115")-r)); updateEconTeam15(); }

// Wickets
function addWicketTeam15(){ syncBTeam15("wickets",getValBTeam15("wickets115")+1); }
function minusWicketTeam15(){ syncBTeam15("wickets",Math.max(0,getValBTeam15("wickets115")-1)); }

// Economy
function updateEconTeam15(){
    const runs=getValBTeam15("bruns115");
    const overs=getValBTeam15("overs115");
    const whole=Math.floor(overs);
    const balls=Math.round((overs-whole)*10);
    const totalBalls = whole*6 + balls;
    const econ = totalBalls>0 ? (runs/(totalBalls/6)).toFixed(2) : "0.00";
    syncBTeam15("econ",econ);
}

// Reset all
function resetAllBowlingTeam15(){
    syncBTeam15("overs",0.0);
    syncBTeam15("maidens",0);
    syncBTeam15("bruns",0);
    syncBTeam15("wickets",0);
    syncBTeam15("econ","0.00");
}

// Image Upload
document.getElementById("bimageInput115").addEventListener("change",loadBImageTeam15);
document.getElementById("bimageInput215").addEventListener("change",loadBImageTeam15);

function loadBImageTeam15(e){
    const reader=new FileReader();
    reader.onload=function(){
        bowlers15.forEach(i=>document.getElementById("bimg"+i).src=reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
}

function deleteBImageTeam15(){
    bowlers15.forEach(i=>document.getElementById("bimg"+i).src="");
}

function resetBImageTeam15(id){
    document.getElementById("bimageInput"+id).value="";
    deleteBImageTeam15();
}

// ================= TEAM 16 BOWLING JS WITH 6-BALL OVERS & IMAGES =================
const bowlers16 = [116,216,616,716];

// Sync function
function syncBTeam16(prefix,value){
    bowlers16.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

// Get value
function getValBTeam16(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseFloat(el.innerText)||0;
}

// Names
function addBNameTeam16(id){ const name=document.getElementById("bnameInput"+id).value; bowlers16.forEach(i=>document.getElementById("bname"+i).innerText=name);}
function deleteBNameTeam16(){ bowlers16.forEach(i=>document.getElementById("bname"+i).innerText="");}
function resetBNameTeam16(id){ document.getElementById("bnameInput"+id).value=""; deleteBNameTeam16();}

// Overs (6-ball)
function addOverTeam16(){
    let overs = getValBTeam16("overs116");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    balls += 1;
    if(balls >= 6){ whole += 1; balls = 0; }
    syncBTeam16("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam16();
}

function minusOverTeam16(){
    let overs = getValBTeam16("overs116");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);
    if(balls===0 && whole===0) return;
    if(balls===0){ whole-=1; balls=5; } else { balls-=1; }
    syncBTeam16("overs",parseFloat(whole+"."+balls).toFixed(1));
    updateEconTeam16();
}

// Maidens
function addMaidenTeam16(){ syncBTeam16("maidens",getValBTeam16("maidens116")+1); }
function minusMaidenTeam16(){ syncBTeam16("maidens",Math.max(0,getValBTeam16("maidens116")-1)); }

// Runs
function addBowlerRunsTeam16(r){ syncBTeam16("bruns",getValBTeam16("bruns116")+r); updateEconTeam16(); }
function minusBowlerRunsTeam16(r){ syncBTeam16("bruns",Math.max(0,getValBTeam16("bruns116")-r)); updateEconTeam16(); }

// Wickets
function addWicketTeam16(){ syncBTeam16("wickets",getValBTeam16("wickets116")+1); }
function minusWicketTeam16(){ syncBTeam16("wickets",Math.max(0,getValBTeam16("wickets116")-1)); }

// Economy
function updateEconTeam16(){
    const runs=getValBTeam16("bruns116");
    const overs=getValBTeam16("overs116");
    const whole=Math.floor(overs);
    const balls=Math.round((overs-whole)*10);
    const totalBalls = whole*6 + balls;
    const econ = totalBalls>0 ? (runs/(totalBalls/6)).toFixed(2) : "0.00";
    syncBTeam16("econ",econ);
}

// Reset all
function resetAllBowlingTeam16(){
    syncBTeam16("overs",0.0);
    syncBTeam16("maidens",0);
    syncBTeam16("bruns",0);
    syncBTeam16("wickets",0);
    syncBTeam16("econ","0.00");
}

// Image Upload
document.getElementById("bimageInput116").addEventListener("change",loadBImageTeam16);
document.getElementById("bimageInput216").addEventListener("change",loadBImageTeam16);

function loadBImageTeam16(e){
    const reader=new FileReader();
    reader.onload=function(){
        bowlers16.forEach(i=>document.getElementById("bimg"+i).src=reader.result);
    }
    reader.readAsDataURL(e.target.files[0]);
}

function deleteBImageTeam16(){
    bowlers16.forEach(i=>document.getElementById("bimg"+i).src="");
}

function resetBImageTeam16(id){
    document.getElementById("bimageInput"+id).value="";
    deleteBImageTeam16();
}

// ================= TEAM 17 BOWLING JS WITH 6-BALL OVERS =================
const bowlers17 = [117,217,617,717];

// Sync function
function syncBTeam17(prefix,value){
    bowlers17.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

// Get value
function getValBTeam17(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseFloat(el.innerText)||0;
}

// Names
function addBNameTeam17(id){
    const name=document.getElementById("bnameInput"+id).value;
    bowlers17.forEach(i=>document.getElementById("bname"+i).innerText=name);
}
function deleteBNameTeam17(){ bowlers17.forEach(i=>document.getElementById("bname"+i).innerText=""); }
function resetBNameTeam17(id){ document.getElementById("bnameInput"+id).value=""; deleteBNameTeam17(); }

// Overs (6-ball over)
function addOverTeam17(){
    let overs = getValBTeam17("overs117");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);

    balls += 1;
    if(balls >= 6){
        whole += 1;
        balls = 0;
    }
    const newOvers = parseFloat(whole + "." + balls);
    syncBTeam17("overs",newOvers.toFixed(1));
    updateEconTeam17();
}

function minusOverTeam17(){
    let overs = getValBTeam17("overs117");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);

    if(balls === 0 && whole === 0) return;

    if(balls === 0){
        whole -= 1;
        balls = 5;
    } else {
        balls -= 1;
    }

    const newOvers = parseFloat(whole + "." + balls);
    syncBTeam17("overs",newOvers.toFixed(1));
    updateEconTeam17();
}

// Maidens
function addMaidenTeam17(){ syncBTeam17("maidens",getValBTeam17("maidens117")+1); }
function minusMaidenTeam17(){ syncBTeam17("maidens",Math.max(0,getValBTeam17("maidens117")-1)); }

// Runs
function addBowlerRunsTeam17(r){ syncBTeam17("bruns",getValBTeam17("bruns117")+r); updateEconTeam17(); }
function minusBowlerRunsTeam17(r){ syncBTeam17("bruns",Math.max(0,getValBTeam17("bruns117")-r)); updateEconTeam17(); }

// Wickets
function addWicketTeam17(){ syncBTeam17("wickets",getValBTeam17("wickets117")+1); }
function minusWicketTeam17(){ syncBTeam17("wickets",Math.max(0,getValBTeam17("wickets117")-1)); }

// Economy
function updateEconTeam17(){
    const runs=getValBTeam17("bruns117");
    const overs=getValBTeam17("overs117");
    const whole=Math.floor(overs);
    const balls=Math.round((overs - whole)*10);
    const totalBalls = whole*6 + balls;
    const econ = totalBalls>0 ? (runs/(totalBalls/6)).toFixed(2) : "0.00";
    syncBTeam17("econ",econ);
}

// Reset all
function resetAllBowlingTeam17(){
    syncBTeam17("overs",0.0);
    syncBTeam17("maidens",0);
    syncBTeam17("bruns",0);
    syncBTeam17("wickets",0);
    syncBTeam17("econ","0.00");
}

// ================= Image Upload =================
document.getElementById("bimageInput117").addEventListener("change",loadBImageTeam17);
document.getElementById("bimageInput217").addEventListener("change",loadBImageTeam17);

function loadBImageTeam17(e){
    const reader=new FileReader();
    reader.onload=function(){
        bowlers17.forEach(i=>{
            document.getElementById("bimg"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}

function deleteBImageTeam17(){
    bowlers17.forEach(i=>{
        document.getElementById("bimg"+i).src="";
    });
}

function resetBImageTeam17(id){
    document.getElementById("bimageInput"+id).value="";
    deleteBImageTeam17();
}



// ================= TEAM 18 BOWLING JS WITH 6-BALL OVERS =================
const bowlers18 = [118,218,618,718];

// Sync function
function syncBTeam18(prefix,value){
    bowlers18.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

// Get value
function getValBTeam18(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseFloat(el.innerText)||0;
}

// Names
function addBNameTeam18(id){
    const name=document.getElementById("bnameInput"+id).value;
    bowlers18.forEach(i=>document.getElementById("bname"+i).innerText=name);
}
function deleteBNameTeam18(){ bowlers18.forEach(i=>document.getElementById("bname"+i).innerText=""); }
function resetBNameTeam18(id){ document.getElementById("bnameInput"+id).value=""; deleteBNameTeam18(); }

// Overs (6-ball over)
function addOverTeam18(){
    let overs = getValBTeam18("overs118");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);

    balls += 1;
    if(balls >= 6){
        whole += 1;
        balls = 0;
    }
    const newOvers = parseFloat(whole + "." + balls);
    syncBTeam18("overs",newOvers.toFixed(1));
    updateEconTeam18();
}

function minusOverTeam18(){
    let overs = getValBTeam18("overs118");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);

    if(balls === 0 && whole === 0) return;

    if(balls === 0){
        whole -= 1;
        balls = 5;
    } else {
        balls -= 1;
    }

    const newOvers = parseFloat(whole + "." + balls);
    syncBTeam18("overs",newOvers.toFixed(1));
    updateEconTeam18();
}

// Maidens
function addMaidenTeam18(){ syncBTeam18("maidens",getValBTeam18("maidens118")+1); }
function minusMaidenTeam18(){ syncBTeam18("maidens",Math.max(0,getValBTeam18("maidens118")-1)); }

// Runs
function addBowlerRunsTeam18(r){ syncBTeam18("bruns",getValBTeam18("bruns118")+r); updateEconTeam18(); }
function minusBowlerRunsTeam18(r){ syncBTeam18("bruns",Math.max(0,getValBTeam18("bruns118")-r)); updateEconTeam18(); }

// Wickets
function addWicketTeam18(){ syncBTeam18("wickets",getValBTeam18("wickets118")+1); }
function minusWicketTeam18(){ syncBTeam18("wickets",Math.max(0,getValBTeam18("wickets118")-1)); }

// Economy
function updateEconTeam18(){
    const runs=getValBTeam18("bruns118");
    const overs=getValBTeam18("overs118");
    const whole=Math.floor(overs);
    const balls=Math.round((overs - whole)*10);
    const totalBalls = whole*6 + balls;
    const econ = totalBalls>0 ? (runs/(totalBalls/6)).toFixed(2) : "0.00";
    syncBTeam18("econ",econ);
}

// Reset all
function resetAllBowlingTeam18(){
    syncBTeam18("overs",0.0);
    syncBTeam18("maidens",0);
    syncBTeam18("bruns",0);
    syncBTeam18("wickets",0);
    syncBTeam18("econ","0.00");
}

// ================= Image Upload =================
document.getElementById("bimageInput118").addEventListener("change",loadBImageTeam18);
document.getElementById("bimageInput218").addEventListener("change",loadBImageTeam18);

function loadBImageTeam18(e){
    const reader=new FileReader();
    reader.onload=function(){
        bowlers18.forEach(i=>{
            document.getElementById("bimg"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}

function deleteBImageTeam18(){
    bowlers18.forEach(i=>{
        document.getElementById("bimg"+i).src="";
    });
}

function resetBImageTeam18(id){
    document.getElementById("bimageInput"+id).value="";
    deleteBImageTeam18();
}

// ================= TEAM 19 BOWLING JS WITH 6-BALL OVERS =================
const bowlers19 = [119,219,619,719];

// Sync function
function syncBTeam19(prefix,value){
    bowlers19.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

// Get value
function getValBTeam19(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseFloat(el.innerText)||0;
}

// Names
function addBNameTeam19(id){
    const name=document.getElementById("bnameInput"+id).value;
    bowlers19.forEach(i=>document.getElementById("bname"+i).innerText=name);
}
function deleteBNameTeam19(){ bowlers19.forEach(i=>document.getElementById("bname"+i).innerText=""); }
function resetBNameTeam19(id){ document.getElementById("bnameInput"+id).value=""; deleteBNameTeam19(); }

// Overs (6-ball over)
function addOverTeam19(){
    let overs = getValBTeam19("overs119");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);

    balls += 1;
    if(balls >= 6){
        whole += 1;
        balls = 0;
    }
    const newOvers = parseFloat(whole + "." + balls);
    syncBTeam19("overs",newOvers.toFixed(1));
    updateEconTeam19();
}

function minusOverTeam19(){
    let overs = getValBTeam19("overs119");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);

    if(balls === 0 && whole === 0) return;

    if(balls === 0){
        whole -= 1;
        balls = 5;
    } else {
        balls -= 1;
    }

    const newOvers = parseFloat(whole + "." + balls);
    syncBTeam19("overs",newOvers.toFixed(1));
    updateEconTeam19();
}

// Maidens
function addMaidenTeam19(){ syncBTeam19("maidens",getValBTeam19("maidens119")+1); }
function minusMaidenTeam19(){ syncBTeam19("maidens",Math.max(0,getValBTeam19("maidens119")-1)); }

// Runs
function addBowlerRunsTeam19(r){ syncBTeam19("bruns",getValBTeam19("bruns119")+r); updateEconTeam19(); }
function minusBowlerRunsTeam19(r){ syncBTeam19("bruns",Math.max(0,getValBTeam19("bruns119")-r)); updateEconTeam19(); }

// Wickets
function addWicketTeam19(){ syncBTeam19("wickets",getValBTeam19("wickets119")+1); }
function minusWicketTeam19(){ syncBTeam19("wickets",Math.max(0,getValBTeam19("wickets119")-1)); }

// Economy
function updateEconTeam19(){
    const runs=getValBTeam19("bruns119");
    const overs=getValBTeam19("overs119");
    const whole=Math.floor(overs);
    const balls=Math.round((overs - whole)*10);
    const totalBalls = whole*6 + balls;
    const econ = totalBalls>0 ? (runs/(totalBalls/6)).toFixed(2) : "0.00";
    syncBTeam19("econ",econ);
}

// Reset all
function resetAllBowlingTeam19(){
    syncBTeam19("overs",0.0);
    syncBTeam19("maidens",0);
    syncBTeam19("bruns",0);
    syncBTeam19("wickets",0);
    syncBTeam19("econ","0.00");
}

// ================= Image Upload =================
document.getElementById("bimageInput119").addEventListener("change",loadBImageTeam19);
document.getElementById("bimageInput219").addEventListener("change",loadBImageTeam19);

function loadBImageTeam19(e){
    const reader=new FileReader();
    reader.onload=function(){
        bowlers19.forEach(i=>{
            document.getElementById("bimg"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}

function deleteBImageTeam19(){
    bowlers19.forEach(i=>{
        document.getElementById("bimg"+i).src="";
    });
}

function resetBImageTeam19(id){
    document.getElementById("bimageInput"+id).value="";
    deleteBImageTeam19();
}



// ================= TEAM 20 BOWLING JS WITH 6-BALL OVERS =================
const bowlers20 = [120,220,620,720];

// Sync function
function syncBTeam20(prefix,value){
    bowlers20.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

// Get value
function getValBTeam20(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseFloat(el.innerText)||0;
}

// Names
function addBNameTeam20(id){
    const name=document.getElementById("bnameInput"+id).value;
    bowlers20.forEach(i=>document.getElementById("bname"+i).innerText=name);
}
function deleteBNameTeam20(){ bowlers20.forEach(i=>document.getElementById("bname"+i).innerText=""); }
function resetBNameTeam20(id){ document.getElementById("bnameInput"+id).value=""; deleteBNameTeam20(); }

// Overs (6-ball over)
function addOverTeam20(){
    let overs = getValBTeam20("overs120");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);

    balls += 1;
    if(balls >= 6){
        whole += 1;
        balls = 0;
    }
    const newOvers = parseFloat(whole + "." + balls);
    syncBTeam20("overs",newOvers.toFixed(1));
    updateEconTeam20();
}

function minusOverTeam20(){
    let overs = getValBTeam20("overs120");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);

    if(balls === 0 && whole === 0) return;

    if(balls === 0){
        whole -= 1;
        balls = 5;
    } else {
        balls -= 1;
    }

    const newOvers = parseFloat(whole + "." + balls);
    syncBTeam20("overs",newOvers.toFixed(1));
    updateEconTeam20();
}

// Maidens
function addMaidenTeam20(){ syncBTeam20("maidens",getValBTeam20("maidens120")+1); }
function minusMaidenTeam20(){ syncBTeam20("maidens",Math.max(0,getValBTeam20("maidens120")-1)); }

// Runs
function addBowlerRunsTeam20(r){ syncBTeam20("bruns",getValBTeam20("bruns120")+r); updateEconTeam20(); }
function minusBowlerRunsTeam20(r){ syncBTeam20("bruns",Math.max(0,getValBTeam20("bruns120")-r)); updateEconTeam20(); }

// Wickets
function addWicketTeam20(){ syncBTeam20("wickets",getValBTeam20("wickets120")+1); }
function minusWicketTeam20(){ syncBTeam20("wickets",Math.max(0,getValBTeam20("wickets120")-1)); }

// Economy
function updateEconTeam20(){
    const runs=getValBTeam20("bruns120");
    const overs=getValBTeam20("overs120");
    const whole=Math.floor(overs);
    const balls=Math.round((overs - whole)*10);
    const totalBalls = whole*6 + balls;
    const econ = totalBalls>0 ? (runs/(totalBalls/6)).toFixed(2) : "0.00";
    syncBTeam20("econ",econ);
}

// Reset all
function resetAllBowlingTeam20(){
    syncBTeam20("overs",0.0);
    syncBTeam20("maidens",0);
    syncBTeam20("bruns",0);
    syncBTeam20("wickets",0);
    syncBTeam20("econ","0.00");
}

// ================= Image Upload =================
document.getElementById("bimageInput120").addEventListener("change",loadBImageTeam20);
document.getElementById("bimageInput220").addEventListener("change",loadBImageTeam20);

function loadBImageTeam20(e){
    const reader=new FileReader();
    reader.onload=function(){
        bowlers20.forEach(i=>{
            document.getElementById("bimg"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}

function deleteBImageTeam20(){
    bowlers20.forEach(i=>{
        document.getElementById("bimg"+i).src="";
    });
}

function resetBImageTeam20(id){
    document.getElementById("bimageInput"+id).value="";
    deleteBImageTeam20();
}



// ================= TEAM 21 BOWLING JS WITH 6-BALL OVERS =================
const bowlers21 = [121,221,621,721];

// Sync function
function syncBTeam21(prefix,value){
    bowlers21.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

// Get value
function getValBTeam21(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseFloat(el.innerText)||0;
}

// Names
function addBNameTeam21(id){
    const name=document.getElementById("bnameInput"+id).value;
    bowlers21.forEach(i=>document.getElementById("bname"+i).innerText=name);
}
function deleteBNameTeam21(){ bowlers21.forEach(i=>document.getElementById("bname"+i).innerText=""); }
function resetBNameTeam21(id){ document.getElementById("bnameInput"+id).value=""; deleteBNameTeam21(); }

// Overs (6-ball over)
function addOverTeam21(){
    let overs = getValBTeam21("overs121");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);

    balls += 1;
    if(balls >= 6){
        whole += 1;
        balls = 0;
    }
    const newOvers = parseFloat(whole + "." + balls);
    syncBTeam21("overs",newOvers.toFixed(1));
    updateEconTeam21();
}

function minusOverTeam21(){
    let overs = getValBTeam21("overs121");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);

    if(balls === 0 && whole === 0) return;

    if(balls === 0){
        whole -= 1;
        balls = 5;
    } else {
        balls -= 1;
    }

    const newOvers = parseFloat(whole + "." + balls);
    syncBTeam21("overs",newOvers.toFixed(1));
    updateEconTeam21();
}

// Maidens
function addMaidenTeam21(){ syncBTeam21("maidens",getValBTeam21("maidens121")+1); }
function minusMaidenTeam21(){ syncBTeam21("maidens",Math.max(0,getValBTeam21("maidens121")-1)); }

// Runs
function addBowlerRunsTeam21(r){ syncBTeam21("bruns",getValBTeam21("bruns121")+r); updateEconTeam21(); }
function minusBowlerRunsTeam21(r){ syncBTeam21("bruns",Math.max(0,getValBTeam21("bruns121")-r)); updateEconTeam21(); }

// Wickets
function addWicketTeam21(){ syncBTeam21("wickets",getValBTeam21("wickets121")+1); }
function minusWicketTeam21(){ syncBTeam21("wickets",Math.max(0,getValBTeam21("wickets121")-1)); }

// Economy
function updateEconTeam21(){
    const runs=getValBTeam21("bruns121");
    const overs=getValBTeam21("overs121");
    const whole=Math.floor(overs);
    const balls=Math.round((overs - whole)*10);
    const totalBalls = whole*6 + balls;
    const econ = totalBalls>0 ? (runs/(totalBalls/6)).toFixed(2) : "0.00";
    syncBTeam21("econ",econ);
}

// Reset all
function resetAllBowlingTeam21(){
    syncBTeam21("overs",0.0);
    syncBTeam21("maidens",0);
    syncBTeam21("bruns",0);
    syncBTeam21("wickets",0);
    syncBTeam21("econ","0.00");
}

// ================= Image Upload =================
document.getElementById("bimageInput121").addEventListener("change",loadBImageTeam21);
document.getElementById("bimageInput221").addEventListener("change",loadBImageTeam21);

function loadBImageTeam21(e){
    const reader=new FileReader();
    reader.onload=function(){
        bowlers21.forEach(i=>{
            document.getElementById("bimg"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}

function deleteBImageTeam21(){
    bowlers21.forEach(i=>{
        document.getElementById("bimg"+i).src="";
    });
}

function resetBImageTeam21(id){
    document.getElementById("bimageInput"+id).value="";
    deleteBImageTeam21();
}




// ================= TEAM 22 BOWLING JS WITH 6-BALL OVERS =================
const bowlers22 = [122,222,622,722];

// Sync function
function syncBTeam22(prefix,value){
    bowlers22.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

// Get value
function getValBTeam22(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseFloat(el.innerText)||0;
}

// Names
function addBNameTeam22(id){
    const name=document.getElementById("bnameInput"+id).value;
    bowlers22.forEach(i=>document.getElementById("bname"+i).innerText=name);
}
function deleteBNameTeam22(){ bowlers22.forEach(i=>document.getElementById("bname"+i).innerText=""); }
function resetBNameTeam22(id){ document.getElementById("bnameInput"+id).value=""; deleteBNameTeam22(); }

// Overs (6-ball over)
function addOverTeam22(){
    let overs = getValBTeam22("overs122");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);

    balls += 1;
    if(balls >= 6){
        whole += 1;
        balls = 0;
    }
    const newOvers = parseFloat(whole + "." + balls);
    syncBTeam22("overs",newOvers.toFixed(1));
    updateEconTeam22();
}

function minusOverTeam22(){
    let overs = getValBTeam22("overs122");
    let whole = Math.floor(overs);
    let balls = Math.round((overs - whole) * 10);

    if(balls === 0 && whole === 0) return;

    if(balls === 0){
        whole -= 1;
        balls = 5;
    } else {
        balls -= 1;
    }

    const newOvers = parseFloat(whole + "." + balls);
    syncBTeam22("overs",newOvers.toFixed(1));
    updateEconTeam22();
}

// Maidens
function addMaidenTeam22(){ syncBTeam22("maidens",getValBTeam22("maidens122")+1); }
function minusMaidenTeam22(){ syncBTeam22("maidens",Math.max(0,getValBTeam22("maidens122")-1)); }

// Runs
function addBowlerRunsTeam22(r){ syncBTeam22("bruns",getValBTeam22("bruns122")+r); updateEconTeam22(); }
function minusBowlerRunsTeam22(r){ syncBTeam22("bruns",Math.max(0,getValBTeam22("bruns122")-r)); updateEconTeam22(); }

// Wickets
function addWicketTeam22(){ syncBTeam22("wickets",getValBTeam22("wickets122")+1); }
function minusWicketTeam22(){ syncBTeam22("wickets",Math.max(0,getValBTeam22("wickets122")-1)); }

// Economy
function updateEconTeam22(){
    const runs=getValBTeam22("bruns122");
    const overs=getValBTeam22("overs122");
    const whole=Math.floor(overs);
    const balls=Math.round((overs - whole)*10);
    const totalBalls = whole*6 + balls;
    const econ = totalBalls>0 ? (runs/(totalBalls/6)).toFixed(2) : "0.00";
    syncBTeam22("econ",econ);
}

// Reset all
function resetAllBowlingTeam22(){
    syncBTeam22("overs",0.0);
    syncBTeam22("maidens",0);
    syncBTeam22("bruns",0);
    syncBTeam22("wickets",0);
    syncBTeam22("econ","0.00");
}

// ================= Image Upload =================
document.getElementById("bimageInput122").addEventListener("change",loadBImageTeam22);
document.getElementById("bimageInput222").addEventListener("change",loadBImageTeam22);

function loadBImageTeam22(e){
    const reader=new FileReader();
    reader.onload=function(){
        bowlers22.forEach(i=>{
            document.getElementById("bimg"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}

function deleteBImageTeam22(){
    bowlers22.forEach(i=>{
        document.getElementById("bimg"+i).src="";
    });
}

function resetBImageTeam22(id){
    document.getElementById("bimageInput"+id).value="";
    deleteBImageTeam22();
}



// ================= TEAM 22 JS =================
const group22 = [122,222,622,722];

function syncTeam22(prefix,value){
    group22.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

function getValTeam22(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseInt(el.innerText)||0;
}

function updateSRTeam22(){
    const runs=getValTeam22("runs122");
    const balls=getValTeam22("balls122");
    const sr=balls>0?((runs/balls)*100).toFixed(2):"0.00";
    syncTeam22("strikeRate",sr);
}

function addRunsTeam22(r){
    syncTeam22("runs",getValTeam22("runs122")+r);
    syncTeam22("balls",getValTeam22("balls122")+1);
    updateSRTeam22();
}

function minusRunsTeam22(r){
    let runs=getValTeam22("runs122")-r;
    let balls=getValTeam22("balls122")-1;
    if(runs<0) runs=0;
    if(balls<0) balls=0;
    syncTeam22("runs",runs);
    syncTeam22("balls",balls);
    updateSRTeam22();
}

function addFourTeam22(){ addRunsTeam22(4); syncTeam22("fours",getValTeam22("fours122")+1); }
function minusFourTeam22(){ minusRunsTeam22(4); syncTeam22("fours",Math.max(0,getValTeam22("fours122")-1)); }
function addSixTeam22(){ addRunsTeam22(6); syncTeam22("sixes",getValTeam22("sixes122")+1); }
function minusSixTeam22(){ minusRunsTeam22(6); syncTeam22("sixes",Math.max(0,getValTeam22("sixes122")-1)); }
function dotBallTeam22(){ syncTeam22("balls",getValTeam22("balls122")+1); updateSRTeam22(); }
function resetAllTeam22(){
    syncTeam22("runs",0);
    syncTeam22("balls",0);
    syncTeam22("fours",0);
    syncTeam22("sixes",0);
    syncTeam22("strikeRate","0.00");
}

function addNameTeam22(id){
    const name=document.getElementById("nameInput"+id).value;
    group22.forEach(i=>{
        document.getElementById("name"+i).innerText=name;
    });
}
function deleteNameTeam22(){
    group22.forEach(i=>{
        document.getElementById("name"+i).innerText="";
    });
}
function resetNameTeam22(id){
    document.getElementById("nameInput"+id).value="";
    deleteNameTeam22();
}

function deleteImageTeam22(){
    group22.forEach(i=>{
        document.getElementById("img"+i).src="";
    });
}
function resetImageTeam22(id){
    document.getElementById("imageInput"+id).value="";
    deleteImageTeam22();
}
document.getElementById("imageInput122").addEventListener("change",loadImageTeam22);
document.getElementById("imageInput222").addEventListener("change",loadImageTeam22);
function loadImageTeam22(e){
    const reader=new FileReader();
    reader.onload=function(){
        group22.forEach(i=>{
            document.getElementById("img"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}



// ================= TEAM 21 JS =================
const group21 = [121,221,621,721];

function syncTeam21(prefix,value){
    group21.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

function getValTeam21(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseInt(el.innerText)||0;
}

function updateSRTeam21(){
    const runs=getValTeam21("runs121");
    const balls=getValTeam21("balls121");
    const sr=balls>0?((runs/balls)*100).toFixed(2):"0.00";
    syncTeam21("strikeRate",sr);
}

function addRunsTeam21(r){
    syncTeam21("runs",getValTeam21("runs121")+r);
    syncTeam21("balls",getValTeam21("balls121")+1);
    updateSRTeam21();
}

function minusRunsTeam21(r){
    let runs=getValTeam21("runs121")-r;
    let balls=getValTeam21("balls121")-1;
    if(runs<0) runs=0;
    if(balls<0) balls=0;
    syncTeam21("runs",runs);
    syncTeam21("balls",balls);
    updateSRTeam21();
}

function addFourTeam21(){ addRunsTeam21(4); syncTeam21("fours",getValTeam21("fours121")+1); }
function minusFourTeam21(){ minusRunsTeam21(4); syncTeam21("fours",Math.max(0,getValTeam21("fours121")-1)); }
function addSixTeam21(){ addRunsTeam21(6); syncTeam21("sixes",getValTeam21("sixes121")+1); }
function minusSixTeam21(){ minusRunsTeam21(6); syncTeam21("sixes",Math.max(0,getValTeam21("sixes121")-1)); }
function dotBallTeam21(){ syncTeam21("balls",getValTeam21("balls121")+1); updateSRTeam21(); }
function resetAllTeam21(){
    syncTeam21("runs",0);
    syncTeam21("balls",0);
    syncTeam21("fours",0);
    syncTeam21("sixes",0);
    syncTeam21("strikeRate","0.00");
}

function addNameTeam21(id){
    const name=document.getElementById("nameInput"+id).value;
    group21.forEach(i=>{
        document.getElementById("name"+i).innerText=name;
    });
}
function deleteNameTeam21(){
    group21.forEach(i=>{
        document.getElementById("name"+i).innerText="";
    });
}
function resetNameTeam21(id){
    document.getElementById("nameInput"+id).value="";
    deleteNameTeam21();
}

function deleteImageTeam21(){
    group21.forEach(i=>{
        document.getElementById("img"+i).src="";
    });
}
function resetImageTeam21(id){
    document.getElementById("imageInput"+id).value="";
    deleteImageTeam21();
}
document.getElementById("imageInput121").addEventListener("change",loadImageTeam21);
document.getElementById("imageInput221").addEventListener("change",loadImageTeam21);
function loadImageTeam21(e){
    const reader=new FileReader();
    reader.onload=function(){
        group21.forEach(i=>{
            document.getElementById("img"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}



// ================= TEAM 20 JS =================
const group20 = [120,220,620,720];

function syncTeam20(prefix,value){
    group20.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

function getValTeam20(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseInt(el.innerText)||0;
}

function updateSRTeam20(){
    const runs=getValTeam20("runs120");
    const balls=getValTeam20("balls120");
    const sr=balls>0?((runs/balls)*100).toFixed(2):"0.00";
    syncTeam20("strikeRate",sr);
}

function addRunsTeam20(r){
    syncTeam20("runs",getValTeam20("runs120")+r);
    syncTeam20("balls",getValTeam20("balls120")+1);
    updateSRTeam20();
}

function minusRunsTeam20(r){
    let runs=getValTeam20("runs120")-r;
    let balls=getValTeam20("balls120")-1;
    if(runs<0) runs=0;
    if(balls<0) balls=0;
    syncTeam20("runs",runs);
    syncTeam20("balls",balls);
    updateSRTeam20();
}

function addFourTeam20(){ addRunsTeam20(4); syncTeam20("fours",getValTeam20("fours120")+1); }
function minusFourTeam20(){ minusRunsTeam20(4); syncTeam20("fours",Math.max(0,getValTeam20("fours120")-1)); }
function addSixTeam20(){ addRunsTeam20(6); syncTeam20("sixes",getValTeam20("sixes120")+1); }
function minusSixTeam20(){ minusRunsTeam20(6); syncTeam20("sixes",Math.max(0,getValTeam20("sixes120")-1)); }
function dotBallTeam20(){ syncTeam20("balls",getValTeam20("balls120")+1); updateSRTeam20(); }
function resetAllTeam20(){
    syncTeam20("runs",0);
    syncTeam20("balls",0);
    syncTeam20("fours",0);
    syncTeam20("sixes",0);
    syncTeam20("strikeRate","0.00");
}

function addNameTeam20(id){
    const name=document.getElementById("nameInput"+id).value;
    group20.forEach(i=>{
        document.getElementById("name"+i).innerText=name;
    });
}
function deleteNameTeam20(){
    group20.forEach(i=>{
        document.getElementById("name"+i).innerText="";
    });
}
function resetNameTeam20(id){
    document.getElementById("nameInput"+id).value="";
    deleteNameTeam20();
}

function deleteImageTeam20(){
    group20.forEach(i=>{
        document.getElementById("img"+i).src="";
    });
}
function resetImageTeam20(id){
    document.getElementById("imageInput"+id).value="";
    deleteImageTeam20();
}
document.getElementById("imageInput120").addEventListener("change",loadImageTeam20);
document.getElementById("imageInput220").addEventListener("change",loadImageTeam20);
function loadImageTeam20(e){
    const reader=new FileReader();
    reader.onload=function(){
        group20.forEach(i=>{
            document.getElementById("img"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}



// ================= TEAM 19 JS =================
const group19 = [119,219,619,719];

function syncTeam19(prefix,value){
    group19.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

function getValTeam19(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseInt(el.innerText)||0;
}

function updateSRTeam19(){
    const runs=getValTeam19("runs119");
    const balls=getValTeam19("balls119");
    const sr=balls>0?((runs/balls)*100).toFixed(2):"0.00";
    syncTeam19("strikeRate",sr);
}

function addRunsTeam19(r){
    syncTeam19("runs",getValTeam19("runs119")+r);
    syncTeam19("balls",getValTeam19("balls119")+1);
    updateSRTeam19();
}

function minusRunsTeam19(r){
    let runs=getValTeam19("runs119")-r;
    let balls=getValTeam19("balls119")-1;
    if(runs<0) runs=0;
    if(balls<0) balls=0;
    syncTeam19("runs",runs);
    syncTeam19("balls",balls);
    updateSRTeam19();
}

function addFourTeam19(){ addRunsTeam19(4); syncTeam19("fours",getValTeam19("fours119")+1); }
function minusFourTeam19(){ minusRunsTeam19(4); syncTeam19("fours",Math.max(0,getValTeam19("fours119")-1)); }
function addSixTeam19(){ addRunsTeam19(6); syncTeam19("sixes",getValTeam19("sixes119")+1); }
function minusSixTeam19(){ minusRunsTeam19(6); syncTeam19("sixes",Math.max(0,getValTeam19("sixes119")-1)); }
function dotBallTeam19(){ syncTeam19("balls",getValTeam19("balls119")+1); updateSRTeam19(); }
function resetAllTeam19(){
    syncTeam19("runs",0);
    syncTeam19("balls",0);
    syncTeam19("fours",0);
    syncTeam19("sixes",0);
    syncTeam19("strikeRate","0.00");
}

function addNameTeam19(id){
    const name=document.getElementById("nameInput"+id).value;
    group19.forEach(i=>{
        document.getElementById("name"+i).innerText=name;
    });
}
function deleteNameTeam19(){
    group19.forEach(i=>{
        document.getElementById("name"+i).innerText="";
    });
}
function resetNameTeam19(id){
    document.getElementById("nameInput"+id).value="";
    deleteNameTeam19();
}

function deleteImageTeam19(){
    group19.forEach(i=>{
        document.getElementById("img"+i).src="";
    });
}
function resetImageTeam19(id){
    document.getElementById("imageInput"+id).value="";
    deleteImageTeam19();
}
document.getElementById("imageInput119").addEventListener("change",loadImageTeam19);
document.getElementById("imageInput219").addEventListener("change",loadImageTeam19);
function loadImageTeam19(e){
    const reader=new FileReader();
    reader.onload=function(){
        group19.forEach(i=>{
            document.getElementById("img"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}



// ================= TEAM 18 JS =================
const group18 = [118,218,618,718];

function syncTeam18(prefix,value){
    group18.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

function getValTeam18(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseInt(el.innerText)||0;
}

function updateSRTeam18(){
    const runs=getValTeam18("runs118");
    const balls=getValTeam18("balls118");
    const sr=balls>0?((runs/balls)*100).toFixed(2):"0.00";
    syncTeam18("strikeRate",sr);
}

function addRunsTeam18(r){
    syncTeam18("runs",getValTeam18("runs118")+r);
    syncTeam18("balls",getValTeam18("balls118")+1);
    updateSRTeam18();
}

function minusRunsTeam18(r){
    let runs=getValTeam18("runs118")-r;
    let balls=getValTeam18("balls118")-1;
    if(runs<0) runs=0;
    if(balls<0) balls=0;
    syncTeam18("runs",runs);
    syncTeam18("balls",balls);
    updateSRTeam18();
}

function addFourTeam18(){ addRunsTeam18(4); syncTeam18("fours",getValTeam18("fours118")+1); }
function minusFourTeam18(){ minusRunsTeam18(4); syncTeam18("fours",Math.max(0,getValTeam18("fours118")-1)); }
function addSixTeam18(){ addRunsTeam18(6); syncTeam18("sixes",getValTeam18("sixes118")+1); }
function minusSixTeam18(){ minusRunsTeam18(6); syncTeam18("sixes",Math.max(0,getValTeam18("sixes118")-1)); }
function dotBallTeam18(){ syncTeam18("balls",getValTeam18("balls118")+1); updateSRTeam18(); }
function resetAllTeam18(){
    syncTeam18("runs",0);
    syncTeam18("balls",0);
    syncTeam18("fours",0);
    syncTeam18("sixes",0);
    syncTeam18("strikeRate","0.00");
}

function addNameTeam18(id){
    const name=document.getElementById("nameInput"+id).value;
    group18.forEach(i=>{
        document.getElementById("name"+i).innerText=name;
    });
}
function deleteNameTeam18(){
    group18.forEach(i=>{
        document.getElementById("name"+i).innerText="";
    });
}
function resetNameTeam18(id){
    document.getElementById("nameInput"+id).value="";
    deleteNameTeam18();
}

function deleteImageTeam18(){
    group18.forEach(i=>{
        document.getElementById("img"+i).src="";
    });
}
function resetImageTeam18(id){
    document.getElementById("imageInput"+id).value="";
    deleteImageTeam18();
}
document.getElementById("imageInput118").addEventListener("change",loadImageTeam18);
document.getElementById("imageInput218").addEventListener("change",loadImageTeam18);
function loadImageTeam18(e){
    const reader=new FileReader();
    reader.onload=function(){
        group18.forEach(i=>{
            document.getElementById("img"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}
  


// ================= TEAM 17 JS =================
const group17 = [117,217,617,717];

function syncTeam17(prefix,value){
    group17.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

function getValTeam17(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseInt(el.innerText)||0;
}

function updateSRTeam17(){
    const runs=getValTeam17("runs117");
    const balls=getValTeam17("balls117");
    const sr=balls>0?((runs/balls)*100).toFixed(2):"0.00";
    syncTeam17("strikeRate",sr);
}

function addRunsTeam17(r){
    syncTeam17("runs",getValTeam17("runs117")+r);
    syncTeam17("balls",getValTeam17("balls117")+1);
    updateSRTeam17();
}

function minusRunsTeam17(r){
    let runs=getValTeam17("runs117")-r;
    let balls=getValTeam17("balls117")-1;
    if(runs<0) runs=0;
    if(balls<0) balls=0;
    syncTeam17("runs",runs);
    syncTeam17("balls",balls);
    updateSRTeam17();
}

function addFourTeam17(){ addRunsTeam17(4); syncTeam17("fours",getValTeam17("fours117")+1); }
function minusFourTeam17(){ minusRunsTeam17(4); syncTeam17("fours",Math.max(0,getValTeam17("fours117")-1)); }
function addSixTeam17(){ addRunsTeam17(6); syncTeam17("sixes",getValTeam17("sixes117")+1); }
function minusSixTeam17(){ minusRunsTeam17(6); syncTeam17("sixes",Math.max(0,getValTeam17("sixes117")-1)); }
function dotBallTeam17(){ syncTeam17("balls",getValTeam17("balls117")+1); updateSRTeam17(); }
function resetAllTeam17(){
    syncTeam17("runs",0);
    syncTeam17("balls",0);
    syncTeam17("fours",0);
    syncTeam17("sixes",0);
    syncTeam17("strikeRate","0.00");
}

function addNameTeam17(id){
    const name=document.getElementById("nameInput"+id).value;
    group17.forEach(i=>{
        document.getElementById("name"+i).innerText=name;
    });
}
function deleteNameTeam17(){
    group17.forEach(i=>{
        document.getElementById("name"+i).innerText="";
    });
}
function resetNameTeam17(id){
    document.getElementById("nameInput"+id).value="";
    deleteNameTeam17();
}

function deleteImageTeam17(){
    group17.forEach(i=>{
        document.getElementById("img"+i).src="";
    });
}
function resetImageTeam17(id){
    document.getElementById("imageInput"+id).value="";
    deleteImageTeam17();
}
document.getElementById("imageInput117").addEventListener("change",loadImageTeam17);
document.getElementById("imageInput217").addEventListener("change",loadImageTeam17);
function loadImageTeam17(e){
    const reader=new FileReader();
    reader.onload=function(){
        group17.forEach(i=>{
            document.getElementById("img"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}



// ================= TEAM 16 JS =================
const group16 = [116,216,616,716];

function syncTeam16(prefix,value){
    group16.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

function getValTeam16(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseInt(el.innerText)||0;
}

function updateSRTeam16(){
    const runs=getValTeam16("runs116");
    const balls=getValTeam16("balls116");
    const sr=balls>0?((runs/balls)*100).toFixed(2):"0.00";
    syncTeam16("strikeRate",sr);
}

function addRunsTeam16(r){
    syncTeam16("runs",getValTeam16("runs116")+r);
    syncTeam16("balls",getValTeam16("balls116")+1);
    updateSRTeam16();
}

function minusRunsTeam16(r){
    let runs=getValTeam16("runs116")-r;
    let balls=getValTeam16("balls116")-1;
    if(runs<0) runs=0;
    if(balls<0) balls=0;
    syncTeam16("runs",runs);
    syncTeam16("balls",balls);
    updateSRTeam16();
}

function addFourTeam16(){ addRunsTeam16(4); syncTeam16("fours",getValTeam16("fours116")+1); }
function minusFourTeam16(){ minusRunsTeam16(4); syncTeam16("fours",Math.max(0,getValTeam16("fours116")-1)); }
function addSixTeam16(){ addRunsTeam16(6); syncTeam16("sixes",getValTeam16("sixes116")+1); }
function minusSixTeam16(){ minusRunsTeam16(6); syncTeam16("sixes",Math.max(0,getValTeam16("sixes116")-1)); }
function dotBallTeam16(){ syncTeam16("balls",getValTeam16("balls116")+1); updateSRTeam16(); }
function resetAllTeam16(){
    syncTeam16("runs",0);
    syncTeam16("balls",0);
    syncTeam16("fours",0);
    syncTeam16("sixes",0);
    syncTeam16("strikeRate","0.00");
}

function addNameTeam16(id){
    const name=document.getElementById("nameInput"+id).value;
    group16.forEach(i=>{
        document.getElementById("name"+i).innerText=name;
    });
}
function deleteNameTeam16(){
    group16.forEach(i=>{
        document.getElementById("name"+i).innerText="";
    });
}
function resetNameTeam16(id){
    document.getElementById("nameInput"+id).value="";
    deleteNameTeam16();
}

function deleteImageTeam16(){
    group16.forEach(i=>{
        document.getElementById("img"+i).src="";
    });
}
function resetImageTeam16(id){
    document.getElementById("imageInput"+id).value="";
    deleteImageTeam16();
}
document.getElementById("imageInput116").addEventListener("change",loadImageTeam16);
document.getElementById("imageInput216").addEventListener("change",loadImageTeam16);
function loadImageTeam16(e){
    const reader=new FileReader();
    reader.onload=function(){
        group16.forEach(i=>{
            document.getElementById("img"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}



// ================= TEAM 15 JS =================
const group15 = [115,215,615,715];

function syncTeam15(prefix,value){
    group15.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

function getValTeam15(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseInt(el.innerText)||0;
}

function updateSRTeam15(){
    const runs=getValTeam15("runs115");
    const balls=getValTeam15("balls115");
    const sr=balls>0?((runs/balls)*100).toFixed(2):"0.00";
    syncTeam15("strikeRate",sr);
}

function addRunsTeam15(r){
    syncTeam15("runs",getValTeam15("runs115")+r);
    syncTeam15("balls",getValTeam15("balls115")+1);
    updateSRTeam15();
}

function minusRunsTeam15(r){
    let runs=getValTeam15("runs115")-r;
    let balls=getValTeam15("balls115")-1;
    if(runs<0) runs=0;
    if(balls<0) balls=0;
    syncTeam15("runs",runs);
    syncTeam15("balls",balls);
    updateSRTeam15();
}

function addFourTeam15(){ addRunsTeam15(4); syncTeam15("fours",getValTeam15("fours115")+1); }
function minusFourTeam15(){ minusRunsTeam15(4); syncTeam15("fours",Math.max(0,getValTeam15("fours115")-1)); }
function addSixTeam15(){ addRunsTeam15(6); syncTeam15("sixes",getValTeam15("sixes115")+1); }
function minusSixTeam15(){ minusRunsTeam15(6); syncTeam15("sixes",Math.max(0,getValTeam15("sixes115")-1)); }
function dotBallTeam15(){ syncTeam15("balls",getValTeam15("balls115")+1); updateSRTeam15(); }
function resetAllTeam15(){
    syncTeam15("runs",0);
    syncTeam15("balls",0);
    syncTeam15("fours",0);
    syncTeam15("sixes",0);
    syncTeam15("strikeRate","0.00");
}

function addNameTeam15(id){
    const name=document.getElementById("nameInput"+id).value;
    group15.forEach(i=>{
        document.getElementById("name"+i).innerText=name;
    });
}
function deleteNameTeam15(){
    group15.forEach(i=>{
        document.getElementById("name"+i).innerText="";
    });
}
function resetNameTeam15(id){
    document.getElementById("nameInput"+id).value="";
    deleteNameTeam15();
}

function deleteImageTeam15(){
    group15.forEach(i=>{
        document.getElementById("img"+i).src="";
    });
}
function resetImageTeam15(id){
    document.getElementById("imageInput"+id).value="";
    deleteImageTeam15();
}
document.getElementById("imageInput115").addEventListener("change",loadImageTeam15);
document.getElementById("imageInput215").addEventListener("change",loadImageTeam15);
function loadImageTeam15(e){
    const reader=new FileReader();
    reader.onload=function(){
        group15.forEach(i=>{
            document.getElementById("img"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}



// ================= TEAM 14 JS =================
const group14 = [114,214,614,714];

function syncTeam14(prefix,value){
    group14.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

function getValTeam14(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseInt(el.innerText)||0;
}

function updateSRTeam14(){
    const runs=getValTeam14("runs114");
    const balls=getValTeam14("balls114");
    const sr=balls>0?((runs/balls)*100).toFixed(2):"0.00";
    syncTeam14("strikeRate",sr);
}

function addRunsTeam14(r){
    syncTeam14("runs",getValTeam14("runs114")+r);
    syncTeam14("balls",getValTeam14("balls114")+1);
    updateSRTeam14();
}

function minusRunsTeam14(r){
    let runs=getValTeam14("runs114")-r;
    let balls=getValTeam14("balls114")-1;
    if(runs<0) runs=0;
    if(balls<0) balls=0;
    syncTeam14("runs",runs);
    syncTeam14("balls",balls);
    updateSRTeam14();
}

function addFourTeam14(){ addRunsTeam14(4); syncTeam14("fours",getValTeam14("fours114")+1); }
function minusFourTeam14(){ minusRunsTeam14(4); syncTeam14("fours",Math.max(0,getValTeam14("fours114")-1)); }
function addSixTeam14(){ addRunsTeam14(6); syncTeam14("sixes",getValTeam14("sixes114")+1); }
function minusSixTeam14(){ minusRunsTeam14(6); syncTeam14("sixes",Math.max(0,getValTeam14("sixes114")-1)); }
function dotBallTeam14(){ syncTeam14("balls",getValTeam14("balls114")+1); updateSRTeam14(); }
function resetAllTeam14(){
    syncTeam14("runs",0);
    syncTeam14("balls",0);
    syncTeam14("fours",0);
    syncTeam14("sixes",0);
    syncTeam14("strikeRate","0.00");
}

function addNameTeam14(id){
    const name=document.getElementById("nameInput"+id).value;
    group14.forEach(i=>{
        document.getElementById("name"+i).innerText=name;
    });
}
function deleteNameTeam14(){
    group14.forEach(i=>{
        document.getElementById("name"+i).innerText="";
    });
}
function resetNameTeam14(id){
    document.getElementById("nameInput"+id).value="";
    deleteNameTeam14();
}

function deleteImageTeam14(){
    group14.forEach(i=>{
        document.getElementById("img"+i).src="";
    });
}
function resetImageTeam14(id){
    document.getElementById("imageInput"+id).value="";
    deleteImageTeam14();
}
document.getElementById("imageInput114").addEventListener("change",loadImageTeam14);
document.getElementById("imageInput214").addEventListener("change",loadImageTeam14);
function loadImageTeam14(e){
    const reader=new FileReader();
    reader.onload=function(){
        group14.forEach(i=>{
            document.getElementById("img"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}



// ================= TEAM 13 JS =================
const group13 = [113,213,613,713];

function syncTeam13(prefix,value){
    group13.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

function getValTeam13(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseInt(el.innerText)||0;
}

function updateSRTeam13(){
    const runs=getValTeam13("runs113");
    const balls=getValTeam13("balls113");
    const sr=balls>0?((runs/balls)*100).toFixed(2):"0.00";
    syncTeam13("strikeRate",sr);
}

function addRunsTeam13(r){
    syncTeam13("runs",getValTeam13("runs113")+r);
    syncTeam13("balls",getValTeam13("balls113")+1);
    updateSRTeam13();
}

function minusRunsTeam13(r){
    let runs=getValTeam13("runs113")-r;
    let balls=getValTeam13("balls113")-1;
    if(runs<0) runs=0;
    if(balls<0) balls=0;
    syncTeam13("runs",runs);
    syncTeam13("balls",balls);
    updateSRTeam13();
}

function addFourTeam13(){ addRunsTeam13(4); syncTeam13("fours",getValTeam13("fours113")+1); }
function minusFourTeam13(){ minusRunsTeam13(4); syncTeam13("fours",Math.max(0,getValTeam13("fours113")-1)); }
function addSixTeam13(){ addRunsTeam13(6); syncTeam13("sixes",getValTeam13("sixes113")+1); }
function minusSixTeam13(){ minusRunsTeam13(6); syncTeam13("sixes",Math.max(0,getValTeam13("sixes113")-1)); }
function dotBallTeam13(){ syncTeam13("balls",getValTeam13("balls113")+1); updateSRTeam13(); }
function resetAllTeam13(){
    syncTeam13("runs",0);
    syncTeam13("balls",0);
    syncTeam13("fours",0);
    syncTeam13("sixes",0);
    syncTeam13("strikeRate","0.00");
}

function addNameTeam13(id){
    const name=document.getElementById("nameInput"+id).value;
    group13.forEach(i=>{
        document.getElementById("name"+i).innerText=name;
    });
}
function deleteNameTeam13(){
    group13.forEach(i=>{
        document.getElementById("name"+i).innerText="";
    });
}
function resetNameTeam13(id){
    document.getElementById("nameInput"+id).value="";
    deleteNameTeam13();
}

function deleteImageTeam13(){
    group13.forEach(i=>{
        document.getElementById("img"+i).src="";
    });
}
function resetImageTeam13(id){
    document.getElementById("imageInput"+id).value="";
    deleteImageTeam13();
}
document.getElementById("imageInput113").addEventListener("change",loadImageTeam13);
document.getElementById("imageInput213").addEventListener("change",loadImageTeam13);
function loadImageTeam13(e){
    const reader=new FileReader();
    reader.onload=function(){
        group13.forEach(i=>{
            document.getElementById("img"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}



// ================= TEAM 12 JS =================
const group12 = [112,212,612,712];

function syncTeam12(prefix,value){
    group12.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

function getValTeam12(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseInt(el.innerText)||0;
}

function updateSRTeam12(){
    const runs=getValTeam12("runs112");
    const balls=getValTeam12("balls112");
    const sr=balls>0?((runs/balls)*100).toFixed(2):"0.00";
    syncTeam12("strikeRate",sr);
}

function addRunsTeam12(r){
    syncTeam12("runs",getValTeam12("runs112")+r);
    syncTeam12("balls",getValTeam12("balls112")+1);
    updateSRTeam12();
}

function minusRunsTeam12(r){
    let runs=getValTeam12("runs112")-r;
    let balls=getValTeam12("balls112")-1;
    if(runs<0) runs=0;
    if(balls<0) balls=0;
    syncTeam12("runs",runs);
    syncTeam12("balls",balls);
    updateSRTeam12();
}

function addFourTeam12(){ addRunsTeam12(4); syncTeam12("fours",getValTeam12("fours112")+1); }
function minusFourTeam12(){ minusRunsTeam12(4); syncTeam12("fours",Math.max(0,getValTeam12("fours112")-1)); }
function addSixTeam12(){ addRunsTeam12(6); syncTeam12("sixes",getValTeam12("sixes112")+1); }
function minusSixTeam12(){ minusRunsTeam12(6); syncTeam12("sixes",Math.max(0,getValTeam12("sixes112")-1)); }
function dotBallTeam12(){ syncTeam12("balls",getValTeam12("balls112")+1); updateSRTeam12(); }
function resetAllTeam12(){
    syncTeam12("runs",0);
    syncTeam12("balls",0);
    syncTeam12("fours",0);
    syncTeam12("sixes",0);
    syncTeam12("strikeRate","0.00");
}

function addNameTeam12(id){
    const name=document.getElementById("nameInput"+id).value;
    group12.forEach(i=>{
        document.getElementById("name"+i).innerText=name;
    });
}
function deleteNameTeam12(){
    group12.forEach(i=>{
        document.getElementById("name"+i).innerText="";
    });
}
function resetNameTeam12(id){
    document.getElementById("nameInput"+id).value="";
    deleteNameTeam12();
}

function deleteImageTeam12(){
    group12.forEach(i=>{
        document.getElementById("img"+i).src="";
    });
}
function resetImageTeam12(id){
    document.getElementById("imageInput"+id).value="";
    deleteImageTeam12();
}
document.getElementById("imageInput112").addEventListener("change",loadImageTeam12);
document.getElementById("imageInput212").addEventListener("change",loadImageTeam12);
function loadImageTeam12(e){
    const reader=new FileReader();
    reader.onload=function(){
        group12.forEach(i=>{
            document.getElementById("img"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}



// ================= TEAM 11 JS =================
const group11 = [111,211,611,711];

function syncTeam11(prefix,value){
    group11.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

function getValTeam11(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseInt(el.innerText)||0;
}

function updateSRTeam11(){
    const runs=getValTeam11("runs111");
    const balls=getValTeam11("balls111");
    const sr=balls>0?((runs/balls)*100).toFixed(2):"0.00";
    syncTeam11("strikeRate",sr);
}

function addRunsTeam11(r){
    syncTeam11("runs",getValTeam11("runs111")+r);
    syncTeam11("balls",getValTeam11("balls111")+1);
    updateSRTeam11();
}

function minusRunsTeam11(r){
    let runs=getValTeam11("runs111")-r;
    let balls=getValTeam11("balls111")-1;
    if(runs<0) runs=0;
    if(balls<0) balls=0;
    syncTeam11("runs",runs);
    syncTeam11("balls",balls);
    updateSRTeam11();
}

function addFourTeam11(){ addRunsTeam11(4); syncTeam11("fours",getValTeam11("fours111")+1); }
function minusFourTeam11(){ minusRunsTeam11(4); syncTeam11("fours",Math.max(0,getValTeam11("fours111")-1)); }
function addSixTeam11(){ addRunsTeam11(6); syncTeam11("sixes",getValTeam11("sixes111")+1); }
function minusSixTeam11(){ minusRunsTeam11(6); syncTeam11("sixes",Math.max(0,getValTeam11("sixes111")-1)); }
function dotBallTeam11(){ syncTeam11("balls",getValTeam11("balls111")+1); updateSRTeam11(); }
function resetAllTeam11(){
    syncTeam11("runs",0);
    syncTeam11("balls",0);
    syncTeam11("fours",0);
    syncTeam11("sixes",0);
    syncTeam11("strikeRate","0.00");
}

function addNameTeam11(id){
    const name=document.getElementById("nameInput"+id).value;
    group11.forEach(i=>{
        document.getElementById("name"+i).innerText=name;
    });
}
function deleteNameTeam11(){
    group11.forEach(i=>{
        document.getElementById("name"+i).innerText="";
    });
}
function resetNameTeam11(id){
    document.getElementById("nameInput"+id).value="";
    deleteNameTeam11();
}

function deleteImageTeam11(){
    group11.forEach(i=>{
        document.getElementById("img"+i).src="";
    });
}
function resetImageTeam11(id){
    document.getElementById("imageInput"+id).value="";
    deleteImageTeam11();
}
document.getElementById("imageInput111").addEventListener("change",loadImageTeam11);
document.getElementById("imageInput211").addEventListener("change",loadImageTeam11);
function loadImageTeam11(e){
    const reader=new FileReader();
    reader.onload=function(){
        group11.forEach(i=>{
            document.getElementById("img"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}



// ================= TEAM 10 JS =================
const group10 = [110,210,610,710];

function syncTeam10(prefix,value){
    group10.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

function getValTeam10(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseInt(el.innerText)||0;
}

function updateSRTeam10(){
    const runs=getValTeam10("runs110");
    const balls=getValTeam10("balls110");
    const sr=balls>0?((runs/balls)*100).toFixed(2):"0.00";
    syncTeam10("strikeRate",sr);
}

function addRunsTeam10(r){
    syncTeam10("runs",getValTeam10("runs110")+r);
    syncTeam10("balls",getValTeam10("balls110")+1);
    updateSRTeam10();
}

function minusRunsTeam10(r){
    let runs=getValTeam10("runs110")-r;
    let balls=getValTeam10("balls110")-1;
    if(runs<0) runs=0;
    if(balls<0) balls=0;
    syncTeam10("runs",runs);
    syncTeam10("balls",balls);
    updateSRTeam10();
}

function addFourTeam10(){ addRunsTeam10(4); syncTeam10("fours",getValTeam10("fours110")+1); }
function minusFourTeam10(){ minusRunsTeam10(4); syncTeam10("fours",Math.max(0,getValTeam10("fours110")-1)); }
function addSixTeam10(){ addRunsTeam10(6); syncTeam10("sixes",getValTeam10("sixes110")+1); }
function minusSixTeam10(){ minusRunsTeam10(6); syncTeam10("sixes",Math.max(0,getValTeam10("sixes110")-1)); }
function dotBallTeam10(){ syncTeam10("balls",getValTeam10("balls110")+1); updateSRTeam10(); }
function resetAllTeam10(){
    syncTeam10("runs",0);
    syncTeam10("balls",0);
    syncTeam10("fours",0);
    syncTeam10("sixes",0);
    syncTeam10("strikeRate","0.00");
}

function addNameTeam10(id){
    const name=document.getElementById("nameInput"+id).value;
    group10.forEach(i=>{
        document.getElementById("name"+i).innerText=name;
    });
}
function deleteNameTeam10(){
    group10.forEach(i=>{
        document.getElementById("name"+i).innerText="";
    });
}
function resetNameTeam10(id){
    document.getElementById("nameInput"+id).value="";
    deleteNameTeam10();
}

function deleteImageTeam10(){
    group10.forEach(i=>{
        document.getElementById("img"+i).src="";
    });
}
function resetImageTeam10(id){
    document.getElementById("imageInput"+id).value="";
    deleteImageTeam10();
}
document.getElementById("imageInput110").addEventListener("change",loadImageTeam10);
document.getElementById("imageInput210").addEventListener("change",loadImageTeam10);
function loadImageTeam10(e){
    const reader=new FileReader();
    reader.onload=function(){
        group10.forEach(i=>{
            document.getElementById("img"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}




// ================= TEAM 9 JS =================
const group9 = [109,209,609,709];

function syncTeam9(prefix,value){
    group9.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

function getValTeam9(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseInt(el.innerText)||0;
}

function updateSRTeam9(){
    const runs=getValTeam9("runs109");
    const balls=getValTeam9("balls109");
    const sr=balls>0?((runs/balls)*100).toFixed(2):"0.00";
    syncTeam9("strikeRate",sr);
}

function addRunsTeam9(r){
    syncTeam9("runs",getValTeam9("runs109")+r);
    syncTeam9("balls",getValTeam9("balls109")+1);
    updateSRTeam9();
}

function minusRunsTeam9(r){
    let runs=getValTeam9("runs109")-r;
    let balls=getValTeam9("balls109")-1;
    if(runs<0) runs=0;
    if(balls<0) balls=0;
    syncTeam9("runs",runs);
    syncTeam9("balls",balls);
    updateSRTeam9();
}

function addFourTeam9(){ addRunsTeam9(4); syncTeam9("fours",getValTeam9("fours109")+1); }
function minusFourTeam9(){ minusRunsTeam9(4); syncTeam9("fours",Math.max(0,getValTeam9("fours109")-1)); }
function addSixTeam9(){ addRunsTeam9(6); syncTeam9("sixes",getValTeam9("sixes109")+1); }
function minusSixTeam9(){ minusRunsTeam9(6); syncTeam9("sixes",Math.max(0,getValTeam9("sixes109")-1)); }
function dotBallTeam9(){ syncTeam9("balls",getValTeam9("balls109")+1); updateSRTeam9(); }
function resetAllTeam9(){
    syncTeam9("runs",0);
    syncTeam9("balls",0);
    syncTeam9("fours",0);
    syncTeam9("sixes",0);
    syncTeam9("strikeRate","0.00");
}

function addNameTeam9(id){
    const name=document.getElementById("nameInput"+id).value;
    group9.forEach(i=>{
        document.getElementById("name"+i).innerText=name;
    });
}
function deleteNameTeam9(){
    group9.forEach(i=>{
        document.getElementById("name"+i).innerText="";
    });
}
function resetNameTeam9(id){
    document.getElementById("nameInput"+id).value="";
    deleteNameTeam9();
}

function deleteImageTeam9(){
    group9.forEach(i=>{
        document.getElementById("img"+i).src="";
    });
}
function resetImageTeam9(id){
    document.getElementById("imageInput"+id).value="";
    deleteImageTeam9();
}
document.getElementById("imageInput109").addEventListener("change",loadImageTeam9);
document.getElementById("imageInput209").addEventListener("change",loadImageTeam9);
function loadImageTeam9(e){
    const reader=new FileReader();
    reader.onload=function(){
        group9.forEach(i=>{
            document.getElementById("img"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}



// ================= TEAM 8 JS =================
const group8 = [108,208,608,708];

function syncTeam8(prefix,value){
    group8.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

function getValTeam8(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseInt(el.innerText)||0;
}

function updateSRTeam8(){
    const runs=getValTeam8("runs108");
    const balls=getValTeam8("balls108");
    const sr=balls>0?((runs/balls)*100).toFixed(2):"0.00";
    syncTeam8("strikeRate",sr);
}

function addRunsTeam8(r){
    syncTeam8("runs",getValTeam8("runs108")+r);
    syncTeam8("balls",getValTeam8("balls108")+1);
    updateSRTeam8();
}

function minusRunsTeam8(r){
    let runs=getValTeam8("runs108")-r;
    let balls=getValTeam8("balls108")-1;
    if(runs<0) runs=0;
    if(balls<0) balls=0;
    syncTeam8("runs",runs);
    syncTeam8("balls",balls);
    updateSRTeam8();
}

function addFourTeam8(){ addRunsTeam8(4); syncTeam8("fours",getValTeam8("fours108")+1); }
function minusFourTeam8(){ minusRunsTeam8(4); syncTeam8("fours",Math.max(0,getValTeam8("fours108")-1)); }
function addSixTeam8(){ addRunsTeam8(6); syncTeam8("sixes",getValTeam8("sixes108")+1); }
function minusSixTeam8(){ minusRunsTeam8(6); syncTeam8("sixes",Math.max(0,getValTeam8("sixes108")-1)); }
function dotBallTeam8(){ syncTeam8("balls",getValTeam8("balls108")+1); updateSRTeam8(); }
function resetAllTeam8(){
    syncTeam8("runs",0);
    syncTeam8("balls",0);
    syncTeam8("fours",0);
    syncTeam8("sixes",0);
    syncTeam8("strikeRate","0.00");
}

function addNameTeam8(id){
    const name=document.getElementById("nameInput"+id).value;
    group8.forEach(i=>{
        document.getElementById("name"+i).innerText=name;
    });
}
function deleteNameTeam8(){
    group8.forEach(i=>{
        document.getElementById("name"+i).innerText="";
    });
}
function resetNameTeam8(id){
    document.getElementById("nameInput"+id).value="";
    deleteNameTeam8();
}

function deleteImageTeam8(){
    group8.forEach(i=>{
        document.getElementById("img"+i).src="";
    });
}
function resetImageTeam8(id){
    document.getElementById("imageInput"+id).value="";
    deleteImageTeam8();
}
document.getElementById("imageInput108").addEventListener("change",loadImageTeam8);
document.getElementById("imageInput208").addEventListener("change",loadImageTeam8);
function loadImageTeam8(e){
    const reader=new FileReader();
    reader.onload=function(){
        group8.forEach(i=>{
            document.getElementById("img"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}



// ================= TEAM 7 JS =================
const group7 = [107,207,607,707];

function syncTeam7(prefix,value){
    group7.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

function getValTeam7(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseInt(el.innerText)||0;
}

function updateSRTeam7(){
    const runs=getValTeam7("runs107");
    const balls=getValTeam7("balls107");
    const sr=balls>0?((runs/balls)*100).toFixed(2):"0.00";
    syncTeam7("strikeRate",sr);
}

function addRunsTeam7(r){
    syncTeam7("runs",getValTeam7("runs107")+r);
    syncTeam7("balls",getValTeam7("balls107")+1);
    updateSRTeam7();
}

function minusRunsTeam7(r){
    let runs=getValTeam7("runs107")-r;
    let balls=getValTeam7("balls107")-1;
    if(runs<0) runs=0;
    if(balls<0) balls=0;
    syncTeam7("runs",runs);
    syncTeam7("balls",balls);
    updateSRTeam7();
}

function addFourTeam7(){ addRunsTeam7(4); syncTeam7("fours",getValTeam7("fours107")+1); }
function minusFourTeam7(){ minusRunsTeam7(4); syncTeam7("fours",Math.max(0,getValTeam7("fours107")-1)); }
function addSixTeam7(){ addRunsTeam7(6); syncTeam7("sixes",getValTeam7("sixes107")+1); }
function minusSixTeam7(){ minusRunsTeam7(6); syncTeam7("sixes",Math.max(0,getValTeam7("sixes107")-1)); }
function dotBallTeam7(){ syncTeam7("balls",getValTeam7("balls107")+1); updateSRTeam7(); }
function resetAllTeam7(){
    syncTeam7("runs",0);
    syncTeam7("balls",0);
    syncTeam7("fours",0);
    syncTeam7("sixes",0);
    syncTeam7("strikeRate","0.00");
}

function addNameTeam7(id){
    const name=document.getElementById("nameInput"+id).value;
    group7.forEach(i=>{
        document.getElementById("name"+i).innerText=name;
    });
}
function deleteNameTeam7(){
    group7.forEach(i=>{
        document.getElementById("name"+i).innerText="";
    });
}
function resetNameTeam7(id){
    document.getElementById("nameInput"+id).value="";
    deleteNameTeam7();
}

function deleteImageTeam7(){
    group7.forEach(i=>{
        document.getElementById("img"+i).src="";
    });
}
function resetImageTeam7(id){
    document.getElementById("imageInput"+id).value="";
    deleteImageTeam7();
}
document.getElementById("imageInput107").addEventListener("change",loadImageTeam7);
document.getElementById("imageInput207").addEventListener("change",loadImageTeam7);
function loadImageTeam7(e){
    const reader=new FileReader();
    reader.onload=function(){
        group7.forEach(i=>{
            document.getElementById("img"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}




    const group6 = [106,206,606,706];

function syncTeam6(prefix,value){
    group6.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

function getValTeam6(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseInt(el.innerText)||0;
}

function updateSRTeam6(){
    const runs=getValTeam6("runs106");
    const balls=getValTeam6("balls106");
    const sr=balls>0?((runs/balls)*100).toFixed(2):"0.00";
    syncTeam6("strikeRate",sr);
}

function addRunsTeam6(r){
    syncTeam6("runs",getValTeam6("runs106")+r);
    syncTeam6("balls",getValTeam6("balls106")+1);
    updateSRTeam6();
}

function minusRunsTeam6(r){
    let runs=getValTeam6("runs106")-r;
    let balls=getValTeam6("balls106")-1;
    if(runs<0) runs=0;
    if(balls<0) balls=0;
    syncTeam6("runs",runs);
    syncTeam6("balls",balls);
    updateSRTeam6();
}

function addFourTeam6(){ addRunsTeam6(4); syncTeam6("fours",getValTeam6("fours106")+1); }
function minusFourTeam6(){ minusRunsTeam6(4); syncTeam6("fours",Math.max(0,getValTeam6("fours106")-1)); }
function addSixTeam6(){ addRunsTeam6(6); syncTeam6("sixes",getValTeam6("sixes106")+1); }
function minusSixTeam6(){ minusRunsTeam6(6); syncTeam6("sixes",Math.max(0,getValTeam6("sixes106")-1)); }
function dotBallTeam6(){ syncTeam6("balls",getValTeam6("balls106")+1); updateSRTeam6(); }
function resetAllTeam6(){
    syncTeam6("runs",0);
    syncTeam6("balls",0);
    syncTeam6("fours",0);
    syncTeam6("sixes",0);
    syncTeam6("strikeRate","0.00");
}

function addNameTeam6(id){
    const name=document.getElementById("nameInput"+id).value;
    group6.forEach(i=>{
        document.getElementById("name"+i).innerText=name;
    });
}
function deleteNameTeam6(){
    group6.forEach(i=>{
        document.getElementById("name"+i).innerText="";
    });
}
function resetNameTeam6(id){
    document.getElementById("nameInput"+id).value="";
    deleteNameTeam6();
}

function deleteImageTeam6(){
    group6.forEach(i=>{
        document.getElementById("img"+i).src="";
    });
}
function resetImageTeam6(id){
    document.getElementById("imageInput"+id).value="";
    deleteImageTeam6();
}
document.getElementById("imageInput106").addEventListener("change",loadImageTeam6);
document.getElementById("imageInput206").addEventListener("change",loadImageTeam6);
function loadImageTeam6(e){
    const reader=new FileReader();
    reader.onload=function(){
        group6.forEach(i=>{
            document.getElementById("img"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}






const group5 = [105,205,605,705];

function syncTeam5(prefix,value){
    group5.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

function getValTeam5(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseInt(el.innerText)||0;
}

function updateSRTeam5(){
    const runs=getValTeam5("runs105");
    const balls=getValTeam5("balls105");
    const sr=balls>0?((runs/balls)*100).toFixed(2):"0.00";
    syncTeam5("strikeRate",sr);
}

function addRunsTeam5(r){
    syncTeam5("runs",getValTeam5("runs105")+r);
    syncTeam5("balls",getValTeam5("balls105")+1);
    updateSRTeam5();
}

function minusRunsTeam5(r){
    let runs=getValTeam5("runs105")-r;
    let balls=getValTeam5("balls105")-1;
    if(runs<0) runs=0;
    if(balls<0) balls=0;
    syncTeam5("runs",runs);
    syncTeam5("balls",balls);
    updateSRTeam5();
}

function addFourTeam5(){ addRunsTeam5(4); syncTeam5("fours",getValTeam5("fours105")+1); }
function minusFourTeam5(){ minusRunsTeam5(4); syncTeam5("fours",Math.max(0,getValTeam5("fours105")-1)); }
function addSixTeam5(){ addRunsTeam5(6); syncTeam5("sixes",getValTeam5("sixes105")+1); }
function minusSixTeam5(){ minusRunsTeam5(6); syncTeam5("sixes",Math.max(0,getValTeam5("sixes105")-1)); }
function dotBallTeam5(){ syncTeam5("balls",getValTeam5("balls105")+1); updateSRTeam5(); }
function resetAllTeam5(){
    syncTeam5("runs",0);
    syncTeam5("balls",0);
    syncTeam5("fours",0);
    syncTeam5("sixes",0);
    syncTeam5("strikeRate","0.00");
}

function addNameTeam5(id){
    const name=document.getElementById("nameInput"+id).value;
    group5.forEach(i=>{
        document.getElementById("name"+i).innerText=name;
    });
}
function deleteNameTeam5(){
    group5.forEach(i=>{
        document.getElementById("name"+i).innerText="";
    });
}
function resetNameTeam5(id){
    document.getElementById("nameInput"+id).value="";
    deleteNameTeam5();
}

function deleteImageTeam5(){
    group5.forEach(i=>{
        document.getElementById("img"+i).src="";
    });
}
function resetImageTeam5(id){
    document.getElementById("imageInput"+id).value="";
    deleteImageTeam5();
}
document.getElementById("imageInput105").addEventListener("change",loadImageTeam5);
document.getElementById("imageInput205").addEventListener("change",loadImageTeam5);
function loadImageTeam5(e){
    const reader=new FileReader();
    reader.onload=function(){
        group5.forEach(i=>{
            document.getElementById("img"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}


const group4 = [104,204,604,704];

function syncTeam4(prefix,value){
    group4.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

function getValTeam4(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseInt(el.innerText)||0;
}

function updateSRTeam4(){
    const runs=getValTeam4("runs104");
    const balls=getValTeam4("balls104");
    const sr=balls>0?((runs/balls)*100).toFixed(2):"0.00";
    syncTeam4("strikeRate",sr);
}

function addRunsTeam4(r){
    syncTeam4("runs",getValTeam4("runs104")+r);
    syncTeam4("balls",getValTeam4("balls104")+1);
    updateSRTeam4();
}

function minusRunsTeam4(r){
    let runs=getValTeam4("runs104")-r;
    let balls=getValTeam4("balls104")-1;
    if(runs<0) runs=0;
    if(balls<0) balls=0;
    syncTeam4("runs",runs);
    syncTeam4("balls",balls);
    updateSRTeam4();
}

function addFourTeam4(){ addRunsTeam4(4); syncTeam4("fours",getValTeam4("fours104")+1); }
function minusFourTeam4(){ minusRunsTeam4(4); syncTeam4("fours",Math.max(0,getValTeam4("fours104")-1)); }
function addSixTeam4(){ addRunsTeam4(6); syncTeam4("sixes",getValTeam4("sixes104")+1); }
function minusSixTeam4(){ minusRunsTeam4(6); syncTeam4("sixes",Math.max(0,getValTeam4("sixes104")-1)); }
function dotBallTeam4(){ syncTeam4("balls",getValTeam4("balls104")+1); updateSRTeam4(); }
function resetAllTeam4(){
    syncTeam4("runs",0);
    syncTeam4("balls",0);
    syncTeam4("fours",0);
    syncTeam4("sixes",0);
    syncTeam4("strikeRate","0.00");
}

function addNameTeam4(id){
    const name=document.getElementById("nameInput"+id).value;
    group4.forEach(i=>{
        document.getElementById("name"+i).innerText=name;
    });
}
function deleteNameTeam4(){
    group4.forEach(i=>{
        document.getElementById("name"+i).innerText="";
    });
}
function resetNameTeam4(id){
    document.getElementById("nameInput"+id).value="";
    deleteNameTeam4();
}

function deleteImageTeam4(){
    group4.forEach(i=>{
        document.getElementById("img"+i).src="";
    });
}
function resetImageTeam4(id){
    document.getElementById("imageInput"+id).value="";
    deleteImageTeam4();
}
document.getElementById("imageInput104").addEventListener("change",loadImageTeam4);
document.getElementById("imageInput204").addEventListener("change",loadImageTeam4);
function loadImageTeam4(e){
    const reader=new FileReader();
    reader.onload=function(){
        group4.forEach(i=>{
            document.getElementById("img"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}




const group3 = [103,203,603,703];

function syncTeam3(prefix,value){
    group3.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

function getValTeam3(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseInt(el.innerText)||0;
}

function updateSRTeam3(){
    const runs=getValTeam3("runs103");
    const balls=getValTeam3("balls103");
    const sr=balls>0?((runs/balls)*100).toFixed(2):"0.00";
    syncTeam3("strikeRate",sr);
}

function addRunsTeam3(r){
    syncTeam3("runs",getValTeam3("runs103")+r);
    syncTeam3("balls",getValTeam3("balls103")+1);
    updateSRTeam3();
}

function minusRunsTeam3(r){
    let runs=getValTeam3("runs103")-r;
    let balls=getValTeam3("balls103")-1;
    if(runs<0) runs=0;
    if(balls<0) balls=0;
    syncTeam3("runs",runs);
    syncTeam3("balls",balls);
    updateSRTeam3();
}

function addFourTeam3(){ addRunsTeam3(4); syncTeam3("fours",getValTeam3("fours103")+1); }
function minusFourTeam3(){ minusRunsTeam3(4); syncTeam3("fours",Math.max(0,getValTeam3("fours103")-1)); }
function addSixTeam3(){ addRunsTeam3(6); syncTeam3("sixes",getValTeam3("sixes103")+1); }
function minusSixTeam3(){ minusRunsTeam3(6); syncTeam3("sixes",Math.max(0,getValTeam3("sixes103")-1)); }
function dotBallTeam3(){ syncTeam3("balls",getValTeam3("balls103")+1); updateSRTeam3(); }
function resetAllTeam3(){
    syncTeam3("runs",0);
    syncTeam3("balls",0);
    syncTeam3("fours",0);
    syncTeam3("sixes",0);
    syncTeam3("strikeRate","0.00");
}

function addNameTeam3(id){
    const name=document.getElementById("nameInput"+id).value;
    group3.forEach(i=>{
        document.getElementById("name"+i).innerText=name;
    });
}
function deleteNameTeam3(){
    group3.forEach(i=>{
        document.getElementById("name"+i).innerText="";
    });
}
function resetNameTeam3(id){
    document.getElementById("nameInput"+id).value="";
    deleteNameTeam3();
}

function deleteImageTeam3(){
    group3.forEach(i=>{
        document.getElementById("img"+i).src="";
    });
}
function resetImageTeam3(id){
    document.getElementById("imageInput"+id).value="";
    deleteImageTeam3();
}
document.getElementById("imageInput103").addEventListener("change",loadImageTeam3);
document.getElementById("imageInput203").addEventListener("change",loadImageTeam3);
function loadImageTeam3(e){
    const reader=new FileReader();
    reader.onload=function(){
        group3.forEach(i=>{
            document.getElementById("img"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}






const group2 = [102,202,602,702];

function syncTeam2(prefix,value){
    group2.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}

function getValTeam2(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseInt(el.innerText)||0;
}

function updateSRTeam2(){
    const runs=getValTeam2("runs102");
    const balls=getValTeam2("balls102");
    const sr=balls>0?((runs/balls)*100).toFixed(2):"0.00";
    syncTeam2("strikeRate",sr);
}

function addRunsTeam2(r){
    syncTeam2("runs",getValTeam2("runs102")+r);
    syncTeam2("balls",getValTeam2("balls102")+1);
    updateSRTeam2();
}

function minusRunsTeam2(r){
    let runs=getValTeam2("runs102")-r;
    let balls=getValTeam2("balls102")-1;
    if(runs<0) runs=0;
    if(balls<0) balls=0;
    syncTeam2("runs",runs);
    syncTeam2("balls",balls);
    updateSRTeam2();
}

function addFourTeam2(){ addRunsTeam2(4); syncTeam2("fours",getValTeam2("fours102")+1); }
function minusFourTeam2(){ minusRunsTeam2(4); syncTeam2("fours",Math.max(0,getValTeam2("fours102")-1)); }
function addSixTeam2(){ addRunsTeam2(6); syncTeam2("sixes",getValTeam2("sixes102")+1); }
function minusSixTeam2(){ minusRunsTeam2(6); syncTeam2("sixes",Math.max(0,getValTeam2("sixes102")-1)); }
function dotBallTeam2(){ syncTeam2("balls",getValTeam2("balls102")+1); updateSRTeam2(); }
function resetAllTeam2(){
    syncTeam2("runs",0);
    syncTeam2("balls",0);
    syncTeam2("fours",0);
    syncTeam2("sixes",0);
    syncTeam2("strikeRate","0.00");
}

function addNameTeam2(id){
    const name=document.getElementById("nameInput"+id).value;
    group2.forEach(i=>{
        document.getElementById("name"+i).innerText=name;
    });
}
function deleteNameTeam2(){
    group2.forEach(i=>{
        document.getElementById("name"+i).innerText="";
    });
}
function resetNameTeam2(id){
    document.getElementById("nameInput"+id).value="";
    deleteNameTeam2();
}

function deleteImageTeam2(){
    group2.forEach(i=>{
        document.getElementById("img"+i).src="";
    });
}
function resetImageTeam2(id){
    document.getElementById("imageInput"+id).value="";
    deleteImageTeam2();
}
document.getElementById("imageInput102").addEventListener("change",loadImageTeam2);
document.getElementById("imageInput202").addEventListener("change",loadImageTeam2);
function loadImageTeam2(e){
    const reader=new FileReader();
    reader.onload=function(){
        group2.forEach(i=>{
            document.getElementById("img"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}
const group=[101,201,601,701];

function sync(prefix,value){
    group.forEach(id=>{
        const el=document.getElementById(prefix+id);
        if(el) el.innerText=value;
    });
}
function getVal(id){
    const el=document.getElementById(id);
    if(!el) return 0;
    return parseInt(el.innerText)||0;
}
function updateSR(){
    const runs=getVal("runs101");
    const balls=getVal("balls101");
    const sr=balls>0?((runs/balls)*100).toFixed(2):"0.00";
    sync("strikeRate",sr);
}
function addRuns(r){
    sync("runs",getVal("runs101")+r);
    sync("balls",getVal("balls101")+1);
    updateSR();
}
function minusRuns(r){
    let runs=getVal("runs101")-r;
    let balls=getVal("balls101")-1;
    if(runs<0) runs=0;
    if(balls<0) balls=0;
    sync("runs",runs);
    sync("balls",balls);
    updateSR();
}
function addFour(){ addRuns(4); sync("fours",getVal("fours101")+1); }
function minusFour(){ minusRuns(4); sync("fours",Math.max(0,getVal("fours101")-1)); }
function addSix(){ addRuns(6); sync("sixes",getVal("sixes101")+1); }
function minusSix(){ minusRuns(6); sync("sixes",Math.max(0,getVal("sixes101")-1)); }
function dotBall(){ sync("balls",getVal("balls101")+1); updateSR(); }
function resetAll(){
    sync("runs",0);
    sync("balls",0);
    sync("fours",0);
    sync("sixes",0);
    sync("strikeRate","0.00");
}

function addName(id){
    const name=document.getElementById("nameInput"+id).value;
    group.forEach(i=>{
        document.getElementById("name"+i).innerText=name;
    });
}
function deleteName(){
    group.forEach(i=>{
        document.getElementById("name"+i).innerText="";
    });
}
function resetName(id){
    document.getElementById("nameInput"+id).value="";
    deleteName();
}

function deleteImage(){
    group.forEach(i=>{
        document.getElementById("img"+i).src="";
    });
}
function resetImage(id){
    document.getElementById("imageInput"+id).value="";
    deleteImage();
}
document.getElementById("imageInput101").addEventListener("change",loadImage);
document.getElementById("imageInput201").addEventListener("change",loadImage);
function loadImage(e){
    const reader=new FileReader();
    reader.onload=function(){
        group.forEach(i=>{
            document.getElementById("img"+i).src=reader.result;
        });
    }
    reader.readAsDataURL(e.target.files[0]);
}


// ================= TEAM A OVERS =================
function updateTotalOversA() {
  let totalBalls = 0;

  for (let i = 101; i <= 111; i++) {
    const el = document.getElementById('overs' + i);
    if (!el) continue;

    let value = el.innerText.trim();

    if (value.includes(".")) {
      let parts = value.split(".");
      let overPart = parseInt(parts[0]) || 0;
      let ballPart = parseInt(parts[1]) || 0;
      totalBalls += (overPart * 6) + ballPart;
    } else {
      totalBalls += (parseInt(value) || 0) * 6;
    }
  }

  const finalOvers = Math.floor(totalBalls / 6);
  const finalBalls = totalBalls % 6;

  document.getElementById("totalOversA").innerText =
    finalOvers + "." + finalBalls;
}

// Observe Team A overs
const observerOversA = new MutationObserver(updateTotalOversA);
for (let i = 101; i <= 111; i++) {
  const el = document.getElementById('overs' + i);
  if (el) {
    observerOversA.observe(el, {
      childList: true,
      characterData: true,
      subtree: true
    });
  }
}
updateTotalOversA();


// ================= TEAM B OVERS =================
function updateTotalOversB() {
  let totalBalls = 0;

  for (let i = 112; i <= 122; i++) {
    const el = document.getElementById('overs' + i);
    if (!el) continue;

    let value = el.innerText.trim();

    if (value.includes(".")) {
      let parts = value.split(".");
      let overPart = parseInt(parts[0]) || 0;
      let ballPart = parseInt(parts[1]) || 0;
      totalBalls += (overPart * 6) + ballPart;
    } else {
      totalBalls += (parseInt(value) || 0) * 6;
    }
  }

  const finalOvers = Math.floor(totalBalls / 6);
  const finalBalls = totalBalls % 6;

  document.getElementById("totalOversB").innerText =
    finalOvers + "." + finalBalls;
}

// Observe Team B overs
const observerOversB = new MutationObserver(updateTotalOversB);
for (let i = 112; i <= 122; i++) {
  const el = document.getElementById('overs' + i);
  if (el) {
    observerOversB.observe(el, {
      childList: true,
      characterData: true,
      subtree: true
    });
  }
}
updateTotalOversB();



// ================= TEAM A WICKETS =================
function updateTotalWicketsA() {
  let total = 0;

  for (let i = 101; i <= 111; i++) {
    const el = document.getElementById('wickets' + i);
    if (el) total += parseInt(el.innerText) || 0;
  }

  document.getElementById('totalWicketsA').innerText = total;
}

// Observe Team A wickets
const observerWicketsA = new MutationObserver(updateTotalWicketsA);
for (let i = 101; i <= 111; i++) {
  const el = document.getElementById('wickets' + i);
  if (el) {
    observerWicketsA.observe(el, {
      childList: true,
      characterData: true,
      subtree: true
    });
  }
}
updateTotalWicketsA();


// ================= TEAM B WICKETS =================
function updateTotalWicketsB() {
  let total = 0;

  for (let i = 112; i <= 122; i++) {
    const el = document.getElementById('wickets' + i);
    if (el) total += parseInt(el.innerText) || 0;
  }

  document.getElementById('totalWicketsB').innerText = total;
}

// Observe Team B wickets
const observerWicketsB = new MutationObserver(updateTotalWicketsB);
for (let i = 112; i <= 122; i++) {
  const el = document.getElementById('wickets' + i);
  if (el) {
    observerWicketsB.observe(el, {
      childList: true,
      characterData: true,
      subtree: true
    });
  }
}
updateTotalWicketsB();

