import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types";

import HomeInboxItem from "../../dumb/home-inbox-item";

class HomeInbox extends Component {
  static defaultProps = {
    menuData: {},
  };

  render() {
    const data = [
      {
        userName: 'Michelle Stewart',
        url: './workflow/photo-1457084882212-4a6bb2240588.png',
        dataTime: 'Today, 5:32 PM',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius'
      },
      {
        userName: 'Jolene Slater',
        url: './workflow/photo-1457459588520-2ae325c92c09.png',
        dataTime: 'Today, 5:32 PM',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius'
      },
      {
        userName: 'Lyall Roach',
        url: './workflow/photo-1457459588520-2ae325c92c09.png',
        dataTime: 'Today, 5:32 PM',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eius'
      },
    ];

    return (
     <ul className="home-inbox">
       <li className="home-project-title"><h4 className="text-white">Inbox (<span className="text-primary">2</span>)
       </h4></li>
       <div>
         {data.map((item, index) => (
          <li key={index}>
            <HomeInboxItem data={item}/>
          </li>
         ))}
       </div>
     </ul>
    );
  }
}
HomeInbox.propTypes = {
  menuData: PropTypes.object,
};
export default connect(
 state => ({
   menuData: state.menu,
 }),
)(HomeInbox);
