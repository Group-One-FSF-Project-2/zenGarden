const flowerY = flowerContainer.clientHeight * 0.9;

const addFlower = (posX, flowerID, varietal) => {
  const flowerElement = document.createElementNS(svgNS, "g");
  // flowers will grow immediately
  const growth = 0;

  // set all flowers height based on container height
  const flowerHeight = flowerContainer.clientHeight * 0.15;

  // set stem color based on varietal
  let stemColor;
  let petalColor;
  let centerColor;

  switch (varietal) {
    case 7:
      stemColor = "green";
      petalColor = "white";
      centerColor = "yellow";
      break;
    case 8:
      stemColor = "green";
      petalColor = "pink";
      centerColor = "salmon";
      break;
    case 9:
      stemColor = "green";
      petalColor = "purple";
      centerColor = "white";
      break;
    default:
      stemColor = "green";
      petalColor = "white";
      centerColor = "yellow";
  }

  // set flower intitial pos, classes, and data attributes
  let flowerYfuzz = flowerY + Math.random() * 20 - 10;
  flowerElement.setAttribute("transform", `translate(${posX}, ${flowerYfuzz})`);
  flowerElement.setAttribute("class", "plant");
  flowerElement.setAttribute("data-id", flowerID);
  flowerElement.setAttribute("data-type", "flower");
  flowerElement.setAttribute("data-varietal", varietal);
  flowerElement.setAttribute("data-growth", growth);

  // create a group element to wrap the flower components
  // so the entire flower can be animated together
  const flowerGroup = document.createElementNS(svgNS, "g");
  flowerGroup.setAttribute("class", "flowerGroup");

  // create flower stem
  const stem = document.createElementNS(svgNS, "rect");
  stem.setAttribute("x", -1); // Center the rect horizontally
  // bottom of the flower
  stem.setAttribute("y", 0);
  stem.setAttribute("width", 2); // Width of the stem
  stem.setAttribute("height", 0); // Height of the stem
  stem.setAttribute("fill", stemColor);
  stem.setAttribute("class", "flowerStem");
  stem.setAttribute("transform", `rotate(180)`);
  flowerGroup.appendChild(stem);

  // create flower leaves
  for (let i = 0; i < 2; i++) {
    const leaf = document.createElementNS(svgNS, "ellipse");
    leaf.setAttribute("stroke", "black");
    leaf.setAttribute("stroke-width", 0.5);
    leaf.setAttribute("fill", stemColor);
    leaf.setAttribute("cx", 0);
    leaf.setAttribute("cy", -flowerHeight / 4);
    leaf.setAttribute("rx", 0);
    leaf.setAttribute("ry", 0);
    leaf.setAttribute("class", "flowerLeaf");
    leaf.setAttribute(
      "transform",
      `translate(0, ${-flowerHeight / 4}) rotate(${
        30 + i * -60
      }) translate(0, ${flowerHeight / 4 - 20})`
    );
    flowerGroup.appendChild(leaf);
  }

  // create flower petal
  for (let i = 0; i < 3; i++) {
    const petal = document.createElementNS(svgNS, "ellipse");
    petal.setAttribute("stroke", "black");
    petal.setAttribute("stroke-width", 0.5);
    petal.setAttribute("fill", petalColor);
    petal.setAttribute("cx", 0);
    petal.setAttribute("cy", -flowerHeight);
    petal.setAttribute("rx", 0);
    petal.setAttribute("ry", 0);
    petal.setAttribute("class", "flowerPetal");
    petal.setAttribute(
      "transform",
      `translate(0, ${-flowerHeight}) rotate(${
        30 + i * 60
      }) translate(0, ${flowerHeight})`
    );
    flowerGroup.appendChild(petal);
  }

  // create flower center
  const flowerCenter = document.createElementNS(svgNS, "circle");
  flowerCenter.setAttribute("stroke", "black");
  flowerCenter.setAttribute("stroke-width", 0.5);
  flowerCenter.setAttribute("fill", centerColor);
  flowerCenter.setAttribute("cx", 0);
  flowerCenter.setAttribute("cy", -flowerHeight);
  flowerCenter.setAttribute("r", 0);
  flowerCenter.setAttribute("class", "flowerCenter");
  flowerGroup.appendChild(flowerCenter);

  // Append the group to the flower element
  flowerElement.appendChild(flowerGroup);

  // Append flower to container
  flowerContainer.appendChild(flowerElement);
};
