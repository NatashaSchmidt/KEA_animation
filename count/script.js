//En variable med et tal
let score = 0;

window.addEventListener("load", pageLoaded);

function pageLoaded() {
    console.log("Loaded");
    document.querySelector("#boks1").addEventListener("click", clickBoks1);
    document.querySelector("#boks2").addEventListener("click", clickBoks2);


    //siden starter på 0 i score, selvom der står 9 i HTML'en.
    document.querySelector("#score").innerHTML = +score;
}

function clickBoks1() {
    console.log("Klikket på den røde");
    // score = score + 1;
    //score += 1;

    //hvis scoren skal gå op, når der trykkes på den røde kasse
    score++;
    console.log(score);
    document.querySelector("#score").innerHTML = +score;

}

function clickBoks2() {
    console.log("Klikket på den blå");

    //hvis scoren skal gå ned, når der trykkes på den blå kasse
    score--;
    console.log(score);
    document.querySelector("#score").innerHTML = score;
}
