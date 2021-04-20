selected = false;

function startAd() {
    adDiv = document.getElementById("ad");
    startFlashing();
}

//custom JS

function startFlashing() {
  intervalId = window.setInterval(blinking, 1000);
}

var timer = 0;

function blinking() {
  if (!selected){

    var input =  document.getElementById('fn')
    input.placeholder = "";

    var timeout = window.setTimeout(function() {
      if (!selected) {
        input.placeholder = "|";
      }
      if (timer === 14000) {
        clearInterval (intervalId);
      }
      timer += 500;
    }, 500);
  }
}

document.getElementById("fn").addEventListener("click", function(e){
  window.clearInterval(window.intervalId);
  var input =  document.getElementById('fn');
  input.style.border = "#000000 1px solid";
  input.style.boxShadow = "none";
  window.setTimeout(function(){
    input.placeholder = "";
  }, 500);
  e = e || window.event;
  e.stopPropagation();
});

document.getElementById("ln").addEventListener("click", function(e){
  window.clearInterval(window.intervalId);
  var input =  document.getElementById('fn');
  input.style.border = "#000000 1px solid";
  input.style.boxShadow = "none";
  window.setTimeout(function(){
    input.placeholder = "";
  }, 500);
  e = e || window.event;
  e.stopPropagation();
});

document.getElementById("clickthrough-button").addEventListener("click", function(e){
  e = e || window.event;
  e.stopPropagation();
});

function validate_form(form) {
  if(form.fn.value === '' || form.ln.value === '') {
    /*alert("First Name and Last Name are required");
    return false;*/
  } else {
    var qpSep = (window.clickTag.indexOf("?") !== -1) ? "&" : "?";
    var newUrl = qpSep + "fn=" + form.fn.value + "&ln=" + form.ln.value + "&state=All";
    window.clickTag += newUrl;
  }
}

startAd();
