function armstrong(n) {
    let num = Number(n);
    let t = num;
    let total = 0;
    let count = num.toString().length;

    while (t > 0) {
        let x = t % 10;
        total += x ** count;
        t = Math.floor(t / 10);
    }

    return total === num;
}

function checkAndShow() {
    let val = document.getElementById("val").value;

    if (val.trim() === "" || Number(val) < 0 || !Number.isInteger(Number(val))) {
        console.log("Enter a valid non-negative integer");
        return;
    }

    if (armstrong(val)) {
        console.log("Armstrong");
    } else {
        console.log("Not Armstrong");
    }
}
