import React, {Component} from 'react';
import axios from "axios/index";

import TiAt from 'react-icons/lib/ti/at';
import MdCallEnd from 'react-icons/lib/md/call-end';
import MdHttps from 'react-icons/lib/md/https';
import FaAngleRight from 'react-icons/lib/fa/angle-right';
import MdAddLocation from 'react-icons/lib/md/add-location';
import GoFileText from 'react-icons/lib/go/file-text';
import GoOrganization from 'react-icons/lib/go/organization';
import Title from '../../components/dumb/title/index';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        email: '',
        password: '',
        newPassword: '',
        newPhone: '',
        newAddress: '',
        newOrganization: '',
        newDescription: '',
      },
      isSubmit: false,
    };
    this.handelChange = this.handelChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(event) {
    event.preventDefault();
    localStorage.setItem('userData', JSON.stringify(this.state.userData));
    this.password.value = '';
    this.newPassword.value = '';
    this.newPhone.value = '';
    this.email.value = '';
    this.newAddress.value = '';
    this.newOrganization.value = '';
    this.newDescription.value = '';

    axios.post('api/users/register',
     JSON.stringify(this.state.userData),
     {
       headers: {
         'Content-Type': 'application/json',
       }
     }
    )
     .then(function () {
       this.setState({isSubmit: true})
     })
     .catch(console.log)
  }

  handelChange(event) {
    this.setState({
      userData: {
        email: this.email.value,
        password: this.password.value,
        newPpassword: this.newPassword.value,
        newPhone: this.newPhone.newPhone,
        newAddress: this.newAddress.value,
        newOrganization: this.newOrganization.value,
        newDescription: this.newDescription.value
      }
    });
  }


  render() {
    return (
     <section className="containers ">
       <div className="d-flex justify-content-center flex-wrap col-md-12">
         <Title title1='Settings ' title2='!'/>
         <form onSubmit={this.handleSubmit} className="justify-content-center text-center">
           <div className="d-flex">
             <TiAt className="authentication-icon"/>
             <input
              type='email'
              placeholder="New email"
              ref={(input => {
                this.email = input
              })}
              onChange={this.handelChange}
              className="setting-input"
             />
           </div>
           <div className="d-flex align-items-center setting-input-pass-wrap">
             <MdHttps className="authentication-icon"/>
             <div>
               <input
                type='password'
                placeholder="Password"
                ref={(input => {
                  this.password = input
                })}
                onChange={this.handelChange}
                className="setting-input-pass"
               />
               <input
                type='password'
                placeholder="New password"
                ref={(input => {
                  this.newPassword = input
                })}
                onChange={this.handelChange}
                className="setting-input-pass"
               />
             </div>
           </div>
           <div className="d-flex">
             <MdCallEnd className="authentication-icon"/>
             <input
              type='tel'
              placeholder="New phone number"
              ref={(input => {
                this.newPhone = input
              })}
              onChange={this.handelChange}
              className="setting-input"
             />
           </div>
           <div className="d-flex">
             <MdAddLocation className="authentication-icon"/>
             <input
              type='text'
              placeholder="New address"
              ref={(input => {
                this.newAddress = input
              })}
              onChange={this.handelChange}
              className="setting-input"
             />
           </div>
           <div className="d-flex">
             <GoOrganization className="authentication-icon"/>
             <input
              type='text'
              placeholder="New organization"
              ref={(input => {
                this.newOrganization = input
              })}
              onChange={this.handelChange}
              className="setting-input"
             />
           </div>
           <div className="d-flex">
             <GoFileText className="authentication-icon"/>
             <textarea
              placeholder="New description "
              ref={(textarea => {
                this.newDescription = textarea
              })}
              onChange={this.handelChange}
              className="setting-description"
             />
           </div>
           <button type="submit"
                   className="btn btn-primary authentication-button bg-transparent text-white">
             Enter
             <FaAngleRight className="authentication-button-icon"/>
           </button>
         </form>
       </div>
     </section>
    );
  }
}

export default Settings;
