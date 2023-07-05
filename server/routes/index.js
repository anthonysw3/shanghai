const express = require("express");
const router = express.Router();
const { DuffelError } = require("@duffel/api");
const duffel = require("../duffel");

// Define route to handle flight search request
router.post("/flights/search", async (req, res) => {
  const { searchParams } = req.body;
  try {
    const offers = await duffel.offerRequests.create({
      slices: slices,
      cabin_class: cabin_class,
      passengers: passengers,
      return_offers: false,
    });
    res.json(offers);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Define route to fetch flight details
router.get("/flights/:flightId", async (req, res) => {
  const { flightId } = req.params;
  try {
    const offer = await duffel.offers.get(flightId, {
      return_available_services: true,
    });
    res.json(offer);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
