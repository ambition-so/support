import { useEffect, useState } from 'react'
import { Button,Modal, ModalOverlay, ModalContent, ModalHeader,
    ModalFooter, ModalBody, ModalCloseButton, HStack, VStack, Input
} from '@chakra-ui/react'
import { useCore } from '../providers/CoreProvider'
import { FaSave } from 'react-icons/fa'
import { MdOutlineModeEditOutline } from 'react-icons/md'

const EditModal = () => {
    const { isEditModal, setIsEditModal, editModalData } = useCore();
    const [editInput, setEditInput] = useState();

    useEffect(() => {
        if (!editModalData) return;
        setEditInput(editModalData.default)
    }, [editModalData])

    return (
        <Modal isOpen={isEditModal} onClose={() => setIsEditModal(false)} isCentered>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Edit &#40;{editModalData?.item}&#41;</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <VStack p='1em' px='2em'>
                        <MdOutlineModeEditOutline fontSize='28pt' />
                        <Input value={editInput} onChange={(e) => setEditInput(e.target.value)} />
                    </VStack>
                </ModalBody>
                <ModalFooter>
                    <HStack>
                        <Button size='sm' onClick={() => setIsEditModal(false)}>
                            Cancel
                        </Button>
                        <Button size='sm' onClick={() => {
                            editModalData?.callback();
                            setIsEditModal(false);
                        }} variant='primary' leftIcon={<FaSave />}>
                            Save
                        </Button>
                    </HStack>
                </ModalFooter>
            </ModalContent>
        </Modal>
    )
}

export default EditModal