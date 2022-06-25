import { useLazyQuery } from '@apollo/client'
import { useToast } from '@chakra-ui/react'
import { GET_USER } from '../gql/user.gql'
import { useCore } from '../providers/CoreProvider'

export const useGetUser = () => {
    const toast = useToast();
    const { setUser, setUserInput } = useCore();

    const [getUser, { ...queryResult }] = useLazyQuery(
        GET_USER,
        {
            onCompleted: async (data) => {
                console.log(data.getUser)
                setUser(data.getUser);
                setUserInput('');
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

    return [getUser, { ...queryResult }];
};