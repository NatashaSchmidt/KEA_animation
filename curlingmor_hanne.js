window.addEventListener("load", sidenVises);


"use strict";
let points = 0;
let life = 3;

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
    document.querySelector("#introduktion").classList.add("hide");
    document.querySelector("#settings").classList.add("hide");
    document.querySelector("#indstillinger_knap").addEventListener("click", showSettings);
    document.querySelector("#bananen").classList.add("hide");
    document.querySelector("#appelsin").classList.add("hide");
    document.querySelector("#karamelstang").classList.add("hide");
    document.querySelector("#lakrids_stjerne").classList.add("hide");
    document.querySelector("#lakridskonfekt").classList.add("hide");
    document.querySelector("#paere").classList.add("hide");
    document.querySelector("#slikstang").classList.add("hide");
    document.querySelector("#vandmelon").classList.add("hide");
    document.querySelector("#aeg").classList.add("hide");
    document.querySelector("#vindruer").classList.add("hide");

}

function showSettings() {
    console.log("vis settingsvindue");
    document.querySelector("#settings").classList.remove("hide");
    document.querySelector("#settings").classList.add("show");
    document.querySelector("#indstillinger_knap").removeEventListener("click", showSettings);
    document.querySelector("#kryds").addEventListener("click", showStart);
    document.querySelector("#luk").addEventListener("click", showStart);

}



function hideStart() {
    console.log("hide start");
    document.querySelector("#play_knap").classList.remove("pulse");
    document.querySelector("#play_knap").removeEventListener("click", hideStart);
    document.querySelector("#titel").classList.add("fade_in");
    document.querySelector("#game").classList.add("fade_out");
    document.querySelector("#titel").addEventListener("animationend", startIntro);

}

function startIntro() {
    console.log("start intro");
    document.querySelector("#titel").classList.remove("fade_in");
    document.querySelector("#titel").classList.add("hide");
    document.querySelector("#game").classList.remove("fade_out");
    document.querySelector("#titel").removeEventListener("animationend", startIntro);
    document.querySelector("#game").classList.remove("hide");
    document.querySelector("#introduktion").classList.remove("hide");
    document.querySelector("#kryds1").addEventListener("click", showStart);
    document.querySelector("#spil1").addEventListener("click", startGame);


}


function startGame() {
    console.log("start game");

    document.querySelector("#introduktion").classList.add("hide");
    document.querySelector("#titel").classList.add("hide");
    document.querySelector("#game").classList.add("show");

    document.querySelector("#bananen").classList.remove("hide");
    document.querySelector("#appelsin").classList.remove("hide");
    document.querySelector("#karamelstang").classList.remove("hide");
    document.querySelector("#lakrids_stjerne").classList.remove("hide");
    document.querySelector("#lakridskonfekt").classList.remove("hide");
    document.querySelector("#paere").classList.remove("hide");
    document.querySelector("#slikstang").classList.remove("hide");
    document.querySelector("#vandmelon").classList.remove("hide");
    document.querySelector("#aeg").classList.remove("hide");
    document.querySelector("#vindruer").classList.remove("hide");

    document.querySelector("#bananen").addEventListener("click", clickFrugt);
    document.querySelector("#appelsin").addEventListener("click", clickFrugt);
    document.querySelector("#karamelstang").addEventListener("click", clickSlik);
    document.querySelector("#lakrids_stjerne").addEventListener("click", clickSlik);
    document.querySelector("#lakridskonfekt").addEventListener("click", clickSlik);
    document.querySelector("#paere").addEventListener("click", clickFrugt);
    document.querySelector("#slikstang").addEventListener("click", clickSlik);
    document.querySelector("#vandmelon").addEventListener("click", clickFrugt);
    document.querySelector("#aeg").addEventListener("click", clickSlik);
    document.querySelector("#vindruer").addEventListener("click", clickFrugt);


}

function clickSlik() {
    console.log("slik");




    if (this.classList.contains("rykkaramelstang")) {
        console.log("slik");
        points++;
        document.querySelector("#points").innerHTML = points;


    } else if (this.classList.contains("rykstjerne")) {
        console.log("slik");
        points++;
        document.querySelector("#points").innerHTML = points;


    } else if (this.classList.contains("rykkonfekt")) {
        console.log("slik");
        points++;
        document.querySelector("#points").innerHTML = points;


    } else if (this.classList.contains("rykslikstang")) {
        console.log("slik");
        points++;
        document.querySelector("#points").innerHTML = points;


    } else if (this.classList.contains("rykaeg")) {
        console.log("slik");
        points++;
        document.querySelector("#points").innerHTML = points;

    }


    this.classList.add("hide");
    this.removeEventListener("click", clickSlik);

    gameStatus();

}


function clickFrugt() {
    console.log("frugt");



    if (this.classList.contains("rykbananer")) {
        console.log("frugt");
        document.querySelector("#energy" + life).classList.add("hide");
        life--;


    } else if (this.classList.contains("rykappelsin")) {
        console.log("frugt");
        document.querySelector("#energy" + life).classList.add("hide");
        life--;


    } else if (this.classList.contains("rykpaere")) {
        console.log("frugt");
        document.querySelector("#energy" + life).classList.add("hide");
        life--;


    } else if (this.classList.contains("rykvandmelon")) {
        console.log("frugt");
        document.querySelector("#energy" + life).classList.add("hide");
        life--;


    } else if (this.classList.contains("rykvindruer")) {
        console.log("frugt");
        document.querySelector("#energy" + life).classList.add("hide");
        life--;


    }
    console.log(this);
    this.classList.add("hide");

    this.removeEventListener("click", clickFrugt);

    gameStatus();
}



function gameStatus() {
    console.log("gameStatus");
    // console.log(life);
    if (life == 0) {
        gameOver();
    } else if (life == 5) {
        levelComplete();

    }


}

function gameOver() {
    document.querySelector("#tabt").classList.remove("hide");
}

function levelComplete() {
    document.querySelector("#vundet").classList.remove("hide");
}



//ryd op i min fade_out #game fra hideStart
