import { VStack, Text, useColorModeValue, Flex, Button } from '@chakra-ui/react';
import { useCore } from '../../providers/CoreProvider';
import { useGetLast4Digits, useChangeEmail } from '../../hooks/useUser'
import Loading from '../Loading';
import DetailDisplay from '../DetailDisplay';
import EditModal from '../EditModal';

const UserDetails = () => {
    const { user, setIsEditModal, setEditModalData } = useCore();
    const [getLast4Digits, { loading: loading1 }] = useGetLast4Digits();
    const [changeEmail, { loading: loading2 }] = useChangeEmail();

    const containerColor = useColorModeValue('white', 'rgb(17,21,28)');

    return user ? (
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
                Users
            </Text>
            <Text fontSize='9pt'>
                Details of the User you searched for
            </Text>
            <VStack alignItems='flex-start' w='full' mt='1.5em'>
                <DetailDisplay primary='User ID' secondary={user?.id} />
                <DetailDisplay primary='Name' secondary={user?.name} />
                <DetailDisplay primary='Email' secondary={user?.email}>
                    <Button size='sm' variant='primary' onClick={() => {
                        setEditModalData({
                            item: 'User Email',
                            default: user?.email,
                            callback: (newValue) => {
                                if (newValue === user?.email) return;
                                changeEmail({ variables: { id: user?.id, email: newValue } })
                            }
                        })
                        setIsEditModal(true);
                    }} disabled={loading2} isLoading={loading2}>
                        Edit
                    </Button>
                </DetailDisplay>
                <DetailDisplay primary='Nonce' secondary={user?.nonce} />
                <DetailDisplay primary='Stripe Customer ID' secondary={user?.stripeCustomerId}>
                    <Button size='sm' variant='primary' onClick={() => getLast4Digits({ variables: { customerId: user?.stripeCustomerId }})} disabled={loading1} isLoading={loading1}>
                        Get Last 4 Digits
                    </Button>
                </DetailDisplay>
                <DetailDisplay primary='Address' secondary={user?.address} />
            </VStack>
        </Flex>
    ) : (
        <Loading />
    )
}

export default UserDetails