import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";

import AllUsers from "../../components/containers/all-users";
import {getUsersData} from "../../redux/actions/usersData";

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
UsersPage.propTypes = {
  usersData: PropTypes.array,
};
export default connect(
 state => ({
   usersData: state.users,
 }),
 dispatch => ({
   onGetUsersData: () => {
     dispatch(getUsersData());
   },
 }))(UsersPage);
