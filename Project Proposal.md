TravelX is a travel planner with an emphasis on a simple, flat-design user experience.

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

## Technologies and Technical Challenges
### Backend: MongoDB, 
### Frontend:
- React JS
- Redux JS
- Redux Thunk
- Redux Logger
- Axios
#### React Material UI and Styled Components
Material UI and Styled Components address a problem previously faced of rendering styles for specific components. Both UI frameworks allow for DRYer CSS, delegating the responsibility of customizating components to Javascript. They allow for conditional rendering of particular styles (a primary button vs. a normal button, for example) based on a user's location in the web application, and base their specifity in a _component_ and its accessory styles, as opposed to an _HTML element_ and its accessory styles.

Material UI consists of a library of default components that can be customized further if needed. Styled Components serves the purpose of allowing such custom styling, using ES6's [tagged template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#Tagged_templates).
- Google Maps


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
