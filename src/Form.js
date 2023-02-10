import React, { useEffect, useState } from 'react'

function Form() {
    const data={name:"", email:"", number:"", age:"", password:"", password1:""}; 
    const [inputData, setInputData]=useState(data)
    const[flag, setFlag]=useState(false)
    useEffect(()=>{
        console.log("Register Successfully")
    },[flag])
    function handleData(e)
    {
        setInputData({...inputData,[e.target.name]:e.target.value})
        console.log(inputData)
    }
    function handleSubmit(e)
    {
        e.preventDefault();
        if(!inputData.name || !inputData.number || !inputData.age || !inputData.password || !inputData.password1)
        {
            alert("All fields are Mandatory")
        }
        else
        {
            setFlag(true)
        }
    }
  return (
    <>
    <pre>{(flag)? <h2 className='ui-define'>Hello{inputData.name}, You've Registered Successfully</h2>:""}</pre>
    <form className='container' onSubmit={handleSubmit}>
        <div className='header'>
            <h1>Registration Form</h1>
        </div>
        <div>
            <input type='text' placeholder='Enter Your Name' name='name' value={inputData.name} onChange={handleData}></input>
        </div>
        <div>
            <input type='text' placeholder='Enter Your Email' name='email' value={inputData.email} onChange={handleData}></input>
        </div>
        <div>
            <input type='text' placeholder='Enter Your Phone Number' name='number' value={inputData.number} onChange={handleData}></input>
        </div>
        <div>
            <input type='number' placeholder='Enter Your Age' name='age' value={inputData.age} onChange={handleData}></input>
        </div>
        <div>
            <input type='text' placeholder='Enter Your Password' name='password' value={inputData.password} onChange={handleData} autoComplete></input>
        </div>
        <div>
            <input type='text' placeholder='Confirm Password' name='password1' value={inputData.password1} onChange={handleData}></input>
        </div>
        <div>
        <button type='submit'>Submit</button>
        </div>
    </form>
    </>
  )
}

export default Form;