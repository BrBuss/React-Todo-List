import React, { useState, useEffect}  from 'react';
import "./style.css"

//services
import db from "../../services/firebase";

import firebase from "firebase"
import { Button } from '@material-ui/core';


function Input() {
    const [inputtext, setInput] = useState('');

    // execute this function after button is clicked
    const addTask = (event) => {
        event.preventDefault(); // prevent REFRESH
        //add to database
        db.collection('tasks').add({
          task: inputtext,
          timestamp: firebase.firestore.FieldValue.serverTimestamp() //server timestamp
        })
        setInput('')//clear input field after submit
      }
  
    return (
        <form className="class-form">
          <label htmlFor="input-block">Create Tasks</label>
            <div className="input-block">
                <input id="task-input" value={inputtext} onChange={event => (setInput(event.target.value))}/>
                <button id="submit" disabled={!inputtext} type="submit" onClick={addTask}>
                Add Task
                </button>
            </div>
      </form>
       
    )
}

export default Input
