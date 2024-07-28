const bushY = bushContainer.clientHeight * 0.85;

const addBush = (posX, bushID, createdOn, varietal) => {
  const bushElement = document.createElementNS(svgNS, "g");
  // growth in hours
  if (createdOn > 5) {
    createdOn = 5;
  }
  const growth = createdOn;

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

  // Create a group element to wrap the bush components
  const bushGroup = document.createElementNS(svgNS, "g");
  bushGroup.setAttribute("class", "bushGroup");

  // create bush
  let bushHeightfuzz = bushHeight + Math.random() * 50 - 25;

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
  bush.setAttribute("width", growth * 40);
  bush.setAttribute("height", bushHeightfuzz);
  bush.setAttribute("class", "bush");
  bush.setAttribute("transform", `rotate(180)`);
  bushGroup.appendChild(bush);

  // set fruit color to display:none until bush is fully grown
  for (let i = 0; i < 20; i++) {
    const fruit = document.createElementNS(svgNS, "circle");
    fruit.setAttribute("stroke", "black");
    fruit.setAttribute("stroke-width", 1);
    fruit.setAttribute("fill", fruitColor);
    if (growth < 5) {
      fruit.setAttribute("display", "none");
    } else {
      fruit.setAttribute("display", "flex");
    }
    let randomX = -85 + i * 9;
    fruit.setAttribute("cx", randomX);
    let randomY = Math.random() * 80 - 40;
    fruit.setAttribute("cy", bushHeightfuzz / 2 + randomY);
    fruit.setAttribute("r", 5);
    // get a number between 1 and 3
    let bushFruit = (i % 3) + 1;
    fruit.setAttribute("class", `fruit bushFruit${bushFruit}`);
    fruit.setAttribute("transform", `rotate(180)`);
    bushGroup.appendChild(fruit);
  }

  // Append the group to the bush element
  bushElement.appendChild(bushGroup);

  // Append bush to container
  bushContainer.appendChild(bushElement);
};
