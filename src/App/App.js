import { useState, useEffect, Fragment } from 'react';
import { Global, Api_conf } from '../core/Global';
import logo from '../assets/images/logo.svg';
import './App.css';

import Login from '../components/Login';
import Connection_status from '../components/Connection_status';
import App_Body from './App_body';

function App() {

  const [api, setApi] = useState( Global.debug_mode() ? Api_conf._local : Api_conf._remote);
  const [login, setLogin] = useState(false);

  const actions =
  {
    login_resp: (args)=>
    {
      if(args.logged)
        Global.session(args.session);
      setLogin(args.logged);
    },
    logout_resp: (args)=>
    {
      Global.clean_session();
      setLogin(false);
    },
    app_net_status: (args)=>
    {
    }
  };

  useEffect(()=>
  {
    Global.check_session(api, 'login', 'check_session', actions.login_resp);
  });

  return (
    <div className="App">
      <header className="App-header">
        {!login ? (
          <Fragment>
            <Login api={api} addon='login' cmd='try' response={actions.login_resp} />
          </Fragment>
        ):(
          <Fragment>
            <Connection_status api={api} addon='app' cmd='run' response={actions.app_net_status} />
            <App_Body api={api} logout_callback={actions.logout_resp}/>
          </Fragment>
        )}
        
      </header>
    </div>
  );
}

export default App;
