function crearCorazon() {
    const c = document.createElement("div");
    c.className = "corazon";
    c.innerHTML = "❤";
    c.style.left = Math.random() * 100 + "vw";

    document.body.appendChild(c);

    setTimeout(() => c.remove(), 6000);
}

setInterval(crearCorazon, 400);