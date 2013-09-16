using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Microsoft.Web.WebPages.OAuth;
using GLM_EED.Models;

namespace GLM_EED
{
    public static class AuthConfig
    {
        public static void RegisterAuth()
        {
            // To let users of this site log in using their accounts from other sites such as Microsoft, Facebook, and Twitter,
            // you must update this site. For more information visit http://go.microsoft.com/fwlink/?LinkID=252166

            //OAuthWebSecurity.RegisterMicrosoftClient(
            //    clientId: "0000000048103B7E",
            //    clientSecret: "jf74p1tZMh6wGcsIGQJdBGmTbcTSlAok");

            //OAuthWebSecurity.RegisterTwitterClient(
            //    consumerKey: "",
            //    consumerSecret: "");

            //OAuthWebSecurity.RegisterFacebookClient(
            //    appId: "",
            //    appSecret: "");

            Dictionary<string, object> gglm = new Dictionary<string,object>();
            gglm.Add("Icon", "/Images/Login/glm.png");
            gglm.Add("Email", "titoagudelo@glm.edu.co");

            OAuthWebSecurity.RegisterGoogleClient("Gimnasio La Montaña", gglm);
            
            //OAuthWebSecurity.RegisterGoogleClient();
        }
    }
}
