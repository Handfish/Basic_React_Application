import React from 'react';
import Option from "./Option"
import injectSheet from 'react-jss'
import styles from './../styles/components/Options.css.js'
import classnames from 'classnames'

const Options = (props) => (
  <div>
    <button 
      className={classnames(props.classes.button, props.classes.buttonModLink, props.classes.largeFont)}
      onClick={props.handleDeleteOptions}
    >
      Remove All
    </button>
    {props.options.length === 0 && <p>Please add an option to get started!</p>}
    {
      props.options.map((option) => 
        <Option 
          key={option} 
          optionText={option} 
          handleDeleteOption={props.handleDeleteOption}
        />
      )
    }
  </div>
);

export default injectSheet(styles)(Options);
