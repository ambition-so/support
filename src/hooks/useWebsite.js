import { useLazyQuery, useMutation } from '@apollo/client'
import { useToast } from '@chakra-ui/react'
import { GET_WEBSITE, UPDATE_WEBSITE_TITLE } from '../gql/website.gql'
import { useCore } from '../providers/CoreProvider'

export const useGetWebsite = () => {
    const toast = useToast();
    const { setWebsite, setWebsiteInput } = useCore();

    const [getWebsite, { ...queryResult }] = useLazyQuery(
        GET_WEBSITE,
        {
            onCompleted: async (data) => {
                console.log(data.getWebsite)
                setWebsite(data.getWebsite);
                setWebsiteInput('');
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

export const useUpdateWebsiteTitle = () => {
    const toast = useToast();
    const { setWebsite, website } = useCore();

    const [updateWebsiteTitle, { ...mutationResult }] = useMutation(
        UPDATE_WEBSITE_TITLE,
        {
            onCompleted: async (data) => {
                let newWebsite = { ...website };
                newWebsite.title = data.updateWebsiteTitle;
                setWebsite(newWebsite);

                toast({
                    title: 'Success',
                    description: 'Updated Website Title',
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    position: 'bottom-center'
                })
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

    return [updateWebsiteTitle, { ...mutationResult }];
};