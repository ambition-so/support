import { useQuery } from '@apollo/client';
import { GET_PUBLISHED, GET_WEBSITE_BY_DOMAIN } from '../website.gql';

export const useGetPublished = ({ title, onError }) => {
    const { ...queryResult } = useQuery(GET_PUBLISHED, {
		variables: { title },
		onCompleted: data => {
            
		},
        onError
	});

	return { ...queryResult }
}

export const useGetWebsiteByDomain = ({ domain, onError }) => {
    const { ...queryResult } = useQuery(GET_WEBSITE_BY_DOMAIN, {
		variables: { domain },
		onCompleted: data => {
            
		},
        onError
	});

	return { ...queryResult }
}