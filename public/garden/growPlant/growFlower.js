const growFlower = () => {
    const flowers = document.querySelectorAll("[data-type='flower']");
    // loop through each flower
    flowers.forEach(flower => {
        // set the updated growth value
        let growth = flower.getAttribute("data-growth");
        
        growth++;
        flower.dataset.growth = growth;

        const stem = flower.querySelector('.flowerStem');
        const petals = flower.querySelectorAll('.flowerPetal');
        const center = flower.querySelector('.flowerCenter');
        const leaves = flower.querySelectorAll('.flowerLeaf');
        const flowerHeight = flowerContainer.clientHeight * 0.15;

        switch (growth) {
            case 1:
                stem.setAttribute("height", flowerHeight / 2);
                break;
            case 2:
                stem.setAttribute("height", flowerHeight);
                leaves.forEach(leaf => {
                    leaf.setAttribute("rx", 6);
                    leaf.setAttribute("ry", 20);
                });
                break;
            case 3:
                petals.forEach(petal => {
                    petal.setAttribute("rx", 4);
                    petal.setAttribute("ry", 10);
                });
                center.setAttribute("r", 5);
                break;
            case 4:
                petals.forEach(petal => {
                    petal.setAttribute("rx", 7);
                    petal.setAttribute("ry", 25);
                });
                center.setAttribute("r", 8);
                break;
            default:
                stem.setAttribute("height", flowerHeight);
                leaves.forEach(leaf => {
                    leaf.setAttribute("rx", 6);
                    leaf.setAttribute("ry", 20);
                });
                center.setAttribute("r", 8);
                petals.forEach(petal => {
                    petal.setAttribute("rx", 7);
                    petal.setAttribute("ry", 25);
                });
        }
    });
}