import React from 'react';
import injectSheet from 'react-jss'
import styles from './../styles/components/AddOption.css.js'

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
        {this.state.error && <h4>{this.state.error}</h4>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button className={classes.button}>Add Option</button>
        </form>
      </div>
    );
  }
}
