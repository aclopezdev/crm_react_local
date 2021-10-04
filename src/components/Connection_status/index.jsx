import React, {Fragment, useState, useEffect} from 'react';
import { Net } from '../../tools/main_tools';
import './main.scss';

export default function Connection_status(props)
{
    // INTERNAL VARs / CONSTs:
    // -----------------------------------------------------------------
    // -----------------------------------------------------------------
    let internet = window.navigator.onLine;

    const lb_hide = {
        display: 'none'
    }
    const lb_show = {
        display:'block',
        position:'fixed',
        top:'0px',
        left:'0px',
        width:'100%',
        height:'100%',
        'z-index':'1000'
    }



    // STATES:
    // -----------------------------------------------------------------
    // const [state, setState] = useState([val]);
    // -----------------------------------------------------------------
    const [status, setStatus] = useState(true);
    const [server_sync, setServer_sync] = useState(props.server_sync || 10);
    const [sync_temp, setSync_temp] = useState(props.sync_temp || 1000);
    const [server_attempts, setServer_attempts] = useState(0);
    const [server_max_attempts, setServer_max_attempts] = useState(2);
    const [sync, setSync] = useState(null);
    const [checker_lb_styles, setChecker_lb_styles] = useState(lb_hide);
    const [checker_txt, setChecker_txt] = useState('');
    const [checker_view, setChecker_view] = useState('');
    
    // ACTIONS:
    const actions = {
        start_sync: ()=>
        {
            let cont_sync = 0;
            setSync(window.setInterval(()=>
                {
                    internet = window.navigator.onLine;
                    if(!internet)
                        return actions.ping_error();
                    else
                        actions.ping_ok();
                        
                    if(cont_sync % server_sync === 0)
                    {
                        cont_sync = 0;
                        if(server_attempts >= server_max_attempts)
                            actions.ping_error();
                        else
                            setServer_attempts(server_attempts + 1);
                        actions.ping();
                    }
                    cont_sync++;
                }, sync_temp));
        },
        ping: ()=>
        {
            Net.send(props.api, props.addon, props.cmd, {}, null, actions.ping_ok, null, actions.ping_error);
        },
        ping_ok: (resp)=>
        {
            if(resp !== undefined && resp !== null)
                setServer_attempts(0);
            if(server_attempts === 0)
            {
                setChecker_lb_styles(lb_hide);
                setStatus(true);
                setChecker_view(internet ? 'on' : 'off');
                setChecker_txt(internet ? 'Connected' : 'No internet connection');
            }else if(server_attempts < server_max_attempts){
                setChecker_view('check');
                setChecker_txt(internet ? `Connecting with server: ${server_attempts}` : 'No internet connection');
            }
            actions.response();
        },
        ping_error: (resp)=>
        {
            setChecker_lb_styles(lb_show);

            setStatus(false);
            setChecker_view('off');
            setChecker_txt(internet ? `No connection with server` : 'No internet connection');

            actions.response();
        },
        response: ()=>
        {
            if(props.response)
                props.response({
                    internet: internet,
                    status: status
                });
        }
    };
    // -----------------------------------------------------------------
    // -----------------------------------------------------------------
    
    useEffect(()=>{
        actions.start_sync();
    }, []);
    

    return (
        
        <section className='Connection-status'>
			<div className={`status-bbox status-${checker_view}`}>
				<p>{checker_txt}</p>
			</div>
			<div className='conn-validator' style={checker_lb_styles}></div>
		</section>
    
    );
};
Connection_status.defaultProps = {}