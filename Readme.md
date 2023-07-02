dotnet new sln (By Default it will create the sln based on the Directory name)
dotnet new webapi -n API (creating a web api with project name API)
dotnet sln add API (adding API project to sln)
 dotnet sln list (To view projects in the solutions)

C# Extension Settings

dotnet run (To run the project)
dotnet run -lp https (running https launch profile)
dotnet watch run (Hot reload)
dotnet ef migrations add IntialCreate -o Data/Migrations -c DataContext (Running the migrations)
dotnet ef database update -c DataContext (creating the table in DB)
dotnet ef migrations add UserPasswordAdded
dotnet ef migrations add usernamerequired
dotnet ef database update

dotnet ef database drop
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
We'll say Sstl for server key And then we can specify that SSL is true.
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

dotnet ef migrations add usernamerequired

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

There is no need to make a database request.
To verify a user's authentication so a user logs in, we issued them with a token.
They keep hold of the token and any time they need to access a protected resource, they present their
token inside an authentication header and to serve is able to verify the token without needing to check
the database or the user is who lazily is because the token is a trusted thing.
And if a user has a claim in there saying that this is their username, then because it's inside that
token that's been signed by the server, then it will trust that that username is the user that's accessing
that resource.

And we're going to store our super secret key that we're going to use to sign our token.
We're going to store that in our configuration.
And in order to get our configuration and inject it into the service, then we need to inject AI configuration

There's two types of keys really used in cryptography.
There's a symmetric key where the same key is used to encrypt the data as is used to decrypt the data.
And since our server is responsible for both signing the token and decrypting the token or the token
key

The other type of key is asymmetric, and that's when your server needs to encrypt something.
And the client also needs to decrypt something.
And on that basis, we have a public and a private key.
The private key stays on the server, but a public key can be used to decrypt the data.
And that's how it works with HTTPS and SSTL.
We have a public and private key.

So that's as simple as it is to specify that you want your endpoints to be authenticated against.
But we need to tell our server how to authenticate.
And to do that, we need to go back to our program class so that we can set this up.
So there's two parts to this There's a service that we need to add and there's middleware we need to use.

LINQ
First or FirstDefault: If the sequence has more than one value for the condition, return the first element.
(Input collection has same user name twice, you want to pick the first one)
Single or SingeorDefault: If the sequence contain matching element returns the value, because we saving the users unique we can use this. (input collection has unique users)

ng g s \_services/account --skip-tests --dry-run;

Observable
So in order to use this, we're going to chain on the pipe.
So we're going to say pipe and an open parentheses.
And inside here we can do something with the observable as it comes back from the API.
And this is going to happen before the component subscription to this particular method.

We're going to need that information elsewhere in other components as well.
And we're going to store the user information as well as in local storage so that we can get that if
the user closes their browser and reopens it, we're also going to create an observable inside our account
service so that other components can use the account service to ascertain whether or not a user is logged
in.
And we're going to use a special kind of observable for this called a behavior subject, which allows
us to give an observable an initial value that we can then use elsewhere in our app.

const user:User = JSON.parse(localStorage.getItem("user")!);
! is
And this effectively turns off typescript safety and useless with care if you're going to use it, because
basically you're saying as a developer you know best and in this case it would be fine to use it because
you could then check to see if you have a user before moving forward with what we're going to do next.

!! use case: If there's a data in the user, it will turn into true, otherwise false.
getCurrentUser(){
this.accountService.currentUser$.subscribe({
next: user => this.loggedIn = !!user,
error: error => console.log(error)
})
}

Unsubscribe to observable, however we don't need to unsubscribe to HTTP because it completes.
we know that our account service is going to make an HTTP request and HTTP requests complete.
And once they complete, you're no longer subscribed to that observable.
So in a case of HTTP requests, then it's not essential to unsubscribe.
But in the case of our own observables, we do want to unsubscribe from them.

ng g m \_modules/shared --flat --dry-run (--flat is used to avoid creating a folder)

The middleware and the middleware, by the way.
Where the app developer exception page would have been would be at the top of our middleware.
So if we have a problem inside any of these other pieces of middleware, then the exception gets thrown
up the chain until it gets to the very top and it's handled by the developer exception page middleware.
But we're kind of overriding that in our code here by handling the exception inside the method itself.

Developer Exception page shows the error in console and send the exception page as response, which we tested using postman.

Creating Custom Middleware
And we're going to call this methods invoke async.
And when I say we're going to call this method, invoke async.
What I really mean here, this method has to be called invoke async because we're relying on the framework
to recognize or we're going to tell our framework that this is middleware.
And the middleware, the framework is going to expect to see a method called invoke async as that's
what it uses to decide what's going to happen next.

