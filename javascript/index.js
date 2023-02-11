function updateTime() {
  let yakutskElement = document.querySelector("#yakutsk");
  if (yakutskElement) {
    //Yakutsk
    let yakutskDateElement = yakutskElement.querySelector(".date");
    let yakutskTimeElement = yakutskElement.querySelector(".time");
    let yakutskTime = moment().tz("Asia/Yakutsk");

    yakutskDateElement.innerHTML = yakutskTime.format("MMMM Do YYYY");
    yakutskTimeElement.innerHTML = `${yakutskTime.format(
      "h:mm:ss"
    )} <small>${yakutskTime.format("A")}</small>`;

    /**

losAngelesTimeElement.innerHTML = losAngelesTime.format(
  "h:mm:ss [<small>]A[</small>]"
  ); 

**/
  }

  //Tokyo
  let amsterdamElement = document.querySelector("#amsterdam");

  if (amsterdamElement) {
    let amsterdamDateElement = amsterdamElement.querySelector(".date");
    let amsterdamTimeElement = amsterdamElement.querySelector(".time");
    let amsterdamTime = moment().tz("Europe/Amsterdam");

    amsterdamDateElement.innerHTML = amsterdamTime.format("MMMM Do YYYY");
    amsterdamTimeElement.innerHTML = `${amsterdamTime.format(
      "h:mm:ss"
    )} <small>${amsterdamTime.format("A")}</small>`;
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = ` 
   <div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "h:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div>
        <a href="/">All cities</a>
  `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);
