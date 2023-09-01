import React, { PureComponent } from 'react';
import StarRating from 'react-native-star-rating';

export default class Rating extends PureComponent{


	render () {

	const {size, margin, rating} = this.props;
    
		return(
      <StarRating
      disabled={true}
      maxStars={5}
      emptyStar={'star'}
      fullStar={'star'}
      halfStar={'star-half'}
      rating={rating}
      starSize={size}
      emptyStarColor={'#565656'}
      fullStarColor={'#fec000'}
      starStyle={{marginRight: 5}}
      containerStyle={{
      	width: undefined,
      	justifyContent: 'flex-start',
      	marginVertical: margin}}/>
			);
	}
}