document.addEventListener("keydown", function(event) {
    if (event.code === "Space") {
        jump();
    }
});

function jump() {
    let ninja = document.getElementById("ninja");
    if (!ninja.classList.contains("jump")) {
        ninja.classList.add("jump");
        setTimeout(() => {
            ninja.classList.remove("jump");
        }, 500);
    }
}

document.getElementById("ninja").style.transition = "bottom 0.5s";
document.styleSheets[0].insertRule(`
    .jump {
        bottom: 100px !important;
    }
`, document.styleSheets[0].cssRules.length);
