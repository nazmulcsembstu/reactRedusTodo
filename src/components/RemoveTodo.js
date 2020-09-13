import React from 'react'
import {connect} from 'react-redux'
import DeleteTodo from '../containers/DeleteTodo'

export default class RemoveTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state;
  }

  rrender() {
    return (
        <li
            onClick={this.props.onClick}
            className="list-group-item justify-content-between border-c1 c1"
        >
          <span>{this.props.text} {this.props.completed ? <i className="fa fa-check"/> : null}</span>
          <span className="badge c1-bg badge-pill">
            <DeleteTodo id={this.props.id} />
          </span>
        </li>
    )
  }

  export default RemoveTodo