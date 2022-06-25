import { useLazyQuery } from '@apollo/client'
import { useToast } from '@chakra-ui/react'
import { GET_WEBSITE } from '../gql/website.gql'
import { useCore } from '../providers/CoreProvider'

export const useGetWebsite = () => {
    const toast = useToast();
    const { setWebsite, setWebsiteTitle } = useCore();

    const [getWebsite, { ...queryResult }] = useLazyQuery(
        GET_WEBSITE,
        {
            onCompleted: async (data) => {
                console.log(data.getWebsite)
                setWebsite(data.getWebsite);
                setWebsiteTitle('');
            },
            onError: async (err) => {
                console.error(err);
                toast({
                    title: 'Error',
                    description: !err.response ? err.message : err.response.data?.message,
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position: 'bottom-center'
                })
            }
        }
    );

    return [getWebsite, { ...queryResult }];
};