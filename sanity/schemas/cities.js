export default {
  name: "city",
  title: "City",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string" },
    { name: "id", title: "ID", type: "string" },
    { name: "iata_country_code", title: "IATA Country Code", type: "string" },
    { name: "iata_code", title: "IATA Code", type: "string" },
    {
      name: "airports",
      title: "Airports",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "time_zone", title: "Time Zone", type: "string" },
            { name: "name", title: "Name", type: "string" },
            { name: "longitude", title: "Longitude", type: "number" },
            { name: "latitude", title: "Latitude", type: "number" },
            { name: "id", title: "ID", type: "string" },
            { name: "icao_code", title: "ICAO Code", type: "string" },
            {
              name: "iata_country_code",
              title: "IATA Country Code",
              type: "string",
            },
            { name: "iata_code", title: "IATA Code", type: "string" },
            { name: "iata_city_code", title: "IATA City Code", type: "string" },
            { name: "city_name", title: "City Name", type: "string" },
          ],
        },
      ],
    },
  ],
};
