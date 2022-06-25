import { VStack, Text, useColorModeValue, Flex, Tag, HStack, TagLabel, Input, IconButton } from '@chakra-ui/react';
import { useGetContract } from '../../hooks/useContract'
import { FaSearch } from 'react-icons/fa'
import { useCore } from '../../providers/CoreProvider';
import Details from './Details';

const Contracts = () => {
    const { contractAddress, setContractAddress } = useCore();
    const [getContract, { loading }] = useGetContract();

    return (
        <Flex flexDir='column' w='full'>
            <HStack justifyContent='space-between'>
                <Flex flexDir='column'>
                    <Text fontSize='14pt'>
                        Contract Dashboard
                    </Text>
                    <Text fontSize='10pt'>
                        View or update contracts
                    </Text>
                </Flex>
                <HStack>
                    <Input placeholder='Search Contract Address' value={contractAddress} onChange={(e) => setContractAddress(e.target.value) }/>
                    <IconButton onClick={() => getContract({ variables: { address: contractAddress } })} disabled={loading} isLoading={loading}>
                        <FaSearch />
                    </IconButton>
                </HStack>
            </HStack>
            <Details />
        </Flex>
    )
}

export default Contracts