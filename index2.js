function func1(i, arr = []) {
    if (i === 0) {
        return arr;
    } else {
        arr.push(i);
        return func1(i - 1, arr);
    }
}
function func2() {
    let userInput = +prompt("son kiriting: ")
    if (!isNaN(userInput) && userInput >= 0) {
        let numbers = func1(userInput);
        console.log(numbers.reverse());
    }
}

func2();
