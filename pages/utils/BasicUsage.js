import {React} from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Lorem,
  Box,
  icon,
} from '@chakra-ui/react'

import {InfoIcon} from '@chakra-ui/icons'

const BasicUsage = ({children, title, sources, fact}) => {
  const {isOpen, onOpen, onClose} = useDisclosure()
  return (
    <>
      <InfoIcon ml="5px" mb="20px" onClick={onOpen} />
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{children}</ModalBody>
          <ModalBody>{sources}</ModalBody>
          <ModalBody>{fact}</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default BasicUsage
