import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCM6zyhejrZ98f41tVS3Qvr5Zz1Ri1l_2s';

// Create a new componetn. this component should produce
// some HTML
const App = ()=>{ //App is functional componet because it dodesn't have any concept of state
    return (
        <div>
            <SearchBar />
        </div>
    );
} 


// Take this compoent's generated HTML and put it
// ont the page (in the DOM)
  
ReactDOM.render(<App />, document.querySelector('.container'));