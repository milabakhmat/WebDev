fetch("https://catfact.ninja/breeds?limit=10", {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "text/plain;charset=UTF-8",
  },
})
  .then((response) => {
    return response.json();
  })
  .then((breeds) => {
    for (breed of breeds.data) {
      let selection = document.getElementById("breedChoice");
      let selectOption = document.createElement("option");
      let selectionText = document.createTextNode(breed.breed);
      selectOption.setAttribute("value", breed.breed);
      selectOption.appendChild(selectionText);
      selection.appendChild(selectOption);
    }
  });
