import { Text, Flex, HStack } from '@chakra-ui/react'
import { useGetUser, useGetUserByCustomerID } from '../../hooks/useUser'
import { useCore } from '../../providers/CoreProvider'
import Details from './Details'
import Search from '../Search'

const Users = () => {
    const { userInput, setUserInput } = useCore();
    const [getUser, { loading }] = useGetUser();
    const [getUserByCustomerID, { loading: loading2 }] = useGetUserByCustomerID();

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
                    isLoading={loading || loading2}
                    searchArr={[
                        { filter: 'ID', callback: () => getUser({ variables: { id: userInput } })},
                        { filter: 'Customer ID', callback: () => getUserByCustomerID({ variables: { customerId: userInput } })}
                    ]}
                />
            </HStack>
            <Details />
        </Flex>
    )
}

export default Users