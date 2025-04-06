import React, { useRef, useEffect, useState } from 'react';
import fruitImg from './fruit.png';
import paperImg from './paper.png';
import batteryImg from './battery.png';
import greenCanImg from './trash-can-green.png';
import blueCanImg from './trash-can-blue.png';
import redCanImg from './trash-can-red.png';

const OBJECTS = [
  { name: 'fruit', img: fruitImg, correctBin: 'green' },
  { name: 'paper', img: paperImg, correctBin: 'blue' },
  { name: 'battery', img: batteryImg, correctBin: 'red' },
];

const TrashGame = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');
  const [currentObject, setCurrentObject] = useState(OBJECTS[Math.floor(Math.random() * 3)]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 700;
    canvas.height = 400;

    const gravity = 0.35;

    const trashCans = [
      { color: 'green', x: 100, y: 330, dx: 1.5, width: 50, height: 60, img: new Image() },
      { color: 'blue', x: 300, y: 330, dx: 2, width: 50, height: 60, img: new Image() },
      { color: 'red', x: 500, y: 330, dx: 1.8, width: 50, height: 60, img: new Image() }
    ];

    trashCans[0].img.src = greenCanImg;
    trashCans[1].img.src = blueCanImg;
    trashCans[2].img.src = redCanImg;

    let object = {
      x: 50,
      y: 320,
      vx: 0,
      vy: 0,
      radius: 15,
      launched: false,
      img: new Image(),
    };
    object.img.src = currentObject.img;

    function drawObject() {
      ctx.drawImage(object.img, object.x - 20, object.y - 20, 40, 40);
    }

    function drawTrashCans() {
      trashCans.forEach((can) => {
        ctx.drawImage(can.img, can.x, can.y, can.width, can.height);
      });
    }

    function resetObject() {
      object.x = 50;
      object.y = 320;
      object.vx = 0;
      object.vy = 0;
      object.launched = false;
      const next = OBJECTS[Math.floor(Math.random() * 3)];
      object.img.src = next.img;
      setCurrentObject(next);
    }

    function launchObject() {
      if (!object.launched) {
        object.vx = 5;
        object.vy = -8;
        object.launched = true;
      }
    }

    function update() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Move trash cans
      trashCans.forEach((can) => {
        can.x += can.dx;
        if (can.x + can.width > canvas.width || can.x < 0) {
          can.dx *= -1;
        }
      });

      // Move object
      if (object.launched) {
        object.vy += gravity;
        object.x += object.vx;
        object.y += object.vy;

        // Check for collision with trash cans
        trashCans.forEach((can) => {
          if (
            object.x > can.x &&
            object.x < can.x + can.width &&
            object.y > can.y &&
            object.y < can.y + can.height
          ) {
            if (can.color === currentObject.correctBin) {
              setScore((prev) => prev + 1);
              setMessage("Correct! ✅");
            } else {
              setMessage("Oops! Wrong Bin ❌");
            }
            resetObject();
          }
        });

        // If out of bounds
        if (object.y > canvas.height || object.x > canvas.width) {
          setMessage("Missed! 🚫");
          resetObject();
        }
      }

      drawTrashCans();
      drawObject();

      requestAnimationFrame(update);
    }

    canvas.addEventListener('click', launchObject);
    update();

    return () => canvas.removeEventListener('click', launchObject);
  }, [currentObject]);

  return (
    <div className="trash-game">
      {/* <h2> Isn't it confusing where trash goes?  ♻️</h2> */}
      <h2>Throw the <strong>{currentObject.name}</strong> into the <strong>{currentObject.correctBin}</strong> bin!</h2>
      <canvas ref={canvasRef} style={{ border: '2px solid #ccc', borderRadius: '12px' }} />
      <p>{message}</p>
      <p>Score: {score}</p>
    </div>
  );
};

export default TrashGame;
