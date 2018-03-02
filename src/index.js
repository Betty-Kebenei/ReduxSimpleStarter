import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetails from './components/video_details';
import _ from 'lodash';
const API_KEY = 'AIzaSyApgC3W5uOLn3TvKk84N0LeKk5CllnkqJM';
class App extends Component {
    constructor(props){
        super(props);

        this.state = { 
            videos: [], 
            selectedVideo: null
        }
    
        this.videoSearch('surfborads');
    }

    videoSearch(term){
        YTSearch({key: API_KEY, term: term }, (videos) =>{
            this.setState({
                videos: videos, 
                selectedVideo: videos[0]
            });
        });
    }

    render() {

        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
            <div>
                <br/><br />
                <SearchBar onSearchTermChange={videoSearch}/>
                <br/><br />
                <VideoDetails video={this.state.selectedVideo} />
                <VideoList 
                onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos}
                />
            </div> 
        )
    }
}
