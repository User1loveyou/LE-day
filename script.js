const home = document.getElementById("home");
const passwordScreen = document.getElementById("passwordScreen");
const spotifyScreen = document.getElementById("spotifyScreen");

const startBtn = document.getElementById("startBtn");
const verifyBtn = document.getElementById("verifyBtn");
const nextBtn = document.getElementById("nextBtn");

startBtn.addEventListener("click", () => {

    home.classList.remove("active");
    passwordScreen.classList.add("active");

});

verifyBtn.addEventListener("click", () => {

    const password =
        document.getElementById("password")
        .value
        .trim();

    if(password === "31/10/2024"){

        passwordScreen.classList.remove("active");
        spotifyScreen.classList.add("active");

    }else{

        document.getElementById("error")
        .textContent =
        "Data incorreta ❤️";

    }

});

nextBtn.addEventListener("click", () => {

    alert(
        "Em breve aqui abrirá a carta ❤️"
    );

});
