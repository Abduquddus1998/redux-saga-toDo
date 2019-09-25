import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import AddToDo from './containers/AddToDo';
import ToDoListContainer from './containers/ToDoListContainer';
import ToDoList from './components/ToDoList';

class App extends Component {
  render() {
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>To Do List</h1>
            <AddToDo />
           <ToDoList/>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;