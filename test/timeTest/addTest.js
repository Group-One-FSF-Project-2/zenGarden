const addTree = (posX, growth, varietal) => {

    const treeHeight = container.clientHeight * 0.5;

    const treeElement = document.createElementNS(svgNS, "g");

    treeElement.setAttribute("transform", `translate(${posX}, ${posY})`);
    treeElement.setAttribute("class", "plant");
    treeElement.setAttribute("data-type", "tree");
    treeElement.setAttribute("data-growth", growth);
    treeElement.setAttribute("data-varietal", varietal);

    // create tree trunk
    const trunk = document.createElementNS(svgNS, "rect");
    trunk.setAttribute("x", 0);
    trunk.setAttribute("y", 0);
    trunk.setAttribute("transform", `rotate(180)`);
    trunk.setAttribute("stroke", "black");
    trunk.setAttribute("stroke-width", 2);
    trunk.setAttribute("fill", "brown");
    trunk.setAttribute("width", growth * 4);
    trunk.setAttribute("x", -(growth * 2));
    trunk.setAttribute("height", treeHeight );
    trunk.setAttribute("class", "trunk");
    treeElement.appendChild(trunk);

    // create tree top
    const circle = document.createElementNS(svgNS, "circle");
    circle.setAttribute("stroke", "black");
    circle.setAttribute("stroke-width", 2);
    circle.setAttribute("fill", "green");
    circle.setAttribute("cx", 0);
    circle.setAttribute("cy", -treeHeight);
    circle.setAttribute("r", growth * 10);
    circle.setAttribute("class", "treeTop");
    treeElement.appendChild(circle);

    container.appendChild(treeElement);
}


const addBush = (posX, growth, varietal) => {
    const bushElement = document.createElementNS(svgNS, "g");
    bushElement.setAttribute("transform", `translate(${originX}, ${originY})`);

}


const addFlower = (posX, growth, varietal) => {


}