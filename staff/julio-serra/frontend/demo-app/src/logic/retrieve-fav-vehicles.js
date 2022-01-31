import { validateToken, validateCallback } from "./helpers/validators";

function retrieveFavVehicles(token, callback) {
  validateToken(token);
  validateCallback(callback);

  const xhr = new XMLHttpRequest

  xhr.open("GET", "https://b00tc4mp.herokuapp.com/api/v2/users");

  xhr.onload = () => {
    const { status } = xhr;

    if (status === 401) {
      const res = JSON.parse(xhr.responseText);

      const error = res.error;

      callback(new Error(error));
    } else if (status >= 400 && status < 500) {
      callback(new Error("client error"));
    } else if (status >= 500) {
      callback(new Error("server error"));
    } else if (status === 200) {
      const { responseText: json } = xhr;

      const payload = JSON.parse(json);

      const { favs = [] } = payload;

      if (favs.length) {
        let count = 0;
        const vehicles = [];

        favs.forEach((id, index) => {
          const xhr = new XMLHttpRequest

          xhr.open(
            "GET",
            `https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles/${id}`
          );

          xhr.addEventListener("load", () => {
            const { status } = xhr;

            count++;

            if (status >= 400 && status < 500) {
              callback(new Error("client error"));
            } else if (status >= 500) {
              callback(new Error("server error"));
            } else if (status === 200) {
              const { responseText: json } = xhr;

              const vehicle = JSON.parse(json);

              vehicle.isFav = true;

              vehicles[index] = vehicle;

              if (count === favs.length) callback(null, vehicles);
            }
          });

          xhr.send();
        });
      } else {
        callback(null, []);
      }
    }
  };

  xhr.setRequestHeader("Authorization", "Bearer " + token);

  xhr.send();
}

export default retrieveFavVehicles;
