document.addEventListener("DOMContentLoaded", function () {
    let show = document.getElementById("show");
    let solution = document.getElementById("solution");
    let word;
    const url = "https://random-word-api.vercel.app/api?words=1&length=4";
    let input = document.getElementById("input");
    let submit = document.getElementById("submit");
    let item = document.getElementsByClassName("grid-item");

    fetch(url)
        .then(response => response.json())
        .then(data => word = data)
        .catch(error => console.error('Error:', error));

    show.addEventListener("click", function () {
        solution.innerText = word
    });

    submit.addEventListener("click", function () {
        if (input.value.length !== 4) {
            alert("It is a word with 4 letters")
            input.value = ""
        }
        if (word == input.value) {
            let split_word = input.value.split('');
            for (let i = 0; i < split_word.length; i++) {
                item[i].innerText = split_word[i]
            }
        }
    });
});