import { useState, useContext, createContext } from 'react'

export const CoreContext = createContext({})
export const useCore = () => useContext(CoreContext)

export const CoreProvider = ({ children }) => {
    const [isSaving, setIsSaving] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [address, setAddress] = useState('');
    const [contract, setContract] = useState();
    const [contractInput, setContractInput] = useState('');
    const [website, setWebsite] = useState();
    const [websiteInput, setWebsiteInput] = useState('');
    const [user, setUser] = useState();
    const [userInput, setUserInput] = useState('');
    const [isEditModal, setIsEditModal] = useState(false);
    const [editModalData, setEditModalData] = useState();

    const controllers = {
        isSaving,
        setIsSaving,
        isLoggedIn,
        setIsLoggedIn,
        address,
        setAddress,
        contract,
        setContract,
        contractInput,
        setContractInput,
        website,
        setWebsite,
        websiteInput,
        setWebsiteInput,
        user,
        setUser,
        userInput,
        setUserInput,
        isEditModal,
        setIsEditModal,
        editModalData,
        setEditModalData,
    }

    return (
		<CoreContext.Provider
			value={controllers}
		>
			{ children }
		</CoreContext.Provider>
	)
}