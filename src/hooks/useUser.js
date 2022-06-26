import { useLazyQuery } from '@apollo/client'
import { useToast } from '@chakra-ui/react'
import { GET_USER, GET_4_DIGITS } from '../gql/user.gql'
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

export const useGetLast4Digits = () => {
    const toast = useToast();

    const [getLast4Digits, { ...queryResult }] = useLazyQuery(
        GET_4_DIGITS,
        {
            onCompleted: async (data) => {
                toast({
                    title: 'Success',
                    description: `Last 4 digits: ${data.getLast4Digits}`,
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

    return [getLast4Digits, { ...queryResult }];
}