let flag = false;
let count = 0;
let myText;
function qrGenerator() {
  let gApi = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
  const myImg = document.getElementById("img");
  if (myImg) flag = true;
  myText = document.getElementById("qrtext").value;
  if (count == 0) {
    count++;
    myText =
      "Welcome to the QR ( Quick Response ) Code generation service. Enter Url Or Text and choose the size(default = 250x250) and click on Generate QR button to generate a QR Code. \n Thank You";
  }
  const mysize = document.getElementById("size").value;

  if (myText !== "" && mysize == "100") {
    myImg.src = gApi + "100x100" + "&chl=" + myText;
  } else if (myText !== "" && mysize == "150") {
    myImg.src = gApi + "150x150" + "&chl=" + myText;
  } else if (myText !== "" && mysize == "200") {
    myImg.src = gApi + "200x200" + "&chl=" + myText;
  } else if (myText !== "" && mysize == "250") {
    myImg.src = gApi + "250x250" + "&chl=" + myText;
  } else if (myText !== "" && mysize == "300") {
    myImg.src = gApi + "300x300" + "&chl=" + myText;
  } else if (myText !== "" && mysize == "350") {
    myImg.src = gApi + "350x350" + "&chl=" + myText;
  } else if (myText !== "" && mysize == "400") {
    myImg.src = gApi + "400x400" + "&chl=" + myText;
  } else {
    alert("Please enter something to generate QR Code!");
  }
}

function showPrint() {
  const btnUi = document.getElementById("prnt");
  const hidden = btnUi.getAttribute("hidden");
  if (hidden) {
    btnUi.removeAttribute("hidden");
  }
  if (count <= 1) {
    count++;
    btnUi.setAttribute("hidden", "hidden");
  }
}

function printIt() {
  if (flag) {
    const htmldata = document.body.innerHTML;
    let parea = document.getElementById("imgarea").innerHTML;
    let body = document.body;
    body.style = {
      backgroundColor: "#ddd",
      marginLeft: "20%",
      marginRight: "20%",
      border: "1px dotted gray",
      padding: "10px 10px 10px 10px",
      fontFamily: "sans-serif",
    };
    body.innerHTML = parea;
    window.print();
    document.body.innerHTML = htmldata;
    let inputArea = document.getElementById("qrtext");
    inputArea.value = myText;
  } else {
    alert("Nothing to Print!");
  }

  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
}
