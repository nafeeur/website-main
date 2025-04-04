import { useEffect } from "react";
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    // -------------------------------
    // Custom Cursor & Sphere Parallax
    // -------------------------------
    let sphereScale = 1;
    let lastMouseX = window.innerWidth / 2;
    let lastMouseY = window.innerHeight / 2;
    const sphere = document.getElementById("sphere");

    document.addEventListener("mousemove", (e) => {
      lastMouseX = e.clientX;
      lastMouseY = e.clientY;
      const xPercent = (e.clientX / window.innerWidth - 0.5) * 30;
      const yPercent = (e.clientY / window.innerHeight - 0.5) * 30;
      if (sphere) {
        sphere.style.transform = `scale(${sphereScale}) rotateX(${-yPercent}deg) rotateY(${xPercent}deg)`;
      }
    });

    const cursor = document.getElementById("customCursor");
    document.addEventListener("mousemove", (e) => {
      if (cursor) {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    });

    // -------------------------------
    // Subtle Wave Visualizer Script
    // -------------------------------
    const visualizer = document.getElementById("visualizer");
    const ctx = visualizer ? visualizer.getContext("2d") : null;

    function resizeVisualizer() {
      if (visualizer) {
        visualizer.width = window.innerWidth;
        visualizer.height = 150;
      }
    }
    window.addEventListener("resize", resizeVisualizer);
    resizeVisualizer();

    let time = 0;
    function animateWave() {
      if (!ctx || !visualizer) return;
      ctx.clearRect(0, 0, visualizer.width, visualizer.height);
      time += 0.02;
      ctx.beginPath();
      const amplitude = visualizer.height / 4;
      const frequency = 0.01;
      ctx.moveTo(0, visualizer.height / 2 + Math.sin(0 * frequency + time) * amplitude);
      for (let x = 0; x < visualizer.width; x++) {
        const y = visualizer.height / 2 + Math.sin(x * frequency + time) * amplitude;
        ctx.lineTo(x, y);
      }
      ctx.strokeStyle = "rgba(224, 106, 224, 0.15)";
      ctx.lineWidth = 2;
      ctx.shadowColor = "rgba(224, 106, 224, 0.15)";
      ctx.shadowBlur = 5;
      ctx.stroke();
      requestAnimationFrame(animateWave);
    }
    animateWave();

    // -------------------------------
    // Space Invaders Game Script
    // -------------------------------
    const gameCanvas = document.getElementById("spaceInvadersCanvas");
    const gCtx = gameCanvas ? gameCanvas.getContext("2d") : null;

    function resizeGameCanvas() {
      if (gameCanvas) {
        gameCanvas.width = window.innerWidth;
        gameCanvas.height = window.innerHeight;
      }
    }
    window.addEventListener("resize", resizeGameCanvas);
    resizeGameCanvas();

    let spaceshipX = gameCanvas ? gameCanvas.width / 2 : 0;
    let spaceshipY = gameCanvas ? gameCanvas.height - 60 : 0;
    const spaceshipWidth = 40;
    const spaceshipHeight = 40;
    const spaceshipSpeed = 8;
    let bullets = [];
    const bulletSpeed = 10;
    let enemies = [];
    const enemySpeed = 2;
    const spawnInterval = 1500;
    let leftPressed = false;
    let rightPressed = false;
    let spacePressed = false;
    const shapeTypes = ["circle", "square", "triangle", "diamond", "star"];

    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft" || e.key === "a") leftPressed = true;
      if (e.key === "ArrowRight" || e.key === "d") rightPressed = true;
      if (e.key === " ") spacePressed = true;
    });
    document.addEventListener("keyup", (e) => {
      if (e.key === "ArrowLeft" || e.key === "a") leftPressed = false;
      if (e.key === "ArrowRight" || e.key === "d") rightPressed = false;
      if (e.key === " ") spacePressed = false;
    });

    function spawnEnemy() {
      if (!gameCanvas) return;
      const x = Math.random() * (gameCanvas.width - 50) + 25;
      const y = -50;
      const size = 30 + Math.random() * 15;
      const type = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
      enemies.push({ x, y, size, type });
    }

    function update() {
      if (!gameCanvas) return;
      if (leftPressed) spaceshipX -= spaceshipSpeed;
      if (rightPressed) spaceshipX += spaceshipSpeed;
      if (spaceshipX < 0) spaceshipX = 0;
      if (spaceshipX + spaceshipWidth > gameCanvas.width)
        spaceshipX = gameCanvas.width - spaceshipWidth;
      if (spacePressed) {
        bullets.push({ x: spaceshipX + spaceshipWidth / 2, y: spaceshipY });
        spacePressed = false;
      }
      bullets = bullets
        .map((b) => ({ x: b.x, y: b.y - bulletSpeed }))
        .filter((b) => b.y > 0);
      enemies.forEach((enemy) => (enemy.y += enemySpeed));
      enemies = enemies.filter((enemy) => enemy.y < gameCanvas.height + 50);
      checkCollisions();
    }

    function checkCollisions() {
      bullets.forEach((bullet) => {
        enemies.forEach((enemy) => {
          const distX = bullet.x - enemy.x;
          const distY = bullet.y - enemy.y;
          const distance = Math.sqrt(distX * distX + distY * distY);
          if (distance < enemy.size) enemy.hit = true;
        });
      });
      enemies = enemies.filter((enemy) => !enemy.hit);
      const sphereRect = sphere ? sphere.getBoundingClientRect() : null;
      if (!sphereRect) return;
      for (let i = bullets.length - 1; i >= 0; i--) {
        const bullet = bullets[i];
        if (
          bullet.x >= sphereRect.left &&
          bullet.x <= sphereRect.right &&
          bullet.y >= sphereRect.top &&
          bullet.y <= sphereRect.bottom
        ) {
          bullets.splice(i, 1);
          sphereScale += 0.05;
          const xPercent = (lastMouseX / window.innerWidth - 0.5) * 30;
          const yPercent = (lastMouseY / window.innerHeight - 0.5) * 30;
          if (sphere) {
            sphere.style.transform = `scale(${sphereScale}) rotateX(${-yPercent}deg) rotateY(${xPercent}deg)`;
            sphere.classList.add("hit-animation");
            setTimeout(() => sphere.classList.remove("hit-animation"), 300);
          }
        }
      }
    }

    function drawSpaceship(x, y, w, h) {
      if (!gCtx) return;
      gCtx.save();
      gCtx.translate(x + w / 2, y + h / 2);
      gCtx.rotate(Math.sin(Date.now() / 100) * 0.05);
      gCtx.fillStyle = "#00ffff";
      gCtx.beginPath();
      gCtx.moveTo(0, -h / 2);
      gCtx.lineTo(w / 2, h / 2);
      gCtx.lineTo(-w / 2, h / 2);
      gCtx.closePath();
      gCtx.fill();
      gCtx.restore();
    }

    function drawShape(x, y, size, type) {
      if (!gCtx) return;
      gCtx.save();
      gCtx.translate(x, y);
      gCtx.rotate(Date.now() / 1000);
      switch (type) {
        case "circle":
          gCtx.beginPath();
          gCtx.arc(0, 0, size, 0, 2 * Math.PI);
          gCtx.strokeStyle = "#00ffe0";
          gCtx.lineWidth = 2;
          gCtx.stroke();
          break;
        case "square":
          gCtx.beginPath();
          gCtx.rect(-size / 2, -size / 2, size, size);
          gCtx.strokeStyle = "#ff6fd8";
          gCtx.lineWidth = 2;
          gCtx.stroke();
          break;
        case "triangle":
          gCtx.beginPath();
          gCtx.moveTo(-size / 2, size / 2);
          gCtx.lineTo(size / 2, size / 2);
          gCtx.lineTo(0, -size / 2);
          gCtx.closePath();
          gCtx.fillStyle = "#7afcff";
          gCtx.fill();
          break;
        case "diamond":
          gCtx.beginPath();
          gCtx.moveTo(0, -size / 2);
          gCtx.lineTo(size / 2, 0);
          gCtx.lineTo(0, size / 2);
          gCtx.lineTo(-size / 2, 0);
          gCtx.closePath();
          gCtx.strokeStyle = "#ffb3ff";
          gCtx.lineWidth = 2;
          gCtx.stroke();
          break;
        case "star":
          gCtx.fillStyle = "#89faff";
          gCtx.beginPath();
          for (let i = 0; i < 5; i++) {
            gCtx.lineTo(0, -size);
            gCtx.translate(0, -size);
            gCtx.rotate((Math.PI * 2) / 5);
            gCtx.translate(0, size);
          }
          gCtx.closePath();
          gCtx.fill();
          break;
      }
      gCtx.restore();
    }

    function draw() {
      if (!gCtx) return;
      gCtx.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
      drawSpaceship(spaceshipX, spaceshipY, spaceshipWidth, spaceshipHeight);
      bullets.forEach((b) => {
        gCtx.beginPath();
        gCtx.arc(b.x, b.y, 5, 0, 2 * Math.PI);
        gCtx.fillStyle = "#ff66ff";
        gCtx.fill();
      });
      enemies.forEach((enemy) => {
        drawShape(enemy.x, enemy.y, enemy.size, enemy.type);
      });
    }

    function gameLoop() {
      update();
      draw();
      requestAnimationFrame(gameLoop);
    }

    setInterval(spawnEnemy, spawnInterval);
    requestAnimationFrame(gameLoop);
  }, []);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>About Me</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="background">
        <div className="nebula"></div>
        <div className="starfield"></div>
        <canvas id="spaceInvadersCanvas"></canvas>
        <div className="grid"></div>
        <div className="corner-grid top-left"></div>
        <div className="corner-grid top-right"></div>
        <div className="vapor-overlay"></div>
        <div className="glitch">hi, i'm NAF :)</div>
        <div className="subtitle">swe @ MIT lincoln lab</div>
        <div className="japanese-text">バットマン</div>
        <div className="sphere-container">
          <div className="sphere" id="sphere"></div>
        </div>
        <div className="gif-container">
          <img
            src="https://64.media.tumblr.com/20029c5c8b4300b183415cc39a771f22/ec3f1f9bd5c76bac-13/s500x750/bdfcd4fb56356963766fe8cc9fa56420bc7b1ac9.gif"
            alt="Cool GIF"
            className="cool-gif"
          />
        </div>
        <div
          className="particle"
          style={{ top: "10%", left: "20%", animationDuration: "5s" }}
        ></div>
        <div
          className="particle"
          style={{ top: "50%", left: "60%", animationDuration: "3.5s" }}
        ></div>
        <div
          className="particle"
          style={{ top: "30%", left: "80%", animationDuration: "4.2s" }}
        ></div>
        <div
          className="particle"
          style={{ top: "70%", left: "25%", animationDuration: "4.8s" }}
        ></div>
        <div
          className="particle"
          style={{ top: "85%", left: "50%", animationDuration: "3.7s" }}
        ></div>
        <div className="scanline"></div>
        <canvas id="visualizer"></canvas>
      </div>
      <div className="custom-cursor" id="customCursor"></div>
      <iframe
        width="0"
        height="0"
        src="https://www.youtube.com/embed/OlAx0a82beU?autoplay=1&loop=1&playlist=OlAx0a82beU&controls=0&showinfo=0"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        style={{ display: "none" }}
      ></iframe>
      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html,
        body {
          width: 100%;
          height: 100%;
          overflow: hidden;
          cursor: none;
          font-family: "Orbitron", sans-serif;
        }
        body {
          background: linear-gradient(45deg, #1a0033, #2b004d, #390066, #1a0033);
          background-size: 400% 400%;
          animation: gradientBG 10s ease infinite;
          position: relative;
        }
        @keyframes gradientBG {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .nebula {
          position: absolute;
          top: -10%;
          left: -10%;
          width: 120%;
          height: 120%;
          background: radial-gradient(
                      circle at 30% 30%,
                      rgba(255, 0, 150, 0.15),
                      transparent 70%
                    ),
                    radial-gradient(
                      circle at 70% 70%,
                      rgba(0, 255, 150, 0.15),
                      transparent 70%
                    );
          animation: nebulaAnim 20s ease-in-out infinite;
          z-index: 0.5;
        }
        @keyframes nebulaAnim {
          0% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.1) rotate(20deg);
          }
          100% {
            transform: scale(1) rotate(0deg);
          }
        }
        .starfield {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          overflow: hidden;
        }
        .starfield::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 2px;
          height: 2px;
          background: white;
          box-shadow: 50px 80px white,
            100px 150px white,
            150px 60px white,
            200px 120px white,
            250px 200px white,
            300px 50px white,
            350px 180px white,
            400px 90px white,
            450px 220px white,
            500px 70px white,
            550px 140px white,
            600px 30px white,
            650px 160px white,
            700px 100px white,
            750px 190px white,
            800px 50px white;
          animation: twinkle 3s infinite ease-in-out;
        }
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
        #spaceInvadersCanvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          z-index: 1;
          pointer-events: none;
        }
        .background {
          position: relative;
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
        .grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100vw;
          height: 100vh;
          transform: perspective(1000px) rotateX(60deg);
          background: repeating-linear-gradient(
              transparent,
              transparent 48%,
              #e06ae0 49%,
              transparent 50%
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 48%,
              #e06ae0 49%,
              transparent 50%
            );
          background-size: 50px 50px;
          animation: gridScroll 8s linear infinite;
          opacity: 0.8;
          z-index: 1;
          box-shadow: 0 0 20px rgba(224, 106, 224, 0.3);
        }
        @keyframes gridScroll {
          from {
            background-position: 0 0, 0 0;
          }
          to {
            background-position: 0 50px, 50px 0;
          }
        }
        .corner-grid {
          position: fixed;
          width: 700px;
          height: 880px;
          rotateX(60deg);
          background: repeating-linear-gradient(
              transparent,
              transparent 48%,
              #e06ae0 49%,
              transparent 50%
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 48%,
              #3FC9DA 49%,
              transparent 50%
            );
          background-size: 30px 30px;
          opacity: 0.6;
          animation: cornerGridAnim 8s linear infinite;
          box-shadow: 0 0 20px rgba(224, 106, 224, 0.2);
          z-index: 2;
        }
        .corner-grid.top-left {
          top: 0;
          left: 0;
          clip-path: polygon(0 0, 100% 0, 0 100%);
        }
        .corner-grid.top-right {
          top: 0;
          right: 0;
          clip-path: polygon(100% 0, 0 0, 100% 100%);
        }
        @keyframes cornerGridAnim {
          from {
            background-position: 0 0, 0 0;
          }
          to {
            background-position: 0 30px, 30px 0;
          }
        }
        .vapor-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.1) 0%,
            rgba(0, 0, 0, 0.3) 70%
          );
          pointer-events: none;
          z-index: 2;
          animation: pulse 5s infinite alternate;
        }
        @keyframes pulse {
          0% {
            opacity: 0.3;
          }
          100% {
            opacity: 0.6;
          }
        }
        .sphere-container {
          position: fixed;
          top: 55%;
          left: 50%;
          width: 250px;
          height: 250px;
          transform: translate(-50%, -50%);
          z-index: 8;
          perspective: 800px;
        }
        .sphere {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: radial-gradient(
            circle at 30% 30%,
            #e06ae0,
            #66a8d9,
            #8c73a8
          );
          box-shadow: inset 0 0 30px rgba(255, 255, 255, 0.5),
            0 0 20px rgba(255, 255, 255, 0.5);
          transform-style: preserve-3d;
          transition: transform 0.1s ease-out;
          animation: bubbleEffect 10s ease-in-out infinite;
          position: relative;
        }
        @keyframes bubbleEffect {
          0% {
            filter: brightness(1) hue-rotate(0deg);
          }
          50% {
            filter: brightness(1.2) hue-rotate(180deg);
          }
          100% {
            filter: brightness(1) hue-rotate(360deg);
          }
        }
        .sphere::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          pointer-events: none;
        }
        .sphere.hit-animation::after {
          animation: hitGlow 0.3s ease-out;
        }
        @keyframes hitGlow {
          0% {
            box-shadow: 0 0 0px 0 rgba(255, 255, 255, 0);
          }
          50% {
            box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.7);
          }
          100% {
            box-shadow: 0 0 0px 0 rgba(255, 255, 255, 0);
          }
        }
        .glitch {
          position: fixed;
          top: 2%;
          width: 100%;
          text-align: center;
          font-size: 5.5rem;
          letter-spacing: 0.1em;
          color: #e06ae0;
          text-shadow: 0 0 5px #e06ae0, 0 0 10px #e06ae0;
          animation: glitch 3s infinite;
          z-index: 5;
        }
        @keyframes glitch {
          0% {
            transform: translate(0);
          }
          20% {
            transform: translate(-3px, 3px);
          }
          40% {
            transform: translate(3px, -3px);
          }
          60% {
            transform: translate(-3px, -3px);
          }
          80% {
            transform: translate(3px, 3px);
          }
          100% {
            transform: translate(0);
          }
        }
        .subtitle {
          position: fixed;
          top: 25%;
          width: 100%;
          text-align: center;
          font-size: 1.6rem;
          color: #25F6F6;
          letter-spacing: 0.08em;
          z-index: 5;
          text-shadow: 0 0 1px #25F6F6, 0 0 2px #25F6F6, 0 0 4px #25F6F6;
          animation: fadeIn 4s ease infinite alternate;
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 0.3;
          }
        }
        .japanese-text {
          position: fixed;
          top: 17.5%;
          width: 100%;
          text-align: center;
          font-size: 2rem;
          color: #8c73a8;
          text-shadow: 0 0 5px #8c73a8;
          z-index: 5;
          animation: fadeIn 3s ease infinite alternate;
        }
        @keyframes fadeIn {
          from {
            opacity: 0.5;
          }
          to {
            opacity: 1;
          }
        }
        .gif-container {
          position: fixed;
          bottom: 5px;
          right: 5px;
          z-index: 6;
        }
        .cool-gif {
          width: 50px;
          height: auto;
        }
        .scanline {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0.05) 1px,
            transparent 1px
          );
          background-size: 100% 4px;
          animation: scan 3s linear infinite;
          pointer-events: none;
          z-index: 7;
        }
        @keyframes scan {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 0 4px;
          }
        }
        .custom-cursor {
          position: absolute;
          top: 0;
          left: 0;
          width: 20px;
          height: 20px;
          border: 2px solid #e06ae0;
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          transition: transform 0.1s ease-out;
          z-index: 8;
        }
        .custom-cursor::after {
          content: "";
          position: absolute;
          top: 50%;
          left: 50%;
          width: 20px;
          height: 20px;
          border: 2px solid #e06ae0;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: cursorPulse 1.5s infinite;
        }
        @keyframes cursorPulse {
          0% {
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          100% {
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0;
          }
        }
        .particle {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #e06ae0;
          border-radius: 50%;
          opacity: 0.2;
          animation: flicker 3s infinite;
        }
        @keyframes flicker {
          0%,
          100% {
            opacity: 0.1;
          }
          50% {
            opacity: 0.4;
          }
        }
        #visualizer {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 100px;
          z-index: 3;
          pointer-events: none;
        }
      `}</style>
    </>
  );
}
