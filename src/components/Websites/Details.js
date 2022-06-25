import { VStack, Text, useColorModeValue, Flex } from '@chakra-ui/react';
import { useCore } from '../../providers/CoreProvider';
import Loading from '../Loading';
import DetailDisplay from '../DetailDisplay';

const WebsiteDetails = () => {
    const { website } = useCore();

    const containerColor = useColorModeValue('white', 'rgb(17,21,28)');

    return website ? (
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
                Websites
            </Text>
            <Text fontSize='9pt'>
                Details of the Website you searched for
            </Text>
            <VStack alignItems='flex-start' w='full' mt='1.5em'>
                <DetailDisplay primary='Website ID' secondary={website?._id} />
                <DetailDisplay primary='Title' secondary={website?.title} /> 
                <DetailDisplay primary='isSubscribed' secondary={website?.isSubscribed ? 'true' : 'false'} />
                <DetailDisplay primary='isPublished' secondary={website?.isPublished ? 'true' : 'false'} />
                <DetailDisplay primary='isCustomDomainActive' secondary={website?.isCustomDomainActive ? 'true' : 'false'} />
                <DetailDisplay primary='Default Custom Domain' secondary={website?.customDomain} />
                <DetailDisplay primary='Connected Contract' secondary={website?.settings?.connectedContractAddress} />
            </VStack>
        </Flex>
    ) : (
        <Loading />
    )
}

export default WebsiteDetails