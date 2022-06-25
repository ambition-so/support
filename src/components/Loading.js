import { useColorModeValue, Flex, Spinner, Text } from '@chakra-ui/react'

const Loading = () => {

    const containerColor = useColorModeValue('white', 'rgb(17,21,28)');

    return (
        <Flex
            flexDir='column'
            bg={containerColor}
            p='2em'
            borderRadius='.25em'
            boxShadow='0 0 2px 0 rgb(0 0 0 / 10%)'
            w='full'
            justifyContent='center'
            alignItems='center'
            mt='2em'
        >
            <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='lg'
            />
            <Text mt='.5em' fontSize='10pt'>
                Waiting for Input
            </Text>
        </Flex>
    )
}

export default Loading