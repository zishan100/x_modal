import React, { useState, useEffect } from 'react';
import './index.css'
import Form from './Form/Form';


function App (){
  
  let [ formData , setFormData] = useState({
    username:'',
    email:'',
    phone:'',
    dob:'',
  })

  let [ openForm , setOpenForm ] = useState(false);
  
  
  const handleChangeEvent = (e)=>{
    // console.log(e.target,"OnChange event !!!");
    const { name , value } = e.target;
    // console.log(name," ",value)
    
    setFormData({
      ...formData,
      [name]:value
    })
    // console.log(formData);
  }
  
  const handleOnSubmit =(e)=>{
    e.preventDefault();
    // console.log(e.target," Clicked");
    console.log(formData);
    
    let result = validator();

    if( !result ){
      console.log("Validation passed");
      setOpenForm(false);
      setFormData({
        username:'',
        email:'',
        phone:'',
        dob:'',
      })
    }else{
      alert(result)
    }

    

  }
  
  const validator = ()=>{
    
    let regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 

    let errorMsg ='';
    let currTime = new Date().getTime();
    // console.log(regexExp.test(formData.email));

    if( !formData.username && !formData.username.trim() ){
      errorMsg = 'Invalid Username. Please check your Username'  
    }else if( !regexExp.test(formData.email) ){
      errorMsg = 'Invalid email. Please check your email address.'          
    }else if( !formData.phone || formData.phone.length < 10 ){
      errorMsg='Invalid phone number. Please enter a 10-digit phone number.'
    }else if( !formData.dob || Number(new Date(formData.dob)) > Number(currTime) ){
      errorMsg='Invalid date of birth. Date of birth cannot be in future.'  
    }
    
    return errorMsg

  }


  const closeModal =(e)=>{
    setOpenForm(false);
  }

  return (
    <div className="container">
       <h2>User Details Modal</h2>
       <button 
          className='submit-button' 
          type='button'
          onClick={()=>setOpenForm(!openForm)}
        >Open Form</button>

       {
        ( <Form 
            formData={formData} 
            show={openForm} 
            close={closeModal} 
            submitEvent={handleOnSubmit}
            changeEvent={handleChangeEvent} 
          />)  
       }
        
    </div>
  );
  
}

export default App;
