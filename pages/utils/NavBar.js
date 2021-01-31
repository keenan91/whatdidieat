import {
  Flex,
  Spacer,
  Box,
  Heading,
  Button,
  Icon,
  Text,
  Link,
  Avatar,
  AvatarBadge,
} from '@chakra-ui/react'
import {FaRegLemon} from 'react-icons/fa'

const NavBar = () => {
  return (
    <Flex bg="#fff">
      <Box p="2">
        <Link href="/">
          <Icon ml="5px" bg="#FAF089" as={FaRegLemon} />
        </Link>
      </Box>
      <Spacer />
      <Box bg="yellow">
        <Text mt="10px" mr="5px" display="inline-block">
          Account
        </Text>
        <Avatar ml="5px" mr="5px" />
      </Box>
    </Flex>
  )
}

export default NavBar

// bg="rgba(0,0,0,0.8);"
