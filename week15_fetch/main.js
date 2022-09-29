fetch("https://catfact.ninja/facts?limit=7", {
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "text/plain;charset=UTF-8",
  },
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    return data;
  })
  .then((breeds) => {
    for (let i = 0; i < breeds.data.length; i++) {
      let factList = document.getElementById("catFact");
      let text = addFacts(breeds.data[i].fact);
      factList.appendChild(text);
      // return factList;
    }
  });

function addFacts(info) {
  let fact = document.createElement("li");
  let text = document.createTextNode(info);
  fact.appendChild(text);
  return fact;
}
