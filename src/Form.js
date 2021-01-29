import React,{Component} from "react"
import axios from 'axios';



    class Form extends Component {
        constructor(props) {
            super(props);
            this.state = {
          
              Name: "",
              OrderName: "",
              Price:"",
              
            
            };
          }

         
          changeHandler = (e) => {
            this.setState({
              [e.target.name]: e.target.value,
            });
          };
        
          submitHandler = (e) => {
            e.preventDefault();
            console.log(this.state);
            axios.post("http://localhost:3000/orders", this.state)
              .then((response) => {
              
                console.log(response);
              })
              .catch((error) => {
                
                console.log(error);
              });
          };
        
    
        render() {
             return (
                  <form onSubmit={this.submitHandler}>
                         <label htmlFor='Name'>Name </label>
                         <input type='text' id='name'onChange={this.changeHandler} name='Name'/>
                         <br/>
                         <label htmlFor='Order'>OrderName</label>
                         <input type='text' id='Order'onChange={this.changeHandler} name='OrderName'/>
                         <br/>
                         <label htmlFor='Price'>Price</label>
                         <input type='text' id='Price'onChange={this.changeHandler} name='Price'/>
                         
                         <br/>
                         <br/>
                         <button type="submit" >Submit</button>&nbsp;
                         <button type="reset" >Reset</button>
                         
                    </form>
    
                
            )
        }
    }




export default Form