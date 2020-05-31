import React from 'react';
import './Rating.scss';
import { ReactComponent as CheckedStar } from '../../assets/star-on.svg';
import { ReactComponent as UnheckedStar } from '../../assets/star-off.svg';

function Rating({ rating, size }) {
  return (
    <div className={`rating rating-${size}`}>
      {rating >= 1 ? <CheckedStar /> : <UnheckedStar /> }
      {rating >= 2 ? <CheckedStar /> : <UnheckedStar /> }
      {rating >= 3 ? <CheckedStar /> : <UnheckedStar /> }
      {rating >= 4 ? <CheckedStar /> : <UnheckedStar /> }
      {rating >= 5 ? <CheckedStar /> : <UnheckedStar /> }
    </div>
  );
}

export default Rating;