Request Delegate
Because middleware goes from one bit of middleware to the next bit of middleware to the next bit of
middleware always calling next.
And that's what this request delegate is. It's what's going to happen after I've done my part.
Who's the next bit of middleware that we need to go onto?

Now, in order to use this middleware, we need to go back to our program class.
And exception handling has to go at the very top of the HTTP request pipeline.

Navigation Extras: (Server Error)
And we'll say refreshing the page will make the error disappear, because if you do refresh the page,
then you're no longer being redirected to this components via the HTTP interceptor.
And the navigation extras will be gone.
We won't have access to them.
We only get access to them when we're being redirected.
And at that point, we're passing the error to the navigation extras.
So only initially will we have access to that information.

EntityFramework Relationship
How to decide we need to have separate DBSet<Table>?
When you want to add a dbSet<Table> the data you can query seprately.
When you don't want to add the DBSet<Table>?
So the question is, do we need to add another DB set for the photos?
Well, we could, but if we think about what we're actually going to be doing with these photos, then
when a user adds a photo, it's going to be added to that specific user.
A user is not going to be able to add photos for other users.
And at no point do we want a photo that's not associated with a user.
We also don't need to query the photos directly either.
We're not going to need to go to the database and say, Hey, can I get this one very specific photo
for a random user?
So based on that, then we don't actually need to create a DB set for the photos because we're not going
to be using that entity to query our database directly on it.
It's always going to be done via the user entity.
But I do like the tables inside the database to be pluralized.

We can update the Database using Entity Framework in two ways
Using Dotnet Cli (dotnet ef migration/updatedatabse)
Writing the code when the application startup, program.cs
using var scope = app.Services.CreateScope();
var services = scope.ServiceProvider;
try
{
var context = services.GetRequiredService<DataContext>();
await context.Database.MigrateAsync();
await Seed.SeedUsers(context);
}
catch (System.Exception ex)
{
var logger = services.GetService<ILogger<Program>>();
logger.LogError(ex,"An error occurred during migration");
}

Eager Loading in Entity Framework
Suppose you have an entity User and Photo, And User entity contains navigation property Photos
When you call this below, by default EF, will not include photos in the list
\_context.Users.ToListAsync()
You need to call explicitly saying (Include), this is called eager loading.

AutoMapper
Inside MappingProfile class
we need to tell auto mapper what we want to go from and what we want to go to.
.Mapper.Map<{GoFrom},{GoTO}>
EG: AppUser is an Enity class and Member Dto
CreateMap<AppUser,MemberDto>();
CreateMap<Photo, PhotoDto>();

Inside UserController Method  
public async Task<ActionResult<IEnumerable<MemberDto>>> GetUsers()
{
var users = await \_userRepository.GetUserAsync();
var usersToReturn = \_mapper.Map<IEnumerable<UserDto>>(users);
return Ok(usersToReturn);
}
[HttpGet("{username}")]
public async Task<ActionResult<MemberDto>> GetUser(string username)
{
var user = await \_userRepository.GetUserByUsernameAsync(username);
return \_mapper.Map<MemberDto>(user);
}
And we're going to set this equal to mapper dot map.
And then we specify what we're going to map into.
And in this case, it's going to be an i enumerable of member DTO.
And then in parentheses, we specify what we're going to use.
And that's going to be the users that we've just got from our repository.

Map to Specific Property in AutoMapper
EG: Created a new photoURL property in MemberDto and mapping it
.ForMember(dest => dest.PhotoUrl,
opt => opt.MapFrom(sourceMember => sourceMember.Photos.FirstOrDefault(x => x.IsMain).Url));

Angular Interceptors
Now, if we're using our interceptor, there's a very good chance that our application is loaded.
So we'll be able to get our token from the account service.
We don't need to fish it out of our local storage because if we're getting to this point, then we've
already done that in our root components and updated our account service.
So we should be good to go inside here.
So we're going to inject our account service into our interceptor and specify account service and inside
the intercept methods and above the return next to handle request, let's make use of our account service.

Trick to unsubscribe
Take(1): Take operator:
And that means when we have what we get back from our account service, that means this subscription
will complete and it will no longer consume resources in our app. So we wouldn't need to physically unsubscribed from this.
this.accountService.currentUser$.pipe(take(1)).subscribe({
next: user => {
if(user){
request = request.clone({
setHeaders:{
Authorization:`Bearer ${user.token}`
}
})
}
}

This is the equivalent of Netflix giving you the option to buy a single movie rather than subscribing
