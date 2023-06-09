dotnet new sln (By Default it will create the sln based on the Directory name)
dotnet new webapi -n API (creating a web api with project name API)
dotnet sln add API (adding API project to sln)
 dotnet sln list (To view projects in the solutions)

C# Extension Settings







dotnet run (To run the project)
dotnet run -lp https   (running https launch profile)
dotnet watch run (Hot reload)
dotnet ef migrations add IntialCreate -o Data/Migrations -c DataContext (Running the migrations)
dotnet ef database update -c DataContext (creating the table in DB)
dotnet ef migrations add UserPasswordAdded 
dotnet ef migrations add  usernamerequired
dotnet ef database update  


Pro Tip: Using the command line check what are the options available
dotnet ef -h
dotnet ef database -h

Linq
users. Find(id): find method works with primary key, if we want to use "username" to get the user, we need to user other linq extension method

Async and Wait
And that's the case with asynchronous code, If we make this asynchronous, sure, we make our requests to the database, but then that gets passed, on to a different thread known as a delegate.
And in the meantime, that thread can get on the business of handling other requests, maybe to get
to the database and get other queries or whatever it needs to do because we have requests coming in
Now, once the database has fulfilled its part of the request, then it will notify the original thread
that this request came in on. And then that request can go and pick up the response from the database server and return it to the requesting client. to the web server. But it isn't blocked whilst it's waiting for the database to return.

SSL Certificate
We'll say Sstl for server key  And then we can specify that SSL is true.
And when we run our app again, it's going to use this configuration to serve our application over HTTPS
using this certificate.
Click next and place all certificates in the following store and trusted route certification authorities.
So even though this certificate is not signed by a trusted Route certification authority, that's where
we're going to put it, because that way our browser will trust the certificate and it won't give us
any nasty warnings.

To disabel hot reload
dotnet watch --no-hot-reload

dotnet ef migrations add UserPasswordAdded

using var hmac = new HMACSHA512(); // creates the instance and returns the randomly generated key
This randomly generated key used for PasswordSalt

DTO: using DTO we could send the data from the body and controller endpoint ( maps that object to the controller endpoint)
And in order for our API controller to bind to that object, then this has to be an object.
And that would be one reason to use a DTO is so that we can get data from the body of a request.

dotnet ef migrations add  usernamerequired

User login (client and API server)
Now, this doesn't mean that they're logged in, because when we use an API server and a client in this
way, our client does not maintain a session with our API server.
There's no state remembered between what our API server sends back and what our client has.
We need something that our API server can authenticate against so that it can trust the user that's
apparently logged in.
And in order to do that with an API server, we need to take a look at an access token and we're going
to take a look at JSON web tokens as our method of authentication and we'll take a look at that next.

Now, tokens are a good thing to use with an API because they're small enough to send with every single
request.


LINQ
First or FirstDefault: If the sequence has more than one value for the condition, return the first element.
(Input collection has same user name twice, you want to pick the first one)
Single or SingeorDefault: If the sequence contain matching element returns the value, because we saving the users unique we can use this. (input collection has unique users)










