import { Box, VStack, Button, Text } from '@chakra-ui/react'
import { Helmet } from 'react-helmet'
import Dashboard from './components/Dashboard'
import { useLogin } from './hooks/useLogin'
import { useCore } from './providers/CoreProvider'

const App = () => {
    const { isLoggedIn } = useCore();
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
                    {!isLoggedIn ? (
                        <VStack>
                            <Text>
                                Ambition.so Support Dashboard
                            </Text>
                            <Button variant='primary' onClick={ConnectWithMetamask}>
                                Connect with Metamask 🚀
                            </Button>
                        </VStack>
                    ) : (
                        <Dashboard />
                    )}
                </VStack>
            </main>
        </Box>
    )
}

export default App;
