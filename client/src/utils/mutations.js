import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        email
      }
    }
  }
`;
// WAS UPDATED ROLE REMOVED
export const ADD_USER = gql`
  mutation addUser(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
    $instruments: String!
    $location: String!
  ) {
    addUser(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
      instruments: $instruments
      location: $location
    ) {
      token
      user {
        _id
        email
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser(
    $_id: ID!
    $firstName: String
    $lastName: String
    $email: String
    $instruments: String
    $location: String
  ) {
    updateUser(
      _id: $_id
      firstName: $firstName
      lastName: $lastName
      email: $email
      instruments: $instruments
      location: $location
    ) {
      _id
      firstName
      lastName
      email
      instruments
      location
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(_id: $id) {
      _id
      email
    }
  }
`;