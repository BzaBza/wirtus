import React, {Component} from 'react';
import axios from 'axios';

import TiAt from 'react-icons/lib/ti/at';
import MdAccountCircle from 'react-icons/lib/md/account-circle';
import MdCallEnd from 'react-icons/lib/md/call-end';
import MdHttps from 'react-icons/lib/md/https';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import MdAddLocation from 'react-icons/lib/md/add-location';
import GoFileText from 'react-icons/lib/go/file-text';
import GoOrganization from 'react-icons/lib/go/organization';
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
        address: '',
        organization: '',
        description: '',
      },
      isSubmit: false,
    };
    this.handelChange = this.handelChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('userData', JSON.stringify(this.state.userData));
    this.login.value = '';
    this.password.value = '';
    this.phone.value = '';
    this.email.value = '';
    this.address.value = '';
    this.organization.value = '';
    this.description.value = '';

    axios.post('http://aelmod.sytes.net:8080/users/register',
     JSON.stringify(this.state.userData),
     {
       headers: {
         'Content-Type': 'application/json',
       }
     }
    )
     .then(function () {
       console.log('register finish')
     })
     .catch(console.log)
  }

  handelChange(event) {
    this.setState({
      userData: {
        email: this.email.value,
        username: this.login.value,
        password: this.password.value,
        phone: this.phone.value,
        address: this.address.value,
        organization: this.organization.value,
        description: this.description.value
      }
    });
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
                onChange={this.handelChange}
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
                onChange={this.handelChange}
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
                onChange={this.handelChange}
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
                onChange={this.handelChange}
                className="authentication-input"
               />
             </div>
             <div className="d-flex inputs">
               <MdAddLocation className="authentication-icon"/>
               <input
                type='text'
                placeholder="Address"
                ref={(input => {
                  this.address = input
                })}
                onChange={this.handelChange}
                className="authentication-input"
               />
             </div>
             <div className="d-flex inputs">
               <GoOrganization className="authentication-icon"/>
               <input
                type='text'
                placeholder="Organization"
                ref={(input => {
                  this.organization = input
                })}
                onChange={this.handelChange}
                className="authentication-input"
               />
             </div>
             <div className="d-flex inputs">
               <GoFileText className="authentication-icon"/>
               <textarea
                placeholder="Description "
                ref={(textarea => {
                  this.description = textarea
                })}
                onChange={this.handelChange}
                className="description"
               />
             </div>
             <button type="submit"
                     className="btn btn-primary authentication-button bg-transparent text-dark">
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
