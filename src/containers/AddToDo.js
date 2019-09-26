import React from 'react';
import { connect } from 'react-redux';
import { addToDo } from "../actions/index";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

let AddToDo = ({ dispatch }) => {
  let input = React.createRef();

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        /*if (!input.value.trim()) {
          return;
        }*/
        dispatch(addToDo(input.current.value));
        input.current.value = '';
      }}
    >
      <Form.Group controlId="formBasicEmail">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Enter an item"
            ref={input}
          />
          <InputGroup.Append>
            <Button type="submit">Add To-Do</Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Form>
  );
};


AddToDo = connect()(AddToDo);

export default AddToDo;