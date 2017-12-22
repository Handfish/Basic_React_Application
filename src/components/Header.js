import React from 'react';
import injectSheet from 'react-jss'
import styles from './../styles/components/Header.css.js'

const Header = (props) => (
    <div>
      <h1 className={props.classes.h1}>{props.title}</h1>
      <h2 className={props.classes.h2}>{props.subtitle}</h2>
    </div>
);

Header.defaultProps = {
  title: "Indecision" 
}

export default injectSheet(styles)(Header);
