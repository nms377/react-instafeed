import React, { Component } from 'react';
import { connect } from 'react-redux';

class Default extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		data: []
  	};
  }

// Touch Instagram API using fetch
componentWillMount(){
  fetch(`https://api.instagram.com/v1/users/${process.env.REACT_APP_USER_ID}/media/recent/?count=99&access_token=${process.env.REACT_APP_ACCESS_TOKEN}`)
    .then(res =>res.json())
    .then((responseJson) => {
    	// testing promise to see if I can get data in console
    	// console.log(responseJson.data);
    	let instaFeed = responseJson.data.map((el, i, arr) => {
    		return {
    			images: el.images.standard_resolution.url
    		};
    	});
    	this.setState( { data: instaFeed });
    	// return responseJson.data;
    })
    .catch((error) => {
    	console.error(error);
    });
}
	
	render(){
		console.log('state, ', this.state.data);
	  return(
	    <div className="Default">
	      {
	      	this.state.data.map((el, i, arr) => <div className="posts-default" key={i}>
              <img src={el.images} alt="instagram feed" />
          </div>)
	      }
	    </div>
	  	)
	}
}

export default Default;