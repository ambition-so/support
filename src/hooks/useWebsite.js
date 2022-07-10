import { useLazyQuery, useMutation, useQuery } from '@apollo/client'
import { useToast } from '@chakra-ui/react'
import { 
    GET_WEBSITE, 
    UPDATE_WEBSITE_TITLE, 
    UPDATE_CONNECTED_ADDRESS, 
    SET_SUBSCRIPTION, 
    GET_WEBSITE_BY_ID,
    GET_WEBSITES_BY_CONTRACT_ADDRESS
} from '../gql/website.gql'
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

export const useSetWebsiteTitle = () => {
    const toast = useToast();
    const { setWebsite, website } = useCore();

    const [setWebsiteTitle, { ...mutationResult }] = useMutation(
        UPDATE_WEBSITE_TITLE,
        {
            onCompleted: async (data) => {
                let newWebsite = { ...website };
                newWebsite.title = data.setWebsiteTitle;
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

    return [setWebsiteTitle, { ...mutationResult }];
};

export const useSetContractAddress = () => {
    const toast = useToast();
    const { setWebsite, website } = useCore();

    const [setContractAddress, { ...mutationResult }] = useMutation(
        UPDATE_CONNECTED_ADDRESS,
        {
            onCompleted: async (data) => {
                let newWebsite = { ...website };

                const settings = {
                    connectedContractAddress: data.setContractAddress
                }

                newWebsite.settings = settings;
                setWebsite(newWebsite);

                toast({
                    title: 'Success',
                    description: 'Updated Website Connected Contract Address',
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

    return [setContractAddress, { ...mutationResult }];
};

export const useSetSubscription = () => {
    const toast = useToast();
    const { website, setWebsite } = useCore();

    const [setSubscription, { ...mutationResult }] = useMutation(SET_SUBSCRIPTION, {
        onCompleted: (data) => {
            let newWebsite = { ...website };
            newWebsite.isSubscribed = data.setWebsiteSubscription;
            setWebsite(newWebsite);

            toast({
                title: 'Success',
                description: 'Updated Website Subscription',
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
    });

    return [setSubscription, { ...mutationResult }];
};

export const useGetWebsiteById = () => {
    const toast = useToast();
    const { setWebsite, setWebsiteInput } = useCore();

    const [getWebsiteById, { ...queryResult }] = useLazyQuery(
        GET_WEBSITE_BY_ID,
        {
            onCompleted: async (data) => {
                console.log(data.getWebsiteById);
                setWebsite(data.getWebsiteById);
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

    return [getWebsiteById, { ...queryResult }];
};

export const useGetWebsitesByContractAddress = () => {
    const toast = useToast();
    const { setWebsites } = useCore();

    const [getWebsite, { ...queryResult }] = useLazyQuery(
        GET_WEBSITES_BY_CONTRACT_ADDRESS,
        {
            onCompleted: async (data) => {
                console.log(data)
                setWebsites(data.getWebsitesByContractAddress);
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