const treeY = treeContainer.clientHeight * 0.8;

const addTree = (posX, treeID, createdOn, varietal) => {

    const treeElement = document.createElementNS(svgNS, "g");
    // growth in days
    const growth = Math.floor((Date.now() - createdOn) / 1000 / 60 / 60 / 24);

    // set all trees height based on container height
    const treeHeight = treeContainer.clientHeight * 0.4;

    // set trunk color based on varietal
    let trunkColor;
    let topColor;
    let fruitColor;
    
    switch (varietal) {
        case 1:
            trunkColor = "brown";
            topColor = "green";
            fruitColor = "red";
            break;
        case 2:
            trunkColor = "sienna";
            topColor = "lightgreen";
            fruitColor = "orange";
            break;
        case 3:
            trunkColor = "saddlebrown";
            topColor = "darkgreen";
            fruitColor = "purple";
            break;
        default:
            trunkColor = "brown";
            topColor = "green";
            fruitColor = "red";
            
    }


    // set tree intitial pos, classes, and data attributes
    let treeYfuzz = treeY + Math.random() * 10 - 5;
    treeElement.setAttribute("transform", `translate(${posX}, ${treeYfuzz})`);
    treeElement.setAttribute("class", "plant");
    treeElement.setAttribute("data-id", treeID);
    treeElement.setAttribute("data-createdOn", createdOn);
    treeElement.setAttribute("data-type", "tree");
    treeElement.setAttribute("data-growth", growth);
    treeElement.setAttribute("data-varietal", varietal);

    // create tree trunk
    const trunk = document.createElementNS(svgNS, "rect");
    trunk.setAttribute("x", 0);
    trunk.setAttribute("y", 0);
    trunk.setAttribute("transform", `rotate(180)`);
    trunk.setAttribute("stroke", "black");
    trunk.setAttribute("stroke-width", 1);
    trunk.setAttribute("fill", trunkColor);
    // center trunk
    trunk.setAttribute("width", growth * 4);
    trunk.setAttribute("x", -(growth * 2));
    trunk.setAttribute("height", treeHeight );
    trunk.setAttribute("class", "trunk");
    treeElement.appendChild(trunk);

    // create tree top
    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", 1);
    circle.setAttribute("fill", topColor);
    circle.setAttribute("cx", 0);
    circle.setAttribute("cy", -treeHeight);
    circle.setAttribute("r", growth * 10);
    circle.setAttribute("class", "treeTop");
    treeElement.appendChild(circle);

    // (TESTING) create 5 randomly placed fruit using rotate
    // set fruit color to transparent when placement is set
    for (let i = 0; i < 8; i++) {
        const fruit = document.createElementNS(svgNS, "circle");
        fruit.setAttribute("stroke", "black");
        fruit.setAttribute("stroke-width", 1);
        fruit.setAttribute("fill", fruitColor);
        if (growth < 10) {fruit.setAttribute("display", "none");}
        fruit.setAttribute("display", "none");
        let randomX = Math.random() * 160 - 80;
        fruit.setAttribute("cx", randomX);
        let randomY = Math.random() * 160 - 80;
        fruit.setAttribute("cy", -treeHeight + randomY);
        fruit.setAttribute("r", 10);
        fruit.setAttribute("class", "fruit");
        treeElement.appendChild(fruit);
    }
    
    // append tree to container
    treeContainer.appendChild(treeElement);
}