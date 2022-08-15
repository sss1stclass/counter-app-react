import React  from "react";

class App extends React.Component{
constructor(props){
    super(props);
    this.state={
        counter:0,
    }
};
handleIncrement = ()=>{
    this.setState({
        counter:this.state.counter+1,
    });
};
handleDecrement = ()=>{
    this.setState({
        counter:this.state.counter-1,
    });
};
handleReset = ()=>{
    this.setState({
        counter:0,
    });
};



    render(){
        return(
        <>
        <center>
            <h1>Let's Build counter App</h1>

            <h2>{this.state.counter}</h2>
            <button onClick={this.handleIncrement}>Increment</button>
            <button onClick={this.handleDecrement}>deccrement</button>
            <button onClick={this.handleReset}>Reset</button>
      
        </center>

        </>
        )
    }
};

export default App;