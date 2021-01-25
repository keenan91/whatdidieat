import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import Fuse from 'fuse.js'
import food from '../.././food.json'
import globalStyles from '../../../styles/global.js'
import {ChakraProvider} from '@chakra-ui/react'
import {Input} from '@chakra-ui/input'
import React, {useState, useEffect} from 'react'
import {Box, Flex, Stack, Grid, Wrap, AspectRatio} from '@chakra-ui/layout'
import {Text} from '@chakra-ui/react'
import {SimpleGrid} from '@chakra-ui/react'
import {Center, Square, Circle} from '@chakra-ui/react'
import {CircularProgress, CircularProgressLabel} from '@chakra-ui/react'
import {Divider} from '@chakra-ui/react'
import {Spacer} from '@chakra-ui/react'
import {forwardRef} from '@chakra-ui/react'
import {motion, isValidMotionProp} from 'framer-motion'
import {Link} from 'next/link'
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from '@chakra-ui/react'

function Home({searchResultsItems}) {
  console.log(searchResultsItems)
  let id = null

  let itemCounter = 0

  const MotionBox = motion.custom(
    forwardRef((props, ref) => {
      const chakraProps = Object.fromEntries(
        // do not pass framer props to DOM element
        Object.entries(props).filter(([key]) => !isValidMotionProp(key)),
      )
      return <CircularProgress ref={ref} {...chakraProps} />
    }),
  )

  // useEffect(() => {
  //   setTimeout(() => {
  //     inputOnChangeHandler('ground beef')
  //     console.log('mission accomplished')
  //   }, 500)
  // }, [])
  let dailyValueColor = '#00A3C4'
  let caloriesCalor = '#6B46C1'

  return (
    <ChakraProvider>
      <Box>
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
        <SimpleGrid columns={[1, 3, 3]} spacing={10} pl="40px" pr="40px">
          <motion.div
            whileHover={{
              scale: 1.09,
              transition: {
                duration: 0.2,
              },
            }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            <Box
              border="1px"
              bg="#fafafa"
              color="black"
              borderColor="#dadce0"
              h="280px"
              borderRadius="10px"
              boxShadow="md"
            >
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>Nutritional Information</Th>
                    <Th>Per 100 Grams</Th>
                    <Th align="center">Daily Value</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>Calories</Td>
                    <Td> {searchResultsItems[0].Calories} </Td>
                    <Td isNumeric>
                      <CircularProgress
                        color="green.400"
                        size="60px"
                        value="50"
                        thickness="12px"
                      >
                        <CircularProgressLabel pl="5px">
                          <Flex justify="space-around">
                            <Text fontSize="md" color={dailyValueColor}>
                              20%
                            </Text>
                          </Flex>
                        </CircularProgressLabel>
                      </CircularProgress>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>Protien</Td>
                    <Td>5g</Td>
                    <Td isNumeric>
                      <CircularProgress
                        color="green.400"
                        size="60px"
                        value="50"
                        thickness="12px"
                      >
                        <CircularProgressLabel pl="5px">
                          <Flex justify="space-around">
                            <Text fontSize="md" color={dailyValueColor}>
                              20%
                            </Text>
                          </Flex>
                        </CircularProgressLabel>
                      </CircularProgress>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                    <Td isNumeric>0.91444</Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th>To convert</Th>
                    <Th>into</Th>
                    <Th isNumeric>multiply by</Th>
                  </Tr>
                </Tfoot>
              </Table>

              <Text align="center" pl="10px" pr="10px" pt="10px">
                hello
              </Text>
            </Box>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.09,
              transition: {
                duration: 0.2,
              },
            }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            <Box
              border="1px"
              bg="#fafafa"
              color="black"
              borderColor="#dadce0"
              h="280px"
              borderRadius="10px"
              boxShadow="md"
            >
              <Text align="center" pl="10px" pr="10px" pt="10px">
                hello
              </Text>

              <Center pt="10px">
                <CircularProgress color="green.400" size="60px" value="50">
                  <CircularProgressLabel pl="5px">
                    <Flex justify="space-around">
                      <Text pl="30px" fontSize="3xl" color={caloriesCalor}>
                        200
                      </Text>
                      <Center height="50px">
                        <Divider orientation="vertical" borderColor="green" />
                      </Center>
                      <Text fontSize="3xl" pr="30px" color={dailyValueColor}>
                        20%
                      </Text>
                    </Flex>
                  </CircularProgressLabel>
                </CircularProgress>
              </Center>
            </Box>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.09,
              transition: {
                duration: 0.2,
              },
            }}
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 0.8,
                opacity: 0,
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.4,
                },
              },
            }}
          >
            <Box
              border="1px"
              bg="#fafafa"
              color="black"
              borderColor="#dadce0"
              h="280px"
              borderRadius="10px"
              boxShadow="md"
            >
              <Text align="center" pl="10px" pr="10px" pt="10px">
                hello
              </Text>

              <Center pt="10px">
                <CircularProgress color="green.400" size="60px" value="50">
                  <CircularProgressLabel pl="5px">
                    <Flex justify="space-around">
                      <Text pl="30px" fontSize="3xl" color={caloriesCalor}>
                        200
                      </Text>
                      <Center height="50px">
                        <Divider orientation="vertical" borderColor="green" />
                      </Center>
                      <Text fontSize="3xl" pr="30px" color={dailyValueColor}>
                        20%
                      </Text>
                    </Flex>
                  </CircularProgressLabel>
                </CircularProgress>
              </Center>
            </Box>
          </motion.div>
        </SimpleGrid>
        <style jsx global>
          {globalStyles}
        </style>
      </Box>
    </ChakraProvider>
  )
}

export async function getServerSideProps({query}) {
  const {id} = query
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
  const searchResults = fuse.search(id)
  const searchResultsItems = searchResults.map((searchResults, index) => {
    return searchResults.item
  })
  return {
    props: {searchResultsItems},
  }
}
export default Home
