import React, { Component } from 'react';
import {Switch,Redirect,Route,Link} from 'react-router-dom';
import $ from 'jquery';
import Login from '../components/login-form/form.jsx';

import './formpage.css';

import DashBoard from './dashboard.jsx';

class FormPage extends Component{
    constructor(props){
        super(props);
        this.state={
          email:'',
          password:'',
          user:''
        }
    }

    componentDidMount(){
        const token = localStorage.getItem('token');

        if(!token){
            this.setState({
                user: ''
            });
        }

        $.post('https://hwi-back.herokuapp.com/user/getuser',{token:token},(data)=>{
            if(data.status==="success"){
                this.setState({
                    user: data.message
                });
            }
            else{
                localStorage.removeItem('token','');
                localStorage.removeItem('type','');
            }
        })
    }
    
    handlechange=e=>{
        const {value,name} = e.target;
        this.setState({[name]: value})
    }

    handlesubmit=async(e)=>{
        try{
            const email = await this.state.email;
            const password = await this.state.password;
            if(!email||!password)
                alert('please enter email and password both');
            else{
                $.post('https://hwi-back.herokuapp.com/user/login',{email:email,password:password},async(data)=>{
                    if(data.status==="success"){
                        await alert('Logged in successfully');
                        await localStorage.setItem('token',data.token);
                        await localStorage.setItem('type','teacher');
                        this.setState({
                            user: data.professor,
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
        return(
            <div>
            {
                this.state.user===''
                ?
                <div className="form-page">
                    <Link className="login-home-btn" to="/">&#8656; Go to Home</Link>
                    <Login handlesubmit={this.handlesubmit} handlechange={this.handlechange} email={this.state.email} password={this.state.password}/>            
                </div>
                :
                <DashBoard type={"student"} user={this.state.user}/>
            }
            </div>
        )
    }
}

export default FormPage;