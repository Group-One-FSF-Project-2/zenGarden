const growTree = () => {
    const trees = document.querySelectorAll("[data-type='tree']");
    // loop through each tree
    trees.forEach(tree => {
        // set the updated growth value
        let growth = parseInt(tree.getAttribute("data-growth"), 10);
        
        if (growth > 10) {
            // if the tree is fully grown, stop growing
            return;
        }
        
        growth++;
        tree.dataset.growth = growth;

        // Select trunk and circle elements within the tree element
        const trunk = tree.querySelector('.trunk');
        const treeTop = tree.querySelector('.treeTop');

        trunk.setAttribute("width", growth * 4);
        trunk.setAttribute("x", -(growth * 2));
        treeTop.setAttribute("r", growth * 10);
    });
}



const growBush = () => {
        
}


const growFlower = () => {
    const flowers = document.querySelectorAll("[data-type='flower']");
    // loop through each flower
    flowers.forEach(flower => {
        // set the updated growth value
        let growth = parseInt(flower.getAttribute("data-growth"), 10);
        
        if (growth > 10) {
            // if the flower is fully grown, stop growing
            return;
        }
        
        growth++;
        flower.dataset.growth = growth;

        // Select trunk and circle elements within the tree element
        const flowerPetals = flower.querySelectorAll('.petal');
        flowerPetals.forEach(petal => {
            //scale the petal
            const scale = growth;
            // Get the current transform attribute
            let currentTransform = petal.getAttribute("transform");
            let newTransform = currentTransform.replace(/scale\(\S+\)/, `scale(${scale})`);

            petal.setAttribute("transform", newTransform);
        });
    });    


}

