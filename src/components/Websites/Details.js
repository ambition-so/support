import { VStack, Text, useColorModeValue, Flex, Button } from '@chakra-ui/react';
import { useCore } from '../../providers/CoreProvider';
import Loading from '../Loading';
import DetailDisplay from '../DetailDisplay';
import EditModal from '../EditModal';
import { useSetWebsiteTitle, useSetConnectedContract } from '../../hooks/useWebsite'

const WebsiteDetails = () => {
    const { website, setIsEditModal, setEditModalData } = useCore();
    const [setWebsiteTitle, { loading: loading1 }] = useSetWebsiteTitle();
    const [setConnectedContract, { loading: loading2 }] = useSetConnectedContract();

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
            <EditModal />
            <Text fontSize='10pt'>
                Websites
            </Text>
            <Text fontSize='9pt'>
                Details of the Website you searched for
            </Text>
            <VStack alignItems='flex-start' w='full' mt='1.5em'>
                <DetailDisplay primary='Website ID' secondary={website?._id} />
                <DetailDisplay primary='Title' secondary={website?.title}> 
                    <Button size='sm' variant='primary' onClick={() => {
                        setEditModalData({
                            item: 'Website Title',
                            default: website?.title,
                            callback: (newValue) => {
                                if (newValue === website?.title) return;
                                setWebsiteTitle({ variables: { websiteId: website?._id, title: newValue } })
                            }
                        })
                        setIsEditModal(true);
                    }} disabled={loading1} isLoading={loading1} loadingText='Saving'>
                        Change Title
                    </Button>
                </DetailDisplay>
                <DetailDisplay primary='Author' secondary={website?.author} />
                <DetailDisplay primary='isSubscribed' secondary={website?.isSubscribed ? 'true' : 'false'}>
                    {/* <Button size='sm' variant='primary' onClick={() => {
                        setEditModalData({
                            item: 'Website Subscription',
                            default: website?.isSubscribed,
                            callback: (newValue) => {
                                console.log('not implemented yet')
                            }
                        })
                        setIsEditModal(true);
                    }}>
                        Edit
                    </Button> */}
                </DetailDisplay>
                <DetailDisplay primary='isPublished' secondary={website?.isPublished ? 'true' : 'false'} />
                <DetailDisplay primary='isCustomDomainActive' secondary={website?.isCustomDomainActive ? 'true' : 'false'} />
                <DetailDisplay primary='Default Custom Domain' secondary={website?.customDomain} />
                <DetailDisplay primary='Connected Contract' secondary={website?.settings?.connectedContractAddress}>
                    <Button size='sm' variant='primary' onClick={() => {
                        setEditModalData({
                            item: 'Connected Contract',
                            default: website?.title,
                            callback: (newValue) => {
                                if (newValue === website?.settings?.connectedContractAddress) return;
                                setConnectedContract({ variables: { websiteId: website?._id, address: newValue } })
                            }
                        })
                        setIsEditModal(true);
                    }} disabled={loading2} isLoading={loading2} loadingText='Saving'>
                        Edit
                    </Button>
                </DetailDisplay>
            </VStack>
        </Flex>
    ) : (
        <Loading />
    )
}

export default WebsiteDetails