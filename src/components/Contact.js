import {React, useState} from 'react'
import db from './db.json'
const axios = require('axios');

// axios.get('http://localhost:5000/messages')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });



const Contact = () => {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onClickHandle = () =>{
    axios({
      method: 'post',
      url: 'https://fathomless-bayou-92357.herokuapp.com/messages',
      data: {
        name: name,
        email: email,
        message: message
      }
    });
    setName("");
    setEmail("");
    setMessage("");

  }

  return (
      <div className="container form">
          <label>name:</label>
          <input value={name} onChange={e => setName(e.target.value)}/>
          <label>email:</label>
          <input value={email} onChange={e => setEmail(e.target.value)}/>
          <label>message:</label>
          <input value={message} onChange={e => setMessage(e.target.value)}/>
          <button  onClick={onClickHandle}>click</button>
      </div>
  )
}



export default Contact
