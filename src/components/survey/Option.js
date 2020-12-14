import React, { Component } from 'react';

class Option extends React.Component {  
  constructor(props){
    super(props);
    this.state = {
      answer: "",
      options: this.props.input.value
    };
  }

  handleChange = (e) => {
    const answer = e.target.value;
    this.setState({ answer: answer });
    this.props.change(this.props.options_name , answer);
  }

  render() {
    const { input: { value, onChange  } } = this.props
    return (
      <>
      {
        this.state.options.map((option,index) => {
          return (
              <label key={index} > 
              {option}
              <input
                  value={option}
                  type="radio"
                  onChange={this.handleChange}
                  checked={this.state.answer === option}
              />
              </label>
        )})
      }
      </>
    )
  }
}
export default Option;
