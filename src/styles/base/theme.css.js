import color from 'color';

const sSize = "1.2rem";
const mSize = "1.6rem";
const lSize = "3.2rem";
const xlSize = "4.8rem";

const offBlack = "#20222b";
const offWhite = "#a5afd7";
const darkBlue = "#333745";
const purple = "#8357c5";

const theme = {
  //Colors
  offBlack: offBlack,
  offWhite: offWhite,
  darkBlue: darkBlue,
  purple: purple,

  //Sizes 
  sSize: sSize,
  mSize: mSize,
  lSize: lSize,
  xlSize: xlSize,

  //Classes - Can be put in another file
  container: {
    "max-width": "60rem",
    margin: [0, "auto"],
    padding: [0, mSize]
  },

  button: {
    background: purple,
    border: "none",
    "border-bottom": {
      color: color(purple).darken(0.1).hex(),
      width: ".3rem",
      style: "solid"
    },
    color: "white",
    "font-weight": 500,
    padding: sSize
  },

  buttonModLink: {
    background: "none",
    border: "none",
    padding: 0,
  },
  
  largeFont: {
    "font-size": mSize
  }
}

export default theme;

