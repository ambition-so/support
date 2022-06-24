import { useMutation, useQuery } from '@apollo/client';
import {
    SET_BASE_URI,
    SET_UN_REVEALED_BASE_URI,
    UPDATE_CONTRACT_ADDRESS,
    UPDATE_CONTRACT_DETAILS,
    SET_WHITELIST,
    GET_CONTRACT,
    DELETE_CONTRACT,
    SET_NFT_PRICE,
    SET_EMBED_BUTTON_CSS
} from '../gql/contract.gql';

export const useDeleteContract = ({ onCompleted, onError }) => {
    
    const [deleteContract, { ...mutationResult }] = useMutation(
        DELETE_CONTRACT,
        {
            onCompleted: (data) => {
                
            },
            onError,
        }
    );

    return [deleteContract, { ...mutationResult }];
};

export const useGetContract = async ({ address, onCompleted, onError }) => {

    const { ...queryResult } = useQuery(GET_CONTRACT, {
        variables: { address },
        onCompleted,
        onError,
    });

    return { ...queryResult };
};

export const useSetBaseUri = ({ onCompleted, onError }) => {

    const [setBaseUri, { ...mutationResult }] = useMutation(SET_BASE_URI, {
        onCompleted: async (data) => {
            
        },
        onError,
    });

    return [setBaseUri, { ...mutationResult }];
};

export const useSetUnRevealedBaseUri = ({ onCompleted, onError }) => {

    const [setUnRevealedBaseUri, { ...mutationResult }] = useMutation(SET_UN_REVEALED_BASE_URI, {
        onCompleted: async (data) => {
           
        },
        onError,
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

export const useUpdateContractAddress = ({ onCompleted, onError }) => {

    const [updateContractAddress, { ...mutationResult }] = useMutation(
        UPDATE_CONTRACT_ADDRESS,
        {
            onCompleted: async (data) => {
                
            },
            onError,
        }
    );

    return [updateContractAddress, { ...mutationResult }];
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