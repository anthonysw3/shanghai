const { createClient } = require("next-sanity");

const config = {
  projectId: "6d2pzg6a", // replace with your Sanity project ID
  dataset: "production", // replace with your Sanity dataset name
  apiVersion: "2023-07-04", // use today's date as the API version
  useCdn: false, // `false` if you want to ensure fresh data
};

const client = createClient(config);

client
  .fetch('*[_type == "airport"]._id')
  .then((docs) =>
    docs
      .map((doc) => doc._id.replace("drafts.", ""))
      .forEach((id) => {
        client.delete(id).then(() => {
          console.log(`Deleted item ${id}`);
        });
      })
  )
  .catch((err) => {
    console.error("Delete failed:", err.message);
  });
