import React, {Component} from 'react';
import TrendingCharts from "../../components/container/trending-charts/index";



class Trending extends Component {

  render() {
    return (
     <section className="containers col-12">
      <TrendingCharts/>
     </section>
    );
  }
}

export default Trending;
