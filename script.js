document.addEventListener("DOMContentLoaded", function () {
    let show = document.getElementById("show");
    let solution = document.getElementById("solution");
    let word;
    const url = "https://random-word-api.vercel.app/api?words=1&length=4";
    let input = document.getElementById("input");
    let item = document.getElementsByClassName("grid-item");
    let count = 0;

    fetch(url)
        .then(response => response.json())
        .then(data => word = data)

    show.addEventListener("click", function () {
        solution.innerText = word
    });

    input.addEventListener("keyup", (event) => {
        if (event.key === "Enter") {
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
            } else if (count === 3) {
                evaluation(count)
                count ++
            } else if (count === 4) {
                evaluation(count)
                count ++
            } else if (count === 5) {
                evaluation(count)
                if (word != input.value) {
                    alert(`You lost the word was ${word}`)
                }
            }
        }
    });

    function evaluation(num) {
        let splitInput = input.value.split("");
        let splitWord = word[0].split("");
        let startIndex = num * 4;
        if (word == input.value) {
            for (let i = 0; i < splitInput.length; i++) {
                item[startIndex + i].innerText = splitInput[i];
                item[startIndex + i].style.background = "green";
                item[startIndex + i].style.color = "white";
            }
        } else {
            for (let i = 0; i < splitInput.length; i++) {
                item[startIndex + i].innerText = splitInput[i];
            }
            for (let i = 0; i < splitInput.length; i++) {
                if (splitWord.includes(splitInput[i]) && splitWord[i] === splitInput[i]) {
                    item[startIndex + i].style.background = "green";
                    item[startIndex + i].style.color = "white";
                }
                if (splitWord.includes(splitInput[i]) && splitWord[i] !== splitInput[i]) {
                    item[startIndex + i].style.background = "orange";
                    item[startIndex + i].style.color = "white";
                }
            }
        }
        input.value = "";
    }
});