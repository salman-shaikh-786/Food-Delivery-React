import React from "react";

class UserClass extends React.Component{

     constructor(props){
        super(props);
        
        this.state={
            count1:0,
            count2:1,
           userInfo:{
            name: "yahya"
           },

        };
     }
async componentDidMount(){
const data= await fetch("https://api.github.com/users/salmanshaikh");
const json=await data.json();

this.setState({userInfo:json});
     }
     

    render()
    
    {const {name,location}=this.props;
        return (<div>
       <h1>COUNT1= {this.state.count1}</h1>
       <button onClick={()=>{
        this.setState({
            count1:this.state.count1+1,
       });
        
       }}>increase the count1</button>
       <h1>COUNT2= {this.state.count2}</h1>
        <h2>Name:{this.state.userInfo.login}</h2>
        <h2>Location:{this.state.userInfo.public_repos}</h2>
            </div>);
    }
}

export default UserClass;