const test01 = () => {
    const group = document.createElementNS(svgNS, "g");
    group.setAttribute("class", "shape");
    group.setAttribute("transform", `translate(${Math.random() * container.clientWidth}, ${Math.random() * container.clientHeight})`);

    for (let i = 3; i >= 0; i--) { // Start from the largest square
        const size = 20 + i * 20;
        const offset = -size / 2;
        const rect = document.createElementNS(svgNS, "rect");
        rect.setAttribute("class", `_0${i}`);
        rect.setAttribute("x", offset);
        rect.setAttribute("y", offset);
        rect.setAttribute("width", size);
        rect.setAttribute("height", size);
        rect.setAttribute("fill", `hsl(${Math.random() * 360}, 100%, 50%)`); // Random color
        group.appendChild(rect);
    }

    container.appendChild(group);
};