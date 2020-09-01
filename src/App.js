import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id: '1', name:"vicky",age:30},
      {id: '2', name:"Rocky",age:32},
      {id: '3', name:"vicky don",age:31}
    ],
    otherState: 'some other value',
    showPerson: false
  }

  // SwitchNameHandeler = (event) =>{
  //   // console.log("fuck u dk")
  //   // this.state.persons[0].name = "maxmilian";
  //   this.setState({
  //     persons: [
  //       {name:event.value,age:30},
  //       {name:"Rocky",age:32},
  //       {name:"vicky don",age:30}
  //     ]
  //   })
  // }

  nameChangeHandler = (event,id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })
    const person = {
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({}, this.state.persons[personindex])
    person.name = event.target.value;
    const personsr = [...this.state.persons];
    personsr[personIndex]=person
    this.setState({
      persons: personsr 
    })
  }

  toggelPersonHandler = () =>{
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson:!doesShow
    });
  }

  deletePersonHandler = (personIndex) => {
    // const personsr = this.state.persons.slice();
    const personsr = [...this.state.persons];
    personsr.splice(personIndex,1);
    this.setState({persons:personsr})
  }

  render(){
    const style = {
      backgroundColor: 'White',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      corsor: 'pointer'
    }
    
    let personal = null;
    if (this.state.showPerson){
      personal = (
        <div > 
          {
            this.state.persons.map((person, index) =>{
              return <Person 
                click={() => this.deletePersonHandler(this)} 
                name={person.name}
                age = {person.age}
                key = {person.id}
                changed = {(event) => this.nameChangeHandler(event, person.id)}
                />
           })
          }
        
        {/* <Person name={this.state.persons[1].name} age={this.state.persons[1].age} changed = {this.nameChangeHandler} /> */}
        
      </div>
      );
    }

    return (
      <div className="App">
          <h1>Hi I am vicky</h1>
          {/* <button onClick={() => this.SwitchNameHandeler("Baap Aaay")}>Switch Name</button> */}
          {/* <button  style={style} onClick={this.SwitchNameHandeler.bind(this,"Baap Aaay")}>Switch Name</button> */}
          <button   style={style} onClick={this.toggelPersonHandler}>Show Name</button>
          {/* {this.state.showPerson === true?  */}
          {personal}
          {/* :null
          
          } */}
      </div>
    );
  }
}

export default App;
