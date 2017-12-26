import theme from '../base/theme.css.js'
import color from 'color'

const styles = theme => ({
  container: theme.container,
  button: theme.button,
  buttonModLink: theme.buttonModLink,
  largeFont: theme.largeFont,

  h3: {
    "margin-top": "3px",
  },

  widgetHeader: {
    background: theme.blue,
    color: theme.offWhite,
    display: 'flex',
    "justify-content": "space-between",
    padding: theme.sSize
  },

  widgetMessage:{
    color: theme.offWhite,
    margin: 0,
    padding: theme.lSize,
    "text-align": "center"
  }
})

export default styles;
