import React, {Component} from 'react';
import axios from 'axios';

import MdAccountCircle from 'react-icons/lib/md/account-circle';
import MdHttps from 'react-icons/lib/md/https';
import FaAngleRight from 'react-icons/lib/fa/angle-right';

import Title from '../../dumb/title/index';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handelPasswordChange = this.handelPasswordChange.bind(this);
    this.handelLoginChange = this.handelLoginChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    // const userLoginInfo = {
    //   username: this.state.username,
    //   password: this.state.password,
    // };

    axios.post('api/users/authenticate',
     JSON.stringify(this.state),
     {
       headers: {
         'Content-Type': 'application/json',
       }

     },
     this.password.value = ''
    );

    // axios.get('http://aelmod.sytes.net:8080/users')
    //  .then(function (response) {
    //    console.log(response);
    //    if (userLoginInfo.username === response.data.value.username && response.data.value.password === userLoginInfo.password) {
    //      this.props.setRootUserData(response);
    //      this.props.routeProps.history.push('/home');
    //    } else {
    //      alert('Login failed');
    //    }
    //  })
    //  .catch(function (error) {
    //    console.log(error);
    //  });
  }


  handelPasswordChange(event) {
    this.setState({password: event.target.value});
  }

  handelLoginChange(event) {
    this.setState({username: event.target.value});
  }

  render() {
    return (
     <section>
       <div className="authentication-wrap d-flex justify-content-center flex-wrap">
         <Title title1='Welcome ' title2='back!'/>
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
             <MdHttps className="authentication-icon"/>
             <input
              type='password'
              placeholder="Password"
              ref={(input => {
                this.password = input
              })}
              onChange={this.handelPasswordChange}
              className="authentication-input "
             />
           </div>
           <button type="submit"
                   className="btn btn-primary bg-transparent authentication-button  text-dark">
             Enter <FaAngleRight className="authentication-button-icon"/>
           </button>
         </form>
       </div>
     </section>
    );
  }
}

export default Login;
