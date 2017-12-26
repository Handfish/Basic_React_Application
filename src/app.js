import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'
import injectSheet, {jss, ThemeProvider} from 'react-jss'
import theme from './styles/base/theme.css.js'
import global from 'jss-global'
import jssReset from 'jss-reset'

jss.use(global());
jss.createStyleSheet(jssReset).attach()

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <IndecisionApp/>
  </ThemeProvider>,
document.getElementById('app'));
