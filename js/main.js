var x;
var y = [];
var j = 0;
var i = 0;
var z = [];
var m = [];
var n;
var j;
var k = 0;
var l = 1;
y[0] = "";
y[1] = "";
function button(x) {
  switch (x) {
    case 0:
      z[i] = 0;
      i += 1;
      document.getElementById("formul").innerHTML = y[0] + y[1] + z.join("");
      document.getElementById("result").innerHTML = "";
      break;
    case 1:
      z[i] = 1;
      i += 1;
      document.getElementById("formul").innerHTML = y[0] + y[1] + z.join("");
      document.getElementById("result").innerHTML = "";
      break;
    case 2:
      z[i] = 2;
      i += 1;
      document.getElementById("formul").innerHTML = y[0] + y[1] + z.join("");
      document.getElementById("result").innerHTML = "";
      break;
    case 3:
      z[i] = 3;
      i += 1;
      document.getElementById("formul").innerHTML = y[0] + y[1] + z.join("");
      document.getElementById("result").innerHTML = "";
      break;
    case 4:
      z[i] = 4;
      i += 1;
      document.getElementById("formul").innerHTML = y[0] + y[1] + z.join("");
      document.getElementById("result").innerHTML = "";
      break;
    case 5:
      z[i] = 5;
      i += 1;
      document.getElementById("formul").innerHTML = y[0] + y[1] + z.join("");
      document.getElementById("result").innerHTML = "";
      break;
    case 6:
      z[i] = 6;
      i += 1;
      document.getElementById("formul").innerHTML = y[0] + y[1] + z.join("");
      document.getElementById("result").innerHTML = "";
      break;
    case 7:
      z[i] = 7;
      i += 1;
      document.getElementById("formul").innerHTML = y[0] + y[1] + z.join("");
      document.getElementById("result").innerHTML = "";
      break;
    case 8:
      z[i] = 8;
      i += 1;
      document.getElementById("formul").innerHTML = y[0] + y[1] + z.join("");
      document.getElementById("result").innerHTML = "";
      break;
    case 9:
      z[i] = 9;
      i += 1;
      document.getElementById("formul").innerHTML = y[0] + y[1] + z.join("");
      document.getElementById("result").innerHTML = "";
      break;
    case 10:
      y[0] = z.join("");
      z.splice(0, i);
      i = 0;
      y[1] = "+";
      document.getElementById("formul").innerHTML = y[0] + y[1] + z.join("");
      break;
    case 11:
      y[2] = z.join("");
      n = eval(y[0] + y[1] + y[2]);
      j = Math.round(n * 100) / 100;
      document.getElementById("result").innerHTML = j;
      m[k] = l + " : " + y[0] + y[1] + y[2] + " = " + j + "<br>";
      k += 1;
      l += 1;
      switch (k) {
        case 11:
          m.splice(0, 1);
          k = 10;
          break;

        default:
          break;
      }
      document.getElementById("history").innerHTML = m.join("");
      y[0] = "";
      y[1] = "";
      y[2] = "";
      z.splice(0, i);
      i = 0;
      break;
    case 12:
      y[0] = z.join("");
      z.splice(0, i);
      i = 0;
      y[1] = "-";
      document.getElementById("formul").innerHTML = y[0] + y[1] + z.join("");
      break;
    case 13:
      y[0] = z.join("");
      z.splice(0, i);
      i = 0;
      y[1] = "*";
      document.getElementById("formul").innerHTML = y[0] + y[1] + z.join("");
      break;
    case 14:
      y[0] = z.join("");
      z.splice(0, i);
      i = 0;
      y[1] = "/";
      document.getElementById("formul").innerHTML = y[0] + y[1] + z.join("");
      break;
    case 15:
      document.getElementById("formul").innerHTML = "";
      document.getElementById("result").innerHTML = "";
      z.splice(0, 100);
      y.splice(0, 10);
      y[0] = "";
      y[1] = "";
      y[2] = "";
      break;
    case 16:
      z[i] = ".";
      i += 1;
      document.getElementById("formul").innerHTML = y[0] + y[1] + z.join("");
      document.getElementById("result").innerHTML = "";
      break;
    default:
      break;
  }
}
var x1;

function font(x1) {
  function decor(a) {
    var x = document.getElementsByClassName("text");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.textDecoration = a;
    }
  }
  function italic(a) {
    var x = document.getElementsByClassName("text");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.fontStyle = a;
    }
  }
  function gras(a) {
    var x = document.getElementsByClassName("text");
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.fontWeight = a;
    }
  }
  switch (x1) {
    case 1:
      gras("bolder");
      break;
    case 2:
      italic("italic");
      break;
    case 3:
      decor("underline");
      break;
    case 4:
      decor("none");
      italic("normal");
      gras("normal");
      break;
    default:
      break;
  }
}
