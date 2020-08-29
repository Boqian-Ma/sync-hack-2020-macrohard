This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


### What is it?
WatchDog is a webapp/chrome extension that gives users the ability to see how websites that have access to personal data are using it. It provides real time updates whenever a website uses our data for third party reasons such as advertising, market research etc… 

The websites themselves must provide this information for us which is optional but their choices to share data culminates in a grade that we give them. This grade is a summary of how transparent a company/website is in sharing their data usage. This gives users the ability to see exactly how and when their data is being accessed. With this information, users will be able to make informed decisions of whether they would like to continue to share certain information such as location services etc..

By placing pressure on companies to be transparent about their data usage, we will be able to promote a culture of trust and honesty between a user and a large company. This also allows smaller companies to be able to use transparency as a way to improve public image and give consumers incentive to choose them over larger companies who may not have as high of a WatchDog grade. 

### Inspiration
On average, Google holds 5.5 GBs of personal data of each of their users. That is roughly equivalent to 3 millions of usable data points. *

When did they get hold of this data? What are they using it for? When are they using it? 

Whilst these companies are allowing users  to retrieve these data, we still have no idea of what they are doing with these data behind the doors. 

This is why we started the WatchDogs initiative. We wanted to give the users an opportunity to see how and when our data is being accessed by these large companies. Hence, transparency. 


### Usage 
Users will be able sign up for an WatchDog account. Users will then be able to search for companies that they would like to track. If the company has not partnered with us yet, a message will be sent to that company to inform them that users would like to be able to see their data usage. This will urge companies to sign up to our platform if they receive continuous requests. If the company is signed up to our platform, users will be able to log into their respective accounts and be able to receive real time updates whenever that company uses their data. They will also be able to turn off certain data permissions for that website through our website if they decide they would not like the company to have access to it anymore. There will also be graphs that users can view to show detailed information on the frequency in which their data is being accessed. 


### How it was built 
Backend: Python + Flask
Frontend: React.js
Chrome extension: HTML, CSS, JavaScript

### Challenges encountered
We used React to build our frontend for the first time and it was a challenge building a complex but simple to use website that was nice to look at. Only one person knew how to use React and having him only work on the frontend would be too demanding so two others had to learn the framework to supplement his work.

### Technical accomplishment 
We’ve never built a chrome extension before and it turned out to be really similar to web development which was a task a few of us had done before. Learning the similarities and differences between the two was a fun and rewarding experience.
This was our second hackathon together and, learning from the previous experience, we were able to work together in a more efficient manner and build a bigger and better overall solution

### Roles
Adam Ma: Full stack

Lyric Wang: Pitch, backend, O-O design

Matthew Juan: Chrome extension, backend

Jeremy Lim: Frontend, design

Vicky Hu: Pitch, frontend, design

Jeremy Chea: Pitch, frontend

### What’s next for us 
The goal of WatchDog is to become the industry standard in monitoring data transparency between companies and users. We will aim to reach out to large companies, especially social media companies whilst refining and enhancing the features that we have to offer users. We will also aim to provide more accurate and precise information for users to be able to see how their information and data is being accessed. Ultimately, we aim to create a culture in which large companies are transparent about their usage of data so that users will be able to be aware and make informed decisions of which companies they decide interact with. 

*
https://www.theguardian.com/commentisfree/2018/mar/28/all-the-data-facebook-google-has-on-you-privacy

