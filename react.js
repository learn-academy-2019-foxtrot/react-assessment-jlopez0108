// ASSESSMENT 4: REACT ASSESSMENT
// Coding practical questions

// NOTE: In this assessment you will NOT be running a react file structure

// 1. Write a React component that prints "I am a component!" Be sure to include all necessary imports, exports, etc.



// import React, { Component } from 'react';

// class App extends Component{
//   render(){
//     return (
//       <h1>I am a component!</h1>
//     );
//   }
// }

// export default App;




// 2. Refactor this vanilla javascript loop to a map function. The output should remain the same.

var names = ["Ford Prefect", "Arthur Dent", "Trillian", "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

// for(let i=0; i<names.length; i++){
//   console.log(`${names[i]} is ${names[i].length} characters long.`)
// }

names.map((value,index) => { 
console.log(`${names[index]} is ${names[index].length} characters long.`)
})

// I tried to have the same output within a function

const hitchHickersGuide = (array) =>{
  let newArr = array.map((value, index) => console.log(value + " is  "+  value.length + " characters long. "))
    return newArr
}

hitchHickersGuide(names)


// 3. Destructure the following variables out of state.

// this.state = {
//   name: "Dracula",
//   home: "Transylvania",
//   dislikes: ["mirrors", "garlic", "wooden stakes"]
// }

// render() {
//   const {name, home, dislikes} = this.state
   
//   return <h1>{`{name} lives in {home}. He really loaths {dislikes}</h1>
//   }
// }
 

// 4. Write a React method that would add one and update the state of the count each time the method is called.

// this.state = {
//   count: 0
// }

// addOne = () => {
//   this.setState({ count: this.state.count + 1})
//   }
  
// <button onClick={this.addOne}>Add One</button>


// 5. There are four mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

// import React, { Component } from 'react';

// class Recipes extends Component{ 
//   constructor(props){
//     super(props)
//     this.state = {
//       recipes: [{name: 'Meatballs'}, {name: 'Mac & Cheese'}]
//     }
//   }

//   render() {
      // let {recipies} = this.state
      // let recipe = recipes.map(recipe => {
//         return(
//           <li key={recipe.name}>{recipe.name}</li>
//         )
//       })
//     return(
//       <ul>
//         {recipe}
//       </ul>
//     )
//   }
// }
// export default Recipes
