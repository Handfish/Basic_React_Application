import theme from '../base/theme.css.js'
import color from 'color'

const styles = theme => ({
  button: theme.button,
  mediumFont: theme.mediumFont,

  addOption: {
    display: "flex",
    padding: theme.sSize
  },

  addOptionError: {
    color: theme.offWhite,
    "font-style": "italic",
    padding: {
      top: 0,
      bottom: 0,
      right: theme.mSize,
      left: theme.mSize,
    },
    margin: {
      top: theme.mSize,
      bottom: theme.mSize,
      right: 0,
      left: 0,
    },
  },

  addOptionInput: {
    background: theme.darkBlue,
    "border-bottom": {
      color: color(theme.darkBlue).darken(0.1).hex(),
      width: ".3rem",
      style: "solid"
    },
    color: theme.offWhite,
    "flex-grow": 1,
    "font-size": theme.sSize,
    "margin-right": theme.sSize,
    padding: theme.sSize 
  },

})

export default styles;
