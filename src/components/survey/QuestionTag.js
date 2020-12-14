import React, { Component } from 'react';
import { connect } from 'react-redux';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css'; 


class QuestionTag extends React.Component {  
  state = {
    tags: []
  }

  handleChange = (tags) => {
    this.setState({ tags });
    this.props.change(this.props.question_name , tags)
  }

  componentDidMount(props){
    console.log(props);
    // this.setState({ tags: this.props.input.value })
  }


  render() {
    const {
      input: { value, onChange  }
    } = this.props
    return (
      <div>
        <TagsInput value= { value.length > 0 ? value : this.state.tags} onChange={this.handleChange} />
      </div>
    )
  }
}
export default QuestionTag;
