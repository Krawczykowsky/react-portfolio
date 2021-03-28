import {React, useState} from 'react'
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
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [showForm, setShowForm] = useState("form showForm");
  const [showLoading, setShowLoading] = useState(false);


  const onClickHandle = () =>{
    if (name==="") {
      setNameError(true)
      return null
    }
    if (email==="") {
      setEmailError(true)
      return null
    }
    if (message==="") {
      setMessageError(true)
      return null
    }
    return axios({
      method: 'post',
      url: 'https://fathomless-bayou-92357.herokuapp.com/messages',
      data: {
        name: name,
        email: email,
        message: message
      }
    })
    .then(
      
    )
    .then(
      setShowForm(false),
      setShowLoading(true)
      )
    // .then()
    .catch (err => console.error(err))


  }

  return (
      <div className="container contact-section">
       <div className="info_list margin-portfolio ">
          <div className="info_list_text_subtitle reset-circle-sub">
              <p>
                  contact.
              </p>
          </div>
          <div className="info_list_text_title reset-circle">
              <p>
                  kontakt
              </p>
          </div>
          
            
        </div>
        <div className="contact-form-container-wrapper">
            {showForm && (
              <div className="contact-form-container">
                <input placeholder='imię/firma' value={name} onChange={e => setName(e.target.value)}/>
                {nameError && <p className="error-message">pole nie może być puste</p>}

                <input placeholder="e-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                {emailError && <p className="error-message">pole nie może być puste</p>}

                <textarea placeholder="wiadomość"  value={message} onChange={e => setMessage(e.target.value)}/>
                {messageError && <p className="error-message">pole nie może być puste</p>}

                <button  onClick={onClickHandle}>wyślij</button>
              </div>
            )}
            {showLoading && (
              <h3>Wiadomość została wysłana</h3>
            )}
          </div>
          
      </div>
  )
}



export default Contact
