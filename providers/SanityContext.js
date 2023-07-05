import React, { createContext } from "react";
import { createClient } from "@sanity/client";

// Create the context
export const SanityContext = createContext();

// Create the Sanity client instance
export const client = createClient({
  projectId: "your-project-id",
  dataset: "your-dataset-name",
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: "2023-07-04", // use current date (YYYY-MM-DD) to target the latest API version
  // token: process.env.SANITY_SECRET_TOKEN // Only if you want to update content with the client
});

// Create the provider component
export const SanityProvider = ({ children }) => {
  return (
    <SanityContext.Provider value={client}>{children}</SanityContext.Provider>
  );
};
