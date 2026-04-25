// Clear all plants from garden display
const clearGarden = () => {
  const treeContainer = document.getElementById('treeContainer');
  const bushContainer = document.getElementById('bushContainer');
  const flowerContainer = document.getElementById('flowerContainer');
  
  if (treeContainer) treeContainer.innerHTML = '';
  if (bushContainer) bushContainer.innerHTML = '';
  if (flowerContainer) flowerContainer.innerHTML = '';
};

// Generate garden from saved plants when user returns
const generateGarden = (savedPlants) => {
  savedPlants.forEach((plant, index) => {
    // Stagger each plant by 200ms for natural appearance
    setTimeout(() => {
      let plantVariety = plant.plant_id;
      let locationX = plant.location_x;
      let createdAt = plant.created_at;
      
      // Calculate growth based on time elapsed since planting
      // Use realistic game progression (max 20 hours for trees, 10 for bushes)
      let hoursElapsed = Math.floor(
        (Date.now() - new Date(createdAt)) / 1000 / 60 / 60
      );
      
      let timeGrowth;
      // Progressive growth stages for better gameplay
      if (hoursElapsed < 1) {
        timeGrowth = 1; // Young plant
      } else if (hoursElapsed < 8) {
        timeGrowth = Math.min(hoursElapsed + 1, 8); // Growing stage
      } else if (hoursElapsed < 24) {
        timeGrowth = Math.min(8 + Math.floor((hoursElapsed - 8) / 2), 17); // Maturing stage  
      } else if (hoursElapsed < 48) {
        timeGrowth = Math.min(17 + Math.floor((hoursElapsed - 24) / 6), 19); // Nearly mature
      } else {
        // Fully mature after 48 hours
        timeGrowth = (plantVariety >= 1 && plantVariety <= 3) ? 20 : 10; // Max growth (trees: 20, bushes: 10)
      }

      switch (plantVariety) {
        case 1:
        case 2:
        case 3:
          addTree(locationX, timeGrowth, plantVariety);
          break;
        case 4:
        case 5:
        case 6:
          addBush(locationX, timeGrowth, plantVariety);
          break;
        case 7:
        case 8:
        case 9:
          addFlower(locationX, plantVariety);
          break;
        default:
          console.warn('Unknown plant variety:', plantVariety);
      }
    }, index * 200); // 200ms delay between each plant
  });
};

// Interactive fruit picking functionality
// Attach click listeners to all plant containers for fruit harvesting
const gardenView = document.getElementById('gardenView');

gardenView.addEventListener("click", function (event) {
  // Check if the clicked element has the class 'fruit'
  if (event.target.classList.contains("fruit")) {
    // Hide the clicked fruit (harvest effect)
    event.target.style.display = "none";
  }
});
