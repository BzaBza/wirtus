import React, {Component} from 'react';
import {connect} from 'react-redux';

import TrendingCharts from "../../components/containers/trending-charts";
import TrendingTable from "../../components/containers/trending-table";
import {getTrendingData} from '../../redux/actions/trendingAct';


class Trending extends Component {
  render() {
    let chartCustomHeight;
    window.screen.width <= 1500 ? chartCustomHeight = 600 : window.screen.width <= 1200 ? chartCustomHeight = 400 : chartCustomHeight = 620;
    return (
     <section className="containers trending-section">
       <TrendingCharts chartCustomHeight={chartCustomHeight}/>
       <TrendingTable trendingData={this.props.trendingData} onGetTrendingData={this.props.onGetTrendingData()}/>
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
