using Microsoft.Extensions.DependencyInjection;
using SignalRAssignment.Interface;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalRAssignment.ExtensionMethods
{
    public static class AddServices
    {
        public static void AddConnectionMangerService(this IServiceCollection services)
        {
            services.AddSingleton<IUserConnectionManager, UserConnectionManager>();
        }
    }
}
