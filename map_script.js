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
      "nyc-restaurant-immigrants",
      "median-inc",
      "nyc-restaurant-business",
      "cases-rate",
      "loans-small",
    ];
    // Set up the corresponding toggle button for each layer.
    for (var i = 0; i < toggleableLayerIds.length; i++) {
      var id = toggleableLayerIds[i];
      var layer_names = [
        "% residents who are restaurant workers",
        "% residents of immigrants and restaurant workers",
        "Median household income ($)",
        "% businesses which restaurants",
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
      layers: [
        "nyc-restaurant-immigrants",
        "median-inc",
        "cases-rate",
        "loans-small",
      ],
    });
    console.log(nyc_rest, e.lngLat);
    new mapboxgl.Popup()
      .setLngLat(e.lngLat)
      .setHTML(
        "<h3>" +
          nyc_rest[0].properties.neighbourhood +
          "</h3><p> <b> Restaurant worker residents (%):</b> " +
          nyc_rest[3].properties.share_of_workforce +
          "</p><p><b>Immigrant restaurant workers (%):</b> " +
          nyc_rest[3].properties.sow_immigrants +
          "</p><p><b>Median household income: </b> " +
          formatter.format(nyc_rest[1].properties.median_income) +
          "</p><p><b>COVID19 cases per 100,000: </b> " +
          Math.round(nyc_rest[2].properties.case_rate) +
          "</p><p><b>Cumulative loans disbursed ($150k or less / loan): </b> " +
          formatter.format(nyc_rest[0].properties.loan_small_amounts)
      )
      .addTo(map);
  });
}

var btn = document.querySelector(".closed-rest-btn");

btn.addEventListener("click", function () {
  console.log(map.getLayer("closings-geo"));
  var visibility = map.getPaintProperty("closings-geo", "circle-opacity");
  console.log(visibility);
  if (visibility === 0) {
    btn.classList.add("close-btn-active");

    map.setPaintProperty("closings-geo", "circle-opacity", 1);
    var popup = new mapboxgl.Popup({
      closeButton: false,
      closeOnClick: false,
    });

    map.on("mouseenter", "closings-geo", function (e) {
      // Change the cursor style as a UI indicator.
      map.getCanvas().style.cursor = "pointer";
      let coordinates = e.features[0].geometry.coordinates.slice();
      let description = e.features[0].properties.name;
      let neighborhood = e.features[0].properties.neighborhood;

      // console.log(e, coordinates, description, neighborhood);
      // Ensure that if the map is zoomed out such that multiple
      // copies of the feature are visible, the popup appears
      // over the copy being pointed to.
      while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
        coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
      }
      // Populate the popup and set its coordinates
      // based on the feature found.
      popup
        .setLngLat(coordinates)
        .setHTML("<h3>" + description + "</h3>" + neighborhood)
        .addTo(map);
    });
    map.on("mouseleave", "closings-geo", function () {
      map.getCanvas().style.cursor = "";
      popup.remove();
    });
  } else {
    btn.classList.remove("close-btn-active");

    map.setPaintProperty("closings-geo", "circle-opacity", 0);
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
