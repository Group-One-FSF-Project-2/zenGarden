const test03 = (growth, originX, originY) => {
    const group = document.createElementNS(svgNS, "g");

    // Set the provided random position for the plantPart
    group.setAttribute("transform", `translate(${originX}, ${originY})`);
    group.setAttribute("class", "shape");
    // Create a 'bush' blob with random size and position in relation to the origin

    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("class", "bush");
    circle.setAttribute("cx", 0);
    circle.setAttribute("cy", 0);
    circle.setAttribute("r", 20 + Math.random() * 10);
    circle.setAttribute("fill", "green");
    circle.setAttribute("stroke", "lightgreen");
    circle.setAttribute("stroke-width", 1);
    group.appendChild(circle);
                
    // move the 'bush' blob to a random position +- 50 from previous position
    const randomX = originX + (Math.random() * 50 - 25);
    const randomY = originY + (Math.random() * 50 - 25);

    container.appendChild(group);
    
    if (growth > 0) {
        setTimeout(() => {
            test03(growth - 1, randomX, randomY); // Call the function recursively with offset origin
        }, 100); // delay before creating the next 'bush' blob
    }
}
    
