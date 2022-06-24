import { useState, useContext, createContext } from 'react'

export const CoreContext = createContext({})
export const useCore = () => useContext(CoreContext)

export const CoreProvider = ({ children }) => {
    const [isSaving, setIsSaving] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [address, setAddress] = useState('');

    const controllers = {
        isSaving,
        setIsSaving,
        isLoggedIn,
        setIsLoggedIn,
        address,
        setAddress
    }

    return (
		<CoreContext.Provider
			value={controllers}
		>
			{ children }
		</CoreContext.Provider>
	)
}