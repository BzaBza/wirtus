import React, {Component} from 'react';
import FaAngleUp from 'react-icons/lib/fa/angle-up';
import FaAngleDown from 'react-icons/lib/fa/angle-down';

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

  customSort(event) {
    let sortedArr = this.state.trendingData.sort((a, b) => {
      let columnSort = event.target.innerText;
      if (a[columnSort] > b[columnSort]) {
        return 1;
      }
      if (a[columnSort] < b[columnSort]) {
        return -1;
      }
      return 0;
    });
    this.setState({
      trendingData: sortedArr,
      activeSort: event.target.innerText
    });
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
            <div key={value.id} className={`d-flex ${value.className} ${this.state.activeSort === value.text ? 'text-white' : ''}`}>
              <div onClick={this.customSort}>{value.text}</div>
              <div>{this.state.activeSort === value.text ? <FaAngleUp/> : <FaAngleDown/>}</div>
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
             <div>
               {
                 Number(value.Views).toFixed(0).replace(/./g, function (c, i, a) {
                   return i > 0 && c !== " " && (a.length - i) % 3 === 0 ? " " + c : c;
                 })
               }
             </div>
           </div>
           <div className="col-md-1">
             <div>
               {
               Number(value.Visitors).toFixed(0).replace(/./g, function (c, i, a) {
                 return i > 0 && c !== " " && (a.length - i) % 3 === 0 ? " " + c : c;
               })
               }
             </div>
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
