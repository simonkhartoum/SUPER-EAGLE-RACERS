// Get the bike list container
const bikeList = document.getElementById("bike-list");

// Fetch the bike data from the JSON file
fetch("db.json")
  .then(response => response.json())
  .then(data => {
    // Loop through the bikes and create a card for each one
    data.bikes.forEach(bike => {
      // Create the bike card
      const bikeCard = document.createElement("div");
      bikeCard.classList.add("bike-card");
      bikeCard.style.backgroundImage = `url(${bike.image})`;

      // Create the bike info
      const bikeInfo = document.createElement("div");
      bikeInfo.classList.add("bike-info");
      bikeInfo.innerHTML = `
        <h2>${bike.manufacturer} ${bike.model}</h2>
        <p>Driver: ${bike.driver}</p>
        <p>Mileage: ${bike.mileage}</p>
        <p>Appearance: ${bike.appearance}</p>
      `;

      // Add the bike info to the bike card
      bikeCard.appendChild(bikeInfo);

      // Add the bike card to the bike list container
      bikeList.appendChild(bikeCard);
    });
  });
