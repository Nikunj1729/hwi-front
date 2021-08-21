import React from 'react';
import './form.css';

const Form =({handlesubmit,handlechange,name,email,password})=>{
    return(
        <div className="form">
            <div className="form-header">
                <h2>SIGNIN</h2>
            </div>
            <form onSubmit={handlesubmit}>
                <input id="name"  type="name" name='name' value={name} onChange={handlechange} placeholder="name"/>
                <input id="email"  type="email" name='email' value={email} onChange={handlechange} placeholder="email"/>
                <input id="password"  type="password" name='password' value={password} onChange={handlechange} placeholder="password"/>
                <input type="submit" id="submit" />
            </form>
            <div className="form-footer">
                <h2>Forgot password?</h2>
            </div>
        </div>
    )
}

export default Form;