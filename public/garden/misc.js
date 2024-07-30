document.getElementById('fetchPlot').addEventListener('click', async function() {

  let plotId = localStorage.getItem('plotId');
  plotId = parseInt(plotId, 10);
  console.log("fetching garden plot" + plotId);

  try {
    const response = await fetch("/api/gardenplots/test", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error('Fetch failed to get garden plot');
    }

    const gardenPlots = await response.json();
    console.log(gardenPlots);
    JSON.stringify(gardenPlots);
    const matchingPlots = gardenPlots.filter((plot) => plot.plot_id === plotId);
    console.log(matchingPlots);
    if (matchingPlots) {
      console.log(matchingPlots);
      generateGarden(matchingPlots);
    } else {
      console.log('Plot not found');
    }
  } catch (error) {
    console.error('Failed to fetch garden plot:', error);
  }
});

// generate garden with choosePlot

const generateGarden = (choosePlot) => {
  // get each plant from choosePlot and add using a switch statement
  choosePlot.forEach((plant) => {
    let plantVariety = plant.plant_id;
    let locationX = plant.location_x;
    let createdAt = plant.createdAt;
    // difference in hours
    let timeGrowth = Math.floor(
      (Date.now() - new Date(createdAt)) / 1000 / 60 / 60
    );

    console.log(plant);
    console.log( plantVariety, locationX, timeGrowth);

    switch (plantVariety) {
      case 1:
        addTree(locationX, timeGrowth, 1);
        break;
      case 2:
        addTree(locationX, timeGrowth, 2);
        break;
      case 3:
        addTree(locationX, timeGrowth, 3);
        break;
      case 4:
        addBush(locationX, timeGrowth, 4);
        break;
      case 5:
        addBush(locationX, timeGrowth, 5);
        break;
      case 6:
        addBush(locationX, timeGrowth, 6);
        break;
      case 7:
        addFlower(locationX, 7);
        break;
      case 8:
        addFlower(locationX, 8);
        break;
      case 9:
        addFlower(locationX, 9);
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
