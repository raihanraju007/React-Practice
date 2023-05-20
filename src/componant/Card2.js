import React,{Component} from "react";
import { FaAirbnb, FaAndroid} from "react-icons/fa";

class Card2 extends Component{
    render(){
        return(
            <div>
                <h3>Hello From Card 2 Class Component Example</h3>
                <button>
                    <FaAirbnb />
                </button>
                <span>
                    <FaAndroid />
                    </span>
                {/* <h2>{this.props.name}</h2> */}
            </div>
        )
    }
}
export default Card2;