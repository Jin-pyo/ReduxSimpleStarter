import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCM6zyhejrZ98f41tVS3Qvr5Zz1Ri1l_2s';

// Create a new componetn. this component should produce
// some HTML
class App extends Component { 
    constructor(props){
        super(props);

        this.state={ 
            videos:[],
            selectVideo:null
        };

        this.videoSearch('surfboards');
    }

    videoSearch(term){
        YTSearch({key:API_KEY, term:term},(videos)=>{
            //this.setState({videos:data});
            this.setState({
                videos:videos,  //when name is smae 위 이름이랑
                selectVideo:videos[0]
            }); 
        });
    }

    render(){
        return (
            <div>
                <SearchBar onSearchTermChange={term=>this.videoSearch(term)} />
                <VideoDetail video={this.state.selectVideo} />
                <VideoList 
                    onVideoSelect={selectVideo=>this.setState({selectVideo})}
                    videos={this.state.videos} />
            </div>
        );
    }
} 


// Take this compoent's generated HTML and put it
// ont the page (in the DOM)
  
ReactDOM.render(<App />, document.querySelector('.container'));