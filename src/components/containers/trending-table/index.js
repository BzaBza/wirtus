import React, {Component} from 'react';

class TrendingTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingData: props.trendingData,
      activeSort: ''
    };
    this.customSort = this.customSort.bind(this)
  }

  componentWillReceiveProps() {
    this.setState((initialState, props) => (
     {
       trendingData: props.trendingData
     }
    ));
  }
  customSort(event){
    let sortedArr = this.state.trendingData.sort((a, b)=>{
      let columnSort = event.target.innerText;
      if (a[columnSort] > b[columnSort]){
        return 1;
      }
      if (a[columnSort] < b[columnSort]) {
        return -1;
      }
      return 0;
    });
    this.setState(() => (
     {
       trendingData: sortedArr
     }
    ));
    console.log(sortedArr)
  }

  render() {
    let lostHeader = [
      {text: 'Campaing', className: 'col-md-3', id: 1},
      {text: 'Time', className: 'col-md-1', id: 2},
      {text: 'Views', className: 'col-md-1', id: 3},
      {text: 'Visitors', className: 'col-md-1', id: 4},
      {text: 'CTR', className: 'col-md-1', id: 5},
      {text: 'CPC', className: 'col-md-1', id: 6},
      {text: 'CPV', className: 'col-md-1', id: 7},
      {text: 'CPM', className: 'col-md-1', id: 8},
      {text: 'Status', className: 'col-md-2', id: 9}
    ];

    return (
     <div className="trending-list-wrap">
       <ul className="trending-list">
         <li className="d-flex gray justify-content-between trending-row align-items-center">
           {lostHeader.map((value, index) =>
            <div key={value.id} className={value.className} onClick={this.customSort}>
              {value.text}
            </div>
           )}
         </li>
         {this.state.trendingData.map((value, index) => <li key={index}
                                                            className="d-flex justify-content-between align-items-center  flex-wrap text-white trending-table-row">
           <div className="d-flex col-md-3">
             <div>{value.Campaing}</div>
           </div>
           <div className="d-flex col-md-1">
             <div>{value.Time}</div>
           </div>
           <div className="col-md-1">
             <div>{value.Views}</div>
           </div>
           <div className="col-md-1">
             <div>{value.Visitors}</div>
           </div>
           <div className="col-md-1">
             <div>{value.CTR}</div>
           </div>
           <div className="col-md-1">
             <div>{value.CPC}</div>
           </div>
           <div className="col-md-1">
             <div>{value.CPV}</div>
           </div>
           <div className="col-md-1">
             <div>{value.CPM}</div>
           </div>
           <div className="col-md-2">
             <div className="d-flex align-items-center">
               <div className={value.Status === 'Active' ? 'is-active' : 'is-unActive'}/>
               <div>{value.Status}</div>
             </div>
           </div>
         </li>)}
       </ul>
     </div>
    );
  }
}

export default TrendingTable;
