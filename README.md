<img src="https://user-images.githubusercontent.com/37204126/222028327-4b0748b9-0af4-4c7e-980d-08f7c79ce2c1.png" width="100px"/>

This was a 4 person team project to create the frontend website for a fictional online clothing store, with an existing external API providing the data. I (Ben Tanaka) was responsible for the **_Ratings & Reviews_** section. My code is in the */client/src/components/ratings-reviews/* directory and the *L77/client/src/index.jsx* file. For a more detailed README describing the other sections, see repo this was forked from.

<a href="https://amplify-deploy.d469pfy0cj7c4.amplifyapp.com/#/">Deployment</a>

## Contributors
  * Ben Tanaka
  * Bala Sathiya
  * Drew Henderson
  * Gabi Olarte

## Tech Stack
<p align="left"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a><a href="https://www.postgresql.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg" alt="postgresql" width="40" height="40"/> </a><a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a><a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a><a href="https://aws.amazon.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="40" height="40"/> </a><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a><a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a><a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a><a href="https://axios-http.com/docs/intro" target="_blank" rel="noreferrer"> <img src="https://user-images.githubusercontent.com/37204126/222049084-4f80d4a6-17fe-42fd-857d-56d720372f3b.svg" alt="axios" width="40" height="40"/> </a><a href="https://jestjs.io" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg" alt="jest" width="40" height="40"/> </a><a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="webpack" width="40" height="40"/> </a><a href="https://babeljs.io/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg" alt="babel" width="40" height="40"/> </a></p>

## Ratings & Reviews
<img src="https://user-images.githubusercontent.com/37204126/204711146-2df11b8f-b82b-4717-9916-57844d55dea8.gif" width="650"/>

###### Breakdown
- Display of the product's average rating and further breakdown by count of reviews for each star 1-5 and average characteristic ratings
- Clickable starbars which filter the list. Each is additive and may be removed one at a time or all at once to unfilter the list
###### Review List
- Filterable and sortable list of reviews. Each review has functionality to enlarge any images present in modal view and mark review as helpful
###### New Review Form
- Allows customers to submit new reviews and contains form validation requiring certain fields to be entered and review body to be at least 50 characters. Customers may attach up to 5 photos, which go through a Cloudinary API to store on the cloud and generate a URL, which then gets saved in a separate backend service which services all other data needs.

## Extra Feature - Click Tracking
<img src="https://user-images.githubusercontent.com/37204126/223297320-2e7ff5cf-178c-4df8-b53d-9267601306a8.mp4"/>

###### Whenever a user clicks anywhere on the page, the html element and which of the 4 sections/widgets it belongs to is posted to the external API.

## How to Run
1. npm install
2. Create 2 files in the root directory:
   * *.env* containing:
     ```
     PORT=3000
     ```
     * Or a different **PORT** of your choice.
   
   * *MyConfig.js* containing:
     ```javascript
     module.exports = {
        TOKEN: 'x',
        URL: 'http://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc',
        CLOUDINARY_API_KEY: 'x',
        CLOUDINARY_API_SECRET: 'x',
        CLOUDINARY_CLOUD_NAME: 'x',
        PRESET: 'ml_default'
     };
     ```
     * For **TOKEN**, use your GitHub Personal Access Token. If you don't have one, create one [here](https://github.com/settings/tokens).
     * For **CLOUDINARY_API_KEY**, **CLOUDINARY_API_SECRET**, and **CLOUDINARY_CLOUD_NAME** - they aren't necessary unless you want to try the photo upload feature for submitting new reviews. If you don't want to try this, leave them as 'x'. If you do want to try this, signup for a Cloudinary account [here](https://cloudinary.com/users/register_free#gsc.tab=0) and go to the Dashboard to find the 3 values.
      
3. npm run client-dev
4. npm run server-dev
