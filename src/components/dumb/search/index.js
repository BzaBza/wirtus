import React, {Component} from 'react'
// import SearchInput, {createFilter} from 'react-search-input'

import {connect} from "react-redux";
import {getChatData} from "../../../redux/actions/chatAct";

// const KEYS_TO_FILTERS = ['user.name', 'subject', 'dest.name'];

class Search extends Component {
  constructor (props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.searchUpdated = this.searchUpdated.bind(this)
  }

  render () {
    // const filteredData = this.props.chatData.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS));

    return (
     <div>
       <input type="text"/>
     </div>
    )
  }

  searchUpdated (term) {
    this.setState({searchTerm: term})
  }
}
export default connect(
 state => ({
   chatData: state.chat,
 }),
 dispatch => ({
   onGetChatData: () => {
     dispatch(getChatData());
   },
 }))(Search);