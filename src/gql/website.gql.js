import { gql } from "@apollo/client";

export const GET_PUBLISHED = gql`
	query GetPublished($title: String!) {
		getPublished(title: $title) {
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

export const GET_WEBSITE_BY_DOMAIN = gql`
	query GetWebsiteByDomain($domain: String!) {
		getWebsiteByDomain(domain: $domain) {
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