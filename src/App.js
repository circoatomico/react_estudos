import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  
  // constructor (props) {
  //   super(props);
    
  //   this.handlepClick = this.handlepClick.bind(this);

  //   this.state = {
  //     name: "Luiz Gomes",
  //     counter: 0
  //   }
  // }

  // Javascript class fields
  state = {
    name: "luiz gomes",
    counter: 0,
    posts: [
      {
        id: 1,
        title: "title 1",
        body: "body 1"
      },
      {
        id: 2,
        title: "title 2",
        body: "body 2"
      },
      {
        id: 3,
        title: "title 3",
        body: "body 3"
      }
    ]
  }

  handlepClick = () => {
    // const {name} = this.state;
    console.log('teset')
    this.setState({name: "Anck Su Namun"})
  }

  handleAClick = (event) => {
    
    event.preventDefault();

    const {counter} = this.state; 
    this.setState({counter: counter + 1 })
  }

  render() {
    
    // Desestruturação
    const { name, counter, posts} = this.state
    return (
      <>
       <div className="App">
         <header className="App-header">
           <img src={logo} className="App-logo" alt="logo" />
           <p>
             Edit <code>src/App.js</code> and save to reload.             
           </p>
           <p onClick={this.handlepClick}>
             {name} {counter}
           </p>
           <a
             className="App-link"
             href="https://reactjs.org"
             target="_blank"
             rel="noopener noreferrer"
             onClick={this.handleAClick}
           >
             Learn React
           </a>

            {
              posts.map(post => (
                <div key={post.id}>
                  <h1> {post.title} </h1>
                  <h2> {post.body} </h2>
                </div>
                )
              )
            }

         </header>
       </div>
     </>
    )
  }
}

// function App() {
//   return (
//     <>
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     </>
//   ); 
// }

export default App;
