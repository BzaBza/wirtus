import React, {Component} from 'react';


export default class SideHeader extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }

    render() {
        return (
            <header className="side-header-wrap d-flex justify-content-between containers col-12 align-items-center">
                <ul>
                    <li>asdasd</li>
                </ul>
                <div>
                    <button>
                        test
                    </button>
                </div>
            </header>
        );
    }
}
