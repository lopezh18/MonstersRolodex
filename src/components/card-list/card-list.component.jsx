import { Component } from 'react';
import Card from '../card/card.component';

import './card-list.styles.css';

const CardList = ({ monsters }) => (
  <div className='card-list'>
    {monsters.map((monster) => <Card monster={monster} key={monster.id}/>)}
  </div>
)


// class CardList extends Component {
//   // even though there is no constructor React is running it under the hood
//   render() {
//     const { monsters } = this.props
//     console.log('render card-list')
//     return (
//       <div className='card-list'>
//         {monsters.map((monster) => <Card monster={monster} />)}
//       </div>
//     );
//   }
// }

export default CardList;
