import { Text, Tag, HStack, TagLabel, Box, useToast } from '@chakra-ui/react'
import { MdOutlineContentCopy } from 'react-icons/md'

const DetailDisplay = ({ primary, secondary, disableCopy }) => {
    const toast = useToast();

    const copySecondary = () => {
        navigator.clipboard.writeText(secondary);

        toast({
            title: 'Success',
            description: 'Copied to clipboard',
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'bottom-center'
        })
    }

    return (
        <HStack w='full'>
            <Box maxW='200px' w='full'>
                <Text fontSize='10pt' color='whiteAlpha.500'>
                    {primary}
                </Text>
            </Box>
            <HStack>
                <Tag>
                    <TagLabel>
                        {secondary}
                    </TagLabel>
                </Tag>
                {!disableCopy && (
                    <MdOutlineContentCopy onClick={copySecondary} cursor='pointer' />
                )}
            </HStack>
        </HStack>
    )
}

export default DetailDisplay