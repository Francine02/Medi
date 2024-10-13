import { createContext, useState, useContext } from "react";

const MedicineContext = createContext({})

export function MedicineProvider({ children }) {
    const [isEditing, setIsEditing] = useState(false);
    const [showConfig, setShowConfig] = useState(false);
    const [currentMedicine, setCurrentMedicine] = useState(null);

    const openCreate = () => {
        setIsEditing(false)
        setShowConfig(true)
        setCurrentMedicine(null)
    }

    const openEdit = (medicine) => {
        setIsEditing(true)
        setShowConfig(true)
        setCurrentMedicine(medicine)
    }

    const closeConfig = () => {
        setShowConfig(false)
        setCurrentMedicine(null)
    }

    return (
        <MedicineContext.Provider value={{ isEditing, showConfig, currentMedicine, openCreate, openEdit, closeConfig }}>
            {children}
        </MedicineContext.Provider>
    )
}

export function useMedicineContext() {
    return useContext(MedicineContext)
}