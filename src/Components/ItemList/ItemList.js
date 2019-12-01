import React from 'react';
import Item from './Item/Item';
import styles from './ItemList.css';

const ItemList = (props)=> {

    let i = 0;

    return(
        <>
        <div className="ItemList" style={styles}>
        <ul >
        {
            props.list.map(val=>{
               // console.log(i);
                
                

                return <Item

                        keyid={i++}
                        val={val}
                        remove={props.remove}
                        
                />
                })
        }
        </ul>
        </div>
        </>
        
    )
    

}

export default ItemList;