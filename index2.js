function func1(i, arr = []) {
    if (i === 0) {
        return arr;
    } else {
        arr.push(i);
        return func1(i - 1, arr);
    }
}
function func2() {
    let prompt = 5
    if (!isNaN(prompt) && prompt >= 0) {
        let numbers = func1(prompt);
        console.log(numbers.reverse());
    }
}

func2();
