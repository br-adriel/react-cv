import { Component } from 'react';
// import '../styles/Card.css';

class Card extends Component {
  render() {
    return <div className='card'>{this.props.children}</div>;
  }
}

export default Card;
