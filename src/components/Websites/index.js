import { Text, Flex, HStack } from '@chakra-ui/react'
import { useGetWebsite, useGetWebsiteById } from '../../hooks/useWebsite'
import { useCore } from '../../providers/CoreProvider'
import Details from './Details'
import Search from '../Search'

const Websites = () => {
    const { websiteInput, setWebsiteInput } = useCore();
    const [getWebsite, { loading }] = useGetWebsite();
    const [getWebsiteById] = useGetWebsiteById();

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
                <Search 
                    placeholder='Search Website' 
                    value={websiteInput} 
                    onChange={(e) => setWebsiteInput(e.target.value)}
                    isLoading={loading}
                    searchArr={[
                        { filter: 'Title', callback: () => getWebsite({ variables: { title: websiteInput } })},
                        { filter: 'ID', callback: () => getWebsiteById({ variables: { websiteId: websiteInput } })}
                    ]}
                />
            </HStack>
            <Details />
        </Flex>
    )
}

export default Websites