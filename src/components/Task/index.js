import React, { useState, useEffect}  from 'react';
import db from '../../services/firebase'
import firebase from "firebase"
import "./style.css"

function Task() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        //this will run every time the database changes
        db.collection('tasks').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
          //"snapshot.docs.map(doc => doc.data()" will return an object from database
          setTasks(snapshot.docs.map(doc => ({id: doc.id, task: doc.data().task})));
        })
      }, [])


    return (
        <div id="task-container">
            
            {tasks.map(taskobject => (<>
            <div className="title-container">
                <p className="title">{taskobject.task}</p>
                <button className="btn delete" onClick={event => db.collection('tasks').doc(taskobject.id).delete()}>Delete</button>
            </div>
            </>))}   
        </div>
    )
}
    
export default Task
