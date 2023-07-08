import { Component } from 'react';

import './card.styles.css';

const Card = ({ monster: { name, id, email }}) => (
  <div className='card-container' key = {id}>
    <img alt={`monster-${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} ></img>
    <h2>{name}</h2>
    <p>{email}</p>
  </div>
)

// class Card extends Component {
//   // even though there is no constructor React is running it under the hood
//   render() {
//     const { name, id, email } = this.props.monster
//     return (
//         <div className='card-container' key = {id}>
//           <img alt={`monster-${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} ></img>
//           <h2>{name}</h2>
//           <p>{email}</p>
//         </div>
//       )
//   }
// }

export default Card;
