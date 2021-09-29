import { useState, useEffect, Fragment } from 'react';
import { Global } from '../core/Global';
import logo from '../assets/images/logo.svg';
import './App.css';

import Login from '../components/Login';
import Connection_status from '../components/Connection_status';

function App() {

  const api_local = 'http://localhost:2000/kimba_app';
  const api_remote = 'https://aclcode.com/kimba_app';
  const [api, setApi] = useState(api_local);
  const [login, setLogin] = useState(false);

  const actions =
  {
    login_resp: (args)=>
    {
      if(args.logged)
        Global.session(args.session);
      setLogin(args.logged);
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
            <div>logged</div>
            <Connection_status api={api} addon='app' cmd='run' response={actions.app_net_status} />
          </Fragment>
        )}
        
      </header>
    </div>
  );
}

export default App;
