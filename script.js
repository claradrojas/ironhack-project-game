let frames = 0;
let obstacles = []


const board = document.getElementById("game-board")

window.addEventListener('load', (event) => {
    startGame();
})

function startGame() {
    setInterval(() => {
        generateObstacles();
        updateObstacles();
        checkCollision();

        frames++;
    }, 2000);
}

class Potato {
    constructor(position) {
        this.position = 0;// potato moves in the Y vertical range only
        // we dont give a fixed position we move it with arrow

        this.element = document.createElement("div")
        this.element.classList.add("potato")
        this.element.style.position = 'absolute'
        this.element.style.top = this.position;
        board.appendChild(this.element)

    }

    moveUp() {
        if (this.position >= 0) // check later
            this.position += 1 //(this.position -= 1)
    }

    moveDown() {
        if (this.position > 0) {
            this.position -= 1  // (this.position += 1)
        }

    }
}


class Obstacle {
    constructor(positionX, positionY) {
        this.positionX = positionX;
        this.positionY = positionY;

        this.element = document.createElement("div")
        this.element.classList.add("obstacle")
        this.element.style.position = 'absolute'
        this.element.style.top = this.positionY + "px";
        this.element.style.left = this.positionX + "px";

        board.appendChild(this.element)
    }

    move() {
        this.positionX -= 20
        this.element.style.left = this.positionX + "px";
    }

}

// updateObstacles(): updates the position for all elements in the array of obstacles 
function updateObstacles() {
    obstacles.forEach(obstacle => {
        obstacle.move();
        

    })
}

function generateObstacles() {
    let obstaclesPosition = [0, 100, 200]
    
    let y = obstaclesPosition[Math.floor(Math.random() * obstaclesPosition.length)]

   /* let minGap = 50
    let maxGap = 200
    let gap = Math.floor(Math.random() * (maxGap - minGap + 1) + minGap)*/

    obstacle = new Obstacle(1000, y) 
    obstacles.push(obstacle)
    
    
}

function checkCollision() {
    // obstacles array -- check P & Obs position X & Y, check widht & height and compare
   /* obstacles.forEach(obstacle => {
        if (
            potato.position < obstacle.positionX + obstacle.width &&
            potato.position + potato.width > obstacle.positionX &&
            potato.position < obstacle.positionY + obstacle.height &&
            potato.height + potato.position > obstacle.positionY
        ) {
            return true // 'collision';
        }
    });
*/
}


function gameOver() {
    /* if (checkCollision()) {
         return 'Game Over'
     } */
}































/*

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'arrowUp':
            potato.style.top = parseInt(potato.style.top) - moveBy + '5px';
            break;
        case 'arrowDown':
            potato.style.bottom = parseInt(potato.style.bottom) + moveBy + '-5px'
            break;
    }
})

*/



