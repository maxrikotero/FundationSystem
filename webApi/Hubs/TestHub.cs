using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.AspNet.SignalR;
using Microsoft.AspNet.SignalR.Hubs;

namespace webapi.Hubs
{
    [HubName("test")]
    public class TestHub : Hub
    {
        public void saveconnection(string userid)
        {
            this.Groups.Add(this.Context.ConnectionId, userid);
        }

        public void Test(string userid)
        {
            Clients.Group(userid).test(userid);
        }

        public override System.Threading.Tasks.Task OnConnected()
        {
            return base.OnConnected();
        }

        public override System.Threading.Tasks.Task OnDisconnected(bool stopCalled)
        {
            return base.OnDisconnected(stopCalled);
        }

        public override System.Threading.Tasks.Task OnReconnected()
        {
            return base.OnReconnected();
        }
    }
}