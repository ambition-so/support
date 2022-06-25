import { gql } from '@apollo/client';

export const GET_USER = gql`
    query GetUser($id: String!) {
        getUser(id: $id) {
            id
            nonce
            address
            email
            password
            name
            stripeCustomerId
        }
    }
`;