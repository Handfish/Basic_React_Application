import React from 'react';
import injectSheet from 'react-jss'
import styles from './../styles/components/Action.css.js'

const Action = (props) => (
  <div>
    <button 
      className={props.classes.bigButton}
      onClick={props.handlePick}
      disabled={!props.hasOptions} 
    >
      What should I do?
    </button>
  </div>
);

export default injectSheet(styles)(Action);
