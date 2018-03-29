import React, {Component} from 'react';

class TrendingTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingData: props.trendingData
    };
  }

  componentWillReceiveProps() {
    this.setState((initialState, props) => (
     {
       trendingData: props.trendingData
     }
    ));
  }


  render() {
    return (
     <div className="col-12">
       <ul className="tasks-list">
         <li className="d-flex gray projects-title justify-content-between project-row ">
           <div className="col-md-3">Campaing</div>
           <div className="col-md-1">Time</div>
           <div className="col-md-1">Views</div>
           <div className="col-md-1">Visitors</div>
           <div className="col-md-1">CTR</div>
           <div className="col-md-1">CPC</div>
           <div className="col-md-1">CPV</div>
           <div className="col-md-1">CPM</div>
           <div className="col-md-2">Status</div>
         </li>
         {this.state.trendingData.map((value, index) => <li key={index}
                                                            className="d-flex justify-content-between align-items-center  flex-wrap text-white">
           <div className="d-flex col-md-3">
             <div>{value.Campaing}</div>
           </div>
           <div className="d-flex col-md-1">
             <div>{value.Time}</div>
           </div>
           <div className="col-md-1">
             {value.Views}
           </div>
           <div className="col-md-1">
             {value.Visitors}
           </div>
           <div className="col-md-1">
             {value.CTR}
           </div>
           <div className="col-md-1">
             {value.CPC}
           </div>
           <div className="col-md-1">
             {value.CPV}
           </div>
           <div className="col-md-1">
             {value.CPM}
           </div>
           <div className="col-md-2">
             {value.Status}
           </div>
         </li>)}
       </ul>
     </div>
    );
  }
}

export default TrendingTable;
