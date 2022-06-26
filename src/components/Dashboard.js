import { VStack, Text, useColorModeValue, Flex, Tag, HStack, TagLabel } from '@chakra-ui/react';

// Most recent one is bottom
const changeLogsArr = [
    { 
        logs: ['view users', 'view contracts', 'view websites', 'edit contract address', 'edit website title'], 
        date: 'June 25, 2022' 
    },
]

const Dashboard = () => {

    const containerColor = useColorModeValue('white', 'rgb(17,21,28)');

    return (
        <Flex flexDir='column' w='full'>
            <Text fontSize='14pt'>
                Hi there! Welcome 👋
            </Text>
            <Text fontSize='10pt'>
                This dashboard was made for discord moderators. You can view or update contracts and websites.
            </Text>
            <Text fontSize='10pt' mt='2em'>
                Recent Changes:
            </Text>
            <VStack spacing='1em' mt='1em' alignItems='flex-start'>
                {changeLogsArr?.map((log, idx) => (
                    <Flex 
                        flexDir='column'
                        bg={containerColor}
                        p='2em'
                        borderRadius='.25em'
                        boxShadow='0 0 2px 0 rgb(0 0 0 / 10%)'
                        w='full'
                        key={idx}
                    >
                        <Flex justifyContent='space-between'>
                            <HStack spacing='1em'>
                                <Text fontSize='10pt'>
                                    Change Log 
                                </Text>
                                <Tag bg='rgb(229,253,237)' color='rgb(22,101,52)'>
                                    <TagLabel fontWeight='bold'>
                                        # {idx + 1}
                                    </TagLabel>
                                </Tag>
                            </HStack>
                            <Text fontSize='8pt'>
                                {log.date}
                            </Text>
                        </Flex>
                        <VStack alignItems='flex-start' spacing='0' flex='1' mt='1em'>
                            {log.logs.map((feature, idx) => (
                                <Text fontSize='8pt' key={idx}>
                                    - {feature}
                                </Text>
                            ))}
                        </VStack>
                    </Flex>
                )).reverse()}
            </VStack>
        </Flex>
    )
}

export default Dashboard