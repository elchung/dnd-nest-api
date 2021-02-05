const { default: axios } = require("axios");

const root = 'https://www.dnd5eapi.co'

let dataurls;
let res = {};

axios.get(root + "/api")
  .then((data) => {
    dataurls = data.data;
  })
  .catch((e) => {
    console.log('error', e);
  })
  .then(() => {
    Object.entries(dataurls).map((entry) => {
      res[entry[0]] = [];
      let dataurls = [];
      console.log(root + entry[1])
      axios.get(root + entry[1])
        .then((data) => {
          data.data.results.map(item => dataurls.push(item.url));
        })
        .catch((e) => {
          console.log('error', e)
        })
        .then(() => {
          dataurls.map(url => {
            axios.get(root + url)
              .then((data) => {
                res[entry[0]].push(data.data);
                console.log(res)
              })
              .catch((e) => {
                console.log('error', e);
              })
          })
        })
    })
  })
  .then(() => {
    console.log("test");
    console.log(res)
  })
