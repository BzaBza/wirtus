import React, {Component} from 'react';
import AllUsers from "../../components/containers/all-users";
import {getUsersData} from "../../redux/actions/usersData";
import {connect} from "react-redux";

class UsersPage extends Component {
  componentWillMount(){
    this.props.onGetUsersData()
  }
  render() {
    return (
     <section className="containers">
      <div className="d-flex justify-content-center">
        <div className="col-10">
          <AllUsers usersData={this.props.usersData}/>
        </div>
      </div>
     </section>
    );
  }
}

export default connect(
 state => ({
   usersData: state.users,
 }),
 dispatch => ({
   onGetUsersData: () => {
     dispatch(getUsersData());
   },
 }))(UsersPage);
