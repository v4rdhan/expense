import React from 'react';
import './input.css';

export default function Input({type, className, id, ariadescribedby, children}) {
    return (
        <>
            <div className='labelAction width-100 d-flex flex-column justify-content-center align-items-start mt-5'>
                <input type={type} className={className} id={id} aria-describedby={ariadescribedby} />
                <label htmlFor="exampleInputEmail1" className="formLabel" >{children}</label>
            </div>
        </>
    )
}
