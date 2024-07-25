// Where the plant will be added to the garden, x-axis
let posX;

// Add Tree
const addTreeBtn = document.getElementById("addTree");

addTreeBtn.addEventListener("click", function() {
    posX = Math.random() * treeContainer.clientWidth;
    addTree(posX, 1, 4, "apple");
});

// Add Bush
const addBushBtn = document.getElementById("addBush");

addBushBtn.addEventListener("click", function() {
    posX = Math.random() * bushContainer.clientWidth;
    addBush(posX, 2, 3, "blueberry");
});

// Add Flower
const addFlowerBtn = document.getElementById("addFlower");

addFlowerBtn.addEventListener("click", function() {
    posX = Math.random() * flowerContainer.clientWidth;
    addFlower(posX, 1, 1, "rose");
}); 