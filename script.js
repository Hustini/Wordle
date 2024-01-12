document.addEventListener("DOMContentLoaded", function () {
    let show = document.getElementById("show");
    let solution = document.getElementById("solution");
    let word;
    const url = "https://random-word-api.vercel.app/api?words=1&length=4";
    let input = document.getElementById("input");
    let submit = document.getElementById("submit");
    let item = document.getElementsByClassName("grid-item");
    let count = 0;

    fetch(url)
        .then(response => response.json())
        .then(data => word = data)

    show.addEventListener("click", function () {
        solution.innerText = word
    });

    submit.addEventListener("click", function () {
        if (input.value.length !== 4) {
            alert("It is a word with 4 letters")
            input.value = ""
        }
        if (count === 0) {
            evaluation(count)
            count ++
        } else if (count === 1) {
            evaluation(count)
            count ++
        } else if (count === 2) {
            evaluation(count)
            count ++
        } else {
            evaluation(count)
            count ++
        }
    });

    function evaluation(num) {
        let splitWord = input.value.split("");
        let startIndex = num * 4;
        if (word == input.value) {
            for (let i = 0; i < splitWord.length; i++) {
                item[startIndex + i].innerText = splitWord[i];
            }
        } else {
            for (let i = 0; i < splitWord.length; i++) {
                item[startIndex + i].innerText = splitWord[i];
            }
        }
        input.value = "";
    }
});