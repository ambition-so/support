import { Text, Flex, HStack, Input, IconButton } from '@chakra-ui/react';
import { useGetUser } from '../../hooks/useUser'
import { FaSearch } from 'react-icons/fa'
import { useCore } from '../../providers/CoreProvider';
import Details from './Details';

const Users = () => {
    const { userId, setUserId } = useCore();
    const [getUser, { loading }] = useGetUser();

    return (
        <Flex flexDir='column' w='full'>
            <HStack justifyContent='space-between'>
                <Flex flexDir='column'>
                    <Text fontSize='14pt'>
                        User Dashboard
                    </Text>
                    <Text fontSize='10pt'>
                        View or Update Users
                    </Text>
                </Flex>
                <HStack>
                    <Input placeholder='Search User ID' value={userId} onChange={(e) => setUserId(e.target.value) }/>
                    <IconButton onClick={() => getUser({ variables: { id: userId } })} disabled={loading} isLoading={loading}>
                        <FaSearch />
                    </IconButton>
                </HStack>
            </HStack>
            <Details />
        </Flex>
    )
}

export default Users