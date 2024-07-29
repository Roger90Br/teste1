function setup() {
    createCanvas(800, 600);
    noStroke();
  }
  
  function draw() {
    background(220);
  
    // Draw the stem
    fill(34, 139, 34);
    rect(width / 2 - 5, height / 2, 10, 150);
  
    // Draw the leaves
    fill(50, 205, 50);
    ellipse(width / 2 - 20, height / 2 + 50, 30, 10);
    ellipse(width / 2 + 20, height / 2 + 50, 30, 10);
  
    // Draw the flower
    let flowerX = mouseX;
    let flowerY = mouseY;
  
    fill(255, 255, 0);
    ellipse(flowerX, flowerY, 50, 50); // Center
  
    fill(255, 105, 180);
    for (let i = 0; i < 8; i++) {
      let angle = PI / 4 * i;
      let x = flowerX + cos(angle) * 40;
      let y = flowerY + sin(angle) * 40;
      ellipse(x, y, 30, 30);
    }
  }
  