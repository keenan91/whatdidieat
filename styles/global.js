import css from 'styled-jsx/css'
export default css.global`
  .body {
    background-color: white;
  }
  .grid-container {
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(1, 1fr);
    padding-top: 40px;
    padding-left: 40px;
    padding-right: 40px;
  }
  .container {
    display: flex;
    justify-content: center;
    padding-top: 40px;
    padding-left: 20px;
    padding-right: 20px;
    width: 50%;
    margin: auto;
  }
  .grid-item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 1px solid #dadce0;
    transition: box-shadow 0.2s linear;
    background-color: #fafafa;
    color: black;
    min-height: 150px;
    border-radius: 10px;
    opacity: 0;
    font-size: 40px;
    text-align: center;
  }
  .grid-item:hover {
    opacity: 0.8 !important;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
  .grid-item-animation-1 {
    animation-name: grid-item-animation-1;
    animation-duration: 0.6s;
    animation-fill-mode: forwards;
  }
  .grid-item-animation-2 {
    animation-name: grid-item-animation-1;
    animation-duration: 0.6s;
    animation-delay: 0.3s;
    animation-fill-mode: forwards;
  }

  .grid-item-animation-3 {
    animation-name: grid-item-animation-1;
    animation-duration: 0.6s;
    animation-delay: 0.2s;
    animation-fill-mode: forwards;
  }
  .grid-item-animation-4 {
    animation-name: grid-item-animation-1;
    animation-duration: 0.6s;
    animation-delay: 0.1s;
    animation-fill-mode: forwards;
  }

  .grid-item-animation-5 {
    animation-name: grid-item-animation-1;
    animation-duration: 0.6s;
    animation-delay: 0.8s;
    animation-fill-mode: forwards;
  }

  .grid-item-animation-6 {
    animation-name: grid-item-animation-1;
    animation-duration: 0.6s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
  }

  .grid-item-animation-7 {
    animation-name: grid-item-animation-1;
    animation-duration: 0.6s;
    animation-delay: 0.6s;
    animation-fill-mode: forwards;
  }

  .grid-item-animation-8 {
    animation-name: grid-item-animation-1;
    animation-duration: 0.6s;
    animation-delay: 0.7s;
    animation-fill-mode: forwards;
  }

  .grid-item-animation-9 {
    animation-name: grid-item-animation-1;
    animation-duration: 0.6s;
    animation-delay: 0.4s;
    animation-fill-mode: forwards;
  }

  .grid-item-animation-10 {
    animation-name: grid-item-animation-1;
    animation-duration: 0.6s;
    animation-delay: 0.9s;
    animation-fill-mode: forwards;
  }
  .grid-item-animation-11 {
    animation-name: grid-item-animation-1;
    animation-duration: 0.6s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
  }

  .grid-item-animation-12 {
    animation-name: grid-item-animation-1;
    animation-duration: 0.6s;
    animation-delay: 1.1s;
    animation-fill-mode: forwards;
  }
  .text-align {
    text-align: center;
    padding-top: 40px;
  }

  @media only screen and (min-width: 500px) {
  }

  @media only screen and (min-width: 700px) {
    .grid-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media only screen and (min-width: 940px) {
    .grid-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media only screen and (min-width: 1250px) {
    .grid-container {
      padding-left: 80px;
      padding-right: 80px;
    }
  }
  @media only screen and (min-width: 1600px) {
    .grid-container {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @keyframes grid-item-animation-1 {
    100% {
      opacity: 1;
    }
  }
`
