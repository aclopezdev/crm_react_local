import React, {Fragment, useState, useEffect} from 'react';

import Main_menu from '../components/Main_menu';
import Session from '../components/Session';


export default function App_Body(props)
{
    // STATES:
    // -----------------------------------------------------------------
    // const [state, setState] = useState([val]);
    // -----------------------------------------------------------------
    const [title, setTitle] = useState('App');
    
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
        
        <Fragment>
            <section className='app-body'>
                <section className='main-menu'>
                    <Session api={props.api} logout_addon='login' logout_cmd='logout' logout_callback={props.logout_callback} />
                    <hr/>
                    <Main_menu api={props.api} addon='session_menu' cmd='main_menu' />
                </section>
                <section className='content'>
                    <header>{title}</header>
                    <section></section>
                </section>
            </section>
        </Fragment>
    
    );
};
App_Body.defaultProps = {}