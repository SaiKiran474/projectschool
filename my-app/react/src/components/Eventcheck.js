import React from 'react';

function Eventcheck(props) {
    const handleSubmit=()=>{
        console.log("Hello")
    }
    const handleSubmit2=(e)=>{
        console.log("Hello 2",e)
    }
    return (
        <div>
            <input type="number" name="rno" />
            <button type="submit" name="1stbutton" onClick={handleSubmit}>1st</button>

            <button type="submit" name='2ndbtn' onClick={()=>{handleSubmit2("hel")}}>2nd</button>
        </div>
    );
}

export default Eventcheck;