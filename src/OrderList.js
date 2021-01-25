import React from 'react'
import { Link } from 'react-router-dom'
import "./Orderlist.css"
import axios from "axios"







class OrderList extends React.Component {
    constructor(props){
        super(props)
        this.state={
            items: [],
            isLoaded:false,
        
        }
    }


    componentDidMount(){

        axios.get('http://localhost:3000/orders')
        .then(res=>{
            this.setState({
                isLoaded:true,
                items:res.data,
            })
        })
    }
    render() {
 
        
        return (
            <>
                <h1 >OrderList</h1>
                
                <Link to="/CreateOrder">
                <button class="button1"  >Add new Order</button>
                </Link>

                <input type="text" id="myInput"  placeholder="Search for names.."/>
                <div className="Table">
                <table>
                <tr>
                      <th>Name</th>
                     <th>Order</th>
                   
                        </tr>
                        
                    {this.state.items.map(item=>(<>
                        <tr>
                        <td key={item.id}>{item.Name} </td>
                        <td key={item.id}> {item.OrderName} </td>
                       
                        <td key={item.id}> 
                        <Link to={{pathname: `/ViewOrder/${item.id}`,
                    state: {orderId: item.id ,
                    orderName:item.Name,
                    orderDesc:item.OrderName}}}>
                        <button type="submit">Get Details</button>
                        </Link>&nbsp;
                       
                        
                         </td>
                       
                                
                            
                    </tr>
                        
                    </>))}
                 
                </table>
                </div>

                
                

                
                
             </>
        )}
    
 
}

export default OrderList