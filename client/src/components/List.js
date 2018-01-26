import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		data: []
  	};
  }

// Touch Instagram API using fetch
componentDidMount(){
  fetch(`https://api.instagram.com/v1/users/${process.env.REACT_APP_USER_ID}/media/recent/?count=99&access_token=${process.env.REACT_APP_ACCESS_TOKEN}`)
    .then(res =>res.json())
    .then((responseJson) => {
    	// testing promise to see if I can get data in console
    	// console.log(responseJson.data);
    	let instaList = responseJson.data.map((el, i, arr) => {
    		return {
    			images: el.images.standard_resolution.url,
    			caption: el.caption.text
    		};
    	});
    	this.setState( { data: instaList });
    	// return responseJson.data;
    })
    .catch((error) => {
    	console.error(error);
    });
}
	
	render(){
		console.log('state, ', this.state.data);
	  return(
	    <div className="List">
	      {
	      	this.state.data.map((el, i, arr) => <div className="posts-list" key={i}>
            <img src={el.images} alt="instagram feed" />
            <p>{el.caption}</p>
            <hr/>
          </div>)
	      }
	    </div>
	  	)
	}
}

export default List;