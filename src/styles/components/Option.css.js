import theme from '../base/theme.css.js'
import color from 'color'

const styles = theme => ({
  container: theme.container,
  button: theme.button,
  buttonModLink: theme.buttonModLink,
  largeFont: theme.largeFont,
  mediumFont: theme.mediumFont,

  option: {
    "border-bottom": {
      color: color(theme.lightBlue).lighten(0.1).hex(),
      width: ".3rem",
      style: "solid"
    },
    display: "flex",
    "justify-content": "space-between",
    padding: {
      top: theme.lSize,
      bottom: theme.lSize,
      right: theme.mSize,
      left: theme.mSize
    },
  },

  optionText: {
    color: "white",
    "font-weight": 500,
    "font-size": "2rem",
    margin: 0
  }
})

export default styles;
