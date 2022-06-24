import { VStack, Text, useColorModeValue, Flex, Tag, HStack, TagLabel, Wrap } from '@chakra-ui/react';

// Most recent one is bottom
const changeLogsArr = [
    { 
        contract: ['view contracts'], 
        website: ['view websites'], 
        date: 'June 24, 2022' 
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
                        <Wrap w='full' spacing='1em' mt='.5em'>
                            <VStack alignItems='flex-start' spacing='0' flex='1'>
                                <Text fontSize='9pt'>
                                    Contracts:
                                </Text>
                                {log.contract.map((feature, idx) => (
                                    <Text fontSize='8pt' key={idx}>
                                        - {feature}
                                    </Text>
                                ))}
                            </VStack>
                            <VStack alignItems='flex-start' spacing='0' flex='1'>
                                <Text fontSize='9pt'>
                                    Websites:
                                </Text>
                                {log.website.map((feature, idx) => (
                                    <Text fontSize='8pt' key={idx}>
                                        - {feature}
                                    </Text>
                                ))}
                            </VStack>
                        </Wrap>
                    </Flex>
                )).reverse()}
            </VStack>
        </Flex>
    )
}

export default Dashboard