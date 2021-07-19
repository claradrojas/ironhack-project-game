let frames = 0;
let obstacles = []

function startGame() {
    window.addEventListener('load', (event) => {
        // document.getElementsByClassName('.game')


        setInterval(() => {
            updateObstacles();
            generateObstacles();
            checkCollision();
            frames++;
        }, 2000)
    }
    )
}

class Potato {
    constructor(position) {
        this.position = 0;

    }

    moveUp() {
        if (this.position > 0)
            this.position += 1
    }

    moveDown() {
        if (this.position > 0) {
            this.position -= 1
        }

    }
}


class Obstacle {
    constructor(positionX, positionY) {
        this.positionX = 0;
        this.positionY = 0;

    }

    move() {
        this.positionX -= 10

    }


    updateObstacles() {
        move()
    }

    generateObstacles() {
        let obstaclesPosition = [0, 1, 2]
        let y = obstaclesPosition[matchMedia.floor(Match.random() * obstaclesPosition.length)]
        obstacles.push(obstaclesPosition)
    }

    checkCollision() {

    }

}




































/*let potato = document.querySelector('#potato')


window.addEventListener('load', () => {
    potato.style.position = 'absolute';
    potato.style.bottom = 0;
    potato.style.top = 500;
})

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



