import { useState, useContext, createContext } from 'react'

export const CoreContext = createContext({})
export const useCore = () => useContext(CoreContext)

export const CoreProvider = ({ children }) => {
    const [isSaving, setIsSaving] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [address, setAddress] = useState('');
    const [contract, setContract] = useState();
    const [contractAddress, setContractAddress] = useState('');
    const [website, setWebsite] = useState();
    const [websiteTitle, setWebsiteTitle] = useState('');
    const [user, setUser] = useState();
    const [userAddress, setUserAddress] = useState('');

    const controllers = {
        isSaving,
        setIsSaving,
        isLoggedIn,
        setIsLoggedIn,
        address,
        setAddress,
        contract,
        setContract,
        contractAddress,
        setContractAddress,
        website,
        setWebsite,
        websiteTitle,
        setWebsiteTitle,
        user,
        setUser,
        userAddress,
        setUserAddress
    }

    return (
		<CoreContext.Provider
			value={controllers}
		>
			{ children }
		</CoreContext.Provider>
	)
}