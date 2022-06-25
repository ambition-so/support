import { Text, Flex, HStack, Input, IconButton } from '@chakra-ui/react';
import { useGetWebsite } from '../../hooks/useWebsite'
import { FaSearch } from 'react-icons/fa'
import { useCore } from '../../providers/CoreProvider';
import Details from './Details';

const Websites = () => {
    const { websiteTitle, setWebsiteTitle } = useCore();
    const [getWebsite, { loading }] = useGetWebsite();

    return (
        <Flex flexDir='column' w='full'>
            <HStack justifyContent='space-between'>
                <Flex flexDir='column'>
                    <Text fontSize='14pt'>
                        Website Dashboard
                    </Text>
                    <Text fontSize='10pt'>
                        View or Update Websites
                    </Text>
                </Flex>
                <HStack>
                    <Input placeholder='Search Website Title' value={websiteTitle} onChange={(e) => setWebsiteTitle(e.target.value) }/>
                    <IconButton onClick={() => getWebsite({ variables: { title: websiteTitle } })} disabled={loading} isLoading={loading}>
                        <FaSearch />
                    </IconButton>
                </HStack>
            </HStack>
            <Details />
        </Flex>
    )
}

export default Websites