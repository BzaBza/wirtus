import React, {Component} from 'react';
import DropPeriod from "../../dumb/drop-period/index";
import ProgressBar from "../../dumb/progress-bar/index";

class AllUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usersData: props.usersData,
    };
  }

  componentWillReceiveProps() {
    this.setState((initialState, props) => (
     {
       usersData: props.usersData
     }
    ));
  }

  render() {
    return (
     <section className="text-white">
       <ul className="tasks-list">
         <li className="d-flex gray projects-title justify-content-between">
           <div className="col-md-2">User name/Position</div>
           <div className="col-md-1">Adress</div>
           <div className="col-md-1">Active</div>
           <div className="col-md-2">Phone</div>
           <div className="col-md-1">Email</div>
           <div className="col-md-3">
             <div className="col-md-5 text-right">Organization</div>
           </div>
         </li>
         {this.state.usersData.map((value, index) =>
          <li key={index} className="d-flex justify-content-between align-items-center  flex-wrap project-row">
            <div className="d-flex col-md-2 project-table projects-name-block ">
              <div className="d-flex">
                <div>
                  <img src={value.url} alt="developer"/>
                </div>
                <div>
                  <div className="user-name">{value.userName}</div>
                  <div className="gray">{value.position}</div>
                </div>
              </div>
            </div>
            <div className="col-md-1">
              <div className='align-items-center d-flex'>
                {value.adress}
              </div>
            </div>
            <div className="col-md-1 project-table">
              <div>
                {value.active ? 'Online' : 'Offline'}
              </div>
            </div>
            <div className="col-md-1 project-table">
              <div>
                {value.phone}
              </div>
            </div>
            <div className="col-md-1 project-table">
              <div>
                {value.email}
              </div>
            </div>
            <div className="col-md-3 project-table justify-content-around">
              <div className="col-md-10 all-projects-user-info">
                <div>
                  {value.organization}
                </div>
              </div>
            </div>
          </li>
         )}
       </ul>
     </section>
    );
  }
}

export default AllUsers;
