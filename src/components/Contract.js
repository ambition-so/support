import { VStack, Text, useColorModeValue, Flex } from '@chakra-ui/react';

const Contract = () => {

    const containerColor = useColorModeValue('white', 'rgb(17,21,28)');

    return (
        <Flex 
            flexDir='column'
            bg={containerColor}
            p='2em'
            borderRadius='.25em'
            boxShadow='0 0 2px 0 rgb(0 0 0 / 10%)'
            w='full'
            minH='700px'
        >
            <Text>
            Contract
            </Text>
        </Flex>
    )
}

export default Contract