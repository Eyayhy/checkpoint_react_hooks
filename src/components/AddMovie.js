import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg } from 'reactstrap';
import img from  '../add.png'
import ModalAdd from './ModalAdd';

const AddMovie = ({ handleAdd }) => {
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);
  return (
    <div className='row justify-content-center mt-3'>
      <Card onClick={() => setShow(true)}>
        <CardImg
          top
        
          style={{ height: `70px`,width:`70px` }}
          src={img}
          alt='Card image cap'
        />
      </Card>
      {show && (
        <ModalAdd isOpen={show} toggle={toggleShow} handleAdd={handleAdd} />
      )}
    </div>
  );
};
AddMovie.propTypes = {
  handleAdd: PropTypes.func.isRequired,
};
export default AddMovie;