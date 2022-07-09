import { Box, VStack, Button, Text } from '@chakra-ui/react'
import { Helmet } from 'react-helmet'
import MainDashboard from './components/MainDashboard'
import { useLogin } from './hooks/useLogin'
import { useAuth } from './providers/AuthProvider'

const App = () => {
    const { isAuthenticated } = useAuth();
    const { ConnectWithMetamask } = useLogin();

    return (
        <Box>
            <Helmet>
                <title>Support Dashboard - Ambition</title>
                <link rel="canonical" href="https://app.ambition.so" />
                <meta
                    name="description"
                    content="Dashboard for ambition.so's moderators"
                />
            </Helmet>
            <main>
                <VStack justifyContent='center' alignItems='center' minHeight='100vh'>
                    {!isAuthenticated ? (
                        <VStack>
                            <Text>
                                Ambition.so Support Dashboard
                            </Text>
                            <Button variant='primary' onClick={ConnectWithMetamask}>
                                Connect with Metamask 🚀
                            </Button>
                        </VStack>
                    ) : (
                        <MainDashboard />
                    )}
                </VStack>
            </main>
        </Box>
    )
}

export default App;
