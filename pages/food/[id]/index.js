import Head from 'next/head'
import styles from '../../../styles/Home.module.css'
import Fuse from 'fuse.js'
import food from '../.././food.json'
import globalStyles from '../../../styles/global.js'
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
import ReactDOM from 'react-dom'
import Swipe from 'react-easy-swipe'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation, Pagination} from 'swiper'
import {BrowserView, MobileView, isBrowser, isMobile} from 'react-device-detect'
import {IconButton} from '@chakra-ui/react'
import {SearchIcon, ArrowBackIcon} from '@chakra-ui/icons'
import {Icon} from '@chakra-ui/react'
import {FiHome} from 'react-icons/fi'

// If i want the back buttom to allow the user to go back to what they typed not what they clicked then I need to pass the input data via a query paramater

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
const pattern = 'pickles'
const pattern2 = 'beef'
SwiperCore.use([Navigation, Pagination])
/* const slides = []
for (let i = 0; i < 5; i += 1) {
  slides.push(
    <SwiperSlide key={`slide-${i}`}>
      {createBox(vitaminBox, null, 'hidden', swipeAnimation.vitamin)}
    </SwiperSlide>,
  )
} */

export default function Home({id}) {
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
  const fuseSearchResults = fuse.search(id)
  const searchResultsItems = fuseSearchResults.map((searchResults, index) => {
    return searchResults.item
  })
  const [searchResults, setSearchResults] = useState(() => {
    return fuse.search(pattern)
  })

  const nutritionTouched = useRef()

  const onSwipeStart = (event) => {
    console.log('Start swiping...', event)
  }

  const onSwipeMove = (position, event) => {
    if (position.x < -165) {
      setSwipeAnimation({
        vitamin: 'swipeEnd',
        mineral: 'swipeStart',
        nutrition: 'offScreen',
      })
    }
    console.log(`Moved ${position.x} pixels horizontally`, event)
    console.log(`Moved ${position.y} pixels vertically`, event)
  }

  const onSwipeEnd = (event) => {
    console.log('End swiping...', event)
  }
  const {
    AlphaCarot,
    BetaCarot,
    BetaCrypt,
    Calcium,
    Calories,
    Carbohydrt,
    Cholestrl,
    CholineTot,
    Copper,
    FAMono,
    FAPoly,
    fatPoly,
    FASat,
    Fiber,
    FolateDFE,
    FolateTot,
    FolicAcid,
    FoodFolate,
    Iron,
    LipidTot,
    Lycopene,
    Magnesium,
    Manganese,
    Niacin,
    PantoAcid,
    Phosphorus,
    Potassium,
    Protein,
    Retinol,
    Riboflavin,
    Selenium,
    Sodium,
    Sugar,
    Thiamin,
    VitAIU,
    VitARAE,
    VitB6,
    VitB12,
    VitC,
    VitD,
    VitDIU,
    VitE,
    VitK,
    Zinc,
    name,
    typed,
  } = searchResultsItems[0]
  console.log(searchResultsItems[0])
  const [swipeAnimation, setSwipeAnimation] = useState({
    vitamin: 'visible',
    mineral: 'offScreen',
    nutrition: 'offScreen',
  })

  const createBox = (arrayOfRowData, boxTitle) => {
    const element = arrayOfRowData.map((value, index) => {
      return createRowContents(value.Calories, value.dailyValue, value.title)
    })

    return (
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
          offScreen: {
            x: 1000,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
          swipeStart: {
            x: 0,
            scale: 1,
            opacity: 1,
            transition: {ease: 'easeOut', duration: 2},
          },
          swipeEnd: {
            x: -2000,
            scale: 1,
            opacity: 1,
            transition: {ease: 'easeOut', duration: 2},
          },
        }}
      >
        <Box
          border="1px"
          bg="#fafafa"
          color="black"
          borderColor="#dadce0"
          borderRadius="10px"
          boxShadow="md"
        >
          <Table size="md">
            <Thead>
              <Tr>
                <Th fontSize="md">{`${boxTitle}`}</Th>
                <Th fontSize="md">Per 100 Grams</Th>
                <Th fontSize="md">Daily Value</Th>
              </Tr>
            </Thead>
            <Tbody>{element}</Tbody>
          </Table>
        </Box>
      </motion.div>
    )
  }

  const createRowContents = (nutritionType, dailyValue, title) => {
    return (
      <Tr>
        <Td fontSize="md" color="#4299E1">
          {title}
        </Td>
        <Td fontSize="md"> {Math.round(nutritionType)} </Td>
        <Td>
          <CircularProgress
            color="green.400"
            size="65px"
            value={Math.round((nutritionType / dailyValue) * 100)}
            thickness="12px"
          >
            <CircularProgressLabel pl="5px">
              <Flex justify="space-around">
                <Text fontSize="xl" color={dailyValueColor}>
                  {Math.round((nutritionType / dailyValue) * 100)}%
                </Text>
              </Flex>
            </CircularProgressLabel>
          </CircularProgress>
        </Td>
      </Tr>
    )
  }

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
  let nutritionBox = [
    {Calories: Calories, dailyValue: 2000, title: 'Calories'},
    {Calories: LipidTot, dailyValue: 78, title: 'Total Fat'},
    {Calories: FASat, dailyValue: 20, title: 'Saturated Fat'},
    {Calories: FAMono, dailyValue: 2000, title: 'Monosaturated Fat'},
    {Calories: FAPoly, dailyValue: 2000, title: 'Polysaturated Fat'},
    {Calories: Sodium, dailyValue: 2300, title: 'Sodium'},
    {Calories: Carbohydrt, dailyValue: 275, title: 'Carbohydrt'},
    {Calories: Sugar, dailyValue: 2000, title: 'Sugar'},
    {Calories: Protein, dailyValue: 50, title: 'Protein'},
  ]

  let mineralBox = [
    {Calories: Calcium, dailyValue: 1300, title: 'Calcium'},
    {Calories: Copper, dailyValue: 0.9, title: 'Copper'},
    {Calories: Iron, dailyValue: 18, title: 'Iron'},
    {Calories: Magnesium, dailyValue: 420, title: 'Magnesium'},
    {Calories: Phosphorus, dailyValue: 1250, title: 'Phosphorus'},
    {Calories: Potassium, dailyValue: 4700, title: 'Potassium'},
    {Calories: Sodium, dailyValue: 2300, title: 'Sodium'},
    {Calories: Selenium, dailyValue: 55, title: 'Selenium'},
    {Calories: Zinc, dailyValue: 11, title: 'Zinc'},
  ]
  let vitaminBox = [
    {Calories: VitAIU, dailyValue: 5000, title: 'Vitamin A'},
    {Calories: VitC, dailyValue: 90, title: 'Vitamin C'},
    {Calories: VitDIU, dailyValue: 400, title: 'Vitamin D'},
    {Calories: VitE, dailyValue: 30, title: 'Vitamin E'},
    {Calories: VitK, dailyValue: 120, title: 'Vitamin K'},
    {Calories: Thiamin, dailyValue: 1.2, title: 'Thiamin'},
    {Calories: Riboflavin, dailyValue: 1.3, title: 'RiboFlavin'},
    {Calories: Niacin, dailyValue: 20, title: 'Niacin'},
    {Calories: VitB6, dailyValue: 2, title: 'Vitamin B6'},
    {Calories: FolicAcid, dailyValue: 400, title: 'Folate'},
    {Calories: VitB12, dailyValue: 6, title: 'Vitamin B12'},
    {Calories: PantoAcid, dailyValue: 10, title: 'Pantothenic Acid'},
    {Calories: CholineTot, dailyValue: 550, title: 'Choline'},
  ]
  let nutritionTitle = [
    'Nutritional Overview',
    'Mineral Overview',
    'Vitamin Overview',
  ]
  const inputValue = useRef()
  const [inputValueState, setInputValueState] = useState('butter')
  let nutritionalFact = 'Nutritional Overview'
  return (
    <ChakraProvider>
      <Link href="/">
        <IconButton
          colorScheme="purple"
          aria-label="Search database"
          onClick={(e) => {}}
          icon={<Icon as={FiHome} />}
        />
      </Link>
      <Box pt="20px">
        <div className="container">
          <Input
            onBlur={() => {
              setInputValueState(inputValue.current.value)
            }}
            ref={inputValue}
            placeholder="Search a Food"
          />{' '}
          <Link
            href="/searchedFood/[id]"
            as={`/searchedFood/${inputValueState}`}
          >
            <IconButton
              colorScheme="blue"
              aria-label="Search database"
              onClick={(e) => {}}
              icon={<SearchIcon />}
            />
          </Link>
        </div>
        <div className="container">
          <Link href="/searchedFood/[id]" as={`/searchedFood/${typed}`}>
            <IconButton
              colorScheme="yellow"
              aria-label="Search database"
              onClick={(e) => {}}
              icon={<ArrowBackIcon />}
            />
          </Link>
          <Text pl="40px" align="center" pb="30px">
            {name}
          </Text>
        </div>

        <Text align="center" pb="30px"></Text>

        <BrowserView>
          <SimpleGrid
            w={['80%']}
            m="auto"
            columns={[1, 1, 2, 2, 3]}
            spacing={10}
          >
            {createBox(vitaminBox, 'Vitamin')}
            {createBox(nutritionBox, 'Nutrition')}
            {createBox(mineralBox, 'Mineral')}
          </SimpleGrid>
        </BrowserView>
        <MobileView>
          <Swiper
            initialSlide="0"
            spaceBetween={50}
            slidesPerView={1}
            onSlideChange={() => {}}
            onSwiper={(swiper) => console.log(swiper)}
            navigation
            pagination={{clickable: true}}
          >
            <SwiperSlide>
              <Text align="center" pb="30px">
                {' '}
                Nutrition Overview
              </Text>
              {createBox(nutritionBox, 'Nutritional')}
            </SwiperSlide>
            <SwiperSlide>
              <Text align="center" pb="30px">
                {' '}
                Vitamin Overview
              </Text>
              {createBox(vitaminBox, 'Vitamin')}
            </SwiperSlide>
            <SwiperSlide>
              <Text align="center" pb="30px">
                {' '}
                Mineral Overview
              </Text>
              {createBox(mineralBox, 'Mineral')}
            </SwiperSlide>
          </Swiper>
        </MobileView>

        <style jsx global>
          {globalStyles}
        </style>
      </Box>
    </ChakraProvider>
  )
}

export async function getServerSideProps({query}) {
  const {id} = query

  return {
    props: {id},
  }
}
