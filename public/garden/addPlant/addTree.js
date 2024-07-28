const treeY = treeContainer.clientHeight * 0.8;

const addTree = (posX, treeID, createdOn, varietal) => {

    const treeElement = document.createElementNS(svgNS, "g");
    // growth in hours
    if (createdOn > 10) {createdOn = 10;}

    const growth = createdOn;

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
    
    treeElement.setAttribute("transform", `translate(${posX}, ${treeY})`);
    treeElement.setAttribute("class", "plant");
    treeElement.setAttribute("data-id", treeID);
    treeElement.setAttribute("data-createdOn", createdOn);
    treeElement.setAttribute("data-type", "tree");
    treeElement.setAttribute("data-growth", growth);
    treeElement.setAttribute("data-varietal", varietal);

    // Create a group element to wrap the tree components
    const treeGroup = document.createElementNS(svgNS, "g");
    treeGroup.setAttribute("class", "treeGroup");


    let treeHeightfuzz = treeHeight + Math.random() * 50 - 25;
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
    trunk.setAttribute("height", treeHeightfuzz );
    trunk.setAttribute("class", "trunk");
    treeGroup.appendChild(trunk);

    // create tree top
    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", 1);
    circle.setAttribute("fill", topColor);
    circle.setAttribute("cx", 0);
    circle.setAttribute("cy", -treeHeightfuzz);
    circle.setAttribute("r", growth * 10);
    circle.setAttribute("class", "treeTop");
    treeGroup.appendChild(circle);

    // set fruit color to display:none until bush is fully grown
    for (let i = 0; i < 8; i++) {
        const fruit = document.createElementNS(svgNS, "circle");
        fruit.setAttribute("stroke", "black");
        fruit.setAttribute("stroke-width", 1);
        fruit.setAttribute("fill", fruitColor);
        if (growth < 10) {
            fruit.setAttribute("display", "none");
        } else {
            fruit.setAttribute("display", "flex");
        }
        let randomX = -60  + ( i * 15 );
        fruit.setAttribute("cx", randomX);
        let randomY = Math.random() * 120 - 60;
        fruit.setAttribute("cy", -treeHeightfuzz + randomY);
        fruit.setAttribute("r", 10);
        fruit.setAttribute("class", "fruit");
        treeGroup.appendChild(fruit);
    }
    
    // Append the group to the tree element
    treeElement.appendChild(treeGroup);

    // Append tree to container
    treeContainer.appendChild(treeElement);
}