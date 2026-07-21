// Loading Screen
window.onload = function () {

    setTimeout(() => {

        document.getElementById("loader").style.display = "none";

    }, 3000);

};

// Password

function checkPassword() {

    let pass = document.getElementById("password").value;

    if (pass === "1234") {

        document.getElementById("passwordPage").style.display = "none";

        document.getElementById("mainWebsite").style.display = "block";

        document.getElementById("music").play();

        typeWriter();

    }

    else {

        document.getElementById("wrong").innerHTML =
            "❌ Wrong Password";

    }

}

// Love Letter

const message =
    `Happy Birthday, My Dearest Wamiq ❤️

Today is all about celebrating the amazing person you are.

Thank you for making my life brighter with your smile and your love.

I pray that every dream in your heart comes true and that this year brings you endless happiness, success, good health, and countless beautiful memories.

No matter where life takes us, you will always have a special place in my heart.

Keep smiling, keep shining, and always remember that someone is silently praying for your happiness every single day.

Happy Birthday, My Love.

Forever Yours,

❤️ MRS WAMIQ ❤️`;

let i = 0;

function typeWriter() {

    if (i < message.length) {

        document.getElementById("typewriter").innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter, 40);

    }

}

// Gift

function openGift() {

    alert("🎁 Surprise! Scroll Down To See Your Birthday Memories ❤️");

}

// Cake

function blowCandles() {

    alert("🕯️ Candles Blown!\n\nHappy Birthday Wamiq ❤️🎉");

}

// Floating Hearts

setInterval(() => {

    let heart = document.createElement("div");

    heart.innerHTML = "❤️";

    heart.style.position = "fixed";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.bottom = "-20px";

    heart.style.fontSize = (20 + Math.random() * 30) + "px";

    heart.style.zIndex = "999";

    heart.style.animation = "floatUp 6s linear forwards";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 6000);

}, 600);
function checkPassword() {
    let pass = document.getElementById("password").value;

    if (pass === "1234") {
        document.getElementById("passwordPage").style.display = "none";
        document.getElementById("mainWebsite").style.display = "block";

        const music = document.getElementById("music");
        music.play().catch(() => { });

        typeWriter();
    } else {
        document.getElementById("wrong").innerHTML = "Wrong Password";
    }
}
function blowCandles() {

    document.getElementById("flame").style.display = "none";

    alert("🎉 Happy Birthday Wamiq ❤️");

}