import {Component} from 'react'
class FormEdit extends Component{
   
    constructor(props){
        super(props)
        this.state={first:this.props.first, last:this.props.last, newFirst:"",newLast: "",edit:this.props.edit}
    }
    change=()=>{
        this.setState({first:this.state.newFirst,last:this.state.newLast})
        this.editor();
    }
    handlefirst=(event)=>{
        this.setState({newFirst:event.target.value})
        
    }
    handlelast=(event)=>{
        this.setState({newLast:event.target.value})
    }
    editor=(event)=>{
        if(this.state.edit)
        this.setState({edit:false})
        else  
        this.setState({edit:true})
    }
    render(){
        if(this.state.edit){
        return  <div>
            <p>First name: {this.state.first}</p>
            <p>Last name: {this.state.last}</p>
            <button onClick={this.editor}>Edit</button>
        </div>}
        else{
            return <div>
                <input type="text" name="first" onChange={this.handlefirst} />
                <input type="text" name="last" onChange={this.handlelast}/>
                <button type="submit" onClick={this.change}>Submit</button>
                <button onClick={this.editor}>Cancel</button>
            </div>
        }

    }

}
export default FormEdit
