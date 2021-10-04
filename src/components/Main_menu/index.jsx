import React, {Fragment, useState, useEffect} from 'react';


export default function Main_menu(props)
{
    // STATES:
    // -----------------------------------------------------------------
    // const [state, setState] = useState([val]);
    // -----------------------------------------------------------------
    
    // INTERNAL VARs / CONSTs:
    // -----------------------------------------------------------------
    // -----------------------------------------------------------------
    
    // ACTIONS:
    const actions = {
    };
    // -----------------------------------------------------------------
    // -----------------------------------------------------------------
    
    useEffect(()=>{}, []);
    

    return (
        
        <section>
            <button className='btn-material btn-material-large mb-5px'>Dashboard</button>
            <button className='btn-material btn-material-large mb-5px'>Clients</button>
            <button className='btn-material btn-material-large mb-5px'>Products</button>
            <button className='btn-material btn-material-large mb-5px'>Stats</button>
        </section>
    
    );
};
Main_menu.defaultProps = {}