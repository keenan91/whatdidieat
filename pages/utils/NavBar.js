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
    <Flex
      bg="#fff"
      justify="space-between"
      borderBottom="1px"
      borderBottomColor="#F5F5F7"
      alignItems="center"
    >
      <Box>
        <Link href="/">
          <Icon ml="5px" bg="#FAF089" as={FaRegLemon} />
        </Link>
      </Box>
      <Text fontSize="3xl" pl="97px" fontWeight="700" color="#2F855A">
        Nutritive
      </Text>

      <Box>
        <Text pt="10px" mr="5px" display="inline-block">
          Account
        </Text>
        <Avatar ml="5px" mr="5px" />
      </Box>
    </Flex>
  )
}

export default NavBar

// bg="rgba(0,0,0,0.8);"
