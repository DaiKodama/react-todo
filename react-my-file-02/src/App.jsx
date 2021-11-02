import React, { useState } from 'react';
import { Header } from './components/Header';
import { Form } from './components/Form';
import { Item } from './components/Item';
import styled from 'styled-components';


function App() {
  const [items,setItems] = useState([]);
  const [subItems, setSubItems] = useState([]);

  const pushItem = (item) => {
    const newItems = items.slice();
    newItems.push(item);
    setItems(newItems);
  }

  const likeItem = (index) => {
    const newItems = items.slice();
    const likedItem = items[index];
    likedItem.liked = !likedItem.liked;
    newItems[index] = likedItem;
    setItems(newItems);
    }

  const deleteItem = (index) => {
    const newItems = items.slice();
    newItems.splice(index,1);
    setItems(newItems);
  }

  const submitBtn = (str) => {
    const newSubItems = subItems.slice();
    newSubItems.push(str);
    setSubItems(newSubItems);
  }

  type itemType = {
    id: number,　//　increment（増加）するstateを持ってそちらの数値を適用すると良いです
    comment: string
   }
   
   type subItemType = {
    ItemId: number, //　ItemIdには紐づけるコメントのIDをもつ
    comment: string
   }

  return (
    <Wrap>
    <Header/>
    <Form handleFormValue={(value) => {pushItem(value)}}/>
    <ItemList>
    {items.map((item,index) => (
      <Item 
        key={index}
        id={index}
        item={item}
        onDelete={() => {deleteItem(index)}}
        onLike={() => {likeItem(index)}}
        handleFormStr={(str) => {submitBtn(str)}}
        subItems={subItems}
      />
    ))}
    </ItemList>
  </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const ItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
 
`

