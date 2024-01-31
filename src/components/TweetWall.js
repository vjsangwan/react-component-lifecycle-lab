import React from 'react';
import Tweet from './Tweet';

class TweetWall extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweets: []
    };
  }

  componentDidUpdate(prevProps){
    if(this.props.newTweets !== prevProps.newTweets){
      this.setState({tweets:this.props.newTweets}, ()=>{console.log(this.state.tweets)})
    }
  }
  shouldComponentUpdate(nextProps, nextState){

  return nextProps.newTweets.length>0
  }

  render() {
    
    const tweets = this.state.tweets.map((tweet, index) => <Tweet text={tweet.text} key={index} />);

    return (
      <div>{tweets}</div>
    );
  }
}

export default TweetWall;
