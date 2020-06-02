import React, { Component } from "react";

class SearchBar extends Component {
  state = {
      search:''
  }
  onFormSubmit = (event)=>{
    event.preventDefault();
    this.props.onFormSubmit(this.state.search)
  }
    render() {
    return (
     <div className="ui container">   
      <div className="ui segment">
        <form className="ui form " onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Video search</label>
            <div className="ui icon input">
              <input type="text" placeholder="Search..." value={this.state.search} onChange={(e)=>this.setState({search:e.target.value})}/>
              <i className="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    </div> 
    );
  }
}

export default SearchBar;
