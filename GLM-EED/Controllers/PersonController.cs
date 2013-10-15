using System;
using GLM_EED.Models;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace GLM_EED.Controllers
{
    public class PersonController : ApiController
    {
        Person[] persons = new Person[]
        {
            new Person {Id = 1, Email = "tito@glm.edu.co", Provider = "google"},
            new Person {Id = 5, Email = "danielmorenog@glm.edu.co", Provider = "google"},
            new Person {Id = 2, Email = "tito@gmail.com", Provider = "google"},
            new Person {Id = 3, Email = "tito@yahoo.com", Provider = "microsoft"},
            new Person {Id = 4, Email = "tito@hotmail.com", Provider = "yahoo"},
            new Person {Id = 6, Email = "alferrand@yahoo.com", Provider = "yahoo"}

        };

        [HttpGet]
        public IEnumerable<Person> GetAllPerson()
        {
            return persons;
        }

        [HttpGet]
        public Person GetPersonByEmail(String email)
        {
            var person = persons.FirstOrDefault((p) => p.Email == email);
            if (person == null)
                return null;
            else
                return person;
        }

        //public Person GetPersonById(int Id)
        //{
        //    var person = persons.FirstOrDefault((p) => p.Id == Id);
        //    if (person == null)
        //    {
        //        throw new HttpResponseException(HttpStatusCode.NotFound);
        //    }
        //    return person;
        //}
    }
}
