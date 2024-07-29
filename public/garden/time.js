const growCycle = () => {
    growTree();
    growBush();
    growFlower();
}


setInterval(growCycle, 5000);