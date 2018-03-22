import React, {Component} from 'react';
import FaEllipsisV from 'react-icons/lib/fa/ellipsis-v';
import MdAccessTime from 'react-icons/lib/md/access-time';
import userData from '../../../redux/data/users-data';

class AllProjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: [],
        };
    }

    getUserData() {
        this.setState((state, props) => (
            {
                userData,
            }
        ));
    }


    componentWillMount() {
        this.getUserData();
    }

    render() {
        return (
            <section>
                <ul className="tasks-list">
                    <li className="justify-content-between d-flex gray">
                        <div className="col-md-2">Project title</div>
                        <div className="col-md-2">Value</div>
                        <div className="col-md-2">Deadline</div>
                        <div className="col-md-1">Time spent</div>
                        <div className="col-md-1">Progress</div>
                        <div className="col-md-1">Status</div>
                        <div className="col-md-1">Assigned to</div>
                    </li>
                    {this.state.userData.map((value, index) => <li key={index}
                                                                   className="d-flex justify-content-between align-items-center  flex-wrap col-12 project-row">
                        <div className="d-flex col-md-2 project-table ">
                            <div className="d-flex flex-wrap">
                                <div className="col-12 user-name">{value.userName}</div>
                                <div className="gray col-12">{value.position}</div>
                            </div>
                        </div>
                        <div className="col-md-2 project-table">
                            <div
                                className='align-items-center d-flex'>
                                <MdAccessTime/> {value.lastActivity}
                            </div>
                        </div>
                        <div className="col-md-2 project-table">
                            <div>
                                {value.email}
                            </div>
                        </div>
                        <div className="col-md-1 project-table">
                            <div>
                                {value.phone}
                            </div>
                        </div>
                        <div className="col-md-1 project-table">
                            <div>
                                {value.phone}
                            </div>
                        </div>
                        <div className="col-md-1 project-table">
                            <div>
                                {value.phone}
                            </div>
                        </div>
                        <div className="users-table col-md-1 justify-content-center d-flex">
                            <button type="button" className="tasks-button"><FaEllipsisV className="tasks-button-icon"/>
                            </button>
                        </div>
                    </li>)}
                </ul>
            </section>
        );
    }
}
export default AllProjects;
