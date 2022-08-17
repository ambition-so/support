import { useMutation, useLazyQuery } from '@apollo/client'
import { useToast } from '@chakra-ui/react'
import {
    SET_BASE_URI,
    SET_UN_REVEALED_BASE_URI,
    UPDATE_CONTRACT_ADDRESS,
    UPDATE_CONTRACT_DETAILS,
    SET_WHITELIST,
    GET_CONTRACT,
    DELETE_CONTRACT,
    SET_NFT_PRICE,
    SET_EMBED_BUTTON_CSS,
    GET_CONTRACT_BY_ID,
    SET_OWNER_ID,
    SET_CONTRACT_SUBSCRIPTION,
    SET_CONTRACT_NAME,
    SET_CONTRACT_TYPE,
    SET_BLOCKCHAIN
} from '../gql/contract.gql'
import { useCore } from '../providers/CoreProvider'
import ERC721 from '../libs/abi/ambitionNFTPresale.json';
import ERC721a from '../libs/abi/AmbitionCreatorImpl.json';

export const useGetContract = () => {
    const toast = useToast();
    const { setContract, setContractInput, setContractOwner } = useCore();

    const [getContract, { ...queryResult }] = useLazyQuery(
        GET_CONTRACT,
        {
            onCompleted: async (data) => {
                console.log(data.getContract);
                setContract(data.getContract);
                setContractInput('');

                // Getting Contract Owner

                const contractOwner = await getContractOwner(data.getContract);
                setContractOwner(contractOwner);
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

    return [getContract, { ...queryResult }];
};

export const useGetContractById = () => {
    const toast = useToast();
    const { setContract, setContractInput, setContractOwner } = useCore();

    const [getContractById, { ...queryResult }] = useLazyQuery(
        GET_CONTRACT_BY_ID,
        {
            onCompleted: async (data) => {
                console.log(data.getContractById);
                setContract(data.getContractById);
                setContractInput('');

                // Getting Contract Owner

                const contractOwner = await getContractOwner(data.getContractById);
                setContractOwner(contractOwner);
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

    return [getContractById, { ...queryResult }];
};

export const useUpdateContractAddress = () => {
    const toast = useToast();
    const { setContract, contract } = useCore();

    const [updateContractAddress, { ...mutationResult }] = useMutation(
        UPDATE_CONTRACT_ADDRESS,
        {
            onCompleted: async (data) => {
                let newContract = { ...contract };
                newContract.address = data.updateContractAddress.address;
                setContract(newContract);

                toast({
                    title: 'Success',
                    description: 'Updated Contract Address',
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

    return [updateContractAddress, { ...mutationResult }];
};

export const useSetBaseUri = () => {
    const toast = useToast();
    const { contract, setContract } = useCore();

    const [setBaseUri, { ...mutationResult }] = useMutation(SET_BASE_URI, {
        onCompleted: async (data) => {
            let newContract = { ...contract };

            const newNftCollection = {
                ...contract.nftCollection,
                baseUri: data.setBaseUri.nftCollection.baseUri
            }

            newContract.nftCollection = newNftCollection;

            setContract(newContract);

            toast({
                title: 'Success',
                description: 'Updated Contract BaseURI',
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

    return [setBaseUri, { ...mutationResult }];
};

export const useSetUnRevealedBaseUri = () => {
    const toast = useToast();
    const { contract, setContract } = useCore();

    const [setUnRevealedBaseUri, { ...mutationResult }] = useMutation(SET_UN_REVEALED_BASE_URI, {
        onCompleted: async (data) => {
            let newContract = { ...contract };

            const newNftCollection = {
                ...contract.nftCollection,
                unRevealedBaseUri: data.setUnRevealedBaseUri.nftCollection.unRevealedBaseUri
            }

            newContract.nftCollection = newNftCollection;
            setContract(newContract);

            toast({
                title: 'Success',
                description: 'Updated Contract UnreveleadURI',
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

    return [setUnRevealedBaseUri, { ...mutationResult }];
};

export const useSetNftPrice = ({ onCompleted, onError }) => {

    const [setNftPrice, { ...mutationResult }] = useMutation(SET_NFT_PRICE, {
        onCompleted: async (data) => {
            
        },
        onError
    });

    return [setNftPrice, { ...mutationResult }];
};

export const useSetWhitelist = ({ onCompleted, onError }) => {

    const [setWhitelist, { ...mutationResult }] = useMutation(SET_WHITELIST, {
        onCompleted: async (data) => {
            
        },
        onError
    });

    return [setWhitelist, { ...mutationResult }];
};

export const useSetEmbedButtonCss = ({ onCompleted, onError }) => {

    const [setEmbedButtonCss, { ...mutationResult }] = useMutation(SET_EMBED_BUTTON_CSS, {
        onCompleted: async (data) => {
            
        },
        onError
    });

    return [setEmbedButtonCss, { ...mutationResult }];
};

export const useUpdateContractDetails = ({ onCompleted, onError }) => {

    const [updateContractDetails, { ...mutationResult }] = useMutation(
        UPDATE_CONTRACT_DETAILS,
        {
            onCompleted: async (data) => {
                
            },
            onError
        }
    );

    return [updateContractDetails, { ...mutationResult }];
};

export const useSetOwnerId = () => {
    const toast = useToast();
    const { contract, setContract, setContractInput } = useCore();

    const [setOwnerId, { ...queryResult }] = useMutation(
        SET_OWNER_ID,
        {
            onCompleted: async (data) => {
                let newContract = { ...contract }
                newContract.author = data.setOwnerId;
                setContract(newContract);
                setContractInput('');
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

    return [setOwnerId, { ...queryResult }];
};

export const useSetContractSubscription = () => {
    const toast = useToast();
    const { contract, setContract } = useCore();

    const [setContractSubscription, { ...queryResult }] = useMutation(
        SET_CONTRACT_SUBSCRIPTION,
        {
            onCompleted: async (data) => {
                let newContract = { ...contract }
                newContract.isSubscribed = data.setContractSubscription;
                setContract(newContract);

                toast({
                    title: 'Success',
                    description: 'Updated Contract Subscription',
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

    return [setContractSubscription, { ...queryResult }];
};

export const useSetContractName = () => {
    const toast = useToast();
    const { contract, setContract } = useCore();

    const [setContractName, { ...queryResult }] = useMutation(
        SET_CONTRACT_NAME,
        {
            onCompleted: async (data) => {
                let newContract = { ...contract }
                newContract.name = data.setContractName;
                setContract(newContract);

                toast({
                    title: 'Success',
                    description: 'Updated Contract Name',
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

    return [setContractName, { ...queryResult }];
};

export const useDeleteContract = () => {
    const toast = useToast();
    const { setContract } = useCore();

    const [deleteContract, { ...queryResult }] = useMutation(
        DELETE_CONTRACT,
        {
            onCompleted: async (data) => {
                setContract(null);

                toast({
                    title: 'Success',
                    description: 'Updated Contract Name',
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

    return [deleteContract, { ...queryResult }];
};

export const useSetContractType = () => {
    const toast = useToast();
    const { contract, setContract } = useCore();

    const [setContractType, { ...queryResult }] = useMutation(
        SET_CONTRACT_TYPE,
        {
            onCompleted: async (data) => {
                let newContract = { ...contract }
                newContract.type = data.setContractType;
                setContract(newContract);

                toast({
                    title: 'Success',
                    description: 'Updated Contract Type',
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

    return [setContractType, { ...queryResult }];
}

const getContractOwner = async (contractData) => {
    if (!contractData) return 'Error Getting Contract Owner';

    try {
        const { address, type, blockchain } = contractData;

        if (blockchain === 'solana' || blockchain === 'solanadevnet') return 'Error Getting Contract Owner'

        let contract;
        if (type === 'erc721a') {
            contract = new window.web3.eth.Contract(ERC721a.abi, address);
        } else {
            contract = new window.web3.eth.Contract(ERC721.abi, address);
        }
    
        const contractOwner = await contract.methods.owner().call();

        return contractOwner;
    }
    catch (err) {
        console.error(err);
        return 'Error Getting Contract Owner';
    }
}

export const useSetBlockchain = () => {
    const toast = useToast();
    const { contract, setContract } = useCore();

    const [setBlockchain, { ...queryResult }] = useMutation(
        SET_BLOCKCHAIN,
        {
            onCompleted: async (data) => {
                let newContract = { ...contract }
                newContract.blockchain = data.setBlockchain;
                setContract(newContract);

                toast({
                    title: 'Success',
                    description: 'Updated Contract Blockchain',
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

    return [setBlockchain, { ...queryResult }];
}