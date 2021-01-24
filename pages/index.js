import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Fuse from 'fuse.js'
import food from './food.json'
import globalStyles from '../styles/global.js'
import {ChakraProvider} from '@chakra-ui/react'
import {Input} from '@chakra-ui/input'
import React, {useState} from 'react'
import {Box, Flex, Stack, Grid, Wrap, AspectRatio} from '@chakra-ui/layout'
import {Text} from '@chakra-ui/react'
import {SimpleGrid} from '@chakra-ui/react'
import {Center, Square, Circle} from '@chakra-ui/react'
import {CircularProgress, CircularProgressLabel} from '@chakra-ui/react'
import {Divider} from '@chakra-ui/react'
import {Spacer} from '@chakra-ui/react'

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
const pattern = 'ground beef'
const pattern2 = 'beef'

export default function Home() {
  const [searchResults, setSearchResults] = useState(() => {
    return fuse.search(pattern)
  })
  const searchResultsItems = searchResults.map((searchResults, index) => {
    return searchResults.item
  })
  const fuse2 = new Fuse(searchResultsItems, options)
  let itemCounter = 0

  const inputOnChangeHandler = (value) => {
    console.log(value.length)
    if (value.length > 2) {
      const pattern = value
      const [first, second, ...rest] = pattern.split(/[ ,]+/)
      const searchFuse = fuse.search(first)
      const searchFuseItems = searchFuse.map((value) => {
        return value.item
      })
      const fuse2 = new Fuse(searchFuseItems, options)
      if (second == undefined) {
        console.log(first)
        setSearchResults(searchFuse)
      } else {
        const searchFuse2 = fuse2.search(second)
        console.log(second)
        setSearchResults(searchFuse2)
      }
    }
  }
  let dailyValueColor = '#00A3C4'
  let caloriesCalor = '#6B46C1'

  return (
    <ChakraProvider>
      <main>
        <div className="container">
          <Input
            onChange={(e) => {
              inputOnChangeHandler(e.target.value)
            }}
            placeholder="Search a Food"
          />
        </div>
        <Text
          align="center"
          pl="10px"
          pr="10px"
          pt="10px"
          fontSize="4xl"
          color={caloriesCalor}
        >
          Calories Per 100 grams
        </Text>
        <Text
          align="center"
          pl="10px"
          pr="10px"
          pt="10px"
          pb="10px"
          fontSize="4xl"
          color={dailyValueColor}
        >
          Daily Values Based on 2000 calories
        </Text>
        <SimpleGrid
          columns={[1, 1, 2, 3, 4, 4]}
          spacing={10}
          pl="40px"
          pr="40px"
        >
          {searchResultsItems.map((value, index) => {
            itemCounter++
            const stringChanged = value.name.replace(/,/g, ' ').toLowerCase()
            const words = stringChanged.split(' ')

            for (let i = 0; i < words.length; i++) {
              if (words[i][0] == undefined) {
              } else {
                words[i] = words[i][0].toUpperCase() + words[i].substr(1) + ' '
              }
            }
            console.log(words)

            if (itemCounter > 10) {
              console.log('itemCounter passed 10')
              return
            }
            return (
              <Box
                border="1px"
                bg="#fafafa"
                color="black"
                borderColor="#dadce0"
                h="280px"
                borderRadius="10px"
                boxShadow="md"
                key={index}
              >
                <Text align="center" pl="10px" pr="10px" pt="10px">
                  {words}
                </Text>

                <Center pt="10px">
                  <CircularProgress
                    value={(value.Calories / 2000) * 100}
                    color="green.400"
                    size="200px"
                  >
                    <CircularProgressLabel pl="5px">
                      <Flex justify="space-around">
                        <Text pl="30px" fontSize="3xl" color={caloriesCalor}>
                          {value.Calories}{' '}
                        </Text>
                        <Center height="50px">
                          <Divider orientation="vertical" borderColor="green" />
                        </Center>
                        <Text fontSize="3xl" pr="30px" color={dailyValueColor}>
                          {Math.round((value.Calories / 2000) * 100)}%
                        </Text>
                      </Flex>
                    </CircularProgressLabel>
                  </CircularProgress>
                </Center>
              </Box>
            )
          })}
        </SimpleGrid>
        <div className="grid-container"></div>
        <style jsx global>
          {globalStyles}
        </style>
      </main>
    </ChakraProvider>
  )
}
