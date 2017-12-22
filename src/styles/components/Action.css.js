import theme from '../base/theme.css.js'
import color from 'color'

const styles = theme => ({
  container: theme.container,

  bigButton: {
    background: theme.purple,
    border: "none",
    "border-bottom": {
      color: color(theme.purple).darken(0.1).hex(),
      width: ".6rem",
      style: "solid"
    },
    color: "white",
    "font-weight": "bold",
    "font-size": theme.lSize,
    "margin-bottom": theme.xlSize,
    padding: "2.0rem",
    width: "100%",

    '&:disabled': {
      opacity: '.5'
    }
  }
})


export default styles;
