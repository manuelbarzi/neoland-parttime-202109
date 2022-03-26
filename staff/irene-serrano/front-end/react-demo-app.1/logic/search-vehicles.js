function searchVehicles(token, query, callback) {
  validateToken(token);
  validateQuery(query);
  validateCallback(callback);

  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    "https://b00tc4mp.herokuapp.com/api/hotwheels/vehicles?q=" + query
  );

  xhr.onload = function () {
    if (this.status >= 300 && this.status < 500) {
      callback(new Error("client error"));
    } else if (this.status >= 500) {
      callback(new Error("server error"));
    } else if (this.status === 200) {
      const vehicles = JSON.parse(this.responseText);

      /*  vehicles.forEach(vehicle =>
                vehicle.isFav = favs.includes(vehicle.id)
            ) */

      callback(null, vehicles);
    }
  };

  xhr.send();
}
