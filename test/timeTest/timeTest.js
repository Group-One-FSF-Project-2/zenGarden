let growPlants = false;

const startTime = () => {
    growPlants = true;
}

const pauseTime = () => {
    growPlants = false;
}

const growAllPlants = () => {
    if (growPlants) {
        growTree();
        growBush();
        growFlower();
    }
};

setInterval(growAllPlants, 3000);