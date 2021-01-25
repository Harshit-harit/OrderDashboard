import React from 'react'
import axios from "axios"


class ViewOrder extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            Price: ''

        }
    }
orderId = this.props.location.state.orderId

// delete=()=> {
	
// 	axios.delete(`http://localhost:3000/orders/${this.state.id}`)
// 	.then(res => console.log(res.data));
// }
changeHandler = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
    
      submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios.put(`http://localhost:3000/orders/${this.orderId}`, this.state)
        .then(res => console.log(res.data));
        
      };
    

componentDidMount() {
    axios.get(`http://localhost:3000/orders/${this.orderId}`).then(response => {
        this.setState({
           
            Price: response.data.Price,
            Name:response.data.Name,
            OrderName:response.data.OrderName
        })
    })
}




    render() {
        return (
            <>

            <h1>View Order</h1>
           
            {/* <p style={{color:"black"}}>{this.state.price}</p> */}
            <form onSubmit={this.submitHandler}>
                         <label htmlFor='Name'>Name </label>
                         <input type='text' id='name'onChange={this.changeHandler} name='Name' defaultValue={this.state.Name}/>
                         <br/>
                         <label htmlFor='Order'>OrderName</label>
                         <input type='text' id='Order'onChange={this.changeHandler} name='OrderName' defaultValue={this.state.OrderName}/>
                         <br/>
                         <label htmlFor='Price'>Price</label>
                         <input type='text' id='Price'onChange={this.changeHandler} name='Price' defaultValue={this.state.Price}/>
                         
                         <br/>
                         <br/>
                         <button type="submit" >Submit</button>
                    </form>
     
                </>
            
        )
    }
}

export default ViewOrder 