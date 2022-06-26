import { VStack, Text, useColorModeValue, Flex, Button } from '@chakra-ui/react';
import { useCore } from '../../providers/CoreProvider';
import Loading from '../Loading';
import DetailDisplay from '../DetailDisplay';
import EditModal from '../EditModal';
import { useUpdateContractAddress } from '../../hooks/useContract'

const ContractDetails = () => {
    const { contract, setIsEditModal, setEditModalData } = useCore();
    const [updateContractAddress, { loading }] = useUpdateContractAddress();

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
                    }} disabled={loading} isLoading={loading} loadingText='Saving'>
                        Edit
                    </Button>
                </DetailDisplay>
                <DetailDisplay primary="Owner's User ID" secondary={contract?.author} />
                <DetailDisplay primary='Blockchain' secondary={contract?.blockchain} />
            </VStack>
        </Flex>
    ) : (
        <Loading />
    )
}

export default ContractDetails