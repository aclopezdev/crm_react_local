import React, {Fragment, useState, useEffect} from 'react';

import { Global } from '../../core/Global';
import { Net } from '../../tools/main_tools';

import SVGuser from './../../assets/icons/standard_user.svg';
import SVGgear from './../../assets/icons/gear.svg';
import SVGsettings from './../../assets/icons/settings.svg';

import scss from './main.scss';


export default function Session(props)
{
    const session = Global.session();
    // STATES:
    // -----------------------------------------------------------------
    // const [state, setState] = useState([val]);
    // -----------------------------------------------------------------
    
    // INTERNAL VARs / CONSTs:
    // -----------------------------------------------------------------
    // -----------------------------------------------------------------
    
    // ACTIONS:
    const actions = {
        logout: ()=>
        {
            Net.send(props.api, props.logout_addon, props.logout_cmd, {
                token: session._token
            }, (resp)=>
            {
                if(props.logout_callback)
                    props.logout_callback({session: {}, logged: false});
            });
        }
    };
    // -----------------------------------------------------------------
    // -----------------------------------------------------------------
    
    useEffect(()=>{}, []);
    

    return (
        
        <section>
            <section className='session-profpicture-bbbox'>
                <img src={SVGuser} />
            </section>
            <section>
                <p>{session._username}</p>
                <p>{session._first_name}</p>
                <p>{session._last_name}</p>
                <p>{session._email}</p>
            </section>
            <section>
                <button className='btn-material btn-material-ico' onClick={props.settings_callback}><img src={SVGsettings} /></button>
                <button className='btn-material btn_material_red' onClick={actions.logout}>Logout</button>
            </section>
        </section>
    
    );
};
Session.defaultProps = {}