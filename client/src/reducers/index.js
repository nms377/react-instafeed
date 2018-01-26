import { GET_GRID } from '../actions';

const initialState = {
  images: []
};

funciton images(state=initialState, action) {
  console.log('which action: ', action.type);
  switch(action.type) {
  	case GET_GRID:
  	  console.log('IMAGES WERE DISPLAYED')
  	  return Object.assign({}, state, {
  	  	images: [
  	  	  ...state.images,
  	  	  {
            images: action.images
  	  	  }
  	  	]
  	  });

  	  default:
  	    return state;
  }
}

export default images;