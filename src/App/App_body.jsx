import React, {Fragment, useState, useEffect} from 'react';

import Main_menu from '../components/Main_menu';
import Session from '../components/Session';

import Dashboard from './modules/dashboard';
import Clients from './modules/clients';
import Products from './modules/products';
import Stats from './modules/stats';
import Settings from '../components/Settings';


export default function App_Body(props)
{
    // INTERNAL VARs / CONSTs:
    // -----------------------------------------------------------------
    // -----------------------------------------------------------------
    const sections = {
        dashboard: {title: 'Dashboard', section: <Dashboard></Dashboard>},
        clients: {title: 'Clients', section: <Clients></Clients>},
        products: {title: 'Products', section: <Products></Products>},
        stats: {title: 'Analytics', section: <Stats></Stats>},
        settings: {title: 'Settings', section: <Settings></Settings>}
    };

    // STATES:
    // -----------------------------------------------------------------
    // const [state, setState] = useState([val]);
    // -----------------------------------------------------------------
    const [title, setTitle] = useState(sections.dashboard.title);
    const [section, setSection] = useState(sections.dashboard.section);
    
    // ACTIONS:
    const actions = {
        show_section: (args) =>
        {
            const section = sections[args.section];
            if(section)
            {
                setTitle(section.title);
                setSection(section.section);
            }
        },
        select_settings: () =>
        {
            actions.show_section({section: 'settings'});
        }
    };
    // -----------------------------------------------------------------
    // -----------------------------------------------------------------
    
    useEffect(()=>{}, []);
    

    return (
        
        <Fragment>
            <section className='app-body'>
                <section className='main-menu'>
                    <Session api={props.api} logout_addon='login' logout_cmd='logout' settings_callback={actions.select_settings} logout_callback={props.logout_callback} />
                    <hr/>
                    <Main_menu api={props.api} addon='session_menu' cmd='main_menu' scope={props.session._scope} selection_callback={actions.show_section} />
                </section>
                <section className='content'>
                    <header>{title}</header>
                    <section>{section}</section>
                </section>
            </section>
        </Fragment>
    
    );
};
App_Body.defaultProps = {}