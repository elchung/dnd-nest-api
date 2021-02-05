const { default: axios } = require("axios");

const root = 'https://www.dnd5eapi.co'

let dataurls;
let racesUrl = [];
let raceData = [];

axios.get(root + "/api")
  .then((data) => {
    dataurls = data.data;
  })
axios.get(root + "/api/subclasses")
  .then((data) => {
    data.data.results.map(race => racesUrl.push(race.url));
  })
  .catch((e) => {
    console.log('error', e)
  })
  .then(() => {
    console.log(racesUrl);
    racesUrl.map(url => {
      axios.get(root + url)
        .then((data) => {
          raceData.push(data.data);
        })
        .catch((e) => {
          console.log('error', e);
        })
        .then(() => {
          console.log(raceData);
        })
    })
  })
