import { HStack, Input, IconButton, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import { FaSearch } from 'react-icons/fa'

const Search = ({ placeholder, value, onChange, isLoading, searchArr }) => {
    return (
        <HStack>
            <Input placeholder={placeholder} value={value} onChange={onChange}/>
            <Menu>
                <MenuButton as={IconButton} disabled={isLoading} isLoading={isLoading} icon={<FaSearch />} />
                <MenuList>
                    {searchArr?.map((search, idx) => (
                        <MenuItem key={idx} onClick={() => search.callback()}>Search by {search.filter}</MenuItem>
                    ))}
                </MenuList>
            </Menu>
        </HStack>
    )
}

export default Search