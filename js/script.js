// de afbeelding die de muis volgt
var cursor = document.querySelector("#rups");

// als je dood bent (game over)
var doodTekst = document.querySelector("#deadmessage");
var randomDoodTekst = ["haha you're so bad", "better luck next time", "game over", "OOF", "LMFAO", "hahahahahaha", "just quit", "..."]
var randomTekst

// wapens
var mepper = document.querySelector("#mepper");
var knuppel = document.querySelector("#knuppel");
var pan = document.querySelector("#pan");
var slipper = document.querySelector("#slipper");


// boeken
var book1 = document.querySelector("#book");
var book2 = document.querySelector("#book2");
var book3 = document.querySelector("#book3");
var book4 = document.querySelector("#book4");
var book5 = document.querySelector("#book5");

// de section (het speelveld, bruine gedeelte)
var speelveld = document.querySelector("section");

// restart button
var restart = document.querySelector("#restart");

// geluid
var swoosh = document.querySelector("#swoosh");
var eat = document.querySelector("#eat");


// de score waarde en score span waar de score in moet geselecteerd
var scoreTekst = document.querySelector("#score");
var jouwScore = 0;

// de score waarde en score span waar de score in moet geselecteerd
var highscoreTekst = document.querySelector("#highscore");
var hoogsteScore = 0;

// variabelen voor de waardes van de px waar de boeken en wapens spawnen.
var random;
var random2;
var random3;
var random4;
var random5;
var random6;
var random7;
var random8;
var random9;
var random10;
var random11;
var random12;
var random13;
var random14;
var random15;
var random16;
var random17;
var random18;
var random19;
var random20;


// Bron https://www.youtube.com/watch?v=rfpRZ2t_BrQ
// img van rups volgt de cursor
// dit snap ik niet helemaal
speelveld.addEventListener("mousemove", e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 12)+"px; left: "+(e.pageX - 25)+"px;");
});
doodTekst.addEventListener("mousemove", e => {
    cursor.setAttribute("style", "top: "+(e.pageY - 12)+"px; left: "+(e.pageX - 25)+"px;");
});
// 




// deze functies worden meteen uitgevoerd waardoor de boekjes en wapens niet in elkaar spawnen als je de pagina refreshed.
function beginPlaats() {

    random = Math.ceil(Math.random()*930);
    random2 = Math.ceil(Math.random()*1150)+200;
    book1.style.top = random + "px";
    book1.style.left = random2 + "px";

    random5 = Math.ceil(Math.random()*930);
    random6 = Math.ceil(Math.random()*1150)+200;
    book2.style.top = random5 + "px";
    book2.style.left = random6 + "px";

    random7 = Math.ceil(Math.random()*930);
    random8 = Math.ceil(Math.random()*1150)+200;
    book3.style.top = random7 + "px";
    book3.style.left = random8 + "px";

    random9 = Math.ceil(Math.random()*930);
    random10 = Math.ceil(Math.random()*1150)+200;
    book4.style.top = random9 + "px";
    book4.style.left = random10 + "px";

    random11 = Math.ceil(Math.random()*930);
    random12 = Math.ceil(Math.random()*1150)+200;
    book5.style.top = random11 + "px";
    book5.style.left = random12 + "px";
};
beginPlaats();


function wapensOnzichtbaar() {
    slipper.style.display = "none";
    knuppel.style.display = "none";
    pan.style.display = "none";
};
wapensOnzichtbaar();





// punten teller en nieuwe plaats van het boek als je erover heen hovert
function punt(){
  
    jouwScore = jouwScore+1;
    scoreTekst.textContent= jouwScore;

    if(hoogsteScore < jouwScore) {
        hoogsteScore = hoogsteScore+1;
        highscoreTekst.textContent= hoogsteScore;
    };

    random = Math.ceil(Math.random()*930);
    random2 = Math.ceil(Math.random()*1150)+200;
   
    book1.style.top = random + "px";
    book1.style.left = random2 + "px";

    eat.play();
};

function punt2(){

    jouwScore = jouwScore+1;
    scoreTekst.textContent= jouwScore;

    if(hoogsteScore < jouwScore) {
        hoogsteScore = hoogsteScore+1;
        highscoreTekst.textContent= hoogsteScore;
    };

    random5 = Math.ceil(Math.random()*930);
    random6 = Math.ceil(Math.random()*1150)+200;

    book2.style.top = random5 + "px";
    book2.style.left = random6 + "px";

    eat.play();
};

function punt3(){
   
    jouwScore = jouwScore+1;
    scoreTekst.textContent= jouwScore;

    if(hoogsteScore < jouwScore) {
        hoogsteScore = hoogsteScore+1;
        highscoreTekst.textContent= hoogsteScore;
    };

    random7 = Math.ceil(Math.random()*930);
    random8 = Math.ceil(Math.random()*1150)+200;
    
    book3.style.top = random7 + "px";
    book3.style.left = random8 + "px";

    eat.play();
};

