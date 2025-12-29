const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const experiences = [
  {
    id: 1,
    name: "Maasai Cultural Immersion",
    location: "Kajiado",
    price: 50,
    sustainability: "Community-owned",
  },
  {
    id: 2,
    name: "Nairobi Street Food Crawl",
    location: "Nairobi",
    price: 20,
    sustainability: "Local vendors",
  },
  {
    id: 3,
    name: "Coastal Dhow Sunset Cruise",
    location: "Mombasa",
    price: 60,
    sustainability: "Eco-marine",
  },
];

app.post("/api/plan", (req, res) => {
  const { budget } = req.body;
  const results = experiences.filter(e => e.price <= budget);
  res.json(results);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("ThrillAI running on port", PORT);
});