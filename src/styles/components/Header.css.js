import theme from '../base/theme.css.js'

const styles = theme => ({
  container: theme.container,

  header: {
    "background": theme.offBlack,
    "margin-bottom": theme.lSize,
    color: "white",
    padding: {
      top: 10,
      bottom: 10,
      left: theme.mSize  
    }
  }, 

  h1: {
    "font-size": theme.lSize,
    margin: 0
  },

  h2: {
    color: theme.offWhite,
    "font-size": theme.mSize,
    "font-weight": 500,
    margin: 0
  }
})


export default styles;
