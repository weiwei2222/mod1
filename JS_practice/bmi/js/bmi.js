
function bmiCalculator() {
    const myweight = document.getElementById("userweight").value;
    const myheight = document.getElementById("userheight").value;
    const userbmi = myweight / myheight ** 2;
    document.getElementById("result").innerHTML = `You BMI is ${userbmi}`;
}