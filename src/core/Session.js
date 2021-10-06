export class Session
{
    _username = '';
    _token = '';
    _first_name = '';
    _last_name = '';
    _email = '';
    _plan = '';
    _scope = '';

    constructor(conf)
    {
        this._user_name = conf.username;
        this._token = conf.token;
        this._first_name = conf.first_name;
        this._last_name = conf.last_name;
        this._email = conf.email;
        this._scope = conf.scope;
    }

    clear()
    {
        this._user_name = '';
        this._first_name = '';
        this._last_name = '';
        this._email = '';
        this._plan = '';
        this._scope = '';
    }
}

Session.create = (conf)=>
{
    return new Session(conf);
}