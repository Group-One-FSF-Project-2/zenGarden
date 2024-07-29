// global variable for the namespace 
const svgNS = "http://www.w3.org/2000/svg";


document.getElementById('plantPosition').addEventListener('input', function() {
  document.getElementById('positionLabel').innerText = this.value;
});

document.getElementById('addPlantForm').addEventListener('submit', function(event) {
  event.preventDefault();
  console.log(event);
  let plantId = document.getElementById('varietal').value;
  let location_x = document.getElementById('plantPosition').value;
  let plotId = document.getElementById('addPlantForm').getAttribute('value');
  console.log(plantId, location_x, plotId);


  submitForm({
    "plot_id": parseInt(plotId, 10),
    "plant_id": parseInt(plantId, 10),
    "location_x": parseInt(location_x, 10)
  });
});


const submitForm = async (plotPlantData) => {
    console.log('Form data:', plotPlantData);
    const plotId = parseInt(plotPlantData.plot_id, 10);
    const plantId = parseInt(plotPlantData.plant_id, 10);  
    console.log('Plant:', plantId);
    
    try {
      const response = await fetch(`/api/gardenplots/${plotId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(plotPlantData)
      });
    
      if (response.ok) {
        const responseData = await response.json();
        console.log('Plant added to garden:', responseData);
        const resPlantId = responseData.plant_id;
        console.log('Plant id:', resPlantId);
    
        let { location_x, createdAt, plant_id } = responseData;
        // how old is the plant in hours
        createdAt = new Date(createdAt);
        const timeGrowth = Math.floor((Date.now() - createdAt) / 1000 / 60 / 60);

        switch (plant_id) {
          case 1:
          case 2:
          case 3:

            console.log('Adding plant:', plantId, ' to plot:', plotId, ' at location:', location_x);
            addTree(location_x, timeGrowth, plant_id);
            growTree();
            growTree();
            break;
          case 4:
          case 5:
          case 6:
            // getting tree first
            console.log('Adding plant:', plantId, ' to plot:', plotId);
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