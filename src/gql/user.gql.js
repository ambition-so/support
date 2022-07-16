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

export const GET_4_DIGITS = gql`
    query GetLast4Digits($customerId: String!) {
        getLast4Digits(customerId: $customerId)
    }
`;

export const CHANGE_EMAIL = gql`
    mutation ChangeEmail($id: String!, $email: String!) {
        changeEmail(id: $id, email: $email)
    }
`;

export const VERIFY_SIGNATURE = gql`
    mutation VerifySignature($address: String!, $signature: String!) {
        verifySignature(address: $address, signature: $signature) {
            token
            user {
                id
                address
                name
                email
                stripeCustomerId
            }
        }
    }
`;

export const GET_NONCE = gql`
    mutation GetNonceByAddress($address: String!) {
        getNonceByAddress(address: $address)
    }
`;

export const GET_USER_BY_CUSTOMER_ID = gql`
    query GetUserByCustomerID($customerId: String!) {
        getUserByCustomerID(customerId: $customerId) {
            id
            nonce
            address
            email
            password
            name
            stripeCustomerId
        }
    }
`

export const GET_USER_SUBSCRIPTIONS = gql`
    query GetUserSubscriptions($customerId: String!) {
        getUserSubscriptions(customerId: $customerId) {
            id
            status
            productId
            productType
            price
            startDate
            endDate
            isCanceled
            canceledDate
        }
    }
`