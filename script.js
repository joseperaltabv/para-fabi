const openButton = document.getElementById("openButton");

const firstScreen = document.getElementById("firstScreen");

const letterScreen = document.getElementById("letterScreen");

openButton.addEventListener("click", function () {

    firstScreen.classList.add("fade-out");

    setTimeout(function () {

        firstScreen.classList.add("hidden");

        letterScreen.classList.remove("hidden");

        letterScreen.classList.add("fade-in");

    }, 400);

});