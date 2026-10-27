//Temperature Converter

function convert() {
    let cel = Number(document.getElementById("cel").value);
    let far = (cel * 9 / 5) + 32;

    document.getElementById("result").innerText = far;
}
