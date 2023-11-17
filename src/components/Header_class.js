import react from "react"; 
class Header extends React.Component
{
constructor(props)
{
    super(props)
    this.state={count:0}//initialization count to 0
} 
high=()=>{
    this.setState((prevState)=>({
        count:prevState.count+1,
    }))
}
render()
{
    return(
        <div>
            <button onClick={this.high}>Increment</button>
            <span>{this.state.count}</span>
        </div>
    )
}
}
export default Header