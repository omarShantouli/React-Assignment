import './App.css';
import {Component} from 'react'
/*
Create a React app with create-react app tool, this app will contain one Component than the App,
in side this component you should render this array of
    [{name: 'Ahmad', age: 30},
    {name: 'Yousef', age: 12},
    {name: 'Shatha', age: 14},
    {name: 'Rana', age: 22},
    {name: 'Osama', age: 22}
    {name: 'Ahmad', age: 38} ]
Which will be passed to this Component as Prop, you should render 2 lists beside each other, a list of Names with title Names, and a list of Ages with title ages,
you should make sure that names and ages inside lists will be unique (no duplication allowed),
no need for Styling
then added a button that will delete all entries from 2 lists one by one 
(every click the last age and the name will be deleted)
*/

function MyComp(props)
{
  var names = props.names;
  var ages = props.ages;
  
  return(
    <div>
      <ul style={{display:'inline-block'}}>
        {
          names.map((item, idx) => 
          {
            return  <li key={idx}>{item}</li>
          })
        }
      </ul>
      <ul style={{display:'inline-block'}}>
        {
          ages.map((item, idx) => 
          {
            return  <li  key={idx}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}



class App extends Component{
  constructor(props)
  {
    super(props);

    var arr =  [{name: 'Ahmad', age: 30},
    {name: 'Yousef', age: 12},
    {name: 'Shatha', age: 14},
    {name: 'Rana', age: 22},
    {name: 'Osama', age: 22},
    {name: 'Ahmad', age: 38} ];


    var names = arr.map((item)=>{
      return item.name;
    })

    names = this.dropDuplicated(names);

    var ages = arr.map((item)=>{
      return item.age;
    })

    ages = this.dropDuplicated(ages);

    this.state = {
      names :  names,
      ages : ages
    }
    
  }

delete = () => {
  this.state.names.pop();
  this.state.ages.pop();
  this.setState({
    names : this.state.names,
    ages : this.state.ages
  })
}

dropDuplicated = (arr) => {

  var temp = [];

  for(var item of arr)
  {
      if(!temp.includes(item))
      {
        temp.push(item);
      }
  }

 return temp;

}

render(){
  return(
    <div>
      <MyComp names={this.state.names} ages={this.state.ages}/>
    <button onClick={this.delete}>Delete</button>
    </div>
  )
}



}

export default App;
