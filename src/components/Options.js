import React from 'react';
import Option from "./Option"
import injectSheet from 'react-jss'
import styles from './../styles/components/Options.css.js'
import classnames from 'classnames'

const Options = (props) => (
  <div>
    <div className={props.classes.widgetHeader}>
      <h3 className={props.classes.h3}>Your Options</h3>
      <button 
        className={classnames(props.classes.button, props.classes.buttonModLink, props.classes.largeFont)}
        onClick={props.handleDeleteOptions}
      >
        Remove All
      </button>
    </div>
    {props.options.length === 0 && <p className={props.classes.widgetMessage}>Please add an option to get started!</p>}
    {
      props.options.map((option, index) => 
        <Option 
          key={option} 
          optionText={option} 
          count={index + 1}
          handleDeleteOption={props.handleDeleteOption}
        />
      )
    }
  </div>
);

export default injectSheet(styles)(Options);
