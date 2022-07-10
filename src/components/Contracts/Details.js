import { VStack, Text, useColorModeValue, Flex, Button } from '@chakra-ui/react';
import { useCore } from '../../providers/CoreProvider';
import Loading from '../Loading';
import DetailDisplay from '../DetailDisplay';
import EditModal from '../EditModal';
import { 
    useUpdateContractAddress, 
    useSetOwnerId, 
    useSetContractSubscription, 
    useSetBaseUri, 
    useSetUnRevealedBaseUri
} from '../../hooks/useContract'
import {
    useGetWebsitesByContractAddress
} from '../../hooks/useWebsite'

const ContractDetails = () => {
    const { contract, setIsEditModal, setEditModalData } = useCore();
    const [updateContractAddress, { loading: loading1 }] = useUpdateContractAddress();
    const [setOwnerId, { loading: loading2 }] = useSetOwnerId();
    const [setContractSubscription, { loading: loading3 }] = useSetContractSubscription();
    const [setBaseUri, { loading: loading4 }] = useSetBaseUri();
    const [setUnRevealedBaseUri, { loading: loading5 }] = useSetUnRevealedBaseUri();
    useGetWebsitesByContractAddress();

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
            <EditModal />
            <Text fontSize='10pt'>
                Details
            </Text>
            <Text fontSize='9pt'>
                Details of the ERC721A Contract you searched for
            </Text>
            <VStack alignItems='flex-start' w='full' mt='1.5em'>
                <DetailDisplay primary='Contract ID' secondary={contract?.id} />
                <DetailDisplay primary='Name' secondary={contract?.name} />
                <DetailDisplay primary='isSubscribed' secondary={contract?.isSubscribed ? 'true' : 'false'}>
                    <Button size='sm' variant='primary' onClick={() => {
                        setEditModalData({
                            item: 'Contract Subscription',
                            default: contract?.isSubscribed,
                            callback: (newValue) => {
                                if (newValue === contract?.address) return;
                                setContractSubscription({ variables: { id: contract?.id, isSubscribed: newValue === 'true' ? true : false }})
                            }
                        })
                        setIsEditModal(true);
                    }} disabled={loading3} isLoading={loading3} loadingText='Saving'>
                        Edit
                    </Button>
                </DetailDisplay>
                <DetailDisplay primary='Symbol' secondary={contract?.symbol} />
                <DetailDisplay primary='Type' secondary={contract?.type} />
                <DetailDisplay primary='Contract Address' secondary={contract?.address}>
                    <Button size='sm' variant='primary' onClick={() => {
                        setEditModalData({
                            item: 'Contract Address',
                            default: contract?.address,
                            callback: (newValue) => {
                                if (newValue === contract?.address) return;
                                updateContractAddress({ variables: { id: contract?.id, address: newValue } })
                            }
                        })
                        setIsEditModal(true);
                    }} disabled={loading1} isLoading={loading1} loadingText='Saving'>
                        Edit
                    </Button>
                </DetailDisplay>
                <DetailDisplay primary="Owner's User ID" secondary={contract?.author}>
                    <Button size='sm' variant='primary' onClick={() => {
                        setEditModalData({
                            item: 'Contract Owner ID',
                            default: contract?.author,
                            callback: (newValue) => {
                                if (newValue === contract?.author) return;
                                setOwnerId({ variables: { id: contract?.id, newId: newValue } })
                            }
                        }) 
                        setIsEditModal(true);
                    }} disabled={loading2} isLoading={loading2} loadingText='Saving'>
                        Edit
                    </Button>
                </DetailDisplay>
                <DetailDisplay primary='Blockchain' secondary={contract?.blockchain} />
            </VStack>
            <VStack mt='2em' alignItems='flex-start'>
                <Text fontSize='10pt'>
                    Connected Website(s)
                </Text>
                
            </VStack>
            <VStack mt='2em' alignItems='flex-start'>
                <Text fontSize='10pt'>
                    Collection Information
                </Text>
                <DetailDisplay primary='Price' secondary={contract?.nftCollection?.price} />
                <DetailDisplay primary='Currency' secondary={contract?.nftCollection?.currency} />
                <DetailDisplay primary='Size' secondary={contract?.nftCollection?.size} />
                <DetailDisplay primary='Unrevelead URI' secondary={contract?.nftCollection?.unRevealedBaseUri}>
                    <Button size='sm' variant='primary' onClick={() => {
                        setEditModalData({
                            item: 'Contract Owner ID',
                            default: contract?.nftCollection?.unRevealedBaseUri,
                            callback: (newValue) => {
                                if (newValue === contract?.author) return;
                                setUnRevealedBaseUri({ variables: { id: contract?.id, unRevealedBaseUri: newValue } })
                            }
                        }) 
                        setIsEditModal(true);
                    }} disabled={loading4} isLoading={loading4} loadingText='Saving'>
                        Edit
                    </Button>
                </DetailDisplay>
                <DetailDisplay primary='Base URI' secondary={contract?.nftCollection?.baseUri}>
                    <Button size='sm' variant='primary' onClick={() => {
                        setEditModalData({
                            item: 'Contract Owner ID',
                            default: contract?.nftCollection?.baseUri,
                            callback: (newValue) => {
                                if (newValue === contract?.author) return;
                                setBaseUri({ variables: { id: contract?.id, baseUri: newValue } })
                            }
                        }) 
                        setIsEditModal(true);
                    }} disabled={loading5} isLoading={loading5} loadingText='Saving'>
                        Edit
                    </Button>
                </DetailDisplay>
            </VStack>
        </Flex>
    ) : (
        <Loading />
    )
}

export default ContractDetails