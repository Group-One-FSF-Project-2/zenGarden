const bushY = bushContainer.clientHeight * 0.70;

const addBush = (posX, bushID, createdOn, varietal) => {

    const bushElement = document.createElementNS(svgNS, "g");
    // growth in days
    const growth = Math.floor((Date.now() - createdOn) / 1000 / 60 / 60 / 24);

    // set all bushs height based on container height
    const bushHeight = bushContainer.clientHeight * 0.2;

    // set bush and fruit color based on varietal
    let bushColor;
    let fruitColor;
    
    switch (varietal) {
        case 1:
            bushColor = "seagreen";
            fruitColor = "blue";
            break;
        case 2:
            bushColor = "springgreen";
            fruitColor = "tomato";
            break;
        case 3:
            bushColor = "forestgreen";
            fruitColor = "yellowgreen";
            break;
        default:
            bushColor = "green";
            fruitColor = "red";
    }

    // let bushYfuzz = bushY + Math.random() * 20 - 10;
    // set bush intitial pos, classes, and data attributes
    bushElement.setAttribute("transform", `translate(${posX}, ${bushY})`);
    bushElement.setAttribute("class", "plant");
    bushElement.setAttribute("data-id", bushID);
    bushElement.setAttribute("data-type", "bush");
    bushElement.setAttribute("data-growth", growth);
    bushElement.setAttribute("data-varietal", varietal);

    // create bush
    const bush = document.createElementNS(svgNS, "rect");
    bush.setAttribute("x", -20);
    bush.setAttribute("y", 0);
    bush.setAttribute("stroke", "black");
    bush.setAttribute("stroke-width", 1);
    bush.setAttribute("fill", bushColor);
    // rounded top
    bush.setAttribute("rx", 30);
    bush.setAttribute("ry", 30);
    // center bush
    bush.setAttribute("width", growth * 20);
    bush.setAttribute("height", bushHeight );
    bush.setAttribute("class", "bush");
    bushElement.appendChild(bush);


    // (TESTING) create 5 randomly placed fruit using rotate
    // set fruit color to transparent when placement is set
    for (let i = 0; i < 20; i++) {
        const fruit = document.createElementNS(svgNS, "circle");
        fruit.setAttribute("stroke", "black");
        fruit.setAttribute("stroke-width", 1);
        fruit.setAttribute("fill", fruitColor);
        if (growth < 10) {fruit.setAttribute("display", "none");}
        fruit.setAttribute("display", "none");
        let randomX = -85  + ( i * 9 );
        fruit.setAttribute("cx", randomX);
        let randomY = Math.random() * 80 - 40;
        fruit.setAttribute("cy", bushHeight /2 + randomY);
        fruit.setAttribute("r", 5);
        fruit.setAttribute("class", "fruit");
        bushElement.appendChild(fruit);
    }
    
    // append bush to container
    bushContainer.appendChild(bushElement);
}