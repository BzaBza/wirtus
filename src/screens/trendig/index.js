import React, {Component} from 'react';
import {connect} from 'react-redux';

import TrendingCharts from "../../components/container/trending-charts";
import TrendingTable from "../../components/container/trending-table";
import {getTrendingData} from '../../redux/actions/trendingAct';


class Trending extends Component {
  render() {
    return (
     <section className="containers trending-section">
       <TrendingCharts/>
       <TrendingTable trendingData={this.props.trendingData} onGetTrendingData={this.props.onGetTrendingData()} />
     </section>
    );
  }
}

export default connect(
 state => ({
   trendingData: state.allTrending,
 }),
 dispatch => ({
   onGetTrendingData: () => {
     dispatch(getTrendingData());
   }
 }))(Trending);
