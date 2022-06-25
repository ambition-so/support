import { VStack, Text, useColorModeValue, Flex, Tag, HStack, TagLabel, Input, Button } from '@chakra-ui/react';
import {  } from '../../hooks/useWebsite'

const Users = () => {

    const containerColor = useColorModeValue('white', 'rgb(17,21,28)');

    return (
        <VStack alignItems='flex-start'>
            <Text>
            Users
            </Text>
        </VStack>
    )
}

export default Users