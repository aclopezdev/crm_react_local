import { Net } from "../tools/main_tools";
import { Session } from "./Session";

export class Global
{
    _session = null;
    constructor(){}
}

Global.session = (conf = null)=>
{
    if(!conf) return Global._session;
    Global._session = Session.create(conf);
}

Global.check_session = (api, addon, cmd, callback)=>
{
    Net.send(api, addon, cmd, {}, (resp)=>
    {
        if(callback)
            callback({session: resp.session, logged: resp.logged});
    });
}