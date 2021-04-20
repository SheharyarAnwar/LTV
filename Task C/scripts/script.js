selected = false;

function startAd() {
  adDiv = document.getElementById("ad");
}

//custom JS

document.getElementById("carType").addEventListener("click", function (e) {
  window.clearInterval(window.intervalId);
  var input = document.getElementById("carType");
  input.style.border = "";
  input.style.boxShadow = "";
  window.setTimeout(function () {
    input.placeholder = "";
  }, 500);
  e = e || window.event;
  e.stopPropagation();
});

document.getElementById("makes").addEventListener("click", function (e) {
  window.clearInterval(window.intervalId);
  var input = document.getElementById("makes");
  input.style.border = "";
  input.style.boxShadow = "";
  window.setTimeout(function () {
    input.placeholder = "";
  }, 500);
  e = e || window.event;
  e.stopPropagation();
});

document.getElementById("zip").addEventListener("click", function (e) {
  window.clearInterval(window.intervalId);
  var input = document.getElementById("zip");
  input.style.border = "";
  input.style.boxShadow = "";
  window.setTimeout(function () {
    input.placeholder = "";
  }, 500);
  e = e || window.event;
  e.stopPropagation();
});

document
  .getElementById("clickthrough-button")
  .addEventListener("click", function (e) {
    e = e || window.event;
    e.stopPropagation();
  });

//Rotate Text

//write your functions here
(function () {
  const rotateableText = [
    "New",
    "Used",
    "Certified Preowned",
    "For Sale By Owner",
  ];
  let i = 0;
  let secondsPassed = 0;

  const nterval = window.setInterval(() => {
    const textHolder = document.getElementById("rotateText1");
    textHolder.innerHTML = rotateableText[i];

    i = (i + 1) % rotateableText.length;

    secondsPassed++;
    if (secondsPassed >= 30) {
      window.clearInterval(nterval);
    }
  }, 1000);
})();

function validate_form(form) {
  var carType = document.getElementById("carType").value;
  var makes = document.getElementById("makes").value;
  var zip = document.getElementById("zip").value;
  var qpSep = window.clickTag.indexOf("?") !== -1 ? "&" : "?";
  var newUrl =
    qpSep +
    "carType=" +
    carType +
    "&makes=" +
    "%5B%22" +
    makes +
    "%22%5D" +
    "&zip=" +
    zip;

  window.clickTag += newUrl;
}

startAd();
