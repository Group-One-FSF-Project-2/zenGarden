const test06 = (originX, originY) => {
    const svgNS = "http://www.w3.org/2000/svg";
    const group = document.createElementNS(svgNS, "g");

    // move the group to the origin position
    group.setAttribute("transform", `translate(${originX}, ${originY})`);
    group.setAttribute("class", "shape");

    //slider value, sets growth of tree 
    let growth = document.getElementById("slider").value;

    // create tree trunk
    const trunk = document.createElementNS(svgNS, "rect");
    trunk.setAttribute("x", 0);
    trunk.setAttribute("y", 0);
    trunk.setAttribute("transform", `rotate(180)`);
    trunk.setAttribute("fill", "brown");
    trunk.setAttribute("width", growth * 4);
    trunk.setAttribute("height", growth * 20);
    group.appendChild(trunk);

    // create tree top
    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", 2);
    circle.setAttribute("fill", "green");
    circle.setAttribute("cx", -(growth * 2));
    circle.setAttribute("cy", -(growth * 20));
    circle.setAttribute("r", growth * 10);
    group.appendChild(circle);

    // draw 10 fruits where they would be when the growth is at 7
    const fruits = [];

    for (let i = 0; i < 10; i++) {
        const fruit = document.createElementNS(svgNS, "circle"); // Moved inside the loop

        const angle = (i / 10) * 2 * Math.PI;  // Evenly space fruits around the circle
        
        const radius = 10 + Math.random() * 45;  // Random radius from 10 to 55

        const x = -(6 * 2) + Math.cos(angle) * radius;
        const y = -(6 * 20) + Math.sin(angle) * radius;

        fruit.setAttribute("cx", x);
        fruit.setAttribute("cy", y);



        fruit.setAttribute("r", 6);
        fruit.setAttribute("fill", "none");
        group.appendChild(fruit); // Appends a new fruit each iteration
        fruits.push(fruit);
    
    }

    container.appendChild(group);

    // slifer control
    document.getElementById("slider").addEventListener("input", (growth) => {
        growth = document.getElementById("slider").value;
               

        // scale tree trunk
        trunk.setAttribute("width", growth * 4);
        trunk.setAttribute("height", growth * 20);

        // scale tree top
        circle.setAttribute("cx", -(growth * 2));
        circle.setAttribute("cy", -(growth * 20));
        circle.setAttribute("r", growth * 10);

        // Scale fruits
        if (growth > 6) {
            fruits.forEach(fruit => {
                // get teh value of the x attribute of the fruit relative to its origin originX
                originX   
                // positive if right of center, negative if left of center
                if ( ( fruit.getAttribute("cx") + originX )  > -10.5) {
                    var x = (growth * 2) - Math.abs(fruit.getAttribute("cx"));
                
                    fruit.setAttribute("transform", `translate(${x}, ${y})`);
                } else {
                    var x = -(growth * 2) - Math.abs(fruit.getAttribute("cx"));
                }

                

                fruit.setAttribute("transform", `translate(${x}, ${y})`);
                fruit.setAttribute("r", growth);
                fruit.setAttribute("fill", "red");
            });
        } else if (growth < 6) {
            fruits.forEach(fruit => {
                //set to clear opacity
                fruit.setAttribute("fill", "none");
            });
        }   
    });
}
