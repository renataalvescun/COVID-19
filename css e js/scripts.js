const cards = document.getElementById("cards");

fetch('https://api.covid19api.com/dayone/country/brazil')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));


  fetch("https://api.covid19api.com/dayone/country/brazil")
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < 360; i++) {
      const card = document.createElement("div");
      card.classList.add("card");
      const date = new Date(data[i].Date).toLocaleDateString();
      const confirmed = data[i].Confirmed.toLocaleString();
      const deaths = data[i].Deaths.toLocaleString();
      const recovered = data[i].Recovered.toLocaleString();
      const active = data[i].Active.toLocaleString();

      card.innerHTML = `
        <h2>Dia: ${date}</h2>
        <br>
        <p>Casos confirmados: ${confirmed}</p>
        <p>Mortes: ${deaths}</p>
        <p>Recuperados: ${recovered}</p>
        <p>Ativos: ${active}</p>
      `;
      cardCont.appendChild(card);
    }
  });