import React from 'react';
import logo from '../logo.svg';


//Arrow Function in ES6
//Stateless component , dump component
//Lifecycle을 타지 않음 
const Header = props => { //이런식으로 하면 String 값이 아닌 Object 값으로 온다
	console.log(props); //props는 하나의 매개변수로 받아온다.
	console.log(props.name) //사용할 때에는 이렇게 쓰기.
	console.log(props.foo)

	// ES5
	// const name = props.name;
	// const foo = props.foo;

	// ES6
	 const{name,foo} = props;

	return (
		<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
		<div>
			My name is {name}. {foo}
		</div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
	)	
}


// function Header(){
// 	return (
// 		<header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
// 	)	
// }

export default Header;