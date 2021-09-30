  //With Single Responsible Principle (Decoupling)
  interface IUser
  {
       SignUp():void;  //User Registration
       SignIn():void;  //User Login
  }
  interface IEmail
  {
      Compose():void;     //To send an email
      CheckEmails():void;  //To receive an email
  }
  interface ILogger
  {
      LogErrors():void;   //To log error
  }
  class GEmail implements IUser, IEmail, ILogger
  {
      public CheckEmails():void 
      {
          console.log("Inbox: Code to view mails received");
      }
      public  Compose():void
      {
          console.log("Send Email : Code to send email");
      }
      public  LogErrors():void
      {
          console.log("Error Logging: Code to log errors");
      }
      public SignIn():void
      {
          console.log("Login : Code to validate input and navigate to dashboard");
      }
      public  SignUp():void
      {

          console.log("RegisterUser : Code to take input and create user login");
      }
  }
  
  
      let g1 = new GEmail();
          g1.SignUp();
          g1.SignIn();
          g1.Compose();
          g1.CheckEmails();
          g1.LogErrors();