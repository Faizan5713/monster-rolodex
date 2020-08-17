import React from 'react';
import './App.css';
import CardList from './compcard';
import SearchBox from './searchbox';


class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      monster: [],
      searchField: "",
    };
  }
  handleSearchChange = (e) =>{
    this.setState({ searchField: e.target.value});
  };
  componentWillMount(){
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(responce => responce.json())
    .then(users => this.setState({monster: users}));
  }
  render(){

    const{ monster, searchField } = this.state;
    const filteredMonsters = monster.filter((e) => {
      return e.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return(
      <div className= "App">
        <SearchBox handleChange={this.handleSearchChange} placeholder="search"></SearchBox> 

        <CardList monster={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;