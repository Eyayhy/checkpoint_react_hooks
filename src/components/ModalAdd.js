import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  InputGroup,
  Label,
  Input,
} from 'reactstrap';

const ModalAdd = ({ isOpen, toggle, handleAdd }) => {
  const [newMovie, setNewMovie] = useState({
    title: ``,
    description: ``,
    urlPoster: ``,
    rate: 0,
  });
  const onChangeHandler = (e) =>
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  const handleClick = (e) => {
    e.preventDefault();
    handleAdd(newMovie);
  };
  return (
    <div>
      <Modal isOpen={isOpen} fade={false} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <InputGroup row>
            <Label for='Title' sm={2}>
              Titre:
            </Label>
            <Input
              type='text'
              name='title'
              placeholder='movie title'
              onChange={onChangeHandler}
            />
          </InputGroup>
          <InputGroup row>
            <Label for='Poster' sm={2}>
              PostURL:
            </Label>
            <Input
              type='url'
              name='posterUrl'
              placeholder='poster link '
              onChange={onChangeHandler}
            />
          </InputGroup>
          <InputGroup row>
            <Label for='Description' sm={2}>
              Desc:
            </Label>
            <Input
              type='textarea'
              name='description'
              placeholder='movie description '
              onChange={onChangeHandler}
            />
          </InputGroup>
          <InputGroup row>
            <Label for='rate' sm={2}>
              Rating:
            </Label>
            <Input
              type='text'
              name='rate'
              placeholder='rate the movie '
              onChange={onChangeHandler}
            />
          </InputGroup>
        </ModalBody>
        <ModalFooter>
          <Button
            color='primary'
            onClick={(e) => {
              handleClick(e);
              toggle();
            }}
          >
            Add
          </Button>{' '}
          <Button color='secondary' onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

ModalAdd.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  handleAdd: PropTypes.func.isRequired,
};

export default ModalAdd;