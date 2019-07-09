import React, { Component } from 'react';

class WordRelay extends Component {
  state = {
    word: '바나나',
    value: '',
    result: ''
  };
  onSubmit = e => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: '딩동댕',
        word: this.state.value,
        value: '',
      });
      this.input.focus();
    } else {
      this.setState({
        result: '땡',
        value: '',
      });
      this.input.focus();
    }
  }

  onChange = e => {
    this.setState({ value: e.target.value })
  }

  input;

  inputRef = c => this.input = c;

  

  render() {
    const { word, value, result } = this.state;
    return (
      <>
        <div>단어 : {word}</div> 
        <form onSubmit={this.onSubmit}>
          <label htmlFor="wordInput">글자를 입력하세요. </label>
          <input ref={this.inputRef} value={value} type="text" onChange={this.onChange}/>
          <button>입력!</button>
        </form>
        <div>{result}</div>
      </>
    );
  }
}

export default WordRelay;