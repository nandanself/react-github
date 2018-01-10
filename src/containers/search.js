import React, { Component } from 'react';
import { connect } from "react-redux";
import {bindActionCreators} from 'redux';
import { searchUser } from '../actions/search';
import {UserList} from "../components/user-list";


class Search extends Component {

 
    componentDidMount(){
        this.props.searchUser('nandan');
    }

    clicked(){
        let value = document.getElementById('searchBox').value;
        if (value){
            this.props.searchUser(value);
        }
  }  

  render() {
    return (
        <div className="search-page">
            <h2>GitHub Search</h2>
            <input placeholder="Search User" id="searchBox"/>
            <button onClick={this.clicked.bind(this)}>Submit</button> 
            <UserList users={this.props.users}/>
        </div>    
    ); 
  }
}


const mapStateToProps = (state) => {
    // console.log(state);
    return {
        users:state.SearchReducer.users,
    }
}


const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators( 
        {
            searchUser:(name) => searchUser(name), 
        },
        dispatch
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(Search);
