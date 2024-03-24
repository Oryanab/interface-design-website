import { graph, config, connector } from "@grafbase/sdk";

const g = graph.Standalone();

const mongodb = connector.MongoDB("MongoDB", {
  url: process.env.MONGO_URL!,
  apiKey: process.env.MONGO_API!,
  dataSource: "sideprojects",
  database: "flexibble",
});

mongodb
  .model("User", {
    name: g.string().length({ min: 2, max: 20 }),
    emali: g.string().unique(),
    avatarUrl: g.url(),
    description: g.string().optional(),
    githubUrl: g.url().optional(),
    linkedInUrl: g.url().optional(),
    projects: g.ref("project"),
  })
  .collection("users");

mongodb
  .model("Project", {
    title: g.string().length({ min: 3 }),
    description: g.string(),
    image: g.url(),
    liveSiteUrl: g.url(),
    githubUrl: g.url().optional(),
    category: g.string(),
    createdBy: g.ref("user"),
  })
  .collection("projects");

export default config({
  graph: g,
  auth: {
    rules: (rules) => {
      rules.public();
    },
  },
});
