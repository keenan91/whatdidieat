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
import {CircularProgress, CircularProgressLabel, Tag} from '@chakra-ui/react'
import {Divider} from '@chakra-ui/react'
import {Spacer} from '@chakra-ui/react'
import {forwardRef} from '@chakra-ui/react'
import {motion, isValidMotionProp} from 'framer-motion'
import Link from 'next/link'
import Swipe from 'react-easy-swipe'
import {Swiper, SwiperSlide} from 'swiper/react'
import SwiperCore, {Navigation, Pagination} from 'swiper'
import {BrowserView, MobileView, isBrowser, isMobile} from 'react-device-detect'
import {IconButton} from '@chakra-ui/react'
import {SearchIcon, ArrowBackIcon} from '@chakra-ui/icons'
import {Icon} from '@chakra-ui/react'
import {FiHome} from 'react-icons/fi'
import BasicUsage from './utils/BasicUsage'
import NavBar from './utils/NavBar'
import SearchBar from './utils/SearchBar'
import CleanText from './utils/CleanText'

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

export default function Home() {
  const foodOfWeek = 'blueberries'
  const options = {
    // isCaseSensitive: false,
    includeScore: true,
    //shouldSort: false,
    includeMatches: false,
    //findAllMatches: false,
    // minMatchCharLength: 1,
    // location: 0,
    threshold: 0.2,
    // distance: 100,
    // useExtendedSearch: false,
    // ignoreLocation: false,
    // ignoreFieldNorm: false,
    keys: ['name', 'Calories'],
  }
  const fuse = new Fuse(food, options)
  const [first, second, ...rest] = foodOfWeek.split(/[ ,]+/)
  console.log(first)
  console.log(second)
  const searchFuse = fuse.search(first)

  let searchResultsItems = searchFuse.map((value) => {
    return value.item
  })
  const fuse2 = new Fuse(searchResultsItems, options)
  if (second == undefined) {
  } else {
    const searchFuse2 = fuse2.search(second)
    //console.log(second)
    searchResultsItems = searchFuse2.map((value) => {
      return value.item
    })
  }

  const [searchResults, setSearchResults] = useState(() => {
    return fuse.search(pattern)
  })

  const nutritionTouched = useRef()

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

  const createBox = (arrayOfRowData, boxTitle) => {
    const element = arrayOfRowData.map((value, index) => {
      return createRowContents(
        value.Calories,
        value.dailyValue,
        value.title,
        value.information,
      )
    })

    return (
      <motion.div
        whileHover={{}}
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
                <Th fontSize="md" textAlign="center">
                  Per 100
                  <Text display="inline" textTransform="lowercase">
                    g
                  </Text>
                </Th>
                <Th fontSize="md" textAlign="center">
                  Daily Value
                </Th>
              </Tr>
            </Thead>
            <Tbody>{element}</Tbody>
          </Table>
        </Box>
      </motion.div>
    )
  }

  const createRowContents = (nutritionType, dailyValue, title, information) => {
    return (
      <Tr>
        <Td fontSize="md" color="#4299E1">
          {title}
          {information ? (
            <BasicUsage
              title={title}
              sources={information.goodSources}
              fact={information.funFact}
            >
              {information.benefits}
            </BasicUsage>
          ) : null}
        </Td>
        <Td fontSize="md" textAlign="center">
          {' '}
          {Math.round(nutritionType)}{' '}
        </Td>
        <Td textAlign="center">
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
    {
      Calories: Sodium,
      dailyValue: 2300,
      title: 'Sodium',
    },
    {Calories: Carbohydrt, dailyValue: 275, title: 'Carbohydrt'},
    {Calories: Sugar, dailyValue: 2000, title: 'Sugar'},
    {Calories: Protein, dailyValue: 50, title: 'Protein'},
  ]

  let mineralBox = [
    {
      Calories: Calcium,
      dailyValue: 1300,
      title: 'Calcium',
      information: {
        benefits:
          'Builds and protects bones and teeth. Helps with muscle contractions and relaxation, blood clotting, and nerve impulse transmission. Plays a role in hormone secretion and enzyme activation. Helps maintain healthy blood pressure',
        goodSources:
          'Yogurt, cheese, milk, tofu, sardines, salmon, fortified juices, leafy green vegetables, such as broccoli and kale (but not spinach or Swiss chard, which have binders that lessen absorption)',
        funFact:
          'Adults absorb roughly 30% of calcium ingested, but this can vary depending on the source. Diets very high in calcium may increase the risk of prostate cancer.',
      },
    },
    {
      Calories: Copper,
      dailyValue: 0.9,
      title: 'Copper',
      information: {
        benefits:
          'Plays an important role in iron metabolism and immune system. Helps make red blood cells',
        goodSources:
          'Liver, shellfish, nuts, seeds, whole-grain products, beans, prunes, cocoa, black pepper',
        funFact: 'More than half of the copper in foods is absorbed.',
      },
    },
    {
      Calories: Iron,
      dailyValue: 18,
      title: 'Iron',
      information: {
        benefits:
          'Helps hemoglobin in red blood cells and myoglobin in muscle cells ferry oxygen throughout the body. Needed for chemical reactions in the body and for making amino acids, collagen, neurotransmitters, and hormones',
        goodSources:
          'Red meat, poultry, eggs, fruits, green vegetables, fortified bread and grain products',
        funFact:
          "Many women of childbearing age don't get enough iron. Women who do not menstruate probably need the same amount of iron as men. Because iron is harder to absorb from plants, experts suggest vegetarians get twice the recommended amount (assuming the source is food).",
      },
    },
    {
      Calories: Magnesium,
      dailyValue: 420,
      title: 'Magnesium',
      information: {
        benefits:
          'Needed for many chemical reactions in the body Works with calcium in muscle contraction, blood clotting, and regulation of blood pressure. Helps build bones and teeth',
        goodSources:
          'Green vegetables such as spinach and broccoli, legumes, cashews, sunflower seeds and other seeds, halibut, whole-wheat bread, milk',
        funFact:
          'The majority of magnesium in the body is found in bones. If your blood levels are low, your body may tap into these reserves to correct the problem.',
      },
    },
    {
      Calories: Phosphorus,
      dailyValue: 1250,
      title: 'Phosphorus',
      information: {
        benefits:
          'Helps build and protect bones and teeth. Part of DNA and RNA. Helps convert food into energy. Part of phospholipids, which carry lipids in blood and help shuttle nutrients into and out of cells',
        goodSources:
          'Wide variety of foods, including milk and dairy products, meat, fish, poultry, eggs, liver, green peas, broccoli, potatoes, almonds',
        funFact:
          'Certain drugs bind with phosphorus, making it unavailable and causing bone loss, weakness, and pain.',
      },
    },
    {
      Calories: Potassium,
      dailyValue: 4700,
      title: 'Potassium',
      information: {
        benefits:
          'Balances fluids in the body. Helps maintain steady heartbeat and send nerve impulses. Needed for muscle contractions. A diet rich in potassium seems to lower blood pressure. Getting enough potassium from your diet may benefit bones',
        goodSources: 'Meat, milk, fruits, vegetables, grains, legumes',
        funFact:
          'Food sources do not cause toxicity, but high-dose supplements might.',
      },
    },
    {
      Calories: Sodium,
      dailyValue: 2300,
      title: 'Sodium',
      information: {
        benefits:
          'Balances fluids in the body. Helps send nerve impulses. Needed for muscle contractions. Impacts blood pressure; even modest reductions in salt consumption can lower blood pressure',
        goodSources: 'Salt, soy sauce, processed foods, vegetables',
        funFact:
          'While experts recommend that people limit sodium intake to 2,300 mg, most Americans consume 4,000–6,000 mg a day',
      },
    },
    {
      Calories: Selenium,
      dailyValue: 55,
      title: 'Selenium',
      information: {
        benefits:
          'Acts as an antioxidant, neutralizing unstable molecules that can damage cells. Helps regulate thyroid hormone activity',
        goodSources:
          'Organ meats, seafood, walnuts, sometimes plants (depends on soil content), grain products',
        funFact:
          'Researchers are investigating whether selenium may help reduce the risk of developing cancer, but with mixed results.',
      },
    },
    {
      Calories: Zinc,
      dailyValue: 11,
      title: 'Zinc',
      information: {
        benefits:
          'Helps form many enzymes and proteins and create new cells. Frees vitamin A from storage in the liver. Needed for immune system, taste, smell, and wound healing. When taken with certain antioxidants, zinc may delay the progression of age-related macular degeneration',
        goodSources:
          'Red meat, poultry, oysters and some other seafood, fortified cereals, beans, nuts',
        funFact:
          'Because vegetarians absorb less zinc, experts suggest that they get twice the recommended requirement of zinc from plant foods.',
      },
    },
  ]
  let vitaminBox = [
    {
      Calories: VitAIU,
      dailyValue: 5000,
      title: 'Vitamin A',
      information: {
        benefits:
          'Essential for vision Lycopene may lower prostate cancer risk. Keeps tissues and skin healthy. Plays an important role in bone growth and in the immune system. Diets rich in the carotenoids alpha carotene and lycopene seem to lower lung cancer risk. Carotenoids act as antioxidants. Foods rich in the carotenoids lutein and zeaxanthin may protect against cataract',
        goodSources:
          'Sources of retinoids: beef liver, eggs, shrimp, fish, fortified milk, butter, cheddar cheese, Swiss cheese Sources of beta carotene: sweet potatoes, carrots, pumpkins, squash, spinach, mangoes, turnip greens',
        funFact:
          'Many people get too much preformed vitamin A from food and supplements. Large amounts of supplemental vitamin A (but not beta carotene) can be harmful to bones. Normal 0 false false false EN-US X-NONE X-NONE',
      },
    },
    {
      Calories: VitC,
      dailyValue: 90,
      title: 'Vitamin C',
      information: {
        benefits:
          'Foods rich in vitamin C may lower the risk for some cancers, including those of the mouth, esophagus, stomach, and breast. Long-term use of supplemental vitamin C may protect against cataracts. Helps make collagen, a connective tissue that knits together wounds and supports blood vessel walls. Helps make the neurotransmitters serotonin and norepinephrine Acts as an antioxidant, neutralizing unstable molecules that can damage cells. Bolsters the immune system',
        goodSources:
          'Fruits and fruit juices (especially citrus), potatoes, broccoli, bell peppers, spinach, strawberries, tomatoes, Brussels sprouts',
        funFact:
          'Evidence that vitamin C helps reduce colds has not been convincing.',
      },
    },
    {
      Calories: VitDIU,
      dailyValue: 400,
      title: 'Vitamin D',
      information: {
        benefits:
          'Helps maintain normal blood levels of calcium and phosphorus, which strengthen bones. Helps form teeth and bones. Supplements can reduce the number of non-spinal fractures',
        goodSources:
          'Fortified milk or margarine, fortified cereals, fatty fish',
        funFact:
          "Many people don't get enough of this nutrient. While the body uses sunlight to make vitamin D, it cannot make enough if you live in northern climates or don't spend much time in the sun.",
      },
    },
    {
      Calories: VitE,
      dailyValue: 30,
      title: 'Vitamin E',
      information: {
        benefits:
          "Acts as an antioxidant, neutralizing unstable molecules that can damage cells. Protects vitamin A and certain lipids from damage. Diets rich in vitamin E may help prevent Alzheimer's disease.",
        goodSources:
          'Wide variety of foods, including vegetable oils, salad dressings and margarines made with vegetable oils, wheat germ, leafy green vegetables, whole grains, nuts',
        funFact:
          'Vitamin E does not prevent wrinkles or slow other aging processes.',
      },
    },
    {
      Calories: VitK,
      dailyValue: 120,
      title: 'Vitamin K',
      information: {
        benefits:
          'Activates proteins and calcium essential to blood clotting. May help prevent hip fractures.',
        goodSources:
          'Cabbage, liver, eggs, milk, spinach, broccoli, sprouts, kale, collards, and other green vegetables',
        funFact:
          'Intestinal bacteria make a form of vitamin K that accounts for half your requirements. If you take an anticoagulant, keep your vitamin K intake consistent.',
      },
    },
    {
      Calories: Thiamin,
      dailyValue: 1.2,
      title: 'Thiamin',
      information: {
        benefits:
          'Helps convert food into energy. Needed for healthy skin, hair, muscles, and brain and is critical for nerve function.',
        goodSources:
          'Pork chops, brown rice, ham, soymilk, watermelons, acorn squash',
        funFact: 'Most nutritious foods have some thiamin.',
      },
    },
    {
      Calories: Riboflavin,
      dailyValue: 1.3,
      title: 'RiboFlavin',
      information: {
        benefits:
          'Helps convert food into energy. Needed for healthy skin, hair, blood, and brain',
        goodSources:
          'Milk, eggs, yogurt, cheese, meats, green leafy vegetables, whole and enriched grains and cereals.',
        funFact: 'Most Americans get enough of this nutrient.',
      },
    },
    {
      Calories: Niacin,
      dailyValue: 20,
      title: 'Niacin',
      information: {
        benefits:
          'Helps convert food into energy. Essential for healthy skin, blood cells, brain, and nervous system',
        goodSources:
          'Meat, poultry, fish, fortified and whole grains, mushrooms, potatoes, peanut butter',
        funFact:
          'Niacin occurs naturally in food and can also be made by your body from the amino acid tryptophan, with the help of B6.',
      },
    },
    {
      Calories: VitB6,
      dailyValue: 2,
      title: 'Vitamin B6',
      information: {
        benefits:
          'Vital for new cell creationHelps prevent brain and spine birth defects when taken early in pregnancy; should be taken regularly by all women of child-bearing age since women may not know they are pregnant in the first weeks of pregnancy. Can lower levels of homocysteine and may reduce heart disease risk May reduce risk for colon cancer. Offsets breast cancer risk among women who consume alcohol',
        goodSources:
          'Fortified grains and cereals, asparagus, okra, spinach, turnip greens, broccoli, legumes like black-eyed peas and chickpeas, orange juice, tomato juice',
        funFact:
          "Many people don't get enough of this nutrient.Occasionally, folic acid masks a B12 deficiency, which can lead to severe neurological complications. That's not a reason to avoid folic acid; just be sure to get enough B12.",
      },
    },
    {
      Calories: FolicAcid,
      dailyValue: 400,
      title: 'Folate',
      information: {
        benefits:
          'Aids in lowering homocysteine levels and may reduce the risk of heart diseaseHelps convert tryptophan to niacin and serotonin, a neurotransmitter that plays key roles in sleep, appetite, and moods. Helps make red blood cells Influences cognitive abilities and immune function',
        goodSources:
          'Meat, fish, poultry, legumes, tofu and other soy products, potatoes, noncitrus fruits such as bananas and watermelons',
        funFact: "Many people don't get enough of this nutrient.",
      },
    },
    {
      Calories: VitB12,
      dailyValue: 6,
      title: 'Vitamin B12',
      information: {
        benefits:
          'Aids in lowering homocysteine levels and may lower the risk of heart disease. Assists in making new cells and breaking down some fatty acids and amino acids. Protects nerve cells and encourages their normal growth Helps make red blood cells and DNA',
        goodSources: `Meat, poultry, fish, milk, cheese, eggs, fortified cereals, fortified soymilk",
          funFact: "Some people, particularly older adults, are deficient in vitamin B12 because they have trouble absorbing this vitamin from food. Those on a vegan or vegetarian diet often don't get enough B12 as it's mostly found in animal products. They may need to take supplements. A lack of vitamin B12 can cause memory loss, dementia, and numbness in the arms and legs.`,
      },
    },
    {
      Calories: PantoAcid,
      dailyValue: 10,
      title: 'Pantothenic Acid',
      information: {
        benefits:
          'Helps convert food into energy. Helps make lipids (fats), neurotransmitters, steroid hormones, and hemoglobin',
        goodSources:
          'Wide variety of nutritious foods, including chicken, egg yolk, whole grains, broccoli, mushrooms, avocados, tomato products',
        funFact:
          'Deficiency causes burning feet and other neurologic symptoms.',
      },
    },
    {
      Calories: CholineTot,
      dailyValue: 550,
      title: 'Choline',
      information: {
        benefits:
          'Helps make and release the neurotransmitter acetylcholine, which aids in many nerve and brain activities. Plays a role in metabolizing and transporting fats',
        goodSources:
          'Many foods, especially milk, eggs, liver, salmon, and peanuts',
        funFact:
          "No rmally the body makes small amounts of choline. But experts don't know whether this amount is enough at certain ages.",
      },
    },
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
      <NavBar></NavBar>
      <Box>
        <Flex justify="center">
          <SearchBar></SearchBar>
        </Flex>
        <Flex justify="center" alignItems="center" mt="50px" direction="column">
          <Text fontSize="xl" mb="10px">
            Super Food of the Month
          </Text>
          <Text pb="10px">
            <Tag fontSize="2xl" colorScheme="purple">
              {CleanText ? <CleanText text={name}></CleanText> : null}
            </Tag>
          </Text>
        </Flex>

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
