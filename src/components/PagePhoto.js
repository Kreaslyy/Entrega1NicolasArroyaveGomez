import React from 'react';


export const GiffPageInit = ({message}) => {
    return (
        <main className='body-content--page'>
            <img src="/img/tdea.png" alt="" className="body-contnet--imgPreview" /> 
            <p className='body-contnet--subtitle'> { message} </p>
        </main>
    )
}
    