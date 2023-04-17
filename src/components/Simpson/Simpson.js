import React from 'react';

const Simpson = ({simpson}) => {
    const {id,name,image,info} = simpson;
    return (
        <div>
            <div>id:{id}</div>
            <div>name:{name}</div>
            <p>{info}</p>
            <img src={image} alt={name}/>
        </div>
    );
};

export default Simpson;