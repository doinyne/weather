const apiKey = "7c8d356661b9b4ca223b3d608f00359a";
const inputVal = input.value;

const form = document.querySelector(".top-banner form");
 
form.addEventListener("submit", e => {
  e.preventDefault();
  const inputVal = input.value;
});

const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;

fetch(url)
  .then(response => response.json())
  .then(data => {
    // do stuff with the data
  })
  .catch(() => {
    msg.textContent = "Please search for a valid city 😩";
  });