using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(InfoSite.Startup))]
namespace InfoSite
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
