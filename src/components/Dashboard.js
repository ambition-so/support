import { Flex, HStack, useColorModeValue, Text, VStack, Image, Link } from '@chakra-ui/react';
import { useCore } from '../providers/CoreProvider'

const Dashboard = () => {
    const {  } = useCore();

    const containerColor = useColorModeValue('white', 'rgb(54,64,74)');

    return (
        <VStack maxW='1200px' w='full' spacing='1em' alignItems='flex-end' m='4em'>
            <HStack alignItems='flex-end' spacing='1.5em'>
                <Link href='https://ambition.so/' isExternal>
                    <Text fontSize='9pt'>
                        Visit Ambition
                    </Text>
                </Link>
                <Image src='/logo.png' alt='Ambition.so Logo' width='120px' />
            </HStack>
            <Flex 
                flexDir='column'
                bg={containerColor}
                p='1em'
                borderRadius='.25em'
                boxShadow='0 0 2px 0 rgb(0 0 0 / 10%)'
                w='full'
            >
                <Text fontSize='10pt'>
                    Support Dashboard
                </Text>
                <Text fontSize='9pt'>
                    Dashboard for Discord Moderators 🤹
                </Text>
            </Flex>
        </VStack>
    )
}

export default Dashboard