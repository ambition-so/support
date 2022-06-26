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

export const UPDATE_WEBSITE_TITLE = gql`
    mutation SetWebsiteTitle($websiteId: String!, $title: String!) {
        setWebsiteTitle(websiteId: $websiteId, title: $title)
    }
`;