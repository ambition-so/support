import { gql } from '@apollo/client';

export const UPDATE_CONTRACT_DETAILS = gql`
    mutation UpdateContractDetails($id: ID!, $name: String!, $symbol: String!, $blockchain: String!, $price: Float!, $size: Int!, $currency: String!, $address: String!) {
        updateContractDetails(id: $id, name: $name, symbol: $symbol, blockchain: $blockchain, price: $price, size: $size, currency: $currency, address: $address) {
            id
            name
            symbol
            type
            author
            blockchain
            address
            isSubscribed
            nftCollection {
                price
                currency
                size
                royalty
                baseUri
                unRevealedBaseUri
                whitelist
            }
        }
    }
`;

export const UPDATE_CONTRACT_ADDRESS = gql`
    mutation UpdateContractAddress($id: ID!, $address: String!) {
        updateContractAddress(id: $id, address: $address) {
            id
            name
            symbol
            type
            author
            blockchain
            address
            isSubscribed
            nftCollection {
                price
                currency
                size
                royalty
                baseUri
                unRevealedBaseUri
                whitelist
            }
        }
    }
`;

export const DELETE_CONTRACT = gql`
    mutation DeleteContract($id: ID!) {
        deleteContract(id: $id) {
            id
        }
    }
`;

export const GET_CONTRACT = gql`
    query GetContract($address: String!) {
        getContract(address: $address) {
            id
            name
            isSubscribed
            symbol
            type
            author
            blockchain
            address
            embed {
                css
            }
            nftCollection {
                price
                currency
                size
                royalty
                baseUri
                unRevealedBaseUri
                whitelist
            }
        }
    }
`;

export const GET_CONTRACT_BY_ID = gql`
    query GetContractById($id: String!) {
        getContractById(id: $id) {
            id
            name
            isSubscribed
            symbol
            type
            author
            blockchain
            address
            embed {
                css
            }
            nftCollection {
                price
                currency
                size
                royalty
                baseUri
                unRevealedBaseUri
                whitelist
            }
        }
    }
`

export const SET_BASE_URI = gql`
    mutation SetBaseUri($baseUri: String!, $id: ID!) {
        setBaseUri(baseUri: $baseUri, id: $id) {
            id
            nftCollection {
                price
                currency
                size
                royalty
                baseUri
                unRevealedBaseUri
                whitelist
            }
        }
    }
`;

export const SET_UN_REVEALED_BASE_URI = gql`
    mutation SetUnRevealedBaseUri($unRevealedBaseUri: String!, $id: ID!) {
        setUnRevealedBaseUri(unRevealedBaseUri: $unRevealedBaseUri, id: $id) {
            id
            nftCollection {
                price
                currency
                size
                royalty
                baseUri
                unRevealedBaseUri
                whitelist
            }
        }
    }
`;

export const SET_NFT_PRICE = gql`
    mutation SetNftPrice($price: Float!, $id: ID!) {
        setNftPrice(price: $price, id: $id) {
            id
            nftCollection {
                price
                currency
                size
                royalty
                baseUri
                unRevealedBaseUri
                whitelist
            }
        }
    }
`;

export const SET_WHITELIST = gql`
    mutation SetWhitelist($whitelist: [String!]!, $id: ID!) {
        setWhitelist(whitelist: $whitelist, id: $id) {
            id
            nftCollection {
                price
                currency
                size
                royalty
                baseUri
                unRevealedBaseUri
                whitelist
            }
        }
    }
`;

export const SET_EMBED_BUTTON_CSS = gql`
    mutation SetEmbedButtonCss($css: String!, $id: ID!) {
        setEmbedButtonCss(css: $css, id: $id) {
            id
            embed {
                css
            }
        }
    }
`;

export const SET_OWNER_ID = gql`
    mutation SetOwnerId($id: String!, $newId: String!) {
        setOwnerId(id: $id, newId: $newId)
    }
`;

export const SET_CONTRACT_SUBSCRIPTION = gql`
    mutation SetContractSubscription($id: String!, $isSubscribed: Boolean!) {
        setContractSubscription(id: $id, isSubscribed: $isSubscribed)
    }
`;

export const SET_CONTRACT_NAME = gql`
    mutation SetContractName($id: String!, $name: String!) {
        setContractName(id: $id, name: $name)
    }
`

export const SET_CONTRACT_TYPE = gql`
    mutation SetContractType($id: String!, $type: String!) {
        setContractType(id: $id, type: $type)
    }
`

export const SET_BLOCKCHAIN = gql`
    mutation SetBlockchain($id: String!, $blockchain: String!) {
        setBlockchain(id: $id, blockchain: $blockchain)
    }
`;