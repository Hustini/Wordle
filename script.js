document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("button");
    let word = document.getElementById("word");
    const url = "https://random-word-api.vercel.app/api?words=1&length=4"

    button.addEventListener("click", function () {
        fetch(url)
            .then(response => response.json())
            .then(data => word.innerText = data)
            .catch(error => console.error('Error:', error));
    })
});