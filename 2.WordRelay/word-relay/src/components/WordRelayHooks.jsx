import React, { useState, useRef } from 'react';


const WordRelayHooks = () => {
  const [word, setWord] = useState('바나나');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null)

  const onSubmit = e => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setValue('');
      inputRef.current.focus();
    } else {
      setResult('땡');
      setValue('');
      inputRef.current.focus();
    }
  }

  const onChange = e => {
    setValue(e.target.value)
  }


  return (
    <>
      <div>단어 : {word}</div>
      <form onSubmit={onSubmit}>
        <label htmlFor="wordInput">글자를 입력하세요. </label>
        <input ref={inputRef} type="text" value={value} onChange={onChange}/>
        <button>입력!!</button>
      </form>
      <div>{result}</div>
    </>
  );
}

export default WordRelayHooks;