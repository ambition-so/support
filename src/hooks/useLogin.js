import { useEffect } from 'react';
import { useToast } from '@chakra-ui/react'
import { useCore } from '../providers/CoreProvider'
import Web3 from 'web3/dist/web3.min.js'

export const useLogin = () => {
    const toast = useToast();
    const { setAddress, setIsLoggedIn } = useCore();

    useEffect(() => {
        ConnectWithMetamask(true);
    }, [])

    const ConnectWithMetamask = async (silent = false) => {
        try {
            if (!setAddress || !setIsLoggedIn) return;
            if (typeof window.ethereum === 'undefined' || (typeof window.web3 === 'undefined')) throw new Error('Metamask is not installed');

            window.web3 = new Web3(window.ethereum) || new Web3(window.web3.currentProvider);
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });

            setAddress(accounts[0]);
            setIsLoggedIn(true);

            if (silent) return;

            toast({
                title: 'Success',
                description: 'Successfully logged in',
                status: 'success',
                isClosable: true,
                position: 'bottom-center'
            })
        }
        catch (err) {
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

    return {
        ConnectWithMetamask
    }
}