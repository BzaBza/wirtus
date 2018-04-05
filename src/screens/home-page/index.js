import React, {Component} from 'react';
import TrendingCharts from "../../components/containers/trending-charts";
import HomeProject from "../../components/containers/home-project";
import SalesReport from "../../components/containers/sales-report";
import HomeInbox from "../../components/containers/inbox";
import Calendar from "../../components/containers/calendar";


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
     <section className="containers home-page">
       <div className="d-flex flex-wrap justify-content-between">
         <div className="col-md-9 home-trending-wrap ">
           <div className="home-trending">
             <TrendingCharts chartCustomHeight={400}/>
           </div>
         </div>
         <div className="col-md-3"><HomeProject/></div>
       </div>
       <div className="d-flex flex-wrap home-footer">
         <div className="col-md-6 sales-report-home-wrap"><SalesReport chartCustomHeight={32}/></div>
         <div className="col-md-3 home-inbox-wrap"><HomeInbox/></div>
         <div className="col-md-3"><Calendar/></div>
       </div>
     </section>
    );
  }
}

export default HomePage;
