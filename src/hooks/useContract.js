import { useLazyQuery } from '@apollo/client'
import { GET_CONTRACT } from '../contract.gql'

export const useGetContract = ({ address, onCompleted }) => {
    const [getContract, { ...queryResult }] = useLazyQuery(
        GET_CONTRACT,
        {
            variables: { address },
            onCompleted: async data => {
                onCompleted(data)
            },
            onError: async err => {
                console.log(err);
            }
        }
    );

    return [getContract, { ...queryResult }];
};