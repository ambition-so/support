import { VStack, Text, useColorModeValue, Flex, Tag, HStack, TagLabel, Input, IconButton } from '@chakra-ui/react';
import { useGetContract } from '../hooks/useContract'
import { FaSearch } from 'react-icons/fa'
import { useCore } from '../providers/CoreProvider';

const Contracts = () => {
    const { contractAddress, setContractAddress } = useCore();
    const [getContract, { loading }] = useGetContract();

    const containerColor = useColorModeValue('white', 'rgb(17,21,28)');

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
            <Flex 
                flexDir='column'
                bg={containerColor}
                p='2em'
                borderRadius='.25em'
                boxShadow='0 0 2px 0 rgb(0 0 0 / 10%)'
                w='full'
                mt='2em'
            >
                <Text>
                    Details
                </Text>
            </Flex>
        </Flex>
    )
}

export default Contracts