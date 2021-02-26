import React, {useState, useEffect, useRef} from 'react'
import {
  Input,
  IconButton,
  Link,
  Icon,
  Box,
  InputGroup,
  InputRightElement,
  Stack,
} from '@chakra-ui/react'
import {SearchIcon} from '@chakra-ui/icons'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  Container,
} from '@chakra-ui/react'

import Fuse from 'fuse.js'
import food from '.././food.json'

const options = {
  // isCaseSensitive: false,
  includeScore: true,
  //shouldSort: false,
  // includeMatches: false,
  //findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  threshold: 0.4,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  keys: ['name', 'Calories'],
}
const fuse = new Fuse(food, options)

const SearchBar = () => {
  const inputValue = useRef()
  const [inputValueState, setInputValueState] = useState()

  const [searchResults, setSearchResults] = useState()
  let itemCounter = 0
  const searchResultsItems = searchResults?.map((searchResults, index) => {
    return searchResults.item
  })

  const inputOnChangeHandler = (value) => {
    if (value.length > 0) {
      const pattern = value
      const [first, second, ...rest] = pattern.split(/[ ,]+/)
      const searchFuse = fuse.search(first).slice(0, 100)

      const searchFuseItems = searchFuse.map((value) => {
        return value.item
      })
      const fuse2 = new Fuse(searchFuseItems, options)
      if (second == undefined) {
        //console.log(first)
        setSearchResults(searchFuse)
      } else {
        const searchFuse2 = fuse2.search(second)
        //console.log(second)
        setSearchResults(searchFuse2)
      }
    }
    console.log('hello from the clicker')
  }

  return (
    <Box position="absolute" zIndex="5" borderRadius="10px" bg="#fff">
      <Table size="md" variant="simple">
        <Thead>
          <Tr>
            <Stack spacing={4}>
              <InputGroup>
                <Input
                  minW={['300px', '300px', '400px', '500px']}
                  onChange={(e) => {
                    inputOnChangeHandler(e.target.value)
                  }}
                  onBlur={() => {
                    setInputValueState(inputValue.current.value)
                  }}
                  ref={inputValue}
                  placeholder="Search a Food"
                  variant="flushed"
                />
                <InputRightElement children={<SearchIcon />} />
              </InputGroup>
            </Stack>
          </Tr>
        </Thead>
        <Tbody border=".5px" borderTop="0px" borderRadius="10px" boxShadow="md">
          <Tr>
            {searchResultsItems?.map((value, index) => {
              console.log(value)
              itemCounter++
              const stringChanged = value.name
                .replace(/,/g, ' ')
                .replace(/\//g, '')
                .replace(/%/g, '')
                .toLowerCase()
              const words = stringChanged.split(' ')

              for (let i = 0; i < words.length; i++) {
                if (words[i][0] == undefined) {
                } else {
                  words[i] =
                    words[i][0].toUpperCase() + words[i].substr(1) + ' '
                }
              }
              //console.log(words)

              if (itemCounter > 12) {
                // console.log('itemCounter passed 10')
                return
              }
              return (
                <Tr>
                  <Td>
                    <Link href={`/food/${words}`}>{words}</Link>
                  </Td>
                </Tr>
              )
            })}
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}

export default SearchBar
