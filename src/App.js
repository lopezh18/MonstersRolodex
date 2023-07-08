import { useEffect, useState, Component } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';


const App = () => {
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredList, setFilteredList] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => (response.json()))
      .then((users) => setMonsters(users))
  }, []) // since we don't want to trigger this fetch again we are passing in an empty array of dependencies


  useEffect(() => {
    const filteredMonsters = monsters.filter((monster) => {
      const name = monster.name.toLowerCase()
      return name.includes(searchField)
    })
    setFilteredList(filteredMonsters)
  }, [monsters, searchField])

  const onSearchChange = ({ target }) => {
    const searchFieldString = target.value.toLowerCase();
    setSearchField(searchFieldString)
  }


  return (
    <div className='App'>
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox className = 'monsters-search-box' placeholder = 'search monsters' onChangeHandler={onSearchChange} />
        <CardList monsters={filteredList} />
      </div>
  )
}
// class App extends Component {
//   // method that says whenever this component is built or instantiated call the constructor method
//   constructor() {
//     // calls any constructor of the extended component - always use the super
//     super();
//     this.state = {
//       monsters: [],
//       searchField: '',
//     }
//     console.log('constructor');
//   }

//   // used for getting everything your component will need
//   componentDidMount() {
//     // every .then that returns a value will return a promise that has been resolved
//     // and the returned value will be the argument of the callback 
//     console.log('componentDidMount');
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then((response) => (response.json()))
//     .then((users) => (
//       this.setState(() => {
//         return { monsters: users }
//       }, () => {
//         console.log(this.state)
//       })
//     ))
//   }

//   // method is only initialized once - not rendered every time render runs
//   onSearchChange = ({ target }) => {
//     const searchField = target.value.toLowerCase();
//     this.setState(() => ({ searchField }), () => {
//       console.log(this.state)
//     })
//   }
//   render() {
//     console.log('render');
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     // always filter with the full list of values so you can update the array as
//     // customers remove values in the search
//     const filteredList = monsters.filter((monster) => {
//       const name = monster.name.toLowerCase()
//       return name.includes(searchField)
//     })

//     return (
//       <div className='App'>
//         {/* <input
//           className='search-box'
//           type='search'
//           placeholder='search monsters'
//           onChange={onSearchChange}
//         /> */}
//         {/* {filteredList.map((monster) => {
//           return (
//             <h1 key = {monster.id}>{monster.name}</h1>
//           )
//         })} */}
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox className = 'monsters-search-box' placeholder = 'search monsters' onChangeHandler={onSearchChange} />
//         <CardList monsters={filteredList} />
//       </div>
//     );
//   }
// }

export default App;
