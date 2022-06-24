import { Flex, HStack, useColorModeValue, Text, VStack, Image, Link, Button } from '@chakra-ui/react';
import { useCore } from '../providers/CoreProvider'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { CgWebsite } from 'react-icons/cg'
import { MdOutlineDashboard } from 'react-icons/md'
import { useLocation, Link as RouteLink } from 'react-router-dom'
import Contract from './Contract';
import Website from './Website';
import Dashboard from './Dashboard';

const menuArr = [
    { title: 'Dashboard', icon: <MdOutlineDashboard fontSize='20pt' />, route: '/' },
    { title: 'Contract', icon: <HiOutlineDocumentText fontSize='20pt' />, route: '/contract' },
    { title: 'Website', icon: <CgWebsite fontSize='20pt' />, route: '/website' },
]

const MainDashboard = () => {
    const location = useLocation();
    const {  } = useCore();

    const containerColor = useColorModeValue('white', 'rgb(17,21,28)');

    return (
        <VStack maxW='1250px' w='full' spacing='2em' m='4em'>
            <Flex justifyContent='space-between' w='full' alignItems='center'>
                <RouteLink to='/' style={{ textDecoration: 'none' }}>
                    <VStack alignItems='flex-start' spacing='0'>
                        <Text>
                            Support Dashboard
                        </Text>
                        <Text fontSize='8pt'>
                            Dashboard for Discord Moderators 🤹
                        </Text>
                    </VStack>
                </RouteLink>
                <Link href='https://ambition.so/' isExternal>
                    <Image src='/logo.png' alt='Ambition.so Logo' width='120px' opacity='0.7' _hover={{ opacity: '1' }} />
                </Link>
            </Flex>
            <HStack w='full' alignItems='flex-start'>
                <VStack alignItems='flex-start' flex='1' maxW='300px' p='1em'>
                    {menuArr?.map((menu, idx) => (
                        <RouteLink to={menu.route} key={idx} style={{ width: '100%' }}>
                            <Button 
                                bg='transparent' 
                                leftIcon={menu.icon}
                                justifyContent='flex-start' 
                                _hover={{ bg: 'whiteAlpha.100' }}
                                w='full'
                            >
                                {menu.title}
                            </Button>
                        </RouteLink>
                    ))}    
                </VStack>
                <VStack flex='1' alignItems='flex-end'>
                    <Flex 
                        flexDir='column'
                        bg={containerColor}
                        p='2em'
                        borderRadius='.25em'
                        boxShadow='0 0 2px 0 rgb(0 0 0 / 10%)'
                        w='full'
                        minH='700px'
                    >
                        {location?.pathname === '/' && <Dashboard /> }
                        {location?.pathname === '/contract' && <Contract /> }
                        {location?.pathname === '/website' && <Website /> }
                    </Flex>
                    <Text fontSize='8pt'>
                        stephen was here ❤️
                    </Text>
                </VStack>
            </HStack>
        </VStack>
    )
}

export default MainDashboard