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
    } else if (email==="") {
      setEmailError(true)
      return null
    }else if (message==="") {
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
        <div className="contact-wrapper">
          <div class="contact-txt">
            <h4>Maciej Krawczykowski</h4>
            <h5>krawczykowski.maciej@pm.me</h5>
            <h5>883 090 808</h5>
          </div>
          <div className="contact-form-container-wrapper">
            {showForm && (
              <div className="contact-form-container">
                <input placeholder='imi??/firma' value={name} onChange={e => setName(e.target.value)}/>
                {nameError && <p className="error-message">pole nie mo??e by?? puste</p>}

                <input placeholder="e-mail" value={email} onChange={e => setEmail(e.target.value)}/>
                {emailError && <p className="error-message">pole nie mo??e by?? puste</p>}

                <textarea placeholder="wiadomo????"  value={message} onChange={e => setMessage(e.target.value)}/>
                {messageError && <p className="error-message">pole nie mo??e by?? puste</p>}

                <button  onClick={onClickHandle}>wy??lij</button>
              </div>
            )}
            {showLoading && (
              <h3>Wiadomo???? zosta??a wys??ana</h3>
            )}
          </div>
        </div>
        
          
      </div>
  )
}



export default Contact
