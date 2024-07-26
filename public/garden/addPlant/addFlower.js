const flowerY = flowerContainer.clientHeight * 0.95;

const addFlower = (posX, flowerID, varietal) => {

    const flowerElement = document.createElementNS(svgNS, "g");
    // growth in days
    const growth = 0;

    // set all flowers height based on container height
    const flowerHeight = flowerContainer.clientHeight * 0.15;

    // set stem color based on varietal
    let stemColor;
    let petalColor;
    let centerColor;
    
    switch (varietal) {
        case 1:
            stemColor = "green";
            petalColor = "white";
            centerColor = "yellow";
            break;
        case 2:
            stemColor = "green";
            petalColor = "pink";
            centerColor = "salmon";
            break;
        case 3:
            stemColor = "green";
            petalColor = "purple";
            centerColor = "white";
            break;
        default:
            stemColor = "green";
            petalColor = "white";
            centerColor = "yellow";
            
    }


    // set flower intitial pos, classes, and data attributes
    let flowerYfuzz = flowerY + Math.random() * 10 - 5;
    flowerElement.setAttribute("transform", `translate(${posX}, ${flowerYfuzz})`);
    flowerElement.setAttribute("class", "plant");
    flowerElement.setAttribute("data-id", flowerID);
    flowerElement.setAttribute("data-type", "flower");
    flowerElement.setAttribute("data-varietal", varietal);
    flowerElement.setAttribute("data-growth", growth);

    // create flower stem
    const stem = document.createElementNS(svgNS, "rect");
    stem.setAttribute("x", -1); // Center the rect horizontally
    // bottom of the flower
    stem.setAttribute("y", 0);
    stem.setAttribute("width", 2); // Width of the stem
    stem.setAttribute("height", 0); // Height of the stem
    stem.setAttribute("fill", stemColor);
    stem.setAttribute("class", "flowerStem");
    stem.setAttribute("transform", `rotate(180)`);
    flowerElement.appendChild(stem);

    //create flower leaves
    for (let i = 0; i < 2; i++) {
        const leaf = document.createElementNS(svgNS, "ellipse");
        leaf.setAttribute("stroke", "black");
        leaf.setAttribute("stroke-width", .5);
        leaf.setAttribute("fill", stemColor);
        leaf.setAttribute("cx", 0);
        leaf.setAttribute("cy", -flowerHeight / 4);
        leaf.setAttribute("rx", 0);
        leaf.setAttribute("ry", 0);
        leaf.setAttribute("class", "flowerLeaf");
        leaf.setAttribute("transform", `translate(0, ${-flowerHeight / 4}) rotate(${30 + i * -60}) translate(0, ${flowerHeight / 4 - 20})`);
        flowerElement.appendChild(leaf);
    }


    // create flower petal
    for (let i = 0; i < 3; i++) {
        const petal = document.createElementNS(svgNS, "ellipse");
        petal.setAttribute("stroke", "black");
        petal.setAttribute("stroke-width", .5);
        petal.setAttribute("fill", petalColor);
        petal.setAttribute("cx", 0);
        petal.setAttribute("cy", -flowerHeight);
        petal.setAttribute("rx", 0);
        petal.setAttribute("ry", 0);
        petal.setAttribute("class", "flowerPetal");
        petal.setAttribute("transform", `translate(0, ${-flowerHeight}) rotate(${30 + i * 60}) translate(0, ${flowerHeight})`);
        flowerElement.appendChild(petal);
    }

    // create flower center
    const flowerCenter = document.createElementNS(svgNS, "circle");
    flowerCenter.setAttribute("stroke", "black");
    flowerCenter.setAttribute("stroke-width", .5);
    flowerCenter.setAttribute("fill", centerColor);
    flowerCenter.setAttribute("cx", 0);
    flowerCenter.setAttribute("cy", -flowerHeight);
    flowerCenter.setAttribute("r", 0);
    flowerCenter.setAttribute("class", "flowerCenter");
    flowerElement.appendChild(flowerCenter);
   
console.log(flowerElement);

    // append flower to flowerContainer
    flowerContainer.appendChild(flowerElement);
}