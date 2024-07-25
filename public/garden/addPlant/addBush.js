const bushY = bushContainer.clientHeight * 0.85;

const addbush = (posX, bushID, growth, varietal) => {

    const bushElement = document.createElementNS(svgNS, "g");

    // set all bushs height based on container height
    const bushHeight = bushContainer.clientHeight * 0.2;

    // set bush color based on varietal
    let bushColor;
    
    switch (varietal) {
        case "blueberries":
            bushColor = "mediumspringgreen";
        case "raspberries":
            bushColor = "springgreen";
        case "gooseberries":
            bushColor = "forestgreen";
        default:
            bushColor = "green";
    }

    // set fruit color based on varietal
    let fruitColor;

    switch (varietal) {
        case "blueberries":
            fruitColor = "blue";
        case "raspberries":
            fruitColor = "tomato";
        case "gooseberries":
            fruitColor = "yellowgreen";
        default:
            fruitColor = "red";
    }

    // set bush intitial pos, classes, and data attributes
    bushElement.setAttribute("transform", `translate(${posX}, ${bushY})`);
    bushElement.setAttribute("class", "plant");
    bushElement.setAttribute("data-id", bushID);
    bushElement.setAttribute("data-type", "bush");
    bushElement.setAttribute("data-growth", growth);
    bushElement.setAttribute("data-varietal", varietal);

    // create bush
    const bush = document.createElementNS(svgNS, "rect");
    bush.setAttribute("x", 0);
    bush.setAttribute("y", 0);
    bush.setAttribute("transform", `rotate(180)`);
    bush.setAttribute("stroke", "black");
    bush.setAttribute("stroke-width", 1);
    bush.setAttribute("fill", trunkColor);
    // center bush
    bush.setAttribute("width", growth * 4);
    bush.setAttribute("x", -(growth * 2));
    bush.setAttribute("height", bushHeight );
    bush.setAttribute("class", "bush");
    bushElement.appendChild(bush);


    // (TESTING) create 5 randomly placed fruit using rotate
    // set fruit color to transparent when placement is set
    for (let i = 0; i < 5; i++) {
        const fruit = document.createElementNS(svgNS, "circle");
        fruit.setAttribute("stroke", "black");
        fruit.setAttribute("stroke-width", 1);
        fruit.setAttribute("fill", fruit);
        let randomX = Math.random() * 180 - 90;
        fruit.setAttribute("cx", randomX);
        let randomY = Math.random() * 180 - 90;
        fruit.setAttribute("cy", -bushHeight + randomY);
        fruit.setAttribute("r", 10);
        fruit.setAttribute("class", "fruit");
        bushElement.appendChild(fruit);
    }
    
    // append bush to container
    bushContainer.appendChild(bushElement);
}