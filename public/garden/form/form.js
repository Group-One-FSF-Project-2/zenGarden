// global variable for the namespace 
const svgNS = "http://www.w3.org/2000/svg";

const submitForm = async (plotPlantData) => {
    console.log('Form data:', plotPlantData);
    const location_x = parseInt(plotPlantData.location_x, 10);
    const plantId = parseInt(plotPlantData.plantId, 10);
    const plotId = parseInt(plotPlantData.plotId, 10);
    
    switch (plantId) {
      case 1:
      case 2:
      case 3:
        console.log('Adding plant:', plantId , ' to plot:', plotId);
        try {
          const response = await fetch(`/api/gardenplots/${plotId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(plotPlantData)
          });
          if (response.ok) {
            const responseData = await response.json();
            console.log('Plant added to garden:', responseData);
            addTree(location_x, responseData.plantId, 0, plantId);
            growTree();
            growTree();
          } else {
            console.error('Failed to add plant to garden:', response.status, response.statusText);
          }
        } catch (error) {
          console.error('Error adding plant to garden:', error);
        }
        break;
      case 4:
      case 5:
      case 6:
        // getting tree first
        addBush();  
        break;
      case 7:
      case 8:
      case 9:
        addFlower();
        break;
      default:
        console.error('Invalid varietal:', plantId);
    }
};