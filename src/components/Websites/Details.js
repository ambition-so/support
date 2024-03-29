import { VStack, Text, useColorModeValue, Flex, Button } from '@chakra-ui/react';
import { useCore } from '../../providers/CoreProvider';
import Loading from '../Loading';
import DetailDisplay from '../DetailDisplay';
import EditModal from '../EditModal';
import { 
    useSetWebsiteTitle, 
    useSetContractAddress, 
    useSetSubscription,
    useSetWebsiteAuthor
} from '../../hooks/useWebsite'
import { useGetUser } from '../../hooks/useUser'

const WebsiteDetails = () => {
    const { website, setIsEditModal, setEditModalData } = useCore();
    const [setWebsiteTitle, { loading: loading1 }] = useSetWebsiteTitle();
    const [setContractAddress, { loading: loading2 }] = useSetContractAddress();
    const [setSubscription, { loading: loading3 }] = useSetSubscription();
    const [setWebsiteAuthor, { loading: loading4 }] = useSetWebsiteAuthor();
    const [getUser, { loading: loading6 }] = useGetUser();

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
                <DetailDisplay primary='Author' secondary={website?.author}>
                    <Button size='sm' variant='primary' onClick={() => {
                        setEditModalData({
                            item: 'Website Author',
                            default: website?.author,
                            callback: (newValue) => {
                                if (newValue === website?.author) return;
                                setWebsiteAuthor({ variables: { websiteId: website?._id, authorId: newValue }})
                            }
                        })
                        setIsEditModal(true);
                    }} disabled={loading4} isLoading={loading4} loadingText='Saving'>
                        Edit
                    </Button>
                    <Button size='sm' variant='secondary' onClick={() => getUser({ variables: { id: website?.author } })} disabled={loading6} isLoading={loading6} loadingText='Saving'>
                        Configure
                    </Button>
                </DetailDisplay>
                <DetailDisplay primary='isSubscribed' secondary={website?.isSubscribed ? 'true' : 'false'}>
                    <Button size='sm' variant='primary' onClick={() => {
                        setEditModalData({
                            item: 'Website Subscription',
                            default: website?.isSubscribed,
                            callback: (newValue) => {
                                if (newValue === website?.isSubscribed) return;
                                setSubscription({ variables: { websiteId: website?._id, isSubscribed: newValue === 'true' ? true : false }})
                            }
                        })
                        setIsEditModal(true);
                    }} disabled={loading3} isLoading={loading3} loadingText='Saving'>
                        Edit
                    </Button>
                </DetailDisplay>
                <DetailDisplay primary='isPublished' secondary={website?.isPublished ? 'true' : 'false'} />
                <DetailDisplay primary='isCustomDomainActive' secondary={website?.isCustomDomainActive ? 'true' : 'false'} />
                <DetailDisplay primary='Default Custom Domain' secondary={website?.customDomain} />
                <DetailDisplay primary='Connected Contract' secondary={website?.settings?.connectedContractAddress}>
                    <Button size='sm' variant='primary' onClick={() => {
                        setEditModalData({
                            item: 'Connected Contract',
                            default: website?.settings?.connectedContractAddress,
                            callback: (newValue) => {
                                if (newValue === website?.settings?.connectedContractAddress) return;
                                setContractAddress({ variables: { websiteId: website?._id, address: newValue } })
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