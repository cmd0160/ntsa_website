import { gql } from "@apollo/client";

export const QUERY_CURRENT_USER = gql`
  query Me {
    me {
      _id
      firstName
      lastName
      email
      instruments
      location
    }
  }
`;

export const QUERY_ALL_USERS = gql`
  query Users {
    users {
      _id
      email
      firstName
      lastName
      instruments
      location
    }
  }
`;

export const QUERY_USER = gql`
  query User($email: String!) {
    user(email: $email) {
      _id
      firstName
      lastName
      email
      instruments
      location
    }
  }
`;