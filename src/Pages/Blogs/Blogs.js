import React from 'react'

const Blogs = () => {
  return (
    <div style={{minHeight: 'calc(100vh - 116px - 74px)'}} className="container">
        <h3 className=' mt-5 secondery-text fw-bold text-center'>BLOGS</h3>
        <hr></hr>
        <div className='secondery-bg py-3 px-2 shadow rounded-lg mb-3'>
          <h3 className='primary-text fs-4' >Difference Between JavaScript and Node Js.?</h3>
          <p className='secondery-text fw-bold' style={{textAlign:"justify"}} ><small>JavaScript  is a programming language but node JS is not a language its a Runtime environment.Javascript used for client side,  Node JS work on server side.Node Js run on V8 engine but javascript run on various engine. We can run javascript only on browser but Node JS can run JS outside of browser. javascript  can do DOM manipulation  but node js is not capable of it.</small></p>
        </div>
        <div className='secondery-bg py-3 px-2 shadow rounded-lg mb-3'>
          <h3 className='primary-text fs-4' >When should you use nodejs and when should you use mongodb?</h3>
          <p className='secondery-text fw-bold' style={{textAlign:"justify"}} ><small>Node JS is Runtime environment for js.It is used in server side. node js can do many operations in backend. but it needs a database to store data in backend.Mongo DB provide database service.  so we need mongo DB when We need to store data in backend so that we can re use those datas and if we dont need to store anything in backend and need some server side work Node js will do it for us.</small></p>
        </div>
        <div className='secondery-bg py-3 px-2 shadow rounded-lg mb-3'>
          <h3 className='primary-text fs-4' > Differences between sql and nosql databases?</h3>
          <p className='secondery-text fw-bold' style={{textAlign:"justify"}} ><small>SQL is relational database system,  noSQL is a non- relational database system.  sql is a table based database, no sql is a document based database system.sql scaled vertically and nosql database  scaled horizontal. sql schema is fixed but nosql schema is dynamic.mysql is a example of sql database mongodb is a nosql database.</small></p>
        </div>
        <div className='secondery-bg py-3 px-2 shadow rounded-lg mb-3'>
          <h3 className='primary-text fs-4' >What is the purpose of jwt and how does it work?</h3>
          <p className='secondery-text fw-bold' style={{textAlign:"justify"}} ><small>JWT or JSON web token is used for sharing private information between server and client.  JWT used for many reason, like for authentication and authorization.  for example checking if a user has right to access some resource from server or db.

          <br></br>how JWT works:<br></br>
the server generate a token for user which contain some data by which server can understand if user authorized, and send that token to user. user send that token with request to server each time if user want to access any protected data. That token is verified by server and send data if token is valid.</small></p>
        </div>
      </div>
  )
}

export default Blogs