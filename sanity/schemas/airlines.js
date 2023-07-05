export default {
  name: "airline",
  title: "Airline",
  type: "document",
  fields: [
    {
      name: "id",
      title: "ID",
      type: "string",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "iata_code",
      title: "IATA Code",
      type: "string",
    },
    {
      name: "conditions_of_carriage_url",
      title: "Conditions of Carriage URL",
      type: "url",
    },
    {
      name: "logo_symbol",
      title: "Logo Symbol",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "logo_lookup",
      title: "Logo Lookup",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
