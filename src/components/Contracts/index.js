import { Text, Flex, HStack, Input, IconButton } from '@chakra-ui/react';
import { useGetContract } from '../../hooks/useContract'
import { FaSearch } from 'react-icons/fa'
import { useCore } from '../../providers/CoreProvider';
import Details from './Details';

const Contracts = () => {
    const { contractInput, setContractInput } = useCore();
    const [getContract, { loading }] = useGetContract();

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
                <HStack>
                    <Input placeholder='Search Contract Address' value={contractInput} onChange={(e) => setContractInput(e.target.value) }/>
                    <IconButton onClick={() => getContract({ variables: { address: contractInput } })} disabled={loading} isLoading={loading}>
                        <FaSearch />
                    </IconButton>
                </HStack>
            </HStack>
            <Details />
        </Flex>
    )
}

export default Contracts