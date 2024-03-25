import { GraphQLClient } from "graphql-request";

const isProduction = process.env.NODE_ENV === "production";
const apiUrl = isProduction
  ? process.env.GRAPH_BASE_API_ENDPOINT || ""
  : "http://127.0.0.1:4000/graphql";
const apiKey = isProduction ? process.env.GRAPH_BASE_API_KEY || "" : "letmein";
const serverUrl = isProduction
  ? process.env.NEXT_PUBLIC_SERVER_URL
  : "http://localhost:3000";

const client = new GraphQLClient(apiUrl);

const makeGraphQLRequest = async (query: string, variables = {}) => {
  try {
  } catch (error) {
    throw error;
  }
};
