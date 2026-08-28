/* =========================================
   PAGE NAVIGATION
========================================= */

function goToPage2() {

    window.location.href = "page2.html";

}


function goToPage3() {

    window.location.href = "page3.html";

}


function restart() {

    window.location.href = "index.html";

}


/* =========================================
   FLOATING HEARTS
========================================= */

const heartContainer =
    document.querySelector(".hearts");


const heartSymbols = [

    "❤️",
    "💕",
    "💗",
    "💖",
    "💓",
    "💘",
    "💝",
    "♡",
    "♥"

];


function createHeart() {

    if (!heartContainer) {

        return;

    }


    const heart =
        document.createElement("div");


    heart.classList.add("heart");


    const randomHeart =
        heartSymbols[
            Math.floor(
                Math.random() *
                heartSymbols.length
            )
        ];


    heart.innerHTML = randomHeart;


    heart.style.left =
        Math.random() * 100 + "vw";


    const size =
        Math.random() * 25 + 15;


    heart.style.fontSize =
        size + "px";


    const duration =
        Math.random() * 5 + 5;


    heart.style.animationDuration =
        duration + "s";


    heart.style.animationDelay =
        Math.random() * 1.5 + "s";


    heartContainer.appendChild(heart);


    setTimeout(() => {

        heart.remove();

    }, (duration + 2) * 1000);

}


/* =========================================
   START FLOATING HEARTS
========================================= */

setInterval(
    createHeart,
    220
);


/* =========================================
   DATE QUESTION
========================================= */

const yesButton =
    document.getElementById("yesButton");


const noButton =
    document.getElementById("noButton");


const dateHint =
    document.getElementById("dateHint");


let yesScale = 1;

let noAttempts = 0;


/* =========================================
   NO BUTTON RUNS AWAY
========================================= */

function runAway() {

    if (!noButton || !yesButton) {

        return;

    }


    noAttempts++;


    /* Make YES bigger */

    yesScale += 0.25;


    yesButton.style.transform =
        `scale(${yesScale})`;


    yesButton.style.boxShadow =
        "0 15px 40px rgba(217, 4, 41, 0.45)";


    /* Change messages */

    const messages = [

        "Are you sure? 🥺❤️",

        "Hmm... try again 😭",

        "The NO button doesn't seem to like you 😂",

        "You can't escape this one 🙈❤️",

        "Okayyy... YES is getting bigger 👀",

        "I think YES is your only option now 😌❤️"

    ];


    dateHint.textContent =
        messages[
            Math.min(
                noAttempts - 1,
                messages.length - 1
            )
        ];


    /* Move NO button */

    const maxX =
        Math.max(
            100,
            window.innerWidth / 2 - 100
        );


    const maxY =
        Math.max(
            100,
            window.innerHeight / 2 - 100
        );


    const randomX =
        Math.random() *
        maxX * 2 -
        maxX;


    const randomY =
        Math.random() *
        maxY * 2 -
        maxY;


    noButton.style.position =
        "fixed";


    noButton.style.left =
        `calc(50% + ${randomX}px)`;


    noButton.style.top =
        `calc(50% + ${randomY}px)`;


    /* Make NO slightly smaller */

    noButton.style.transform =
        `scale(${Math.max(
            0.65,
            1 - noAttempts * 0.04
        )})`;


    /* If YES gets huge... */

    if (yesScale >= 2.5) {

        dateHint.textContent =
            "Okay okay... just click YES already 😭❤️";

    }

}


/* =========================================
   YES BUTTON
========================================= */

function sayYes() {

    /* Heart explosion */

    heartExplosion();


    /* Small delay for dramatic effect */

    setTimeout(() => {

        goToPage3();

    }, 700);

}


/* =========================================
   HEART EXPLOSION
========================================= */

function heartExplosion() {

    if (!heartContainer) {

        return;

    }


    for (
        let i = 0;
        i < 60;
        i++
    ) {

        setTimeout(() => {

            createHeart();

        }, i * 25);

    }

}


/* =========================================
   FINAL PAGE HEART BURST
========================================= */

if (
    document.body.classList.contains(
        "final-page"
    )
) {

    setTimeout(() => {

        heartExplosion();

    }, 400);

}
