import { useState } from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import {TextArea} from './TextArea';
import  { ReactComponent as Icon } from '../images/favorite_icon.svg';
import  { ReactComponent as DelIcon } from '../images/delete_icon.svg';

export const Item = (props) => {
  const item = props.item;
  const [subBody, setSubBody] = useState('');

  const onSubmit = () => {
    const str = {
      subBody:subBody
    }
    props.handleFormStr(str);
  }

  const filterSubItem = props.subItems.filter(sub=> sub.ItemId === props.id) // 親に紐付いたコメントのみをフィルタ

  
  return (
    <Card>
      <h2>{item.title}</h2>
      <p>{item.body}</p>
      <p>投稿日時 : {item.createAt}</p>
      { item.liked ? <PinkIcon onClick={props.onLike}/>
        : <GreyIcon  onClick={props.onLike}/>}
      <DeleteIcon onClick={props.onDelete}>
        削除
      </DeleteIcon>
      <TextArea
        value={subBody}
        onChange={(e) => setSubBody(e.target.value)}>
      </TextArea>
      <Button onClick={() => onSubmit()}>
        コメントを送信
      </Button>
      {filterSubItem.map((str,index) => (
        <p key={index}>{str.subBody}</p>
      ))}
    </Card>
    );
}

const Card = styled.div`
  margin:32px;
  flex-direction:column;
  align-items: flex-start;
  width:320px;
  padding:32px;
  border-radius:4px;
  background:white;
  filter: drop-shadow(4px 4px 4px rgba(0,0,0,0.4));
`

const GreyIcon = styled(Icon)`
  fill:lightgray;
`

const PinkIcon = styled(Icon)`
  fill:lightpink;
`

const DeleteIcon = styled(DelIcon)`
  fill:navy;
`