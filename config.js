var config = {
  style: "mapbox://styles/smanzar/cknpkn8mj3em717p128ryzthw", // Update this with your own too
  accessToken:
    "pk.eyJ1Ijoic21hbnphciIsImEiOiJja29kbWMza2wwM3RxMnJxZzgxZnJsc3hlIn0.ckerqg7rLRdGx7-A06UNzA", // Update this with your github specific one
  showMarkers: false,
  // theme: "light",
  // title: "86'ed",
  // subtitle: "NYC restaurants during the pandemic",
  // byline: "Sherry Manzar",
  footer:
    "Sources: ACS 2014-2019, NYC Open Data. Eater/Curbed, NYC DoH, Treasury Dept - SBA, Street View photos are from Google Maps while current photographs are mine ",
  chapters: [
    {
      id: "hero",
      image: "./images/hero-title.png",
      location: {
        center: [-73.962, 40.694],
        zoom: 10.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "easeTo",
      onChapterEnter: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
    },
    {
      id: "hero-sub",
      image: "./images/hero-subtitle.png",
      location: {
        center: [-73.962, 40.694],
        zoom: 10.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "easeTo",
      onChapterEnter: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
    },
    {
      id: "intro-id",
      // image: "/data/cases_pre.svg",
      // title: "Residents who identify as working in the food service industry",
      description: `The hospitality industry has always been a critical component of New York City’s economic and cultural significance, employing hundreds of thousands, attracting millions of visitors who spend around $46 billion annually, and contributing to its image as a cultural powerhouse.`,
      location: {
        center: [-73.962, 40.694],
        zoom: 10.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "easeTo",
      onChapterEnter: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
      ],
    },
    {
      id: "intro-2-id",
      // image: "/data/cases_pre.svg",
      // title: "Residents who identify as working in the food service industry",
      description: `In March 2020, when the COVID-19 lockdown began, the industry suffered a dual burden of having lost the customer flow on which it depended on for survival but also now being termed as “essential”. Many businesses shut down, some permanently. Most significantly reduced service operations.
      `,
      location: {
        center: [-73.962, 40.694],
        zoom: 10.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "easeTo",
      onChapterEnter: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
      ],
    },
    {
      id: "intro-3-id",
      // image: "/data/cases_pre.svg",
      // title: "Residents who identify as working in the food service industry",
      description: `There is a need to understand and document the changes in the hospitality industry because they are fundamentally changing their own streets and neighbourhoods, and in doing so transforming the city as a whole.
      `,
      location: {
        center: [-73.962, 40.694],
        zoom: 10.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "easeTo",
      onChapterEnter: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
      ],
    },
    {
      id: "slug-style-id",
      // image: "/data/cases_pre.svg",
      // title: "Residents who identify as working in the food service industry",
      description: `Let's first look at the industry's labour: On average, <span style="font-weight: bold; color: #3669d6"
      >6%</span> of the city's workforce works in the restaurant industry`,
      location: {
        center: [-73.962, 40.694],
        zoom: 10.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "easeTo",
      onChapterEnter: [
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
      ],
    },
    {
      id: "other-identifier",
      // title: "A majority of the workforce lives in Queens and Brooklyn",
      alignment: "left",
      // image: "./path/to/image/source.png",
      // description: "A majority of the workforce lives in Queens and Brooklyn",
      location: {
        center: [-73.962, 40.694],
        zoom: 10.5,
        pitch: 0,
        bearing: 0,
      },
      mapAnimation: "easeTo",
      callback: "workersPop",
      onChapterEnter: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 1,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
    },
    // {
    //   id: "bqe",
    //   // title: "Sunset Park",
    //   //<img src="./images/photos/open-streets-sunset.png" width="200px" height="250px">
    //   alignment: "left",
    //   // image: "./images/photos/open-streets-sunset_before.png",
    //   description: ` <span style='font-weight: bold; color: #3669d6'
    //     >12%</span> of all Sunset Park's residents worked in the food service industry. Compare that to <span style='font-weight: bold; color: #83c6e3'
    //     >3.5% </span>in neighbouring Park Slope
    //     <p><audio
    //     controls
    //     src="./sounds/210319_2034.mp3">
    //         Your browser does not support the
    //         <code>audio</code> element.
    // </audio><iframe frameborder="0" class="juxtapose" width="100%" height="250" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=dbe39720-aeec-11eb-b7bf-95443c729a29"></iframe>
    //     </p> `,
    //   location: {
    //     center: [-74.00773, 40.64842],
    //     zoom: 13,
    //     pitch: 45.0,
    //     bearing: 0.0,
    //   },
    //   mapAnimation: "easeTo",
    //   callback: "workersPop",

    //   onChapterEnter: [
    //     {
    //       layer: "nyc-restaurant-workers",
    //       opacity: 1,
    //     },
    //     {
    //       layer: "nyc-restaurant-immigrants-heavy",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "nyc-restaurant-immigrants",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "nyc-restaurant-business",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "cases-rate-heavy",
    //       opacity: 0,
    //     },
    //   ],
    //   onChapterExit: [
    //     {
    //       layer: "nyc-restaurant-workers",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "nyc-restaurant-immigrants-heavy",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "nyc-restaurant-immigrants",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "nyc-restaurant-business",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "cases-rate-heavy",
    //       opacity: 0,
    //     },
    //   ],
    // },
    // {
    //   id: "sp-inc",
    //   // title: "Sunset Park",
    //   alignment: "left",

    //   // image: "./path/to/image/source.png",
    //   description: `At the same time, most households have relatively modest household income - around <span style='font-weight: bold; color: #bdfa92'
    //     >$55,000 </span> <p> <iframe frameborder="0" class="juxtapose" width="100%" height="250" src="https://cdn.knightlab.com/libs/juxtapose/latest/embed/index.html?uid=93785c7a-aef4-11eb-b7bf-95443c729a29"></iframe></p>`,
    //   location: {
    //     center: [-74.00773, 40.64842],
    //     zoom: 13,
    //     pitch: 45.0,
    //     bearing: 0.0,
    //   },
    //   callback: "workersPop",

    //   onChapterEnter: [
    //     {
    //       layer: "nyc-restaurant-workers",
    //       opacity: 0.01,
    //     },
    //     {
    //       layer: "nyc-restaurant-immigrants-heavy",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "nyc-restaurant-immigrants",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "nyc-restaurant-business",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "median-inc-light",
    //       opacity: 1,
    //     },
    //     {
    //       layer: "cases-rate-heavy",
    //       opacity: 0,
    //     },
    //   ],
    //   onChapterExit: [
    //     {
    //       layer: "nyc-restaurant-workers",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "nyc-restaurant-immigrants-heavy",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "nyc-restaurant-immigrants",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "nyc-restaurant-business",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "median-inc-light",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "cases-rate-heavy",
    //       opacity: 0,
    //     },
    //   ],
    // },
    // {
    //   id: "uws",
    //   // title: "Upper West Side",
    //   alignment: "left",

    //   // image: "./path/to/image/source.png",
    //   description: `While only around <span style='font-weight: bold; color: #83c6e3'
    //     >1% </span> of those who lived in Upper West Side were restaurant workers`,
    //   location: {
    //     center: [-73.97954, 40.78272],
    //     zoom: 13.82,
    //     pitch: 45.0,
    //     bearing: 0.0,
    //   },
    //   callback: "workersPop",

    //   onChapterEnter: [
    //     {
    //       layer: "cases-rate-heavy",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "nyc-restaurant-workers",
    //       opacity: 1,
    //     },
    //     {
    //       layer: "nyc-restaurant-immigrants-heavy",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "nyc-restaurant-immigrants",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "nyc-restaurant-business",
    //       opacity: 0,
    //     },
    //   ],
    //   onChapterExit: [
    //     {
    //       layer: "cases-rate-heavy",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "nyc-restaurant-workers",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "nyc-restaurant-immigrants-heavy",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "nyc-restaurant-immigrants",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "nyc-restaurant-business",
    //       opacity: 0,
    //     },
    //   ],
    // },
    // {
    //   id: "uws-inc",
    //   // title: "Upper West Side",
    //   alignment: "left",

    //   // image: "./path/to/image/source.png",
    //   description: `It is also inhabitated by relatively richer households - its median household income is <span style='font-weight: bold; color: #5cbb18'
    //   >$117,000 </span>`,
    //   location: {
    //     center: [-73.97954, 40.78272],
    //     zoom: 13.82,
    //     pitch: 45.0,
    //     bearing: 0.0,
    //   },
    //   callback: "workersPop",

    //   onChapterEnter: [
    //     {
    //       layer: "cases-rate-heavy",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "nyc-restaurant-workers",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "nyc-restaurant-immigrants-heavy",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "nyc-restaurant-immigrants",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "nyc-restaurant-business",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "median-inc-heavy",
    //       opacity: 1,
    //     },
    //   ],
    //   onChapterExit: [
    //     {
    //       layer: "nyc-restaurant-workers",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "nyc-restaurant-immigrants-heavy",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "nyc-restaurant-immigrants",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "nyc-restaurant-business",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "median-inc-heavy",
    //       opacity: 0,
    //     },
    //     {
    //       layer: "cases-rate-heavy",
    //       opacity: 0,
    //     },
    //   ],
    // },
    {
      id: "jfk",
      // title: "Queens",
      alignment: "left",

      // image: "./path/to/image/source.png",
      description: `<h3 class ="rest-work-col">% residents who are restaurant workers</h3>Almost <span style='font-weight: bold; color: #3669d6'
        >1 in 5</span> restaurant workers live in these neighbourhoods of Queens. <p class= 'legend-text'><span style='font-weight: bold; color: #242fae'
        >More</span> restuarant workers vs <span style='font-weight: bold; color:#a3eae4'
        >less</span> restaurant workers</p>`,
      location: {
        center: [-73.846149, 40.748883],
        zoom: 12,
        pitch: 0.0,
        bearing: 0.0,
      },
      callback: "workersPop",

      onChapterEnter: [
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-workers",
          opacity: 1,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
    },
    {
      id: "immigrants-queens",
      // title: "Queens",
      alignment: "left",

      // image: "./path/to/image/source.png",
      description: `<h3 class ="imig-work-col">% residents are immigrant restaurant workers</h3> Of those workers, around <span style='font-weight: bold; color: #aa4202'
      >85%</span> are immigrants <p class= 'legend-text'><span style='font-weight: bold; color: #a54002'
      >More</span> immigrant workers vs <span style='font-weight: bold; color: #f2e0d9'
      >less</span> immigrant workers</p>`,
      location: {
        center: [-73.846149, 40.748883],
        zoom: 12,
        pitch: 0.0,
        bearing: 0.0,
      },
      callback: "workersPop",
      onChapterEnter: [
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 1,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
    },
    {
      id: "cases-intro-queens",
      // title: "Queens",
      alignment: "left",

      // image: "./path/to/image/source.png",
      description: ``,
      location: {
        center: [-73.846149, 40.748883],
        zoom: 12,
        pitch: 0.0,
        bearing: 0.0,
      },
      callback: "workersPop",
      onChapterEnter: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 1,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
        {
          layer: "cases-rate-heavy",
          opacity: 1,
        },
      ],
    },
    {
      id: "cases-queens",
      // title: "Queens",
      alignment: "left",

      // image: "./path/to/image/source.png",
      description: `<h3 class ="cases-col">COVID-19 cases per 100,000 residents</h3> Not coincidentally, these are the same neighbourhoods with the highest rates of COVID-19 cases; with Jackson Heights having had <span style='font-weight: bold; color: #cd1919'
      >11,800</span> per 100,000 cases <p class= 'legend-text'> <span style='font-weight: bold; color: #cd1919'
      >High</span> vs <span style='font-weight: bold; color: grey'
      >low</span> rates of cases </p>`,
      location: {
        center: [-73.846149, 40.748883],
        zoom: 12,
        pitch: 0.0,
        bearing: 0.0,
      },
      callback: "workersPop",
      onChapterEnter: [
        {
          layer: "cases-rate-heavy",
          opacity: 1,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
    },
    {
      id: "aid-jh",
      // title: "Queens",
      alignment: "left",

      // image: "./path/to/image/source.png",
      description: `<h3 class ="aid-col">Total PPP loans disbursed ($)</h3> Let's compare that to the amount of PPP loans disbursed to Jackson Heights - some of the lowest in the city <p class= 'legend-text'> <span style='font-weight: bold; color: #018901'
      >High</span> loan disbursement vs <span style='font-weight: bold; color: #d9f8d9'
      >low</span> loan disbursement | Feb 2021</p>`,
      location: {
        center: [-73.846149, 40.748883],
        zoom: 12,
        pitch: 0.0,
        bearing: 0.0,
      },
      callback: "workersPop",
      onChapterEnter: [
        {
          layer: "loans-small",
          opacity: 1,
        },
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "loans-small",
          opacity: 0,
        },
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
    },
    {
      id: "aid-nyc",
      // title: "Queens",
      alignment: "left",

      // image: "./path/to/image/source.png",
      description: `<h3 class ="aid-col">Total PPP loans disbursed ($)</h3> When the help came, the same inequities remained <p class= 'legend-text'> <span style='font-weight: bold; color: #018901'
      >High</span> loan disbursement vs <span style='font-weight: bold; color: #d9f8d9'
      >low</span> loan disbursement | Feb 2021</p>`,
      location: {
        center: [-73.99664, 40.67983],
        zoom: 10,
        pitch: 0.0,
        bearing: 0.0,
      },
      callback: "workersPop",
      onChapterEnter: [
        {
          layer: "loans-small",
          opacity: 1,
        },
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "loans-small",
          opacity: 0,
        },
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
    },
    {
      id: "aid-nyc-2",
      // title: "Queens",
      alignment: "left",

      // image: "./path/to/image/source.png",
      description: `<h3 class ="aid-col">Total PPP loans disbursed ($)</h3> High immigrant populated neighbourhoods also often got lowest amounts in federal support <p class= 'legend-text'> <span style='font-weight: bold; color: #018901'
      >High</span> loan disbursement vs <span style='font-weight: bold; color: #d9f8d9'
      >low</span> loan disbursement |Feb 2021</p>`,
      location: {
        center: [-73.99664, 40.67983],
        zoom: 10,
        pitch: 0.0,
        bearing: 0.0,
      },
      callback: "workersPop",
      onChapterEnter: [
        {
          layer: "loans-small",
          opacity: 1,
        },
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "loans-small",
          opacity: 0,
        },
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 1,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
    },
    {
      id: "aid-nyc-3",
      // title: "Queens",
      alignment: "left",

      // image: "./path/to/image/source.png",
      description: `<h3 class ="imig-work-col">% residents are immigrant restaurant workers</h3> High immigrant populated neighbourhoods also often got lowest amounts in federal support <p class= 'legend-text'><span style='font-weight: bold; color: #a54002'
      >More</span> immigrant workers vs <span style='font-weight: bold; color: #f2e0d9'
      >less</span> immigrant workers</p>`,
      location: {
        center: [-73.99664, 40.67983],
        zoom: 10,
        pitch: 0.0,
        bearing: 0.0,
      },
      callback: "workersPop",
      onChapterEnter: [
        {
          layer: "loans-small",
          opacity: 0,
        },
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 1,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "loans-small",
          opacity: 0,
        },
        {
          layer: "cases-rate-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 1,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
      ],
    },
    {
      id: "closings-overall",
      alignment: "left",

      // title: "Many longtime institutions shutdown during the pandemic",
      // image: "./path/to/image/source.png",
      description: "",
      // "A 'scraping' activity mapped them from their 'obituaries' in the popular news media to this map",
      location: {
        center: [-73.98863, 40.69056],
        zoom: 10.66,
        pitch: 0.0,
        bearing: 0.0,
      },
      callback: "hovertop",
      onChapterEnter: [
        // {
        //   layer: "cases-rate-heavy",
        //   opacity: 1,
        // },
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
        {
          layer: "closings-geo",
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
        {
          layer: "closings-geo",
          opacity: 0,
        },
      ],
    },
    {
      id: "link",
      alignment: "left",

      // title: "Many longtime institutions shutdown during the pandemic",
      // image: "./path/to/image/source.png",
      description: `      <a href="./map.html">Explore the full map</a>
        `,
      location: {
        center: [-73.98863, 40.69056],
        zoom: 10.66,
        pitch: 0.0,
        bearing: 0.0,
      },
      callback: "hovertop",
      onChapterEnter: [
        // {
        //   layer: "cases-rate-heavy",
        //   opacity: 1,
        // },
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
        {
          layer: "closings-geo",
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: "nyc-restaurant-workers",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants-heavy",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-immigrants",
          opacity: 0,
        },
        {
          layer: "nyc-restaurant-business",
          opacity: 0,
        },
        {
          layer: "closings-geo",
          opacity: 0,
        },
      ],
    },
  ],
};
