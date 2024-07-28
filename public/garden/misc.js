// miscellanous functions for the garden

//fetch call to add all plants to garden
const fetchGarden = document.getElementById("fetchGarden");

// hardcoding the id, will be chosen from form
const plotId = 1; // TESTING PURPOSES ONLY
fetchGarden.addEventListener("click", async function () {
  const response = await fetch("/api/gardenplots", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
  const gardenPlots = await response.json();

  const choosePlot = gardenPlots.find((plot) => plot.id === plotId);

  if (choosePlot) {
    generateGarden(choosePlot);
  }
});

// generate garden with choosePlot

const generateGarden = (choosePlot) => {
  // get each plant from choosePlot and add using a switch statement
  choosePlot.plants.forEach((plant) => {
    let plantId = plant.plotPlant.id;
    let plantVariety = plant.plotPlant.plant_id;
    let locationX = plant.plotPlant.location_x;
    let createdAt = plant.plotPlant.createdAt;
    // difference in hours
    let timeGrowth = Math.floor(
      (Date.now() - new Date(createdAt)) / 1000 / 60 / 60
    );

    console.log(plant);
    console.log(plantId, plantVariety, locationX, timeGrowth);

    switch (plantVariety) {
      case 1:
        addTree(locationX, plantId, timeGrowth, 1);
        break;
      case 2:
        addTree(locationX, plantId, timeGrowth, 2);
        break;
      case 3:
        addTree(locationX, plantId, timeGrowth, 3);
        break;
      case 4:
        addBush(locationX, plantId, timeGrowth, 4);
        break;
      case 5:
        addBush(locationX, plantId, timeGrowth, 5);
        break;
      case 6:
        addBush(locationX, plantId, timeGrowth, 6);
        break;
      case 7:
        addFlower(locationX, plantId, 7);
        break;
      case 8:
        addFlower(locationX, plantId, 8);
        break;
      case 9:
        addFlower(locationX, plantId, 9);
        break;
      default:
    }
  });
};

// Select a common ancestor element
const gardenContainer = document.querySelector(".plantContainer");

// Add a click event listener to the common ancestor
gardenContainer.addEventListener("click", function (event) {
  // Check if the clicked element has the class 'fruit'
  if (event.target.classList.contains("fruit")) {
    // Hide the clicked fruit
    event.target.style.display = "none";
  }
});

// const addTreeBtn = document.getElementById("addTree");

// addTreeBtn.addEventListener("click", function() {
//     const posX = Math.random() * treeContainer.clientWidth;
//     addTree(posX, 1, 4, "apple");
// });
