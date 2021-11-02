import { useState } from 'react';
import styled from 'styled-components';
import {Button} from './Button';
import {TextArea} from './TextArea';

export const Form = (props) => {
  const [title,setTitle] = useState('');
  const [body,setBody] = useState('');

  const handleClick = () => {
    const now = new Date();
    const value = {
      title:title,
      body:body,
      liked:false,
      createAt:now.toLocaleString(),
    }
    props.handleFormValue(value);
  }
  return (
    <FormWrap>
      <TextInput
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /><br/>
      <TextArea
        placeholder="ここに本文"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      /><br/>
      <Button onClick={() => handleClick()}>
        送信
      </Button>
    </FormWrap>
  );
}

const FormWrap = styled.div`
  width:320px;
  margin:32px;
`

const TextInput = styled.input`
  width:100%;
  margin:8px auto;
  line-height:2;
  border:solid 1px #ccc;
  border-radius: 4px;
`;