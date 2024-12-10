var l1 = Lt1;
var l2 = Lt2;
var l3 = Lb3;
var l4 = Lb4;

var m1 = Mt1;
var m2 = Mt2;

var kd = dot;
var rr = rickr;

var m5 = Mb5;
var m6 = Mb6;

var r1 = Rt1;
var r2 = Rt2;
var r3 = Rb3;
var r4 = Rb4;

var p1 = plt;
var p2 = plb;
var p3 = pmt;
var p4 = pmb;
var p5 = prt;
var p6 = prb;

// call this function when "blue-man" is clicked!
function addLeftTop() {
  reset();
  p1.classList.add("parent");
  l1.setAttribute("class", "lil-album font hover clack");
  l1.innerHTML = "DUCKWORTH.";
  l2.setAttribute("class", "lil-album font hover clack");
  l2.innerHTML = "LUST.";
}

function addLeftBot() {
  reset();
  p2.classList.add("parent");
  l3.setAttribute("class", "lil-album font hover clack");
  l3.innerHTML = "Alright";
  l4.setAttribute("class", "lil-album font hover clack");
  l4.innerHTML = "King Kunta";
}

function addMidTop() {
  reset();
  p3.classList.add("parent");
  m1.setAttribute("class", "lil-album font hover clack");
  m1.innerHTML = "Unititled 02";
  m2.setAttribute("class", "lil-album font hover clack");
  m2.innerHTML = "Unititled 03";
}

function addMidBot() {
  reset();
  p4.classList.add("parent");
  m5.setAttribute("class", "lil-album font hover clack");
  m5.innerHTML = "United In Grief";
  m6.setAttribute("class", "lil-album font hover clack");
  m6.innerHTML = "N95";
}

function addRightTop() {
  reset();
  p5.classList.add("parent");
  r1.setAttribute("class", "lil-album font hover clack");
  r1.innerHTML = "Rigamortus";
  r2.setAttribute("class", "lil-album font hover clack");
  r2.innerHTML = "A.D.H.D";
}

function addRightBot() {
  reset();
  p6.classList.add("parent");
  r3.setAttribute("class", "lil-album font hover clack");
  r3.innerHTML = "Sing About Me, <br />I'm Dying Of Thirst";
  r4.setAttribute("class", "lil-album font hover clack");
  r4.innerHTML = "Money Trees";
}

function stopSongs(hover) {
  dentGone();
  for (let i = 1; i <= 13; i++) {
    document.getElementById(`s${i}`).pause();
    document.getElementById(`s${i}`).currentTime = 0;
  }

  const element = document.getElementById("ss");
  element.classList.remove("hover");

  setTimeout(function () {
    element.classList.add("hover");
  }, 250);
}

function duck() {
  stopSongs();
  dentGone();
  document.getElementById("s1").play();
  l1.classList.add("dent");
}
function lust() {
  stopSongs();
  dentGone();
  document.getElementById("s2").play();
  l2.classList.add("dent");
}
function alright() {
  stopSongs();
  dentGone();
  document.getElementById("s3").play();
  l3.classList.add("dent");
}
function kk() {
  stopSongs();
  dentGone();
  document.getElementById("s4").play();
  l4.classList.add("dent");
}
function u02() {
  stopSongs();
  dentGone();
  document.getElementById("s5").play();
  m1.classList.add("dent");
}
function u03() {
  stopSongs();
  dentGone();
  document.getElementById("s6").play();
  m2.classList.add("dent");
}
function uig() {
  stopSongs();
  dentGone();
  document.getElementById("s7").play();
  m5.classList.add("dent");
}
function n95() {
  stopSongs();
  dentGone();
  document.getElementById("s8").play();
  m6.classList.add("dent");
}
function rigamortis() {
  stopSongs();
  dentGone();
  document.getElementById("s9").play();
  r1.classList.add("dent");
}
function adhd() {
  stopSongs();
  dentGone();
  document.getElementById("s10").play();
  r2.classList.add("dent");
}
function samidot() {
  stopSongs();
  dentGone();
  document.getElementById("s11").play();
  r3.classList.add("dent");
}
function mtrees() {
  stopSongs();
  dentGone();
  document.getElementById("s12").play();
  r4.classList.add("dent");
}

function rickRoll() {
  reset();
  stopSongs();
  dentGone();
  kd.classList.add("none");
  rr.classList.remove("none");
  document.getElementById("s13").play();
}

function dentGone() {
  l1.classList.remove("dent");
  l2.classList.remove("dent");
  l3.classList.remove("dent");
  l4.classList.remove("dent");
  m1.classList.remove("dent");
  m2.classList.remove("dent");
  m5.classList.remove("dent");
  m6.classList.remove("dent");
  r1.classList.remove("dent");
  r2.classList.remove("dent");
  r3.classList.remove("dent");
  r4.classList.remove("dent");
}

function reset(hover) {
  stopSongs();
  const element = document.getElementById("ss");

  element.classList.remove("hover");

  setTimeout(function () {
    element.classList.add("hover");
  }, 250);
  p1.setAttribute("class", "");
  p2.setAttribute("class", "");
  p3.setAttribute("class", "");
  p4.setAttribute("class", "");
  p5.setAttribute("class", "");
  p6.setAttribute("class", "");
  l1.setAttribute("class", "");
  l2.setAttribute("class", "");
  l3.setAttribute("class", "");
  l4.setAttribute("class", "");
  m1.setAttribute("class", "");
  m2.setAttribute("class", "");
  m5.setAttribute("class", "");
  m6.setAttribute("class", "");
  r1.setAttribute("class", "");
  r2.setAttribute("class", "");
  r3.setAttribute("class", "");
  r4.setAttribute("class", "");
  l1.innerHTML = "";
  l2.innerHTML = "";
  l3.innerHTML = "";
  l4.innerHTML = "";
  r1.innerHTML = "";
  r2.innerHTML = "";
  r3.innerHTML = "";
  r4.innerHTML = "";
  m1.innerHTML = "";
  m2.innerHTML = "";
  m5.innerHTML = "";
  m6.innerHTML = "";
  document.getElementById("dot").classList.remove("none");
  document.getElementById("rickr").classList.add("none");
}
