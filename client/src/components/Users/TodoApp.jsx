import React, { useState,useEffect } from 'react'
import "./TodoApp.css"
import TodoInput from './TodoInput'
import Todolist from './TodoList';
import { useDispatch, useSelector } from "react-redux";
import Navbar from '../Navbar.jsx'
import { usernavLinks } from '../../constants/index.js';
import store from "../../store";
import { loadUser } from "../../actions/userAction";
import styles from "../../style.js";



function TodoApp() {
    const dispatch = useDispatch();
  const [listTodo,setListTodo]=useState(["To make booking of venue","To buy puja materials"]);


  useEffect(() => {
     store.dispatch(loadUser());
     }, []);

     const {user} = useSelector((state) => state.user);

  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }
  return (
    <>
    <div className="bg-primary w-full overflow-hidden text-white">
    <div className={`${styles.paddingX} ${styles.flexCenter} `}>
      <div className={`${styles.boxWidth}`}>
      <Navbar title="UserDashBoard" navLinks={usernavLinks} buttontitle="Logout"/>
      </div>
      </div>
      </div>
    <div className="main-container">
      <div className="center-container">
        <h1 className="app-heading">TODO</h1>
        <TodoInput addList={addList}/>
        <hr/>
        {listTodo.map((listItem,i)=>{
          return (
            <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default TodoApp