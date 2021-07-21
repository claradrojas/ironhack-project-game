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
    }, 150);
}

class Potato {
    constructor() {
        this.positionY = 200;

        this.element = document.createElement("div")
        this.element.classList.add("potato")
        this.element.style.position = 'absolute'
        this.element.style.top = this.positionY + "px";
        board.appendChild(this.element)

    }

    moveDown() {
        console.log('down')
        if (this.positionY < 200) {
            this.positionY += 100
            this.element.style.top = this.positionY + "px";
        }
    }

    moveUp() {
        console.log('up')
        if (this.positionY > 0) {
            this.positionY -= 100;
            // todo
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


const player = new Potato();


// updateObstacles(): updates the position for all elements in the array of obstacles 
function updateObstacles() {
    obstacles.forEach((obstacle, index) => {
        obstacle.move();
        if (obstacle.positionX < -25) {
            obstacles.splice(index, 1);
            board.removeChild(obstacle.element);
        }
    })
}

function generateObstacles() {
    let obstaclesPosition = [0, 100, 200]

    let y = obstaclesPosition[Math.floor(Math.random() * obstaclesPosition.length)]

    if (frames % 20 === 0) {
        obstacle = new Obstacle(1000, y)
        obstacles.push(obstacle)
    }


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
 
}

function checkCollision() {
    // obstacles array -- check P & Obs position X & Y, check widht & height and compare
    /* obstacles.forEach(obstacle => {
        if(obstacle.positionX < 100 ){
            // check Y position of Potato & obstacle
                // if colision --> gameOver()
        }
     });
 */
}

function gameOver() {
    console.log("game over")
}



document.addEventListener('keyup', e => { 
    switch (e.key) {
        case "ArrowUp":
            player.moveUp()
            break;
        case "ArrowDown":
            player.moveDown();
            break;
    }

})





