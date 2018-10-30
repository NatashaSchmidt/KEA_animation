window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    //Hvad der skal ske
    showStart();
}

function showStart() {
    console.log("show start");
    document.querySelector("#titel").classList.remove("hide");
    document.querySelector("#play_knap").classList.add("pulse");
    document.querySelector("#play_knap").addEventListener("click", hideStart);

}

function hideStart() {
    console.log("hide start");
    document.querySelector("#play_knap").classList.remove("pulse");
    document.querySelector("#play_knap").removeEventListener("click", hideStart);
    document.querySelector("#titel").classList.add("fade_in");
    document.querySelector("#game").classList.add("fade_out");
    document.querySelector("#titel").addEventListener("animationend", startGame);

}

function startGame() {
    console.log("start game");
    document.querySelector("#titel").classList.remove("fade_in");
    document.querySelector("#titel").removeEventListener("animationend", startGame);
    document.querySelector("#titel").classList.add("hide");
    document.querySelector("#game").classList.remove("hide");
    document.querySelector("#game").classList.add("show");
}

//ryd op i min fade_out #game fra hideStart
