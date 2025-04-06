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
  const gameRef = useRef({
    object: {
      x: 50,
      y: 320,
      vx: 0,
      vy: 0,
      launched: false,
      img: null
    },
    keys: {
      ArrowLeft: false,
      ArrowRight: false,
      ArrowUp: false,
      ArrowDown: false
    },
    animationId: null
  });
  
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');
  const [currentObject, setCurrentObject] = useState(OBJECTS[Math.floor(Math.random() * 3)]);

  // Initialize the game
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    // Enable image transparency
    ctx.imageSmoothingEnabled = true;
    ctx.globalCompositeOperation = 'source-over';
    
    canvas.width = 700;
    canvas.height = 400;

    // Focus the canvas so it can receive keyboard events
    canvas.focus();

    const gravity = 0.35;
    const friction = 0.99;
    const game = gameRef.current;

    // Initialize the object image with transparency handling
    game.object.img = new Image();
    game.object.img.src = currentObject.img;
    
    // Make sure image loads with proper transparency
    game.object.img.onload = () => {
      // Force redraw when image is loaded
      if (game.animationId) {
        cancelAnimationFrame(game.animationId);
        game.animationId = requestAnimationFrame(update);
      }
    };

    const trashCans = [
      { color: 'green', x: 100, y: 330, dx: 1.5, width: 50, height: 60, img: new Image() },
      { color: 'blue', x: 300, y: 330, dx: 2, width: 50, height: 60, img: new Image() },
      { color: 'red', x: 500, y: 330, dx: 1.8, width: 50, height: 60, img: new Image() }
    ];

    trashCans[0].img.src = greenCanImg;
    trashCans[1].img.src = blueCanImg;
    trashCans[2].img.src = redCanImg;

    function resetObject() {
      game.object.x = 50;
      game.object.y = 320;
      game.object.vx = 0;
      game.object.vy = 0;
      game.object.launched = false;
      
      const next = OBJECTS[Math.floor(Math.random() * 3)];
      game.object.img.src = next.img;
      setCurrentObject(next);
    }

    function launchObject() {
      if (!game.object.launched) {
        game.object.vx = 5;
        game.object.vy = -8;
        game.object.launched = true;
      }
    }

    // Process keyboard inputs
    function processInput() {
      if (!game.object.launched) return;
      
      if (game.keys.ArrowLeft) {
        game.object.vx -= 0.3;
      }
      if (game.keys.ArrowRight) {
        game.object.vx += 0.3;
      }
      if (game.keys.ArrowUp) {
        game.object.vy -= 0.3;
      }
      if (game.keys.ArrowDown) {
        game.object.vy += 0.3;
      }
    }

    function update() {
      // Clear the canvas with transparency
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Set background (optional - remove if you want full transparency)
      ctx.fillStyle = 'rgba(255, 255, 255, 0)'; // Transparent background
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Process keyboard input
      processInput();

      // Move trash cans
      trashCans.forEach((can) => {
        can.x += can.dx;
        if (can.x + can.width > canvas.width || can.x < 0) {
          can.dx *= -1;
        }
      });

      // Move object
      if (game.object.launched) {
        game.object.vy += gravity; // Apply gravity
        game.object.x += game.object.vx;
        game.object.y += game.object.vy;

        // Apply friction to slow down the horizontal speed over time
        game.object.vx *= friction;

        // Check for collision with trash cans
        trashCans.forEach((can) => {
          if (
            game.object.x > can.x &&
            game.object.x < can.x + can.width &&
            game.object.y > can.y &&
            game.object.y < can.y + can.height
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

        // If object goes out of bounds
        if (
          game.object.y > canvas.height || 
          game.object.x > canvas.width || 
          game.object.x < 0
        ) {
          setMessage("Missed! 🚫");
          resetObject();
        }
      }

      // Draw trash cans
      trashCans.forEach((can) => {
        ctx.drawImage(can.img, can.x, can.y, can.width, can.height);
      });

      // Draw object with transparency
      if (game.object.img && game.object.img.complete) {
        // Save the current context state
        ctx.save();
        
        // Draw the image with proper transparency
        ctx.drawImage(
          game.object.img, 
          game.object.x - 20, 
          game.object.y - 20, 
          40, 
          40
        );
        
        // Restore the context state
        ctx.restore();
      }

      game.animationId = requestAnimationFrame(update);
    }

    // Keyboard event listeners
    const handleKeyDown = (e) => {
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
        game.keys[e.key] = true;
        // Prevent scrolling when using arrow keys
        e.preventDefault();
      }
    };

    const handleKeyUp = (e) => {
      if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(e.key)) {
        game.keys[e.key] = false;
      }
    };

    // Click event listener
    const handleClick = () => {
      launchObject();
    };

    // Add event listeners
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    canvas.addEventListener('click', handleClick);

    // Start game loop
    update();

    // Cleanup function
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      canvas.removeEventListener('click', handleClick);
      cancelAnimationFrame(game.animationId);
    };
  }, [currentObject]);

  return (
    <div className="trash-game">
      <h2>Throw the {currentObject.name} into the {currentObject.correctBin} bin!</h2>
      <canvas
        ref={canvasRef}
        style={{ 
          border: '2px solid #ccc', 
          borderRadius: '12px',
          background: 'transparent' // Ensure canvas background is transparent too
        }}
        tabIndex={0} // Make canvas focusable
      />
      <p>{message}</p>
      <p>Score: {score}</p>
      <div style={{ marginTop: '10px', backgroundImage:'url("tree.jpeg")', padding: '10px', borderRadius: '5px' }}>
        <p>
          <strong>How to play:</strong>
        </p>
        <p>1. Click on the game to launch the object</p>
        <p>2. Use arrow keys to control the object's direction:</p>
        <ul>
          <li>← → Control horizontal movement</li>
          <li>↑ ↓ Control vertical movement</li>
        </ul>
      </div>
    </div>
  );
};

export default TrashGame;