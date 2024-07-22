const test02 = (growth, originX, originY) => {
    // Angle between each line
    const angle = 360 / growth;
    // Increment the line length with each growth
    const lineLength = 50 + (growth - 4) * 10; 
    const group = document.createElementNS(svgNS, "g");
    group.setAttribute("class", "shape");
    // Set the provided random position for the group
    group.setAttribute("transform", `translate(${originX}, ${originY})`);

    for (let j = growth; j >= 0; j--) {
        const line = document.createElementNS(svgNS, "line");
        line.setAttribute("x1", 0);
        line.setAttribute("y1", 0);
        line.setAttribute("x2", 0);
        line.setAttribute("y2", lineLength);
        line.setAttribute("stroke", "red");
        line.setAttribute("stroke-width", 2);
        line.setAttribute("transform", `rotate(${j * angle})`);
        group.appendChild(line);
    }

    container.appendChild(group);

    if (growth < 15) {
        setTimeout(() => {
            group.remove(); // Remove the group after 1 second
            test02(growth + 1, originX, originY); // Call the function recursively with the same origin
        }, 100); // .1-second delay before removing and creating the next group
    }
}