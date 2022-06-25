import { Text, Flex, HStack } from '@chakra-ui/react'
import { useGetUser } from '../../hooks/useUser'
import { useCore } from '../../providers/CoreProvider'
import Details from './Details'
import Search from '../Search'

const Users = () => {
    const { userInput, setUserInput } = useCore();
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
                <Search 
                    placeholder='Search User' 
                    value={userInput} 
                    onChange={(e) => setUserInput(e.target.value)}
                    isLoading={loading}
                    searchArr={[
                        { filter: 'ID', callback: () => getUser({ variables: { id: userInput } })}
                    ]}
                />
            </HStack>
            <Details />
        </Flex>
    )
}

export default Users