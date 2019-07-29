using System.Web;
using System.Web.Mvc;

namespace WebApi
{
#pragma warning disable CS1591 // Missing XML comment for publicly visible type or member
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
