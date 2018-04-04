import React, {Component} from 'react';
import TrendingCharts from "../../components/containers/trending-charts";
import HomeProject from "../../components/containers/home-project";


class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTab: 'login',
    };

    this.toggleTab = this.toggleTab.bind(this);
  }

  toggleTab(tab) {
    if (this.state.currentTab !== tab) {
      this.setState({
        currentTab: tab,
      });
    }
  }


  render() {
    return (
     <section className="containers">
       <div className="d-flex flex-wrap justify-content-between">
         <div className="col-md-8 home-trending-wrap ">
           <div className="home-trending">
             <TrendingCharts chartCustomHeight={475}/>
           </div>
         </div>
         <div className="col-md-3"><HomeProject/></div>
       </div>
       <div className="d-flex flex-wrap">
         <div className="col-md-6">sales</div>
         <div className="col-md-3">inbox</div>
         <div className="col-md-3">calendar</div>
       </div>
     </section>
    );
  }
}

export default HomePage;
