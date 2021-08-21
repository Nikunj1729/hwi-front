import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import Signin from '../components/forms/signinform.jsx';

import './formpage.css';

import DashBoard from './dashboard.jsx';

class FormPage extends Component{
    constructor(props){
        super(props);
        this.state={
          username:'',
          email:'',
          password:''
        }
    }
    
    handlechange=e=>{
        const {value,name} = e.target;
        this.setState({[name]: value})
    }
    componentDidMount(){
        this.setState({
            user:'',
            email:'',
            password:''
        })
    }
    handlesubmit=async(e)=>{
        try{
            const user = await this.state.user;
            const email = await this.state.email;
            const password = await this.state.password;
            if(!user||!email||!password)
                alert('please enter all fields');
            else{
                $.post('https://hwi-back.herokuapp.com/user/signup',{name:user,email:email,password:password},async(data)=>{
                    if(data.status==="success"){
                        await alert('Signed in successfully');
                        await localStorage.setItem('token',data.token);
                        this.setState({
                            user: '',
                            email: '',
                            password: ''
                        });
                    }
                    else{alert('Enter correct email or password');}
                })
            }
            e.preventDefault();
        }
        catch(err){
            alert('unsuccess');
        }
    }

    render(){
        console.log(this.state.user);
        return(
            <div>
            {
                this.state.user===''
                ?
                <div className="form-page">
                    <Link className="login-home-btn" to="/">&#8656; Go to Home</Link>
                    <Signin handlesubmit={this.handlesubmit} handlechange={this.handlechange} user={this.state.user} email={this.state.email} password={this.state.password}/>            
                </div>
                :
                <DashBoard type={"student"} user={this.state.user}/>
            }
            </div>
        )
    }
}

export default FormPage;