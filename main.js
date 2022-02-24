//8 colors
var colors = ["#FF355E","#FF6037","#FF9933","#FFFF66","#66FF66","#50BFE6","#EE34D2","#FF00CC"];
var idx = Math.floor(Math.random()*8);
var str = "background-color: " + colors[idx]
document.getElementsByTagName('html')[0].setAttribute('style',str)
