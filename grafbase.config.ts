import { graph, config, connector } from "@grafbase/sdk";

const g = graph.Standalone();

const mongodb = connector.MongoDB("MongoDB", {
  url: process.env.MONGO_URI!,
  apiKey: process.env.SECRET!,
  dataSource: "sideprojects",
  database: "flexibble",
});

const User = g.type("User", {
  name: g.string(),
  emali: g.string(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linkedInUrl: g.url().optional(),
  // @ts-ignore
  projects: g.ref(Project),
});

const Project = g.type("Project", {
  title: g.string(),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.url(),
  githubUrl: g.url().optional(),
  category: g.string(),
  createdBy: g.ref(User),
});

mongodb
  .model("User", {
    name: g.string().length({ min: 2, max: 20 }),
    emali: g.string().unique(),
    avatarUrl: g.url(),
    description: g.string().optional(),
    githubUrl: g.url().optional(),
    linkedInUrl: g.url().optional(),
    projects: g.ref(Project),
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
    createdBy: g.ref(User),
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
