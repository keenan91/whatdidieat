import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Fuse from 'fuse.js'
import food from './food.json'
import globalStyles from '../styles/global.js'
import {ChakraProvider} from '@chakra-ui/react'
import {Input} from '@chakra-ui/input'
import React, {useState} from 'react'

const options = {
  // isCaseSensitive: false,
  includeScore: true,
  //shouldSort: false,
  // includeMatches: false,
  //findAllMatches: false,
  // minMatchCharLength: 1,
  // location: 0,
  // threshold: 0.3,
  // distance: 100,
  // useExtendedSearch: false,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  keys: ['name', 'Calories'],
}
const fuse = new Fuse(food, options)
const pattern = 'ground'
const pattern2 = 'beef'

// Change the pattern

// console.log(fuse2.search(pattern2))
const input = 'blue cheese milk fat'
const [first, second, ...rest] = input.split(/[ ,]+/)
console.log(first)

export default function Home() {
  const [searchResults, setSearchResults] = useState(() => {
    return fuse.search(pattern)
  })
  const searchResultsItems = searchResults.map((searchResults) => {
    return searchResults.item
  })
  const fuse2 = new Fuse(searchResultsItems, options)
  let elements = []
  let foodArray = []
  let foodArray2 = Array(100).fill(undefined)
  let itemCounter = 0

  const inputOnChangeHandler = (value) => {
    console.log(value.length)
    if (value.length > 2) {
      const pattern = value
      const searchFuse = fuse.search(pattern)
      setSearchResults(searchFuse)
    }

    /*   foodArray = searchFuse.map((value, index) => {
      if (index < 10) {
        console.log(value.item)
        return value.item
      }
    }) */

    // elements = foodArray.map((value, index) => {
    //   const counter = 1
    //   {
    //     /* <div className={`grid-item grid-item-animation-${counter}`}> */
    //   }
    //   return (
    //     <div className={`grid-item grid-item-animation-${counter}`}>
    //       Grid Item 1
    //     </div>
    //   )
    //   counter++
    // })
  }

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
        <p className="text-align">Frequently searched foods</p>
        <div className="grid-container">
          {searchResultsItems.map((value, index) => {
            itemCounter++
            if (itemCounter > 10) {
              console.log('itemCounter passed 10')
              return
            }
            return (
              <div className={`grid-item grid-item-animation-${1}`}>
                {value.name}
                {value.Calories}
                {value.Protein}
              </div>
            )
          })}
        </div>
        <style jsx global>
          {globalStyles}
        </style>
      </main>
    </ChakraProvider>
  )
}
