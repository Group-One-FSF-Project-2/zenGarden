/**
 * Garden planting form handler
 * Manages plant selection, form validation, and plant rendering
 */

// SVG namespace for plant graphics
const svgNS = "http://www.w3.org/2000/svg";

// Plant data mapping (matches the seed data order)
const plantData = {
  tree: [
    { id: 1, variety: 'Apple' },
    { id: 2, variety: 'Orange' }, 
    { id: 3, variety: 'Plum' }
  ],
  bush: [
    { id: 4, variety: 'Blueberry' },
    { id: 5, variety: 'Red Currants' },
    { id: 6, variety: 'Gooseberry' }
  ],
  flower: [
    { id: 7, variety: 'Daisy' },
    { id: 8, variety: 'Cosmos' },
    { id: 9, variety: 'Aster' }
  ]
};

// Auto-load saved plants when page loads
window.addEventListener('DOMContentLoaded', async function() {
  const plotId = localStorage.getItem('plotId');
  if (plotId) {
    await loadSavedPlants(plotId);
  }
  
  // Set slider max based on garden width
  updateSliderScale();
});

// Update slider scale based on garden container width
const updateSliderScale = () => {
  const gardenContainer = document.getElementById('gardenView');
  const slider = document.getElementById('plantPosition');
  const positionLabel = document.getElementById('positionLabel');
  
  if (gardenContainer && slider && positionLabel) {
    // Get actual width of garden container
    const gardenWidth = gardenContainer.clientWidth;
    
    // Set slider max to garden width minus padding (40px total for plant size)
    const maxPosition = Math.max(80, gardenWidth - 40);
    slider.max = maxPosition;
    
    // Reset slider value if it exceeds new max
    if (parseInt(slider.value) > maxPosition) {
      slider.value = Math.floor(maxPosition / 2);
      positionLabel.innerText = slider.value;
    }
    
    // Update position label to current value
    positionLabel.innerText = slider.value;
  }
};

// Update slider scale when window is resized
window.addEventListener('resize', updateSliderScale);

// Function to load saved plants for this plot
const loadSavedPlants = async (plotId) => {
  try {
    const response = await fetch(`/api/gardenplots/${plotId}/plants`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    if (!response.ok) {
      throw new Error('Failed to load saved plants');
    }

    const savedPlants = await response.json();
    
    if (savedPlants.length > 0) {
      clearGarden(); // Clear existing plants to avoid duplicates
      generateGarden(savedPlants); // Use shared function from misc.js
    }
  } catch (error) {
    console.error('Error loading saved plants:', error);
  }
};

// Handle plant type radio button selection
document.addEventListener('change', function(event) {
  if (event.target.name === 'plantType') {
    const plantType = event.target.value;
    const varietySection = document.getElementById('varietySection');
    const varietyOptions = document.getElementById('varietyOptions');
    const plantButton = document.getElementById('plantButton');
    
    // Clear current variety selection
    varietyOptions.innerHTML = '';
    
    if (plantType) {
      // Show variety section
      varietySection.style.display = 'block';
      
      // Add radio buttons for selected plant type
      plantData[plantType].forEach((plant, index) => {
        const radioDiv = document.createElement('div');
        radioDiv.className = 'radio-option';
        
        const radioInput = document.createElement('input');
        radioInput.type = 'radio';
        radioInput.name = 'plantVariety';
        radioInput.id = `variety${plant.id}`;
        radioInput.value = plant.id;
        
        // Set first variety as default checked
        if (index === 0) {
          radioInput.checked = true;
          // Enable plant button since we have a default selection
          document.getElementById('plantButton').disabled = false;
        }
        
        const radioLabel = document.createElement('label');
        radioLabel.htmlFor = `variety${plant.id}`;
        radioLabel.textContent = plant.variety;
        
        radioDiv.appendChild(radioInput);
        radioDiv.appendChild(radioLabel);
        varietyOptions.appendChild(radioDiv);
      });
    } else {
      // Hide variety section
      varietySection.style.display = 'none';
      plantButton.disabled = true;
    }
  }
  
  // Handle variety selection
  if (event.target.name === 'plantVariety') {
    const plantButton = document.getElementById('plantButton');
    plantButton.disabled = false;
  }
});

document.getElementById('plantPosition').addEventListener('input', function() {
  document.getElementById('positionLabel').innerText = this.value;
});

document.getElementById('addPlantForm').addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(event);
  
  // Get form values from radio buttons
  const plantTypeRadio = document.querySelector('input[name="plantType"]:checked');
  const plantVarietyRadio = document.querySelector('input[name="plantVariety"]:checked');
  const location_x = document.getElementById('plantPosition').value;
  let plotId = document.getElementById('plotIdFromLogin').value;

  // Validation
  if (!plantTypeRadio) {
    alert('Please select a plant type first!');
    return;
  }
  
  if (!plantVarietyRadio) {
    alert('Please select a plant variety!');
    return;
  }
  
  const plantType = plantTypeRadio.value;
  const plantId = plantVarietyRadio.value;
  
  if (!plantId) {
    alert('Please select a plant variety!');
    return;
  }

  plotId = localStorage.getItem('plotId');

  submitForm({
    "plot_id": parseInt(plotId, 10),
    "plant_id": parseInt(plantId, 10),
    "location_x": parseInt(location_x, 10)
  });
});


const submitForm = async (plotPlantData) => {
    let plotId = parseInt(plotPlantData.plot_id, 10);
    const plantId = parseInt(plotPlantData.plant_id, 10);  
    
    plotId = localStorage.getItem('plotId');

    try {
      const response = await fetch(`/api/gardenplots/${plotId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(plotPlantData)
      });
      if (response.ok) {
        const responseData = await response.json();
        let { location_x, plant_id } = responseData.newPlant;
        let timeGrowth = 0;

        switch (plant_id) {
          case 1:
          case 2:
          case 3:
            addTree(location_x, timeGrowth, plant_id);
            growTree();
            growTree();
            break;
          case 4:
          case 5:
          case 6:
            addBush(location_x, timeGrowth, plant_id);
            growBush();
            break;
          case 7:
          case 8:
          case 9:
            addFlower(location_x, plant_id);
            growFlower();
            break;
          default:
            console.error('Invalid varietal:', plantId);
        }
      } else {
        console.error('Failed to add plant to garden:', response.status, response.statusText);
      }
    } catch (error) {
      console.error('Error adding plant to garden:', error);
    }
};