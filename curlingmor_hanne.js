window.addEventListener("load", sidenVises);


"use strict";
let points = 0;
let life = 3;
let showSettingsEffektSound = true;
let showSettingsMusic = true;
let timeLeft = 5;


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

    document.querySelector("#game_elements").classList.add("hide");

    //    document.querySelector("#bananen").classList.add("hide");
    //    document.querySelector("#appelsin").classList.add("hide");
    //    document.querySelector("#karamelstang").classList.add("hide");
    //    document.querySelector("#lakrids_stjerne").classList.add("hide");
    //    document.querySelector("#lakridskonfekt").classList.add("hide");
    //    document.querySelector("#paere").classList.add("hide");
    //    document.querySelector("#slikstang").classList.add("hide");
    //    document.querySelector("#vandmelon").classList.add("hide");
    //    document.querySelector("#aeg").classList.add("hide");
    //    document.querySelector("#vindruer").classList.add("hide");

    document.querySelector("#myMusic").currentTime = 0;
    document.querySelector("#myMusic").play();

    document.querySelector("#setting_effekt_sound").addEventListener("click", toggleSounds);
    document.querySelector("#setting_music").addEventListener("click", toggleMusic);

    document.querySelector("#viser").classList.add("hide");


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

    document.querySelector("#game_elements").classList.remove("hide");
    //    document.querySelector("#bananen").classList.remove("hide");
    //    document.querySelector("#appelsin").classList.remove("hide");
    //    document.querySelector("#karamelstang").classList.remove("hide");
    //    document.querySelector("#lakrids_stjerne").classList.remove("hide");
    //    document.querySelector("#lakridskonfekt").classList.remove("hide");
    //    document.querySelector("#paere").classList.remove("hide");
    //    document.querySelector("#slikstang").classList.remove("hide");
    //    document.querySelector("#vandmelon").classList.remove("hide");
    //    document.querySelector("#aeg").classList.remove("hide");
    //    document.querySelector("#vindruer").classList.remove("hide");

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

    document.querySelector("#viser").classList.remove("hide");

    document.querySelector("#myMusic").currentTime = 0;
    document.querySelector("#myMusic").play();
    document.querySelector("#gisp2").currentTime = 0;
    document.querySelector("#gisp2").play();

    document.querySelector("#viser").addEventListener("animationend", gameStatus);

    timeLeftFc();


}

function clickSlik() {
    console.log("slik");




    if (this.classList.contains("rykkaramelstang")) {
        console.log("karamelstang");

        addPoint();

    } else if (this.classList.contains("rykstjerne")) {
        console.log("lakridsstjerne");

        addPoint();

    } else if (this.classList.contains("rykkonfekt")) {
        console.log("lakridskonfekt");

        addPoint();

    } else if (this.classList.contains("rykslikstang")) {
        console.log("slikstang");

        addPoint();

    } else if (this.classList.contains("rykaeg")) {
        console.log("æg");

        addPoint();

    }


    this.classList.add("hide");
    this.removeEventListener("click", clickSlik);

    gameStatus();
}


function addPoint() {
    document.querySelector("#mmm").currentTime = 0;
    document.querySelector("#mmm").play();

    console.log(points + " point tilføjet ");
    points++;
    document.querySelector("#points").innerHTML = points;
}


function clickFrugt() {
    console.log("frugt");



    if (this.classList.contains("rykbananer")) {
        console.log("banan");
        removeEnergy();


    } else if (this.classList.contains("rykappelsin")) {
        console.log("appelsin");


        removeEnergy();

    } else if (this.classList.contains("rykpaere")) {
        console.log("pære");

        removeEnergy();

    } else if (this.classList.contains("rykvandmelon")) {
        console.log("vandmelon");

        removeEnergy();

    } else if (this.classList.contains("rykvindruer")) {
        console.log("vindruer");


        removeEnergy();

    }
    console.log(this);
    this.classList.add("hide");

    this.removeEventListener("click", clickFrugt);

    gameStatus();
}


function removeEnergy() {
    document.querySelector("#boo").currentTime = 0;
    document.querySelector("#boo").play();

    console.log("life før den bliver skjult " + life);
    document.querySelector("#energy" + life).classList.add("hide");
    life--;

}


function hideSettings() {
    console.log("hideSettings");
    document.querySelector("#settings_screen").classList.add("hide");

}

