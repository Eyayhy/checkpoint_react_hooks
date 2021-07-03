import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardTitle, CardImg, CardBody, CardText } from 'reactstrap';

import Rating from './Rating';

const MovieCard = ({ movie: { title,description, posterUrl, rating } }) => {
  return (
    <div className='col-4 mt-2'>
      <Card style={{ height: `520px` }}>
        <CardTitle>
          <div className='row justify-content-center mt-2'>
            <h6>{title}</h6>
          </div>
        
        </CardTitle>
        <div className='row' style={{position:'absolute',top:'5%',left:'45%'}}>
            <Rating rating={rating}  />
        </div>
        <CardImg
          top
          width='100%'
          style={{ height: `350px`,paddingTop:'25px' }}
          src={posterUrl}
          alt='Card image cap'
        />
        <CardBody>
          <div className='row'>
            <CardText style={{fontSize:'12px',fontFamily:'cursive'}}>{description}</CardText>
          </div>
        
        </CardBody>
      </Card>
    </div>
  );
};

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
};

export default MovieCard;
