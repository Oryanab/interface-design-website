import { GraphQLClient } from "graphql-request";

const isProduction = process.env.NODE_ENV === 'production'
const apiUrl = isProduction ? process.env.NEXT_PUBLIC_GRAPHQL_API_URL

const client = new GraphQLClient(process.)

const makeGraphQLRequest = async (query: string, variables = {}) => {
  try {

  } catch (error) {
    throw error;
  }
};
