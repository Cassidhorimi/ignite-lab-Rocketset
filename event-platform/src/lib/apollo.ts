import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4szjxcv2qzf01wg3ar19ca6/master',
  cache: new InMemoryCache()
});