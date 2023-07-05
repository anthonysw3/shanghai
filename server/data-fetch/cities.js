const https = require("https");
const fs = require("fs");

let result = [];
let after = "";
let requestQueue = [];
let isFetching = false;
let pageIndex = 1;

const processQueue = () => {
  if (requestQueue.length === 0) {
    isFetching = false;
    console.log("Hooray, done!");
    return;
  }

  isFetching = true;
  fetchData(requestQueue.shift());
};

const addToQueue = (after) => {
  requestQueue.push(after);

  if (!isFetching) {
    console.log("Fetching...");
    processQueue();
  }
};

const fetchData = (after) => {
  let url = `https://api.duffel.com/air/cities?limit=200${
    after ? "&after=" + after : ""
  }`;

  const options = {
    headers: {
      Accept: "application/json",
      "Duffel-Version": "v1",
      Authorization:
        "Bearer duffel_test_C8of0Js3PLp1FaQW2BfKbAbAd6HPfpYVa0YrZtyfvnL",
    },
  };

  https
    .get(url, options, (response) => {
      let data = "";

      response.on("data", (chunk) => {
        data += chunk;
      });

      response.on("end", () => {
        let json = JSON.parse(data);

        if (json.error) {
          console.error(json.error);
          return;
        }

        if (Array.isArray(json.data)) {
          result.push(...json.data);
          console.log(`Page ${pageIndex} retrieved successfully`);
          pageIndex++;
        }

        if (json.meta && json.meta.after) {
          addToQueue(json.meta.after);
        } else {
          fs.writeFileSync("cities.json", JSON.stringify(result, null, 2));
          console.log("Data written to file");
        }

        setTimeout(processQueue, 70000 / 50);
      });
    })
    .on("error", (err) => {
      console.log("Error: ", err.message);
    });
};

addToQueue(after);
