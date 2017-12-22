import theme from '../base/theme.css.js'

const styles = theme => ({
  container: theme.container,

  '@global html': {
    "font-size": "62.5%",
  },

  '@global body': {
    background: theme.darkBlue,
  },

  '@global button': {
    'cursor': 'pointer',
  },

  '@global button:disabled': {
    'cursor': 'default'
  },

  wrapper: {
    "font-family": "\"Helvetica Neue\", Helvetica, Arial, sans-serif",
    "font-size": theme.mSize,
  }
})

export default styles;
