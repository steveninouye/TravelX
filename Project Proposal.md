*travelx* helps travelers create travel plans and discover popular attractions. 

## Background and Overview
The typical consumer experience of planning a trip often consists of a convoluted web of flight itineraries, hotel bookings
and disjointed travel tours. We intend to simplify the experience by providing a simple, seamless solution: we generate
curated vacation plans to any popular destination.

TravelX helps travelers through this process by intuitively generating instant travel plans to global destinations. With
integration from popular travel APIs like Google Places, users can create and view travel plans, and create a travel
itinerary. 

This problem can be decomposed into three parts:
- The use of a travel API that constitutes the dataset from which our application will draw the majority of our data with - respect to travel destinations
- A search feature allowing users to input a travel location and get unique multi-day itineraries each time
- An algorithm that provides tailored results based on a particular user’s preference to any one ticket.

## Functionality and MVP
Use case: Plan a vacation easily and intuitively
<br> Functionality: Generate a multi-day vacation plan for any popular destination

### Key features
- Splash page with Google maps search for a destination, includes trip dates
- Site autopopulates an itenerary for days with destinations from an attractions API
- Trip summary page with visual overview of destinations and trip schedule

### *Bonus features*
- Daily schedule page showing a day-by-day itinerary
- Add and remove suggested activities from your plan
- browse and add accommodations from hotels.com or AirBnb APIs
- Browse flights to and from destination via a flights API
- Generate an estimated cost of trip including accommodation and flight
- Choose a customized vacation plan based on popular categories

![alt text](https://github.com/Fwep/TravelX/blob/master/docs/wireframes/Splash.png?raw=true "Splash Wireframe")
![alt text](https://github.com/Fwep/TravelX/blob/master/docs/wireframes/Trip%20Plan.png?raw=true "Itinerary List View Wireframe")
![alt text](https://github.com/Fwep/TravelX/blob/master/docs/wireframes/City%20Map%20View.png?raw=true "Itinerary Map View Wireframe")


## Technologies and Technical Challenges
### Backend: MongoDB, Express.js, Node.js
### Frontend:
- React.js
- Redux.js
- Redux Thunk
- Redux Logger
- Axios
#### React Material UI and Styled Components
Material UI and Styled Components address a problem previously faced of rendering styles for specific components. Both UI frameworks allow for DRYer CSS, delegating the responsibility of customizating components to Javascript. They allow for conditional rendering of particular styles (a primary button vs. a normal button, for example) based on a user's location in the web application, and base their specifity in a _component_ and its accessory styles, as opposed to an _HTML element_ and its accessory styles.

Material UI consists of a library of default components that can be customized further if needed. Styled Components serves the purpose of allowing such custom styling, using ES6's [tagged template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates).
- Google Maps
### Misc Libraries:
- Webpack
- Webpack Dev Server
- Webpack CLI
- HTML Webpack Plugin
- HTML Loader
- File Loader
- Babel
- Babel CLI
- Babel Loader
- @babel/core
- @babel/polyfill
- @babel/preset-env
- @babel/preset-react
- Nodemon
- Concurrently
- React Hot Loader

#### Scheduling:

For each potential destination on the itinerary, we will prompt the user to select either the most popular timeblock or a custom timeblock. Together with the opening/closing hours and days of week from Google Places, we will generate the fullest non-overlapping schedule possible. We will implement this using an existing JS scheduling engine (such as this one) if sufficient; if not we will build our own using existing solutions.



## Things Accomplished Over the Break
The following is a list of tasks we accomplished over break, along with approximate time allocations for each item. The
results of these items are reflected in the rest of this document.

- Project ideation, definition, and scoping (5 hours)
- MVP and bonus feature ideation and detail (3 hours)
- Frontend tech stack research, discussion, and selection (4 hours)
- External API research, discussion, and selection (3 hours)
- Low-fidelity wireframes and initial design (3 hours)
- Design docs - schema, routes, and state shape (4 hours)
- Project creation - github repo and skeleton (0.5 hours)
- Backend user auth (5 hours)
- Proposal drafting (3 hours)

## Group Members and Work Breakdown
Cacacho, Taran
<br> Jaffe, Micah
<br> Inouye, I
<br> Stroud, Josh
-------------------
**Wednesday, Jan 2, 2019**



*   Develop Splash Page - **Josh**
    *   Create Redux Cycle
    *   SplashContainer
    *   Nav
    *   Hero
    *   Features
    *   About
    *   Footer
    *   Add styling
*   Login Modal - **Micah**
    *   Redux Cycle
    *   Modal
    *   SignupModalContainer
    *   SessionModalContainer
    *   SessionForm
    *   Styling
*   PlanIndex Page - **Taran**
    *   Redux Cycle
    *   PlanIndexContainer
    *   PlanIndexItem
    *   Styling

**Backend**

User Authentication Routes (Completed)** -** **Steven**

Complete route for first destination package request with JSON in formatted for front end to receive** -** **Steven**

**Thursday**



*   Develop Splash Page - **Josh**
    *   Create Redux Cycle
    *   SplashContainer
    *   Nav
    *   Hero
    *   Features
    *   About
    *   Footer
    *   Add styling
*   Login Modal - **Micah**
    *   Redux Cycle
    *   Modal
    *   SignupModalContainer
    *   SessionModalContainer
    *   SessionForm
    *   Styling
*   PlanIndex Page - **Taran**
    *   Redux Cycle
    *   PlanIndexContainer
    *   PlanIndexItem
    *   Styling

**Backend**

Create POST route to save itinerary for user (w/ passport authentication) - _Steven_

Create DELETE route to delete itinerary for user (w/ passport authentication) - _Steven_

**Friday**



*   Results Page - _Micah_
    *   Redux Cycle
    *   ResultsPageContainer
    *   ResultsSplash
    *   Results
    *   TabNav
    *   ResultItem
    *   Redux Cycle
    *   Styling
*   Map Page - _Josh_
    *   Redux Cycle
    *   MapViewContainer
    *   ResultsMapContainer
    *   ResultsMap
    *   Styling

**Backend**

Create GET route to respond with JSON of requested Itinerary - _Steven_
Create PATCH route for user to edit any itinerary (w/ passport authentication) -_Steven_

**Saturday**



*   Results Page - _Micah_
    *   Redux Cycle
    *   ResultsPageContainer
    *   ResultsSplash
    *   Results
    *   TabNav
    *   ResultItem
    *   Redux Cycle
    *   Styling
*   Map Page - _Josh_
    *   Redux Cycle
    *   MapViewContainer
    *   ResultsMapContainer
    *   ResultsMap
    *   Styling

**Backend**

Complete any Misc Routes needed For CRUD responses to the Mongo Database -_Steven_

**Sunday**

**Monday**

**Tuesday**
