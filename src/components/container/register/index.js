import React, {Component} from 'react';
import axios from 'axios';

import TiAt from 'react-icons/lib/ti/at';
import MdAccountCircle from 'react-icons/lib/md/account-circle';
import MdCallEnd from 'react-icons/lib/md/call-end';
import MdHttps from 'react-icons/lib/md/https';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import Title from '../../dumb/title/index';


class Register extends Component {
 constructor(props) {
  super(props);
  this.state = {
   userData: {
    email: '',
    username: '',
    password: '',
    phone: '',
   },
   isSubmit: false,
  };

  this.handelEmailChange = this.handelEmailChange.bind(this);
  this.handelPasswordChange = this.handelPasswordChange.bind(this);
  this.handelNumberChange = this.handelNumberChange.bind(this);
  this.handelLoginChange = this.handelLoginChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
 }

 handleSubmit(event) {
  event.preventDefault();
  localStorage.setItem('userData', JSON.stringify(this.state.userData));
  this.login.value = '';
  this.password.value = '';
  this.phone.value = '';
  this.email.value = '';

  axios.post('http://aelmod.sytes.net:8080/users',
   JSON.stringify(this.state.userData),
   {
    headers: {
     'Content-Type': 'application/json',
    }
   }
  )
   .then(function (response) {
    this.setState({isSubmit: true})
   })
   .catch(function (error) {
    console.log(error);
   })
 }

 handelEmailChange(event) {
  this.setState({email: this.email.value});
 }

 handelPasswordChange(event) {
  this.setState({password: this.password.value});
 }

 handelNumberChange(event) {
  this.setState({phone: this.phone.value});
 }

 handelLoginChange(event) {
  this.setState({username: this.login.value});
 }


 render() {
  return (
   <section>
    <div className="authentication-wrap">
     <div className="d-flex justify-content-center flex-wrap">
      <Title title1='Registration ' title2='!'/>
      <form onSubmit={this.handleSubmit} className="justify-content-center text-center col-6">
       <div className="d-flex inputs">
        <MdAccountCircle className="authentication-icon"/>
        <input
         type='text'
         placeholder="Username"
         ref={(input => {
          this.login = input
         })}
         onChange={this.handelLoginChange}
         className="authentication-input"
        />
       </div>
       <div className="d-flex inputs">
        <TiAt className="authentication-icon"/>
        <input
         type='email'
         placeholder="Email"
         ref={(input => {
          this.email = input
         })}
         onChange={this.handelEmailChange}
         className="authentication-input"
        />
       </div>
       <div className="d-flex inputs">
        <MdHttps className="authentication-icon"/>
        <input
         type='password'
         placeholder="Password"
         ref={(input => {
          this.password = input
         })}
         onChange={this.handelPasswordChange}
         className="authentication-input"
        />
       </div>
       <div className="d-flex inputs">
        <MdCallEnd className="authentication-icon"/>
        <input
         type='tel'
         placeholder="Phone-number"
         ref={(input => {
          this.phone = input
         })}
         onChange={this.handelNumberChange}
         className="authentication-input"
        />
       </div>
       <button type="submit"
               className="button btn btn-primary authentication-button bg-transparent text-dark">
        Enter
        <FaAngleRight className="authentication-button-icon"/>
       </button>
      </form>
     </div>
    </div>
   </section>
  );
 }
}

export default Register;
