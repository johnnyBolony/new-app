import React, {Component} from 'react';
import styles from './Item.css';

class Item extends Component {

    state = {
        class : "Item"
    }

    doneItem = ()=> {
        const newClass = "Done";
        this.setState({class:newClass});
        console.log(this);
    }

    render(){
        return(
            <div className={this.state.class} style={styles}>{this.props.val} 
            <div  className="btnContainer">

            <button onClick={this.props.remove} value={this.props.keyid} className="btn">X</button>
            </div>
            
        
            </div>
            )
    }
    

}

// {<button className="btn" onClick={this.doneItem}>V (done}</button>}
export default Item;