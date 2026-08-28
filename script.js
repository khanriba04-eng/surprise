/* =========================================
   PAGE NAVIGATION
========================================= */

function goToPage2() {
    window.location.href = "page2.html";
}

function goToPage3() {
    window.location.href = "page3.html";
}

function goToPage4() {
    window.location.href = "page4.html";
}

function restart() {
    window.location.href = "index.html";
}


/* =========================================
   DATE PICKER
========================================= */

const datePicker = document.getElementById("datePicker");
const selectedDate = document.getElementById("selectedDate");

if (datePicker) {
    const today = new Date();

    const year = today.getFullYear();

    const month = String(
        today.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
        today.getDate()
    ).padStart(2, "0");

    datePicker.min = `${year}-${month}-${day}`;
}


/* =========================================
   CHOOSE DATE
========================================= */

function chooseDate() {

    if (!datePicker || !selectedDate) {
        return;
    }

    const selected = datePicker.value;

    if (!selected) {

        selectedDate.textContent =
            "Choose a date first, silly 🥺❤️";

        selectedDate.style.animation = "none";

        setTimeout(() => {
            selectedDate.style.animation =
                "dateMessageAppear 0.6s ease";
        }, 10);

        return;
    }

    const date = new Date(
        selected + "T00:00:00"
    );

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const formattedDate =
        date.toLocaleDateString(
            "en-IN",
            options
        );

    selectedDate.innerHTML =
        `It's a date! 🥰❤️<br>
        <span style="font-size: 18px;">
            ${formattedDate}
        </span>`;

    selectedDate.style.animation = "none";

    setTimeout(() => {
        selectedDate.style.animation =
            "dateMessageAppear 0.6s ease";
    }, 10);

    heartExplosion();
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
   DATE QUESTION BUTTONS
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


    /* Change message */

    const messages = [

        "Are you sure? 🥺❤️",

        "Hmm... try again 😭",

        "The NO button doesn't seem to like you 😂",

        "You can't escape this one 🙈❤️",

        "Okayyy... YES is getting bigger 👀",

        "I think YES is your only option now 😌❤️"

    ];

    if (dateHint) {

        dateHint.textContent =
            messages[
                Math.min(
                    noAttempts - 1,
                    messages.length - 1
                )
            ];
    }


    /* Move NO button */

    const buttonWidth =
        noButton.offsetWidth;

    const buttonHeight =
        noButton.offsetHeight;

    const padding = 20;

    const maxX =
        window.innerWidth -
        buttonWidth -
        padding;

    const maxY =
        window.innerHeight -
        buttonHeight -
        padding;

    const randomX =
        Math.max(
            padding,
            Math.random() * maxX
        );

    const randomY =
        Math.max(
            padding,
            Math.random() * maxY
        );

    noButton.style.position = "fixed";

    noButton.style.left =
        randomX + "px";

    noButton.style.top =
        randomY + "px";


    /* Make NO smaller */

    noButton.style.transform =
        `scale(${Math.max(
            0.65,
            1 - noAttempts * 0.04
        )})`;


    /* Final message */

    if (
        yesScale >= 2.5 &&
        dateHint
    ) {

        dateHint.textContent =
            "Okay okay... just click YES already 😭❤️";
    }
}


/* =========================================
   YES BUTTON
========================================= */

function sayYes() {

    heartExplosion();

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
