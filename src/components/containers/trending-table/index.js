import React, {Component} from 'react';
import PropTypes from "prop-types";

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
      {text: 'Campaing', className: 'col-lg-3', id: 1},
      {text: 'Time', className: 'col-lg-1', id: 2},
      {text: 'Views', className: 'col-lg-1', id: 3},
      {text: 'Visitors', className: 'col-lg-1', id: 4},
      {text: 'CTR', className: 'col-lg-1', id: 5},
      {text: 'CPC', className: 'col-lg-1', id: 6},
      {text: 'CPV', className: 'col-lg-1', id: 7},
      {text: 'CPM', className: 'col-lg-1', id: 8},
      {text: 'Status', className: 'col-lg-2', id: 9}
    ];
    return (
     <div className="trending-list-wrap">
       <ul className="trending-list">
         <li className="d-flex gray justify-content-between trending-row align-items-center">
           {lostHeader.map((value, index) =>
            <div key={value.id}
                 className={`d-flex ${value.className} ${this.state.activeSort === value.text ? 'text-white' : ''}`}>
              <div onClick={this.customSort}>{value.text}</div>
              <div>{this.state.activeSort === value.text ? <FaAngleUp/> : <FaAngleDown/>}</div>
            </div>
           )}
         </li>
         {this.state.trendingData.map((value, index) => <li key={index}
                                                            className="d-flex justify-content-between align-items-center  flex-wrap text-white trending-table-row">
           <div className="d-flex col-lg-3">
             <div className="trending-table-side-description">Campaing</div>
             <div>{value.Campaing}</div>
           </div>
           <div className="d-flex col-lg-1 ">
             <div className="trending-table-side-description">Time</div>
             <div>{value.Time}</div>
           </div>
           <div className="col-lg-1 d-flex">
             <div className="trending-table-side-description">Views</div>
             <div>
               {
                 Number(value.Views).toFixed(0).replace(/./g, function (c, i, a) {
                   return i > 0 && c !== " " && (a.length - i) % 3 === 0 ? " " + c : c;
                 })
               }
             </div>
           </div>
           <div className="col-lg-1 d-flex">
             <div className="trending-table-side-description">Visitors</div>
             <div>
               {
                 Number(value.Visitors).toFixed(0).replace(/./g, function (c, i, a) {
                   return i > 0 && c !== " " && (a.length - i) % 3 === 0 ? " " + c : c;
                 })
               }
             </div>
           </div>
           <div className="col-lg-1 d-flex">
             <div className="trending-table-side-description">CTR</div>
             <div>{value.CTR}</div>
           </div>
           <div className="col-lg-1 d-flex">
             <div className="trending-table-side-description">CPC</div>
             <div>{value.CPC}</div>
           </div>
           <div className="col-lg-1 d-flex">
             <div className="trending-table-side-description">CPV</div>
             <div>{value.CPV}</div>
           </div>
           <div className="col-lg-1 d-flex">
             <div className="trending-table-side-description">CPM</div>
             <div>{value.CPM}</div>
           </div>
           <div className="col-lg-2 d-flex">
             <div className="trending-table-side-description">Status</div>
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
TrendingTable.propTypes = {
  trendingData: PropTypes.array,
};
export default TrendingTable;
