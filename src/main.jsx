import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'

const styles={
  color:'purple',
  fontSize:20,
  border:'2px solid red'
}

function TestConst(props){
  return (<div>
    <p>testConst:{props.test.join(',')}</p>
    <p>default:{props.defaultTest}</p>
  </div>)
}

class TestClass extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div>
        <p>test2</p>
        <TestConst test={['proptestarr1','proptestarr2','proptestarr3']}/>
        <TestClass2 classProp='classprop'/>
        <p style={{color:'red',fontSize:'72px'}}>styleTest</p>
        <p style={styles}>styleTest2</p>
      </div>
    )
  }
}

class TestClass2 extends React.Component{
  constructor(props){
    super(props)
    this.state={
      stateTest:'stateTest',
      stateTest2:'state2 assigned',
      stateTest3:0
    }
    // this.handleClick=this.handleClick.bind(this)
  }
  // componentDidMount(){} deprecated, runs before adding component to DOM, best for API calls
  // componentWillUnmound(){} runs after component is removed from DOM, best for removing event listeners
  // shouldComponentUpdate(nextProps,nextState){} return true to update
  handleClick=()=>{
    this.setState(state=>({stateTest3:state.stateTest3+1}))
  }
  render=()=>{
    const testArr=[0,1,2,3,4,5,6,7,8,9]
    const testOutput=testArr[this.state.stateTest3%10]
    const stateTest2=this.state.stateTest2
    if(this.state.stateTest3%2){
      return(
        <div>
          <p>{this.props.classProp}</p>
          <p>{this.state.stateTest}</p>
          <p>{stateTest2}</p>
          <p>{this.state.stateTest3}</p>
          <button onClick={this.handleClick}>reassign</button>
          <p>{testOutput}</p>
          <p>displayfalse</p>
          {(this.state.stateTest3%2) && <h1>displayfalse</h1>}
        </div>
      )
    }
    else{
      return(
        <div>
          <p>{this.props.classProp}</p>
          <p>{this.state.stateTest}</p>
          <p>{stateTest2}</p>
          <p>{this.state.stateTest3}</p>
          <button onClick={this.handleClick}>reassign</button>
          <p>{testOutput}</p>
          <p>displaytrue</p>
        </div>
      )
    }
  }
}

TestConst.defaultProps={defaultTest:'defaultTest'}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <TestClass/>
  </React.StrictMode>,
)
