import { Text, Flex, HStack } from '@chakra-ui/react'
import { useGetContract, useGetContractById } from '../../hooks/useContract'
import { useCore } from '../../providers/CoreProvider'
import Details from './Details'
import Search from '../Search'

const Contracts = () => {
    const { contractInput, setContractInput } = useCore();
    const [getContract, { loading }] = useGetContract();
    const [getContractById] = useGetContractById();

    return (
        <Flex flexDir='column' w='full'>
            <HStack justifyContent='space-between'>
                <Flex flexDir='column'>
                    <Text fontSize='14pt'>
                        Contract Dashboard
                    </Text>
                    <Text fontSize='10pt'>
                        View or Update Contracts
                    </Text>
                </Flex>
                <Search 
                    placeholder='Search Contract' 
                    value={contractInput} 
                    onChange={(e) => setContractInput(e.target.value)}
                    isLoading={loading}
                    searchArr={[
                        { filter: 'ID', callback: () => getContractById({ variables: { id: contractInput } })},
                        { filter: 'Address', callback: () => getContract({ variables: { address: contractInput } })}
                    ]}
                />
            </HStack>
            <Details />
        </Flex>
    )
}

export default Contracts