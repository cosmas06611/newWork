    import React, { useState, useEffect } from 'react';



    const Show = () => {
        const [person, setPerson] = useState({
        fullName: 'cosmas ndulue',
        bio: 'ahsnc kKMKSKZAMx',
        imgSrc: '', 
        profession: 'banker',
        });
        const [show, setShow] = useState(false);
        const [mountTime, setMountTime] = useState(0);
    
        useEffect(() => {
        const intervalId = setInterval(() => {
            setMountTime((prevTime) => prevTime + 1);
        }, 1000);
    
        return () => {
            clearInterval(intervalId);
        };
        }, []);
    
        const toggleProfile = () => {
        setShow((prevShow) => !prevShow);
        };
    
        return (
        <div className="App">
            <button onClick={toggleProfile}>{show ? 'Hide Profile' : 'Show Profile'}</button>
    
            {show && (
            <div>
                <h1>{person.fullName}</h1>
                <p>{person.bio}</p>
                <img src={person.imgSrc} alt={person.fullName} />
                <p>Profession: {person.profession}</p>
            </div>
            )}
    
            <p>Time since mount: {mountTime} seconds</p>
        </div>
        );
    }
    
    export default Show;