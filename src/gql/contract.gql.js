import { gql } from '@apollo/client';

export const GET_CONTRACT = gql`
	query GetContract($address: String!) {
		getContract(address:$address) {
			id
			author
			blockchain
			address
			nftCollection {
				price
				currency
				size
				royalty
				whitelist
			}
			type
		}
	}
`