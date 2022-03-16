import logo from './logo.svg';
import './App.css';
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
