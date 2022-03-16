import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';


const number = 5555; 
const singers = [
  {name: 'Dr. Mahfuz', job: 'Singer'},
  {name: 'Eva Rahman', job: 'Singer2'},
  {name: 'Agun', job: 'sopno'},
  {name: 'shuvro', job: 'pathor'}
]


const singerStyle= {
  color: 'white',
  backgroundColor: 'black',
  border: '5px solid yellow',
  margin: '30px',
  width: '40%'
}

function App() {
  const nayoks = ['Rubel', 'BappaDa', 'Kuber', 'Jashim', 'Salman Shah', 'Riyaz', 'Anwar'];
  return (
    <div className="App">
        <Counter/>
        <ExternalUsers/>






       <h1>The number is {number}</h1>
       {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}

      {
        singers.map(singer => <Person name={singer.name}></Person>)  //name ta na dile output ashe nah
      }

      {/* <Person name={nayoks[0]} nayika="moushumi"></Person>
      <Person name={nayoks[1]} nayika="cheka"></Person>
      <Person name ={nayoks[2]} nayika="Kopila"></Person> */}
      <h5>New component. YAY</h5>
      <p id="totocompany">rock mama React mama.</p>
      <Friend movie="Shingam" phone="01777"></Friend>
      <Friend phone="01999"></Friend>
    </div>
  );
}

function ExternalUsers(){
  const [users, setUsers] = useState([]); //useState a default value dewa lage
  //  useEffect(,[])
  //  useEffect( ()=>{},[])
  // const myfunct = () =>{}  ==> anonymous function
   useEffect( ()=>{
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(rest =>rest.json())
    //  .then(data => console.log(data))
     .then(data => setUsers(data))
   },[])

  return(
    <div>
        <h1>External users</h1>
        <p>{users.length}</p>
        {users.map(user => <User name ={user.name} email = {user.email}></User>)}
    </div>
  )
}
function User(props){
  console.log(props)
  return(
    <div style = {{border: '2px solid red', margin:'20px'}}>
      <h3>{props.name}</h3>
      <p>{props.email}</p>
    </div>
  )
}



function Counter(){
  // const abc = useState(0);
    // console.log(abc)
  const [count , setCount]  = useState(0);
  // ========  first way =========
//  const increaseCount = () =>{
//       const newCount = count + 1;
//      // setCount = newCount;//ai line ta hobe na couse setCount func jeita useState dei so parameter hishebe newa lagbe
//      setCount(newCount);
//  }

// ===================  second way ======
 const increaseCount = () => setCount(count+1)
 const decreaseCount = () => setCount(count-1)

 return(
   <div>
       <h1>Count: {count}</h1>
       <button onClick={increaseCount}>Increase</button>
       <button onClick={decreaseCount}>Decrease</button>

   </div>

 )
}




function Person(props){
  console.log(props)
  return (
    <div style={singerStyle} className="person">
      <h1>{props.name}</h1>
      <p>{props.nayika}</p>
  </div>
  )
}

function Friend(props){
  // console.log(props);
  return (
    <div className='container'>
      <h3>Name: {props.movie}</h3>
      <p>phone: {props.phone}</p>
    </div>
  )
}


export default App;
