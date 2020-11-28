import React, {Component} from 'react'
import { Button } from 'react-bootstrap';
export default class Recipe extends Component{
    render(){
        let {canShow, soda, ices, addBeer} = this.props;
        
        if(canShow) {
            return(
                <div className = "m-auto text-center p-4" style={{backgroundColor:"rgba(197, 168, 155, 1)"}}>
                  <p>Recipe:</p>
                  <p>In a glass mug, add one scoop of each of these ice creams - {ices.join()}.</p>
                  <p>Fill up the mug with {soda} root beer. Enjoy!</p>
                  <br></br>
                  <h3>Love this recipe? Add it to your cart!</h3>
                  <p>We cannot guarentee the ice cream will be melted or not, but it will taste good!</p>
                  <Button color = "dark" onClick={addBeer}>Add to cart</Button>
                </div>
            );
        }else{
            return(
                <>
                </>
            );
        }
    }
}