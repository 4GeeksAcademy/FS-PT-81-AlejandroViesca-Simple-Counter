import React from "react";

const Counter = ({number}) =>{
    
    return(
        <div className="counter__body mx-3">
            {number}
        </div>
    );
};

export default Counter;