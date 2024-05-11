import React from 'react'
import './Form.css'

export default function Form({formData,show,close,submitEvent,changeEvent}) {
    
  return (
    show &&
    (<div className='modal' 
        onClick={close} 
    >
        <div className='modal-content' 
           onClick={(e)=>e.stopPropagation()}
        >
           <h2>Fill Details</h2>
           <form onSubmit={submitEvent} >
              <div className='inputContainer' >
                <label htmlFor='username' >Username:</label>
                <input 
                    id='username' 
                    type='text'
                    name='username'
                    value={formData.username} 
                    onChange={changeEvent} 
                    required
                />
              </div>
                
              <div className='inputContainer' >
                <label htmlFor='email' >Email:</label>
                <input 
                    id='email'
                    type='email' 
                    name='email'
                    value={formData.email} 
                    onChange={changeEvent} 
                    required
                />

              </div>
                
              <div  className='inputContainer' >
                <label htmlFor='phone' >Phone Number:</label>
                <input 
                    id='phone' 
                    type='text'
                    name='phone'
                    value={formData.phone}
                    onChange={changeEvent}  
                    required
                />
              </div>
              
              <div className='inputContainer' >
                <label htmlFor='password' >Date of Birth:</label>
                <input 
                    id='dob'
                    type='date' 
                    name='dob'
                    value={formData.dob}
                    onChange={changeEvent} 
                    required 
                />
              </div>
                
                <button 
                    className='submit-button' 
                    type='submit' 
                >Submit</button>
           </form>
        </div>
    </div>)
  )
}
