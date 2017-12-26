import React from 'react';
import injectSheet from 'react-jss'
import styles from './../styles/components/Option.css.js'
import classnames from 'classnames'

const Option = (props) => (
    <div className={props.classes.option}>
      <p className={props.classes.optionText}>{props.count}. {props.optionText}</p>
      <button 
        className={classnames(props.classes.button, props.classes.buttonModLink, props.classes.mediumFont)}
        onClick={(e) => {
          props.handleDeleteOption(props.optionText) 
        }}
      >
        Remove
      </button>
    </div>
)

export default injectSheet(styles)(Option);
