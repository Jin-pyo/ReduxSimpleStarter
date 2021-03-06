import React, { Component } from 'react';
 

class SearchBar extends Component {

    constructor(props){
        super(props); //super로 부모 클래스의 메소드를 호출할수있

        this.state={term:''};
    }

    render(){
        //change state by using "setState"
        return (
            <div className="search-bar">
                <input 
                    value={this.state.term}
                    onChange={event=>this.onInputChange(event.target.value)} />
            </div>
       
        );   
    }

    onInputChange(term){
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    /*
    onInputChange(event){
        console.log(event.target.value);
    }
    */
}


 export default SearchBar;