function punt4(){
  
    jouwScore = jouwScore+1;
    scoreTekst.textContent= jouwScore;

    if(hoogsteScore < jouwScore) {
        hoogsteScore = hoogsteScore+1;
        highscoreTekst.textContent= hoogsteScore;
    };

    random9 = Math.ceil(Math.random()*930);
    random10 = Math.ceil(Math.random()*1150)+200;
    
    book4.style.top = random9 + "px";
    book4.style.left = random10 + "px";

    eat.play();
};

function punt5(){

    jouwScore = jouwScore+1;
    scoreTekst.textContent= jouwScore;

    if(hoogsteScore < jouwScore) {
        hoogsteScore = hoogsteScore+1;
        highscoreTekst.textContent= hoogsteScore;
    };

    random11 = Math.ceil(Math.random()*930);
    random12 = Math.ceil(Math.random()*1150)+200;

    book5.style.top = random11 + "px";
    book5.style.left = random12 + "px";

    eat.play();
};
// eind punten teller





// een wapen geraakt
function dood(){

    if(jouwScore > 100) {
        doodTekst.textContent = "You are the GOAT";
    } else {
        // random text uit de array wordt laten zien
        randomTekst = Math.floor(Math.random()*8);
        doodTekst.textContent = randomDoodTekst[randomTekst];
    }
    
    // gameover text doorschijnend laten zien
    doodTekst.classList.add("gameover");
  
    swoosh.play();
};


// restart
function nietMeerDood(){
    doodTekst.textContent = "";
    jouwScore = 0;
    scoreTekst.textContent= jouwScore;
    doodTekst.classList.remove("gameover");
    speelveld.classList.remove("score100");
    hoogsteScore = hoogsteScore+0;
    highscoreTekst.textContent= hoogsteScore;
};





// vliegenmepper die steeds veranderd van positie en de moeilijkheid die verandert als je een bepaalde score hebt
function wapenSpawn() {

    random3 = Math.floor(Math.random()*930);
    random4 = Math.floor(Math.random()*1150)+200;
    random13 = Math.floor(Math.random()*930);
    random14 = Math.floor(Math.random()*1150)+200;
    random15 = Math.floor(Math.random()*930);
    random16 = Math.floor(Math.random()*1150)+200;
    random17 = Math.floor(Math.random()*930);
    random18 = Math.floor(Math.random()*1150)+200;
    random19 = Math.floor(Math.random()*930);
    random20 = Math.floor(Math.random()*1150)+200;


    // bron: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetLeft
    mepper.style.top = random3 + "px";
    mepper.style.left = random4 + "px";
    slipper.style.top = random15 + "px";
    slipper.style.left = random16 + "px";
    knuppel.style.top = random17 + "px";
    knuppel.style.left = random18 + "px";
    pan.style.top = random19 + "px";
    pan.style.left = random20 + "px";




// bij een bepaalde score wordt de game moeilijker
    if(jouwScore < 10) {
        book2.style.display = "block";
        book3.style.display = "block";
        book4.style.display = "block";
        book5.style.display = "block";

        slipper.style.display = "none";
        knuppel.style.display = "none";
        pan.style.display = "none";
    } else if (jouwScore > 10 && jouwScore < 25){
        book5.style.display = "none";

        slipper.style.display = "block";
    }; 
    
    if (jouwScore > 25 && jouwScore < 50){
        book4.style.display = "none";
    } else if (jouwScore > 50 && jouwScore < 75){
        book3.style.display = "none";

        knuppel.style.display = "block";
    }; 
    
    if (jouwScore > 75 && jouwScore < 100) {
        pan.style.display = "block";
    } else if (jouwScore > 100) {
        book2.style.display = "none";
        speelveld.classList.add("score100");
        console.log(">100, wajooooooo thats impossible");
    }; 
};







// voert de functie "vliegenmepper" om de seconde uit
setInterval(wapenSpawn, 1000);
// bron: https://developer.mozilla.org/en-US/docs/Web/API/setInterval


// De hovers en restart button
mepper.addEventListener("mouseover", dood);
slipper.addEventListener("mouseover", dood);
knuppel.addEventListener("mouseover", dood);
pan.addEventListener("mouseover", dood);

restart.addEventListener("click", nietMeerDood);

book1.addEventListener("mouseover", punt);
book2.addEventListener("mouseover", punt2);
book3.addEventListener("mouseover", punt3);
book4.addEventListener("mouseover", punt4);
book5.addEventListener("mouseover", punt5);

