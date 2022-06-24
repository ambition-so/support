import { VStack, Text, useColorModeValue } from '@chakra-ui/react';
import {  } from '../hooks/useWebsite'

const Website = () => {

    const containerColor = useColorModeValue('white', 'rgb(17,21,28)');

    return (
        <VStack alignItems='flex-start'>
            <Text>
                Website
            </Text>
        </VStack>
    )
}

export default Website