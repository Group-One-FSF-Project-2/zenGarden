const test04 = (growth, originX, originY) => {
    const group = document.createElementNS(svgNS, "g");

    // Move the group to the origin position
    group.setAttribute("transform", `translate(${originX}, ${originY})`);
    group.setAttribute("class", "shape");

    // Randomly determine the length and angle of the branch
    const length = 25 + Math.random() * 10;
    const angle = -60 + Math.random() * 120; // Allow angles only upwards

    // Calculate the end position of the branch
    const endX = originX + angle;
    const endY = originY - length

    // Create a tree branch that goes up at a random angle
    const line = document.createElementNS(svgNS, "line");
    // Start has already been set by the transform attribute of the group
    line.setAttribute("x1", 0);
    line.setAttribute("y1", 0);
    line.setAttribute("x2", endX - originX);
    line.setAttribute("y2", endY - originY);
    line.setAttribute("stroke", "brown");
    line.setAttribute("stroke-width", 1.5);
    group.appendChild(line);

    // add a small green circle leaf at the end of the branch
    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("cx", endX - originX);  // Relative to the group
    circle.setAttribute("cy", endY - originY);  // Relative to the group
            
    // make random ones red
    if (Math.random() > 0.95) {
        circle.setAttribute("r", 10);
        circle.setAttribute("fill", "darkorange");
        circle.setAttribute("class", "fruit");
    } else {
        circle.setAttribute("r", 5);
        circle.setAttribute("fill", "green");
        circle.setAttribute("class", "leaf");
    }
    group.appendChild(circle);

    container.appendChild(group);

    if (growth > 0) {
        setTimeout(() => {
            // Create 2 more branches at the end of the current branch
            test04(growth - 1, endX, endY);
            test04(growth - 1, endX, endY);
        }, 100); // Delay before creating the next branch
    }
}

let fruitsPicked = 0;

// harvest fruit
container.addEventListener("click", function(event) {
    if (event.target.classList.contains("fruit")) {
        event.target.remove();
        fruitsPicked++;
        document.getElementById("counter").textContent = `Counter: ${fruitsPicked}`;
    }
});