function toggleSounds() {
    console.log("toggleSounds");

    if (showSettingsEffektSound == true) {
        showSettingsEffektSound = false;
        document.querySelector("#effekter_sprite").classList.remove("off_on");
        document.querySelector("#effekter_sprite").classList.add("on_off");
        document.querySelector("#effekter_sprite").addEventListener("animationend", soundsOff);



        //soundsOff();
    } else {
        showSettingsEffektSound = true;
        document.querySelector("#effekter_sprite").classList.remove("off");
        document.querySelector("#effekter_sprite").classList.add("off_on");
        document.querySelector("#effekter_sprite").addEventListener("animationend", soundsOn);


        // soundsOn();

    }
}

function soundsOff() {
    console.log("soundsOff" + showSettingsEffektSound);

    document.querySelector("#effekter_sprite").removeEventListener("animationend", soundsOff);
    document.querySelector("#effekter_sprite").classList.remove("on_off");
    document.querySelector("#effekter_sprite").classList.add("off");


    document.querySelector("#mmm").muted = true;
    document.querySelector("#boo").muted = true;
    document.querySelector("#gisp2").muted = true;
    document.querySelector("#gisp1").muted = true;
    document.querySelector("#vinderlyd").muted = true;

}

function soundsOn() {
    console.log("soundsOn" + showSettingsEffektSound);

    document.querySelector("#effekter_sprite").removeEventListener("animationend", soundsOn);
    document.querySelector("#effekter_sprite").classList.remove("off_on");
    document.querySelector("#effekter_sprite").classList.add("on");


    document.querySelector("#mmm").muted = false;
    document.querySelector("#boo").muted = false;
    document.querySelector("#gisp2").muted = false;
    document.querySelector("#gisp1").muted = false;
    document.querySelector("#vinderlyd").muted = false;



}

function toggleMusic() {
    console.log("showSettingsMusic function " + showSettingsMusic);
    if (showSettingsMusic == true) {
        showSettingsMusic = false;

        document.querySelector("#music_sprite").classList.remove("off_on");
        document.querySelector("#music_sprite").classList.add("on_off");

        document.querySelector("#music_sprite").addEventListener("animationend", musicOff);

        //musicOff();
    } else {
        showSettingsMusic = true;

        document.querySelector("#music_sprite").classList.remove("off");
        document.querySelector("#music_sprite").classList.add("off_on");
        document.querySelector("#music_sprite").addEventListener("animationend", musicOn);

        //musicOn();

    }
}


function musicOff() {
    console.log("musicOff function værdi er " + showSettingsEffektSound);

    document.querySelector("#music_sprite").removeEventListener("animationend", musicOff);
    document.querySelector("#music_sprite").classList.remove("on_off");
    document.querySelector("#music_sprite").classList.add("off");



    document.querySelector("#myMusic").muted = true;



}

function musicOn() {
    console.log("musicOn function værdi er " + showSettingsEffektSound);

    document.querySelector("#music_sprite").removeEventListener("animationend", musicOn);
    document.querySelector("#music_sprite").classList.remove("off_on");
    document.querySelector("#music_sprite").classList.add("on");


    document.querySelector("#myMusic").muted = false;

}


function timeLeftFc() {
    console.log("timeLeftFC" + timeLeft);

    if (timeLeft > 0) {
        timeLeft--;
        setTimeout(timeLeftFc, 1000);
    } else if (points == 5) {
        levelComplete();

    } else {
        gameOver();
    }
}


function gameStatus() {
    console.log("gameStatus");
    // console.log(life);
    if (life == 0) {
        gameOver();
    }


}


function gameOver() {
    console.log("gameOver");
    document.querySelector("#tabt").classList.remove("hide");
    document.querySelector("#boo").currentTime = 0;
    document.querySelector("#boo").play();
    document.querySelector("#music").classList.remove("on");
    document.querySelector("#music").classList.add("off");

    document.querySelector("#myMusic").muted = true;

    document.querySelector("#spil_igen1").addEventListener("click", newGame);
    document.querySelector("#kryds2").addEventListener("click", newGame);

}

function levelComplete() {
    console.log("levelComplete");
    document.querySelector("#vundet").classList.remove("hide");
    document.querySelector("#vinderlyd").currentTime = 0;
    document.querySelector("#vinderlyd").play();
    document.querySelector("#music").classList.remove("on");
    document.querySelector("#music").classList.add("off");

    document.querySelector("#myMusic").muted = true;

    document.querySelector("#spil_igen2").addEventListener("click", newGame);
    document.querySelector("#kryds3").addEventListener("click", newGame);


}

function newGame() {
    location = location.href;
}



// lav en ekstra klasse, der hedder .frugt, som skal sættes på alt frugt ved siden af ryk-klassen. så bliver det dén reference, der fører frugterne ned til clickFrugt().

//lav det samme på clickSlik

//ret State Machine Diagram.




//ryd op i min fade_out #game fra hideStart
