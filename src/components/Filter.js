import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'reactstrap';

import Rating from '../components/Rating';

const FilterBar = ({ handleSearch, setsearchRating, searchRating}) => {
  return (
    <div className='row m-2'>
      <div className='row col-md-8'>
        <Input
          type='text'
          placeholder='Nom du film'
          onChange={handleSearch}  style={{borderColor:'aqua',width:'50%'}}
        />
      </div>
      <div className='col-md-4'>
        <Rating
          className='star-rating'
          starIndex={setsearchRating}
          rating={searchRating}
        />
      </div>
    </div>
  );
};

FilterBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default FilterBar;