// Where the plant will be added to the garden, x-axis
let posX;

// Add Tree
const addTreeBtn = document.getElementById("addTree");

addTreeBtn.addEventListener("click", function() {
    posX = Math.random() * treeContainer.clientWidth;
    let growthFromDb = Date.now() - 1000 * 60 * 60 * 48;
    //fetch call to add tree to garden

    // parameters: posX, treeID, createdOn, varietal
    addTree(posX, 1, growthFromDb, 3);
});

// Add Bush
const addBushBtn = document.getElementById("addBush");

addBushBtn.addEventListener("click", function() {
    posX = Math.random() * bushContainer.clientWidth;
    let growthFromDb = Date.now() - 1000 * 60 * 60 * 48;
    //fetch call to add bush to garden

    // parameters: posX, bushID, createdOn, varietal
    console.log("posX", posX);
    console.log("growthFromDb", growthFromDb);
    addBush(posX, 2, growthFromDb, 1);
});

// Add Flower
const addFlowerBtn = document.getElementById("addFlower");

addFlowerBtn.addEventListener("click", function() {
    posX = Math.random() * flowerContainer.clientWidth;
    let growthFromDb = Date.now() - 1000 * 60 * 60 * 48;
    //fetch call to add flower to garden

    // parameters: posX, flowerID, createdOn, varietal
    addFlower(posX, 1, 1, 1);
}); 

// Grow Plants
const growPlantsBtn = document.getElementById("growPlants");

growPlantsBtn.addEventListener("click", function() {
    growTree();
    growBush();
    // growFlower();
});


// Clear Garden