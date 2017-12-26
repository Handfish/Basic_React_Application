import React from 'react';
import injectSheet from 'react-jss'
import styles from './../styles/components/AddOption.css.js'
import classnames from 'classnames'

@injectSheet(styles)
export default class AddOption extends React.Component {
  state = {
    error: undefined 
  };

  handleAddOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

    this.setState(() => ({ error }));

    if (!error) {
      e.target.elements.option.value = ''; 
    }
  };

  render() {
    const {classes} = this.props;

    return (
      <div>
        {this.state.error && <p className={classes.addOptionError}>{this.state.error}</p>}
        <form className={classes.addOption} onSubmit={this.handleAddOption}>
          <input className={classes.addOptionInput} type="text" name="option"/>
          <button className={classnames(classes.button, classes.mediumFont)}> Add Option</button>
        </form>
      </div>
    );
  }
}
