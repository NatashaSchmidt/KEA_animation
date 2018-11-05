window.addEventListener("load", sidenVises);


"use strict";
let points = 0;
let life = 3;
let showSettingsEffektSound = true;
let showSettingsMusic = true;

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

    document.querySelector("#myMusic").currentTime = 0;
    document.querySelector("#myMusic").play();



}

function showSettings() {
    console.log("vis settingsvindue");
    document.querySelector("#settings").classList.remove("hide");
    document.querySelector("#settings").classList.add("show");
    document.querySelector("#indstillinger_knap").removeEventListener("click", showSettings);
    document.querySelector("#kryds").addEventListener("click", showStart);
    document.querySelector("#luk").addEventListener("click", showStart);

    document.querySelector("#effekter").addEventListener("click", toggleSounds);
    document.querySelector("#music").addEventListener("click", toggleMusic);
}





function hideStart() {
    console.log("hide start");
    document.querySelector("#play_knap").classList.remove("pulse");
    document.querySelector("#play_knap").removeEventListener("click", hideStart);
    document.querySelector("#titel").classList.add("fade_in");
    document.querySelector("#game").classList.add("fade_out");
    document.querySelector("#titel").addEventListener("animationend", startIntro);
    document.querySelector("#vundet").classList.add("hide");

    //   startIntro();
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
    document.querySelector("#gisp1").currentTime = 0;
    document.querySelector("#gisp1").play();


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

    document.querySelector("#myMusic").currentTime = 0;
    document.querySelector("#myMusic").play();
    document.querySelector("#gisp2").currentTime = 0;
    document.querySelector("#gisp2").play();


}

function clickSlik() {
    console.log("slik");




    if (this.classList.contains("rykkaramelstang")) {
        console.log("slik");
        document.querySelector("#mmm").currentTime = 0;
        document.querySelector("#mmm").play();
        points++;
        document.querySelector("#points").innerHTML = points;


    } else if (this.classList.contains("rykstjerne")) {
        console.log("slik");
        document.querySelector("#mmm").currentTime = 0;
        document.querySelector("#mmm").play();
        points++;
        document.querySelector("#points").innerHTML = points;


    } else if (this.classList.contains("rykkonfekt")) {
        console.log("slik");
        document.querySelector("#mmm").currentTime = 0;
        document.querySelector("#mmm").play();
        points++;
        document.querySelector("#points").innerHTML = points;


    } else if (this.classList.contains("rykslikstang")) {
        console.log("slik");
        document.querySelector("#mmm").currentTime = 0;
        document.querySelector("#mmm").play();
        points++;
        document.querySelector("#points").innerHTML = points;


    } else if (this.classList.contains("rykaeg")) {
        console.log("slik");
        document.querySelector("#mmm").currentTime = 0;
        document.querySelector("#mmm").play();
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
        document.querySelector("#boo").currentTime = 0;
        document.querySelector("#boo").play();
        life--;
        document.querySelector("#heart" + life).classList.add("hide");



    } else if (this.classList.contains("rykappelsin")) {
        console.log("frugt");
        document.querySelector("#boo").currentTime = 0;
        document.querySelector("#boo").play();
        life--;
        document.querySelector("#heart" + life).classList.add("hide");





    } else if (this.classList.contains("rykpaere")) {
        console.log("frugt");
        document.querySelector("#boo").currentTime = 0;
        document.querySelector("#boo").play();
        life--;
        document.querySelector("#heart" + life).classList.add("hide");



    } else if (this.classList.contains("rykvandmelon")) {
        console.log("frugt");
        document.querySelector("#boo").currentTime = 0;
        document.querySelector("#boo").play();
        life--;
        document.querySelector("#heart" + life).classList.add("hide");


    } else if (this.classList.contains("rykvindruer")) {
        console.log("frugt");
        document.querySelector("#boo").currentTime = 0;
        document.querySelector("#boo").play();
        life--;
        document.querySelector("#heart" + life).classList.add("hide");



    }
    console.log(this);
    this.classList.add("hide");

    this.removeEventListener("click", clickFrugt);

    gameStatus();
}





function hideSettings() {
    console.log("hideSettings");
    document.querySelector("#settings_screen").classList.add("hide");

}

function toggleSounds() {
    console.log("toggleSounds");

    if (showSettingsEffektSound == true) {
        showSettingsEffektSound = false;
        soundsOff();
    } else {
        showSettingsEffektSound = true;
        soundsOn();

    }
}

function soundsOff() {
    console.log("soundsOff");
    document.querySelector("#effekter").classList.remove("on");
    document.querySelector("#effekter").classList.add("off");

    document.querySelector("#mmm").muted = true;
    document.querySelector("#boo").muted = true;
    document.querySelector("#gisp2").muted = true;
    document.querySelector("#gisp1").muted = true;
    document.querySelector("#vinderlyd").muted = true;

}

function soundsOn() {
    console.log("soundsOn");
    document.querySelector("#effekter").classList.remove("off");
    document.querySelector("#effekter").classList.add("on");

    document.querySelector("#mmm").muted = false;
    document.querySelector("#boo").muted = false;
    document.querySelector("#gisp2").muted = false;
    document.querySelector("#gisp1").muted = false;
    document.querySelector("#vinderlyd").muted = false;



}

function toggleMusic() {
    console.log("toggleMusic");
    if (showSettingsMusic == true) {
        showSettingsMusic = false;
        musicOff();
    } else {
        showSettingsMusic = true;
        musicOn();

    }
}


function musicOff() {
    console.log("musicOff");

    document.querySelector("#music").classList.remove("on");
    document.querySelector("#music").classList.add("off");
    document.querySelector("#myMusic").muted = true;


}

function musicOn() {
    console.log("musicOn");

    document.querySelector("#myMusic").classList.remove("off");
    document.querySelector("#myMusic").classList.add("on");
    document.querySelector("#myMusic").muted = false;

}





function gameStatus() {
    console.log("gameStatus");
    // console.log(life);
    if (life == 0) {
        gameOver();
    } else if (points == 5) {
        levelComplete();

    }
    /* else if (points <= 5) {
           gameOver();
       } */


}

function gameOver() {
    console.log("gameOver");
    document.querySelector("#tabt").classList.remove("hide");
    document.querySelector("#boo").currentTime = 0;
    document.querySelector("#boo").play();
    document.querySelector("#music").classList.remove("on");
    document.querySelector("#music").classList.add("off");

}

function levelComplete() {
    console.log("levelComplete");
    document.querySelector("#vundet").classList.remove("hide");
    document.querySelector("#vinderlyd").currentTime = 0;
    document.querySelector("#vinderlyd").play();

    document.querySelector("#myMusic").muted = true;

    document.querySelector("#spil_igen2").addEventListener("click", sidenVises);
    document.querySelector("#kryds3").addEventListener("click", sidenVises);


}

// har problemer med at fjerne frugt og hjerter.
// har problemer med at nulstille point, når jeg starter spil forfra. evt. reset-kode?
// har problemer med baggrunds musikken, der ikke spilles ved titelskærm
// baggrundsmusikken skal spille ved titelskærm, stoppe ved introskærm, og spille forfra ved spillets begyndelse.




//ryd op i min fade_out #game fra hideStart
