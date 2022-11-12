var width = 100;
var width2 = 100;
var width3 = 100;
var difference = 2;
var difference2 = 2;
var difference3 = 2;
var intervalID = 0;
var intervalID2 = 0;
var intervalID3 = 0;

//start js1
function increase() {
  clearInterval(intervalID);
  intervalID = setInterval(expand, 1);
}
function decrease() {
  clearInterval(intervalID);
  intervalID = setInterval(shrink, 1);
}

function expand() {
  if (width < 400) {
    width = width + difference;
    document.getElementById("img1").width = width;
    console.log(width);
  } else {
    clearInterval(intervalID);
  }
}

function shrink() {
  if (width > 100) {
    width = width - difference;
    document.getElementById("img1").width = width;
    console.log(width);
  } else {
    clearInterval(intervalID);
  }
}
//end js1

//start js2
function increase2() {
  clearInterval(intervalID2);
  intervalID2 = setInterval(expand2, 1);
}
function decrease2() {
  clearInterval(intervalID2);
  intervalID2 = setInterval(shrink2, 1);
}

function expand2() {
  if (width2 < 400) {
    width2 = width2 + difference2;
    document.getElementById("img2").width = width2;
    console.log(width2);
  } else {
    clearInterval(intervalID2);
  }
}

function shrink2() {
  if (width2 > 100) {
    width2 = width2 - difference2;
    document.getElementById("img2").width = width2;
    console.log(width2);
  } else {
    clearInterval(intervalID2);
  }
}
//end js2

//start js3
function increase3() {
  clearInterval(intervalID3);
  intervalID3 = setInterval(expand3, 1);
}
function decrease3() {
  clearInterval(intervalID3);
  intervalID3 = setInterval(shrink3, 1);
}

function expand3() {
  if (width3 < 400) {
    width3 = width3 + difference3;
    document.getElementById("img3").width = width3;
    console.log(width3);
  } else {
    clearInterval(intervalID3);
  }
}

function shrink3() {
  if (width3 > 100) {
    width3 = width3 - difference3;
    document.getElementById("img3").width = width3;
    console.log(width3);
  } else {
    clearInterval(intervalID3);
  }
}
//end js3
