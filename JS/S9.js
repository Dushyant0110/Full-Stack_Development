
const add = () => {
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);

    let sum = a + b;

    document.getElementById("result").innerText = sum;
};
