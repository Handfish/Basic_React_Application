import React from 'react';
import AddOption from './AddOption'; 
import Option from './Option';
import OptionModal from './OptionModal'
import Options from './Options';
import Action from './Action';
import Header from './Header';

//JSS
import injectSheet from 'react-jss'
import styles from './../styles/components/IndecisionApp.css.js'

@injectSheet(styles)
class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  handlePick = () => {
    const randomIndex = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomIndex];

    this.setState(() => ({
      selectedOption: option
    }));
  };

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  };

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({ 
      options: prevState.options.filter((option) => optionToRemove !== option )
    }));
  };

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  };

  handleAddOption = (option) => {
    if(!option){
      return 'Enter valid value to add item';
    }
    else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists.' 
    }

    this.setState((prevState) => ({ 
      options: prevState.options.concat(option)
    }));
  };

  componentDidMount() {
    try {
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);

      if(options)
        this.setState(() => ({ options }))
    } 
    catch (e) {
       
    }
  }

  componentDidUpdate(prevProps, prevState){
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options', json);
    } 
  }

  render() {
    const title = "Indecision"
    const subtitle = "Put your decision in the hands of a react application"

    //JSS
    const {classes} = this.props;

    return (
      <div className={classes.wrapper}>
        <div className={classes.body}>
          <Header title={title} subtitle={subtitle}/>
          <div className={classes.container}>
            <Action 
              hasOptions={this.state.options.length > 0}
              handlePick={this.handlePick}
            />
            <div className={classes.widget}>
              <Options 
                options={this.state.options}

                handleDeleteOptions={this.handleDeleteOptions}
                handleDeleteOption={this.handleDeleteOption}
              />
              <AddOption
                handleAddOption={this.handleAddOption} 
              />
            </div>
            <OptionModal 
              selectedOption={this.state.selectedOption} 
              handleClearSelectedOption={this.handleClearSelectedOption} 
            />
          </div>
        </div>
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: []
}

export default IndecisionApp;
