import React, { Component } from 'react';

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
            <section className="authentication-background">
                <div className="col-5 sign">

                </div>
            </section>
        );
    }
}

export default HomePage;
