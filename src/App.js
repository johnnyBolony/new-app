import React, {Component} from 'react';

import './App.css';
import Input from './Components/Input/Input';
import ItemList from './Components/ItemList/ItemList';

// let objList = [
//     {
//       class: "Item",
//       text: "Test text"
//     }
//   ];

//   console.log(objList);


class App extends Component {

  state={

    list: [],
    key: 0,
    objList : [
      {
        key: 1,
        class: "Item",
        text: "Test text",
        
      }]


  }

  // let objList = [
  //   {
  //     class: "Item",
  //     text: "Test text"
  //   }
  // ];

  componentDidMount(){
    //console.log("test");
    let input = document.getElementById("itemInput");
                input.addEventListener("keyup", function(event) {
                  if (event.keyCode === 13) {
                   event.preventDefault();
                   document.getElementById("myBtn").click();
                  }
                });
  }

  addItem = () => {
    // e.preventDefault();

    console.log(this.state.objList);
    this.setState([...this.state.objList,"aa"]);
    console.log(this.state.objList);

    const {list} = this.state;
    const newItem = document.getElementById("itemInput").value;

    if(newItem===''){

      return;
    }


    document.getElementById("itemInput").value = '';

    this.setState({
      list: [...this.state.list,newItem]
    });


    //console.log("Test");
  }

  


  removeItem = (event)=> {
    //console.log("delete");
    let list = [...this.state.list];
    //console.log(list);
    let index = event.target.value;
    //console.log(index);
    //console.log(event.target.value);
    if(index!==-1){
      list.splice(index,1);
      console.log(list);
      this.setState({list: list});
    }
  }

  render() {
    return(

      <div className="blurred-box">
    <div className="App">
    <h1 className="headline">Johnny's ToDo List</h1>
   <Input click={this.addItem}/>
   <ItemList
    key={this.state.key}
    list = {this.state.list}
    remove={this.removeItem}
   />
   </div>
  </div>



);
    
}

}


export default App;
