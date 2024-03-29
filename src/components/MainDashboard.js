import { Flex, HStack, Text, VStack, Image, Link, Button } from '@chakra-ui/react';
import { useCore } from '../providers/CoreProvider'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { CgWebsite } from 'react-icons/cg'
import { MdOutlineDashboard, MdOutlinePersonOutline } from 'react-icons/md'
import { useLocation, Link as RouteLink } from 'react-router-dom'
import Contracts from './Contracts';
import Websites from './Websites';
import Dashboard from './Dashboard';
import Users from './Users';

const menuArr = [
    { title: 'Dashboard', icon: <MdOutlineDashboard fontSize='20pt' />, route: '/' },
    { title: 'Users', icon: <MdOutlinePersonOutline fontSize='20pt' />, route: '/users' },
    { title: 'Contracts', icon: <HiOutlineDocumentText fontSize='20pt' />, route: '/contracts' },
    { title: 'Websites', icon: <CgWebsite fontSize='20pt' />, route: '/websites' }
]

const MainDashboard = () => {
    const location = useLocation();
    const {  } = useCore();

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
                <VStack flex='1' maxW='300px' p='1em' minH='700px' justifyContent='space-between' alignItems='flex-start'>
                    <VStack w='full'>
                        {menuArr?.map((menu, idx) => (
                            <RouteLink to={menu.route} key={idx} style={{ width: '100%' }}>
                                <Button 
                                    bg='transparent' 
                                    leftIcon={menu.icon}
                                    justifyContent='flex-start' 
                                    _hover={{ bg: 'whiteAlpha.100' }}
                                    w='full'
                                    color={location?.pathname === menu.route ? '#348CD4' : 'white'}
                                >
                                    {menu.title}
                                </Button>
                            </RouteLink>
                        ))}
                    </VStack>
                    <Text fontSize='8pt' opacity='0.4'>
                        stephen was here ❤️
                    </Text>
                </VStack>
                <VStack flex='1' alignItems='flex-end'>
                    {location?.pathname === '/' && <Dashboard /> }
                    {location?.pathname === '/users' && <Users /> }
                    {location?.pathname === '/contracts' && <Contracts /> }
                    {location?.pathname === '/websites' && <Websites /> }
                </VStack>
            </HStack>
        </VStack>
    )
}

export default MainDashboard