const addTree = (posX, growth, varietal) => {

    const treeHeight = container.clientHeight * 0.5;

    const treeElement = document.createElementNS(svgNS, "g");

    treeElement.setAttribute("transform", `translate(${posX}, ${posY})`);
    treeElement.setAttribute("class", "plant");
    treeElement.setAttribute("data-type", "tree");
    treeElement.setAttribute("data-growth", growth);
    treeElement.setAttribute("data-varietal", varietal);

    // create tree trunk
    const trunk = document.createElementNS(svgNS, "rect");
    trunk.setAttribute("x", 0);
    trunk.setAttribute("y", 0);
    trunk.setAttribute("transform", `rotate(180)`);
    trunk.setAttribute("stroke", "black");
    trunk.setAttribute("stroke-width", 2);
    trunk.setAttribute("fill", "brown");
    trunk.setAttribute("width", growth * 4);
    trunk.setAttribute("x", -(growth * 2));
    trunk.setAttribute("height", treeHeight );
    trunk.setAttribute("class", "trunk");
    treeElement.appendChild(trunk);

    // create tree top
    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", 2);
    circle.setAttribute("fill", "green");
    circle.setAttribute("cx", 0);
    circle.setAttribute("cy", -treeHeight);
    circle.setAttribute("r", growth * 10);
    circle.setAttribute("class", "treeTop");
    treeElement.appendChild(circle);

    container.appendChild(treeElement);
}


const addBush = (posX, growth, varietal) => {
    const bushElement = document.createElementNS(svgNS, "g");
    bushElement.setAttribute("transform", `translate(${posX}, ${posY})`);

    bushElement.setAttribute("class", "plant");
    bushElement.setAttribute("data-type", "bush");
    bushElement.setAttribute("data-growth", growth);
    bushElement.setAttribute("data-varietal", varietal);

    const bushBlob = document.createElementNS(svgNS, "circle");
    

}


const addFlower = (posX, growth, varietal) => {
    const flowerElement = document.createElementNS(svgNS, "g");
    flowerElement.setAttribute("transform", `translate(${posX}, ${posY})`);

    flowerElement.setAttribute("class", "plant");
    flowerElement.setAttribute("data-type", "flower");
    flowerElement.setAttribute("data-growth", growth);
    flowerElement.setAttribute("data-varietal", varietal);

    const flowerStem = document.createElementNS(svgNS, "line");
    flowerStem.setAttribute("x1", 0);
    flowerStem.setAttribute("y1", 0);
    flowerStem.setAttribute("x2", 0);
    flowerStem.setAttribute("y2", 50);
    flowerStem.setAttribute("stroke", "green");
    flowerStem.setAttribute("stroke-width", 2);
    flowerStem.setAttribute("class", "stem");
    flowerStem.setAttribute("transform", `rotate(180)`);
    flowerElement.appendChild(flowerStem);


    for (let i = 0; i < 4; i++) {
        const flowerPetal = document.createElementNS(svgNS, "rect");
        flowerPetal.setAttribute("x", 0);
        flowerPetal.setAttribute("y", 0);
        flowerPetal.setAttribute("width", growth * 2);
        flowerPetal.setAttribute("height", growth * 2);
        flowerPetal.setAttribute("stroke", "black");
        flowerPetal.setAttribute("stroke-width",.1);
        flowerPetal.setAttribute("fill", "pink");
        flowerPetal.setAttribute("class", "petal");
        flowerPetal.setAttribute("transform", `translate(0, -50) rotate(${i * 90}) scale(${growth})`);
        flowerElement.appendChild(flowerPetal);
    }    


    container.appendChild(flowerElement);

}