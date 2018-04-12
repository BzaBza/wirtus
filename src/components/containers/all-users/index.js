import React, {Component} from 'react';

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
           <div className="col-lg-2">User name/Position</div>
           <div className="col-lg-2">Address</div>
           <div className="col-lg-1">Active</div>
           <div className="col-lg-2">Phone</div>
           <div className="col-lg-3">Email</div>
           <div className="col-lg-2">Organization</div>
         </li>
         {this.state.usersData.map((value, index) =>
          <li key={index} className="d-flex justify-content-between align-items-center  flex-wrap project-row">
            <div className="d-flex col-lg-2 project-table projects-name-block"
                 style={{
                   borderColor:
                    value.active ? '#008a05' : '#ff0000'
                 }}>
              <div className="d-flex user-photo">
                <div>
                  <img src={'./workflow/photo-1457084882212-4a6bb2240588.png'} alt="developer"/>
                </div>
                <div>
                  <div className="user-name">{value.name}</div>
                  <div className="gray">{value.position}</div>
                </div>
              </div>
            </div>
            <div className="col-lg-2">
              <div className='align-items-center d-flex'>
                {value.address}
              </div>
            </div>
            <div className="col-lg-1 project-table">
              <div className={value.active ? 'text-success' : 'text-danger'}>
                {value.active ? 'Online' : 'Offline'}
              </div>
            </div>
            <div className="col-lg-2 project-table">
              <div>
                {value.phone}
              </div>
            </div>
            <div className="col-lg-3 project-table">
              <div>
                {value.email}
              </div>
            </div>
            <div className="col-lg-2 project-table">
              <div>
                {value.organization}
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
