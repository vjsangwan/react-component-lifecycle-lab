import React from 'react';
import TweetWall from './TweetWall';

import { getTweets }from '../lib/mockAPI';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      latestTweets: []
    };
  }

  // TODO: componentWillMount()
  // TODO: componentDidMount()
  // TODO: componentWillUnmount()

  startInterval = () => {
    this.interval = setInterval(this.fetchTweets, 2000);
  }

  cleanUpInterval = () => clearInterval(this.interval);


  fetchTweets=()=>{
    const newTweets = getTweets();
    this.setState({
      latestTweets: newTweets
    })
    
  }

  componentDidMount(){
    this.startInterval()
    this.fetchTweets()
}
componentWillUnmount(){
  this.cleanUpInterval()
}

  render() {
    return (
      <div>
        <TweetWall newTweets={this.state.latestTweets} />
      </div>
    )
  }
}

export default App;
