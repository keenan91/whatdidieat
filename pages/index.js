import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Fuse from 'fuse.js'
import food from './food.json'
import globalStyles from '../styles/global.js'
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
const pattern = 'ground'
const pattern2 = 'beef'
const test = fuse.search(pattern)
const newArray = test.map((test) => {
  return {
    name: test.item.name,
  }
})
const fuse2 = new Fuse(newArray, options)

// Change the pattern

// console.log(fuse2.search(pattern2))
const input = 'blue cheese milk fat'
const [first, second, ...rest] = input.split(/[ ,]+/)
console.log(first)

export default function Home() {
  return (
    <main>
      <div class="container"></div>
      <p className="text-align">Frequently searched foods</p>
      <div className="grid-container">
        <div className="grid-item grid-item-animation-1">
          <a href="./nutrition.html">Grid Item 1</a>
        </div>
        <div className="grid-item grid-item-animation-2">Grid Item 2</div>
        <div className="grid-item grid-item-animation-3">Grid Item 3</div>
        <div className="grid-item grid-item-animation-4">Grid Item 4</div>
        <div className="grid-item grid-item-animation-5">Grid Item 5</div>
        <div className="grid-item grid-item-animation-6">Grid Item 6</div>
        <div className="grid-item grid-item-animation-7">Grid Item 7</div>
        <div className="grid-item grid-item-animation-8">Grid Item 8</div>
        <div className="grid-item grid-item-animation-9">Grid Item 9</div>
        <div className="grid-item grid-item-animation-10">Grid Item 10</div>
        <div className="grid-item grid-item-animation-11">Grid Item 11</div>
        <div className="grid-item grid-item-animation-12">Grid Item 12</div>
      </div>
      <style jsx global>
        {globalStyles}
      </style>
    </main>
  )
}
