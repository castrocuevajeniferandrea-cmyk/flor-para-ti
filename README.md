
body {
    background: radial-gradient(circle, #0a0a0a, #000);
    height: 100vh;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-family: "Segoe UI";
    overflow: hidden;
}

/* CONTENEDOR */
.flor {
    position: relative;
    width: 200px;
    height: 200px;
}

/* CAPAS */
.capa {
    position: absolute;
    width: 100%;
    height: 100%;
}

/* PETALOS */
.capa span {
    position: absolute;
    width: 60px;
    height: 100px;
    background: radial-gradient(circle at top, #d9a7ff, #7b2cbf);
    border-radius: 50% 50% 60% 60%;
    left: 50%;
    top: 50%;
    transform-origin: bottom center;
    opacity: 0;
    filter: blur(0.5px);
}

/* DISTRIBUCION */
.capa1 span:nth-child(1) { transform: rotate(0deg) translateY(-70px) scale(0.3); animation: abrir 1s forwards 0.3s; }
.capa1 span:nth-child(2) { transform: rotate(90deg) translateY(-70px) scale(0.3); animation: abrir 1s forwards 0.5s; }
.capa1 span:nth-child(3) { transform: rotate(180deg) translateY(-70px) scale(0.3); animation: abrir 1s forwards 0.7s; }
.capa1 span:nth-child(4) { transform: rotate(270deg) translateY(-70px) scale(0.3); animation: abrir 1s forwards 0.9s; }

.capa2 span:nth-child(1) { transform: rotate(45deg) translateY(-50px) scale(0.2); animation: abrir 1s forwards 1.2s; }
.capa2 span:nth-child(2) { transform: rotate(135deg) translateY(-50px) scale(0.2); animation: abrir 1s forwards 1.4s; }
.capa2 span:nth-child(3) { transform: rotate(225deg) translateY(-50px) scale(0.2); animation: abrir 1s forwards 1.6s; }
.capa2 span:nth-child(4) { transform: rotate(315deg) translateY(-50px) scale(0.2); animation: abrir 1s forwards 1.8s; }

/* CENTRO */
.centro {
    width: 40px;
    height: 40px;
    background: radial-gradient(circle, #ffd6ff, #c77dff);
    border-radius: 50%;
    position: absolute;
    top: 80px;
    left: 80px;
    box-shadow: 0 0 15px #c77dff;
    opacity: 0;
    animation: aparecer 1s forwards 2s;
}

/* ANIMACIONES */
@keyframes abrir {
    to {
        opacity: 1;
        transform: scale(1) translateY(-70px) rotate(var(--r));
    }
}

/* FIX: mantener transform correcto */
.capa1 span:nth-child(1) { --r: 0deg; }
.capa1 span:nth-child(2) { --r: 90deg; }
.capa1 span:nth-child(3) { --r: 180deg; }
.capa1 span:nth-child(4) { --r: 270deg; }

.capa2 span:nth-child(1) { --r: 45deg; }
.capa2 span:nth-child(2) { --r: 135deg; }
.capa2 span:nth-child(3) { --r: 225deg; }
.capa2 span:nth-child(4) { --r: 315deg; }

@keyframes aparecer {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* TEXTO */
.mensaje {
    margin-top: 40px;
    color: #e0aaff;
    font-size: 18px;
    text-align: center;
    max-width: 300px;
    opacity: 0;
    animation: aparecer 2s forwards 2.5s;
}

/* CORAZONES */
.corazon {
    position: absolute;
    color: #d0a2ff;
    font-size: 12px;
    animation: flotar 6s linear infinite;
}

@keyframes flotar {
    0% { transform: translateY(100vh); opacity: 1; }
    100% { transform: translateY(-10vh); opacity: 0; }
}
