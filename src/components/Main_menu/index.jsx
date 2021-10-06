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
        call_dashboard: ()=>
        {
            props.selection_callback({section: 'dashboard'});
        },
        call_clients: ()=>
        {
            props.selection_callback({section: 'clients'});
        },
        call_products: ()=>
        {
            props.selection_callback({section: 'products'});
        },
        call_stats: ()=>
        {
            props.selection_callback({section: 'stats'});
        }
    };
    // -----------------------------------------------------------------
    // -----------------------------------------------------------------
    
    useEffect(()=>{}, []);

    return (
        
        <section>
            <button className='btn-material btn-material-large mb-5px' onClick={actions.call_dashboard}>Dashboard</button>
            <button className='btn-material btn-material-large mb-5px' onClick={actions.call_clients}>Clients</button>
            <button className='btn-material btn-material-large mb-5px' onClick={actions.call_products}>Products</button>
            {props.scope !== 'regular' ? (<button className='btn-material btn-material-large mb-5px' onClick={actions.call_stats}>Analytics</button>) : <Fragment></Fragment>}
            
        </section>
    
    );
};
Main_menu.defaultProps = {}