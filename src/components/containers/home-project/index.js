import React, {Component} from 'react';
import {connect} from "react-redux";
import HomeProjectsItem from "../../dumb/home-projects-item";
import {getMenuData} from "../../../redux/actions/menuAct";

class HomeProject extends Component {

  componentWillMount() {
    this.props.onGetMenuData()
  }

  render() {
    let taskContainer = [];
    for (let project in this.props.menuData) {
      taskContainer.push(
       <div key={project}>
         {this.props.menuData[project].filter(item => item.devName.includes("Michelle Stewart")).map((item, index) => (
          <li key={item.id}>
            <HomeProjectsItem data={item}/>
          </li>
         ))}
       </div>
      )
    }
    return (
     <ul className="home-project">
       <li className="home-project-title"><h4 className="text-white">Your projects</h4></li>
       {taskContainer}
     </ul>
    );
  }
}

export default connect(
 state => ({
   menuData: state.menu,
 }), dispatch => ({
   onGetMenuData: () => {
     dispatch(getMenuData());
   }
 }))(HomeProject);
