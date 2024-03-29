import { VStack, Text, useColorModeValue, Flex, Tag, HStack, TagLabel } from '@chakra-ui/react';

// Most recent one is bottom
const changeLogsArr = [
    { 
        logs: ['view users', 'view contracts', 'view websites', 'edit contract address', 'edit website title'], 
        date: 'June 25, 2022' 
    },
    { 
        logs: ['edit contract subscription', 'get contract by id', 'edit contract owner', 'edit contract address', 
        'edit contract unrevelead uri', 'edit contract base uri', 'get website by id', 'edit website subscription', 'edit website contract', 'edit user email'], 
        date: 'July 08, 2022' 
    },
    { 
        logs: ['contract transform to v2', 'edit contract name', 'list websites in contract dashboard', 'deletion of contract', 'edit contract type'], 
        date: 'June 09, 2022' 
    },
    { 
        logs: ['search user by stripe customer id', 'view contract owner address'], 
        date: 'June 14, 2022' 
    },
    { 
        logs: ['user subscriptions'], 
        date: 'June 15, 2022' 
    },
    { 
        logs: ['refund subscription'], 
        date: 'Aug 02, 2022' 
    },
    { 
        logs: ['edit website author', 'find user by subscription id'], 
        date: 'Aug 03, 2022' 
    },
    { 
        logs: ['added cancel subscription'], 
        date: 'Oct 06, 2022' 
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