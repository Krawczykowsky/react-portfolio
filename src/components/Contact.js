import React from 'react'
import db from './db.json'

const axios = require('axios');

axios.get('http://localhost:5000/messages')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

const Contact = () => {
    return (
        <div>
            
        </div>
    )
}



export default Contact
