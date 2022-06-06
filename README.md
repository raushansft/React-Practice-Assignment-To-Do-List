Assignment : Link : https://course.masaischool.com/assignments/11856/problem/26208

REACT PRACTICE CONTEST - 1
Create a react application;
Your application should contain A profile component on left hand side and a Todo List component on right hand side;
Profile Component :
Profile component can contain details about a user; You can have profile details like image, name, age, location, organisation of user;
Profile Component should have two button Increase Age and Decrease Age with which user can increase or decrease the age;
Profile Component should also contain a button Show More Details clicking on which should showcase more details and can be toggled; If details are being shown; the button text should be Hide More Details and vice versa;
TodoList :
as the name suggests; You will have to render a list of todos; use the below data;
[
  { id: 1, title: "Wake up", status: true },
  { id: 2, title: "drink tea", status: false },
  { id: 3, title: "eat maggi", status: true },
  { id: 4, title: "sleep", status: false }
]
You'll have to separate components and needs to pass individual todos as props from parent component to child component;
basis the completion status; if the completion status is true; the todo item should be in green color; if it's false, the completion status should be in red color;
Make sure that there are no errors or warning that comes in console before submission;
checkout this video for more details : (https://watch.screencastify.com/v/tADWILx4jFxnpRGH6a7m)
Bonus :
Todo :
An input box which would allow you to add more todos; By details the status is false for an item which is just created; you can use uuid library ( https://www.npmjs.com/package/uuid ) to generate ids
You can also implement checkbox functionality which could update the completion status of todo; ( Hint : look for checked property while using checkbox )

-------------------------------------------------------



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
