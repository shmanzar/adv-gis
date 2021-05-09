/* global mapboxgl */
var map_bounds = [
  [-74.360962, 40.422383], // Southwest coordinates
  [-73.578186, 40.960715], // Northeast coordinates
];
var map = new mapboxgl.Map({
  accessToken:
    "pk.eyJ1Ijoic21hbnphciIsImEiOiJja29kbWMza2wwM3RxMnJxZzgxZnJsc3hlIn0.ckerqg7rLRdGx7-A06UNzA",
  container: "map",
  style: "mapbox://styles/smanzar/cknpkn8mj3em717p128ryzthw",
  center: [-74, 40.7],
  zoom: 10,
  maxBounds: map_bounds,
});
map.on("idle", function () {
  if (
    map.getLayer("nyc-restaurant-workers") &&
    map.getLayer("nyc-restaurant-immigrants-heavy")
  ) {
    // Enumerate ids of the layers.
    var toggleableLayerIds = [
      "nyc-restaurant-workers",
      "nyc-restaurant-immigrants-heavy",
      "nyc-restaurant-business",
      "nyc-restaurant-immigrants",
      "cases-rate-heavy",
      "loans-small",
    ];
    // Set up the corresponding toggle button for each layer.
    for (var i = 0; i < toggleableLayerIds.length; i++) {
      var id = toggleableLayerIds[i];
      var layer_names = [
        "% residents who are restaurant workers",
        "% residents of immigrants and restaurant workers",
        "% businesses which restaurants",
        "% residents of immigrants and restaurant workers",
        "Case rate of COVID19 (per 100,000)",
        "Total amount PPP loans ($)",
      ];

      if (!document.getElementById(id)) {
        // Create a link.
        var link = document.createElement("a");
        link.id = id;
        link.href = "#";
        link.textContent = layer_names[i];
        link.className = "";
        console.log(link);
        // Show or hide layer when the toggle is clicked.
        link.onclick = function (e) {
          var clickedLayer = this.id;
          //   console.log(clickedLayer, this.textContent);
          e.preventDefault();
          e.stopPropagation();

          var visibility = map.getPaintProperty(clickedLayer, "fill-opacity");
          console.log(visibility);
          // Toggle layer visibility by changing the layout object's visibility property.
          if (visibility === 0) {
            this.className = "active";

            map.setPaintProperty(clickedLayer, "fill-opacity", 1);
            workersPop();
          } else {
            this.className = "";
            map.setPaintProperty(clickedLayer, "fill-opacity", 0);
          }
        };

        var layers = document.getElementById("menu");
        layers.appendChild(link);
      }
    }
  }
});

function workersPop() {
  var formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });
  console.log("test");
  map.on("click", function (e) {
    var nyc_rest = map.queryRenderedFeatures(e.point, {
      layers: ["nyc-restaurant-immigrants", "median-inc", "cases-rate"],
    });
    console.log(nyc_rest, e.lngLat);
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(
        "<h3>" +
          nyc_rest[0].properties.neighbourhood +
          "</h3><p> <b> Restaurant worker residents (%):</b> " +
          nyc_rest[2].properties.share_of_workforce +
          "</p><p><b>Immigrant restaurant workers (%):</b> " +
          nyc_rest[2].properties.sow_immigrants +
          "</p><p><b>Median household income: </b> " +
          formatter.format(nyc_rest[0].properties.median_income) +
          "</p><p><b>COVID19 cases per 100,000: </b> " +
          nyc_rest[1].properties.case_rate
      )
      .addTo(map);
  });
}

var btn = document.querySelector(".test-btn");

btn.addEventListener("click", function () {
  var visibility = map.getLayoutProperty("closings-geo");
  console.log(visibility);
  if (visibility === "none") {
    map.setLayoutProperty("nyc-restaurant-workers", "visibility", "visible");
  } else {
    map.setLayoutProperty("nyc-restaurant-workers", "visibility", "none");
  }
});

// Add the control to the map.
var geocoder = new MapboxGeocoder({
  accessToken:
    "pk.eyJ1Ijoic21hbnphciIsImEiOiJja29kbWMza2wwM3RxMnJxZzgxZnJsc3hlIn0.ckerqg7rLRdGx7-A06UNzA",

  mapboxgl: mapboxgl,
  placeholder: "Search around your neighbourhood",
  marker: false,
  zoom: 12,
});

document.getElementById("geocoder").appendChild(geocoder.onAdd(map));
