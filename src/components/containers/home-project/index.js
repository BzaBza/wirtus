import React, {Component} from 'react';
import {connect} from "react-redux";
import {getMenuData} from "../../../redux/actions/menuAct";
import HomeProjectsItem from "../../dumb/home-projects-item";

class HomeProject extends Component {


  render() {
    let taskContainer = [];
    for (let project in this.state.projects) {
      taskContainer.push(
       <ul>
         <li key={project}>
           {this.state.projects[project].filter(item => item.company.includes(this.props.filter)).map((item, index) => (
            <HomeProjectsItem key={index} data={item}/>
           ))}
         </li>
       </ul>
      )
    }
    return (
     <section className="trending-charts">
       {taskContainer}
     </section>
    );
  }
}

export default connect(
 state => ({
   menuData: state.menu,
   filter: state.menuFilter
 }),
 dispatch => ({
   onGetMenuData: () => {
     dispatch(getMenuData());
   }
 }))(HomeProject);
