var GEmail = /** @class */ (function () {
    function GEmail() {
    }
    GEmail.prototype.CheckEmails = function () {
        console.log("Inbox: Code to view mails received");
    };
    GEmail.prototype.Compose = function () {
        console.log("Send Email : Code to send email");
    };
    GEmail.prototype.LogErrors = function () {
        console.log("Error Logging: Code to log errors");
    };
    GEmail.prototype.SignIn = function () {
        console.log("Login : Code to validate input and navigate to dashboard");
    };
    GEmail.prototype.SignUp = function () {
        console.log("RegisterUser : Code to take input and create user login");
    };
    return GEmail;
}());
var g1 = new GEmail();
g1.SignUp();
g1.SignIn();
g1.Compose();
g1.CheckEmails();
g1.LogErrors();
