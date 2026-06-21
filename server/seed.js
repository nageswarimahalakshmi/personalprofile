require("dotenv").config();
const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String
});

const Project = mongoose.model("Project", ProjectSchema);

const sampleProjects = [
  {
    title: "AI Personal Assistant",
    description: "An agentic AI assistant built with React and Node.js that integrates with OpenAI APIs to automate calendar scheduling and email replies."
  },
  {
    title: "E-commerce Microservices Platform",
    description: "A secure, scalable online store backend built with Node.js, Express, Docker, and MongoDB, featuring JSON Web Token (JWT) auth and Stripe payment integration."
  },
  {
    title: "Vibrant Developer Portfolio",
    description: "A premium responsive portfolio website displaying professional projects, social links, and an interactive contact form powered by a custom Express API."
  }
];

const seedDB = async () => {
  const mongoURI = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/portfolio";
  try {
    await mongoose.connect(mongoURI);
    console.log("MongoDB connected for seeding...");

    // Optional: Clear existing projects
    await Project.deleteMany({});
    console.log("Cleared existing projects.");

    await Project.insertMany(sampleProjects);
    console.log("Sample projects successfully seeded!");

    process.exit(0);
  } catch (err) {
    console.error("Error seeding database:", err);
    process.exit(1);
  }
};

seedDB();
