import React, {Component} from 'react';
import {connect} from "react-redux";
import HomeProjectsItem from "../../dumb/home-projects-item";

class HomeProject extends Component {


  render() {
    let taskContainer = [];
    for (let project in this.props.menuData) {
      taskContainer.push(
           <div>
             {this.props.menuData[project].filter(item => item.devName.includes("user name")).map((item, index) => (
              <li key={project}>
                <HomeProjectsItem key={index} data={item} data={item}/>
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
 }),
 )(HomeProject);
