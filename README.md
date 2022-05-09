## **Authentication system using NextJS and Firebase**

This mini project has user authentication functionalities like registering new user and signing in existing user.

I have used **NextJS**(production ready react framework) in frontend, google **firebase** for handling authentication, **TailwindCSS** and **MaterialUI** for styling and to make web application **responsive** 

### Google Firebase

Google Firebase is a Google-backed application development software that enables developers to develop iOS, Android and Web apps. 
It provides lots of features like handling authentication, realtime database, storage facility, hosting and many more..
Talking about authentication, it provides multiple ways to authenticate users like using email and password, using social media accounts like facebook, github etc, it also provides features like passwordless authentication using email.
But in this project I have only used authenticating user by email and password.
When user registers with email and password, firebase generates access token and send it to the client and save the user information.
For more information visit this link: https://bit.ly/3vU5pyO

### TailwindCSS and MaterialUI
I have used modern tools like **TailwindCSS** and **MaterialUI** for styling and making website responsive. 


### State Management using Context API
When user logs in, firebase sends access token and user information to the client. but it is not persistable. when user refresh the page, the token and user information will be lost. As a result, user needs to login on each refresh which is not good user experience.

To overcome this,I have used **Context API** which is inbuilt feature of ReactJS(NextJS is framework of ReactJS) instead of redux or recoil. Context API does not need any middleware to make api calls or to handle asynchronous requests. On the other hand redux needs some middlewares like **redux thunk** or **redux saga** to handle asyncrhronous requests.

Now whenever user refreshes the page, token and user information is still available in the global state. 

You can check this project here : https://nextjs-firebase-authentication-5fv7oq1ix-aneesharama.vercel.app/


