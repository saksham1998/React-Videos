import React from 'react';

const CategoryTile = (props)=>{
    return (
        <button className="large ui button"onClick={()=>props.onclick(props.tile)} style={{margin:'10px 0.5px',borderRadius:'8px'}}>{props.tile}</button>
    )
}

export default CategoryTile