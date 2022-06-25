import { VStack, Text, useColorModeValue, Flex, Tag, HStack, TagLabel, Input, IconButton, Spinner, Box  } from '@chakra-ui/react';
import { useGetContract } from '../../hooks/useContract'
import { FaSearch } from 'react-icons/fa'
import { useCore } from '../../providers/CoreProvider';
import Loading from '../Loading';
import DetailDisplay from '../DetailDisplay';

const Details = () => {
    const { contract } = useCore();

    const containerColor = useColorModeValue('white', 'rgb(17,21,28)');

    return contract ? (
        <Flex 
            flexDir='column'
            bg={containerColor}
            p='2em'
            borderRadius='.25em'
            boxShadow='0 0 2px 0 rgb(0 0 0 / 10%)'
            w='full'
            mt='2em'
        >
            <Text fontSize='10pt'>
                Details
            </Text>
            <Text fontSize='9pt'>
                Details the ERC721A Contract you searched for
            </Text>
            <VStack alignItems='flex-start' w='full' mt='1.5em'>
                <DetailDisplay primary='Contract ID' secondary={contract?.id} />
                <DetailDisplay primary='Name' secondary={contract?.name} />
                <DetailDisplay primary='Symbol' secondary={contract?.symbol} />
                <DetailDisplay primary='Type' secondary={contract?.type} />
                <DetailDisplay primary='Contract Address' secondary={contract?.address} />
                <DetailDisplay primary="Owner's User ID" secondary={contract?.author} />
                <DetailDisplay primary='Blockchain' secondary={contract?.blockchain} />
            </VStack>
        </Flex>
    ) : (
        <Loading />
    )
}

export default Details