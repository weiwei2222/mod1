'use strict';

function tip15() {
    const bill = document.getElementById("userbill").value;
    const usertip = bill * 0.15;
    document.getElementById("result").innerHTML = `You tip is ${usertip.toFixed(2)}`;
}

function tip20() {
    const bill = document.getElementById("userbill").value;
    const usertip = bill * 0.2;
    document.getElementById("result").innerHTML = `You tip is ${usertip.toFixed(2)}`;
}

function tip25() {
    const bill = document.getElementById("userbill").value;
    const usertip = bill * 0.25;
    document.getElementById("result").innerHTML = `You tip is ${usertip.toFixed(2)}`;
}

function coustom() {
    const bill = document.getElementById("userbill").value;
    const constomtip = document.getElementById("iuputcoustomtip").value;
    const usertip = (bill * constomtip) / 100;
    document.getElementById("result").innerHTML = `You tip is ${usertip.toFixed(2)}`;
}