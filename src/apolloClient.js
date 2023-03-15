import AsyncStorage from "@react-native-async-storage/async-storage";
const { HttpLink, from, ApolloClient, ApolloLink, InMemoryCache,concat, split } = require("@apollo/client");
const { API_URL, SOCKET_URL } = require("./config");
const  { onError } = require('@apollo/client/link/error')
const httpLink =  new HttpLink({uri:API_URL})
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const getToken = async () => {
    const token = await AsyncStorage.getItem("token")
    return token
  }

const wsLink = new WebSocketLink({
    uri: SOCKET_URL,
    options: {
        reconnect: true,
        connectionParams: {
            authentication: getToken(),
        },
    },
});

const splitLink = split(
    ({ query }) => {
        const { kind, operation } = getMainDefinition(query);
        return (
            kind === 'OperationDefinition' && operation === 'subscription'
        );
    },
    wsLink,
    httpLink
);

const authenticationLink =new ApolloLink(async (operation, forward) => {
    // add the authorization to the headers
    const token = await getToken()
    if(token){
        operation.setContext(({ headers = {} }) => ({
          headers: {
            ...headers,
            "x-token": token
          }
        }));
    }

    return forward(operation);
  })

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {

      graphQLErrors.forEach(({ message, extensions, path }) => {
        if (extensions?.code === 'UNAUTHENTICATED') {
          // if (token) {
          // Toast.show(FormatError(message))
          // signOut();
          return forward(operation);
          // }
        }
      }

      );
    }
    if (networkError) {
      if (networkError?.statusCode === 400) {
        // if (token) {
        // signOut();

        return forward(operation);
        // }
      }
    }
  });

  const link = from([errorLink, splitLink]);
  let client = new ApolloClient({
    link: authenticationLink.concat(
        link
    ),
    cache: new InMemoryCache(),
  });

  export { client }