import { gql } from "@apollo/client";

export const GET_WEBSITE = gql`
	query GetWebsite($title: String!) {
		getWebsite(title: $title) {
            _id
			author
            title
            isPublished
            isSubscribed
            pages {
                name
                data
            }
            customDomain
            isCustomDomainActive
            domains {
                domain
                isActive	
            }
            settings {
                connectedContractAddress
            }
            favicon
            seo {
                title
                previewTitle
                description
                keywords
                language
                robots
                url
                image
            }
            published {
                name
                data
            }
            custom {
                head
                body
            }
		}
	}
`

export const GET_WEBSITE_BY_ID = gql`
    query GetWebsiteById($websiteId: String!) {
        getWebsiteById(websiteId: $websiteId) {
            _id
            author
            title
            isPublished
            isSubscribed
            pages {
                name
                data
            }
            customDomain
            isCustomDomainActive
            domains {
                domain
                isActive	
            }
            settings {
                connectedContractAddress
            }
            favicon
            seo {
                title
                previewTitle
                description
                keywords
                language
                robots
                url
                image
            }
            published {
                name
                data
            }
            custom {
                head
                body
            }
        }
    }
`

export const UPDATE_WEBSITE_TITLE = gql`
    mutation SetWebsiteTitle($websiteId: String!, $title: String!) {
        setWebsiteTitle(websiteId: $websiteId, title: $title)
    }
`;

export const UPDATE_CONNECTED_ADDRESS = gql`
    mutation SetContractAddress($websiteId: String!, $address: String!) {
        setContractAddress(websiteId: $websiteId, address: $address)
    }
`;

export const SET_SUBSCRIPTION = gql`
    mutation SetSubscription($websiteId: String!, $isSubscribed: Boolean!) {
        setSubscription(websiteId: $websiteId, isSubscribed: $isSubscribed)
    }
`;