import React from 'react';
import injectSheet from 'react-jss'
import styles from './../styles/components/Header.css.js'
import classnames from 'classnames'

const Header = (props) => (
    <div className={classnames(props.classes.container, props.classes.header)}>
      <h1 className={props.classes.h1}>{props.title}</h1>
      <h2 className={props.classes.h2}>{props.subtitle}</h2>
    </div>
);

Header.defaultProps = {
  title: "Indecision" 
}

export default injectSheet(styles)(Header);
