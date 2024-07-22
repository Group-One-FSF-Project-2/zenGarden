const test05 = (growth, originX, originY) => {
    const group = document.createElementNS(svgNS, "g");

    // move the group to the origin position
    group.setAttribute("transform", `translate(${originX}, ${originY})`);
    group.setAttribute("class", "shape");

    // add tree trunk
    const trunk = document.createElementNS(svgNS, "rect");
    trunk.setAttribute("x", 0);
    trunk.setAttribute("y", 0);
    trunk.setAttribute("width", growth * 4);
    trunk.setAttribute("height", growth * 20);
    // rotate the trunk to grow upwards
    trunk.setAttribute("transform", `rotate(180)`);
    trunk.setAttribute("fill", "brown");
    group.appendChild(trunk);


    // add tree top
    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("cx", -(growth * 2) );
    circle.setAttribute("cy", -(growth * 20) );
    circle.setAttribute("r", growth * 10);
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", 2);
    circle.setAttribute("fill", "green");
    group.appendChild(circle);

    // add fruits to the tree
    for (let i = 0; i < growth; i++) {
        const fruit = document.createElementNS(svgNS, "circle");
        // length of a square in a circle = r * 1.414
        const halfLength = growth * 10 * 1.414 / 2;
        const x = (Math.random() * halfLength * 1.8) - halfLength;
        const y = -(growth * 20) + ( ( Math.random() * halfLength * 1.8 ) - halfLength);
        fruit.setAttribute("cx", x);
        fruit.setAttribute("cy", y);
        fruit.setAttribute("r", 10);
        fruit.setAttribute("fill", "red");
        fruit.setAttribute("stroke", "black");
        fruit.setAttribute("stroke-width", 1);
        fruit.setAttribute("class", "fruit");
        group.appendChild(fruit);
    }
    
    container.appendChild(group);
}

