import { useLazyQuery, useMutation } from '@apollo/client'
import { useToast } from '@chakra-ui/react'
import { GET_USER, GET_4_DIGITS, CHANGE_EMAIL, VERIFY_SIGNATURE, GET_NONCE } from '../gql/user.gql'
import { useCore } from '../providers/CoreProvider'
import { useAuth } from '../providers/AuthProvider'

export const useGetUser = () => {
    const toast = useToast();
    const { setUser, setUserInput } = useCore();

    const [getUser, { ...queryResult }] = useLazyQuery(
        GET_USER,
        {
            onCompleted: async (data) => {
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

export const useChangeEmail = () => {
    const toast = useToast();
    const { setUser, user } = useCore();

    const [changeEmail, { ...mutationResult }] = useMutation(
        CHANGE_EMAIL,
        {
            onCompleted: async (data) => {
                let newUser = { ...user };
                newUser.email = data.changeEmail;
                setUser(newUser);

                toast({
                    title: 'Success',
                    description: 'Updated User Email',
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

    return [changeEmail, { ...mutationResult }];
};

export const useVerifySignature = () => {
    const toast = useToast();
    const { onLoginSuccess } = useAuth();

    const [verifySignature, { ...mutationResult }] = useMutation(
        VERIFY_SIGNATURE,
        {
            onCompleted: (data) => {
                onLoginSuccess(data.verifySignature);
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

    return [verifySignature, { ...mutationResult }];
};

export const useGetNonceByAddress = () => {
    const toast = useToast();

    const [getNonceByAddress, { ...mutationResult }] = useMutation(GET_NONCE, {
        onCompleted: (data) => {
            
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

    return [getNonceByAddress, { ...mutationResult }];
};