import React, {Fragment, useState, useEffect} from 'react';
import { Net, MD5 } from '../../tools/main_tools';
import './main.scss';


export default function Login(props)
{
    // STATES:
    // -----------------------------------------------------------------
    // const [state, setState] = useState([val]);
    // -----------------------------------------------------------------
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');
    const [response, setResponse] = useState('');
    
    // INTERNAL VARs / CONSTs:
    // -----------------------------------------------------------------
    // -----------------------------------------------------------------
    
    // ACTIONS:
    const actions = {
        set_username: (ev)=>
        {
            setUsername(ev.target.value);
        },
        set_pass: (ev)=>
        {
            setPass(ev.target.value);
        },
        login: (ev)=>
        {
            ev.preventDefault();
            Net.send(props.api, props.addon, props.cmd, {
                username: username,
                pass: MD5(pass)
            }, null, actions.login_success, null, actions.login_error);
        },
        login_success: (resp)=>
        {
            setResponse('');
            setPass('');
            setUsername('');
            if(props.response)
            props.response({session: resp.session, logged: true});
        },
        login_error: (resp)=>
        {
            setResponse(resp.message);
            setPass('');
            if(props.response)
                props.response({session: resp.session, logged: false});
        }
    };
    // -----------------------------------------------------------------
    // -----------------------------------------------------------------
    
    useEffect(()=>{}, []);
    

    return (
        
        <section>
            <p>Start session</p>
            <form onSubmit={actions.login}>
                <div>
                    <p>User name:</p>
                    <input type='text' value={username} onChange={(ev)=>{setUsername(ev.target.value)}} onKeyUp={actions.set_username}></input>
                </div>
                <div>
                    <p>Password:</p>
                    <input type='password' value={pass} onChange={(ev)=>{setPass(ev.target.value)}} onKeyUp={actions.set_pass}></input>
                </div>
                <div>
                    <input type='submit' value='Login'></input>
                </div>
                <div>
                    <button className='btn-link'>Forgot the password?</button>
                </div>
            </form>
            {response !== '' ? (<p>{response}</p>) : <div></div>}
        </section>
    
    );
};
Login.defaultProps = {}