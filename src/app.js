import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'
import injectSheet, {ThemeProvider} from 'react-jss'
import theme from './styles/base/theme.css.js'

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <IndecisionApp/>
  </ThemeProvider>,
document.getElementById('app'));
