import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import ApolloClient from 'apollo-client'

import fetch from 'node-fetch';
import gql from 'graphql-tag'

import { User } from './generated/graphql'

const client = new ApolloClient({
  link: createHttpLink({
    uri: 'http://localhost:4000',
    fetch: fetch,
  }),
  cache: new InMemoryCache(),
})

client.query({
  query: gql`
    query {
      users {
        id
        name
      }
    }
  `,
})
.then(result => {
  const { users } : { users: User[] } = result.data

  users.forEach(user => {
    console.log('user.id:', user.id)
    console.log('user.name:', user.name)
  })
})
.catch(error => console.error(error));
