import React, { Component } from 'react';
import TagsInput from 'react-tagsinput';
import 'react-tagsinput/react-tagsinput.css'; 


class QuestionTag extends Component {  
  state = {
    tags: []
  }

  handleChange = (tags) => {
    this.setState({ tags });
    this.props.change(this.props.question_name , tags)
  }


  render() {
    const {
      input: { value  }
    } = this.props
    return (
      <div>
        <TagsInput value= { value.length > 0 ? value : this.state.tags} onChange={this.handleChange} />
      </div>
    )
  }
}
export default QuestionTag;
