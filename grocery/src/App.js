import React, { useState, useEffect } from 'react'
import List from './List'
import Alert from './Alert'
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  const [alert, setAlert] = useState({show:false, msg:'', type:''})

  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!name) {
      // display alert
    } else if (name && isEditing) {
      // edit 
    } 
    else {
      // alert 
      const newItem = {id: new Date().getTime().toString(),
      title: name}
      setList([...list, newItem])
      setName('')
    }
  }
  return <section className='section-center'>
    <form className='grocery-form' onSubmit={handleSubmit}>
      {alert. show && <Alert />}
      <h3>Grocery Bud</h3>
      <div className='form-control'>
        <input 
        type='text' 
        className='grocery' 
        placeholder='e.g eggs' 
        value={name} 
        onChange={(e) => setName(e.target.value)}>
       </input>
        <button type='submit' className='submit-btn'>
          {isEditing ? 'edit': 'submit'}
        </button>
      </div>
    </form>
    <div className='grocery-container'>
      <List items={list} />
      <button className='clear-btn'>Clear Items</button>
    </div>
  </section>
}

export default App