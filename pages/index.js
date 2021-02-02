import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Fuse from 'fuse.js'
import food from './food.json'
import globalStyles from '../styles/global.js'
import {ChakraProvider} from '@chakra-ui/react'
import {Input} from '@chakra-ui/input'
import React, {useState, useEffect, useRef} from 'react'
import {Box, Flex, Stack, Grid, Wrap, AspectRatio} from '@chakra-ui/layout'
import {Text} from '@chakra-ui/react'
import {SimpleGrid} from '@chakra-ui/react'
import {Center, Square, Circle} from '@chakra-ui/react'
import {CircularProgress, CircularProgressLabel} from '@chakra-ui/react'
import {Divider} from '@chakra-ui/react'
import {Spacer} from '@chakra-ui/react'
import {forwardRef} from '@chakra-ui/react'
import {motion, isValidMotionProp} from 'framer-motion'
import Link from 'next/link'
import {useRouter} from 'next/router'
import {IconButton} from '@chakra-ui/react'
import NavBar from './utils/NavBar'
import SearchBar from './utils/SearchBar'

import {SearchIcon} from '@chakra-ui/icons'

export default function Home(query) {
  useEffect(() => {
    setTimeout(() => {
      // inputOnChangeHandler('ground beef')
      console.log('mission accomplished')
    }, 500)
  }, [])
  let dailyValueColor = '#00A3C4'
  let caloriesCalor = '#6B46C1'

  return (
    <ChakraProvider>
      <NavBar></NavBar>
      <main>
        <div className="container">
          <SearchBar></SearchBar>
        </div>

        <div className="grid-container"></div>
        <style jsx global>
          {globalStyles}
        </style>
      </main>
    </ChakraProvider>
  )
}
