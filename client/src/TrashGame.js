import React, { useRef, useEffect, useState } from 'react';
import trashImg from './trash.png'; // Replace with your trash can image

const TrashGame = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 600;
    canvas.height = 300;

    let trashCan = { x: 0, y: 250, width: 50, height: 50, dx: 2 };
    let paperBall = { x: 50, y: 250, radius: 10, vx: 0, vy: 0, launched: false };
    const gravity = 0.3;
    const trashImage = new Image();
    trashImage.src = trashImg;

    function drawTrashCan() {
      ctx.drawImage(trashImage, trashCan.x, trashCan.y, trashCan.width, trashCan.height);
    }

    function drawBall() {
      ctx.beginPath();
      ctx.arc(paperBall.x, paperBall.y, paperBall.radius, 0, Math.PI * 2);
      ctx.fillStyle = "#6b4f4f";
      ctx.fill();
      ctx.closePath();
    }

    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move trash can
      trashCan.x += trashCan.dx;
      if (trashCan.x + trashCan.width > canvas.width || trashCan.x < 0) {
        trashCan.dx *= -1;
      }

      // Move paper ball
      if (paperBall.launched) {
        paperBall.vy += gravity;
        paperBall.x += paperBall.vx;
        paperBall.y += paperBall.vy;

        // Check for trash can hit
        if (
          paperBall.x > trashCan.x &&
          paperBall.x < trashCan.x + trashCan.width &&
          paperBall.y > trashCan.y &&
          paperBall.y < trashCan.y + trashCan.height
        ) {
          setScore(score + 1);
          setMessage("Nice Shot! 🎯");
          resetBall();
        }

        // Out of bounds
        if (paperBall.y > canvas.height || paperBall.x > canvas.width) {
          setMessage("Try Again 😅");
          resetBall();
        }
      }

      drawTrashCan();
      drawBall();
      requestAnimationFrame(update);
    }

    function resetBall() {
      paperBall.x = 50;
      paperBall.y = 250;
      paperBall.vx = 0;
      paperBall.vy = 0;
      paperBall.launched = false;
      setTimeout(() => setMessage(''), 2000);
    }

    function launchBall() {
      if (!paperBall.launched) {
        paperBall.vx = 5;
        paperBall.vy = -7;
        paperBall.launched = true;
      }
    }

    canvas.addEventListener('click', launchBall);

    update();

    return () => canvas.removeEventListener('click', launchBall);
  }, [score]);

  return (
    <div className="trash-game">
      <h2>Catapult the Paper into the Trash Can!</h2>
      <canvas ref={canvasRef} style={{ border: '2px solid #eee' }} />
      <p>{message}</p>
      <p>Score: {score}</p>
    </div>
  );
};

export default TrashGame;
