const growBush = () => {
  const bushes = document.querySelectorAll("[data-type='bush']");
  // loop through each bush
  bushes.forEach((bush) => {
    // set the updated growth value
    let growth = bush.getAttribute("data-growth");

    if (growth > 4) {
      // show fruit if bush is fully grown
      const bushFruit = bush.querySelectorAll(".fruit");
      bushFruit.forEach((fruit) => {
        fruit.style.display = "flex";
      });

      // if the bush is fully grown, stop growing
      return;
    }

    growth++;
    bush.dataset.growth = growth;

    const bushWidth = bush.querySelector(".bush");

    bushWidth.setAttribute("width", growth * 40);
    bushWidth.setAttribute("x", -growth * 20);
  });
};
