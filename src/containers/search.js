import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
        <div className="grid">
            <input placeholder="Search User"/>
            <button>Submit</button>
        </div>    
    );
  }
}

export default Search;