const growTree = () => {
    const trees = document.querySelectorAll("[data-type='tree']");
    // loop through each tree
    trees.forEach(tree => {
        // set the updated growth value
        let growth = tree.getAttribute("data-growth");
        
        if (growth > 9) {
            // show fruit if tree is fully grown
            const treeFruit = tree.querySelectorAll('.fruit');
            treeFruit.forEach(fruit => {
                fruit.style.display = "flex";
            });


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