function qrGenerator() {
    let gApi = "https://chart.googleapis.com/chart?chf=bg,s,65432100&cht=qr&chs=";
    let myImg = document.getElementById("img");
    let myText = document.getElementById("qrtext").value;
    let mysize = document.getElementById("size").value;

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
        alert("Please enter text!")
    }
}

function printIt() {
    var htmldata = document.body.innerHTML
    let parea = document.getElementById("imgarea").innerHTML;
    document.body.innerHTML = parea
    window.print()
    document.body.innerHTML = htmldata

}