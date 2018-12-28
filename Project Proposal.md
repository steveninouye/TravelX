TravelX is a travel planner with an emphasis on a simple, flat-design user experience.

## Background and Overview
The typical consumer experience of planning a trip often consists of a convoluted web of flight itineraries, hotel bookings and disjointed travel tours. We intend to simplify the experience by providing a simple, seamless solution: we generate curated vacation plans to any popular destination.

This problem can be decomposed into three parts:
- The use of a travel API that constitutes the dataset from which our application will draw the majority of our data with - respect to travel destinations
- A search feature allowing users to input a travel location and get unique multi-day itineraries each time
- An algorithm that provides tailored results based on a particular user’s preference to any one ticket.

## Functionality and MVP
Use case: Plan a vacation easily and intuitively
Functionality: Generate a multi-day vacation plan for any popular destination

### Key features
- Splash page with google maps search for a destination, includes trip dates
- Site autopopulates an itenerary for days with destinations from an attraction api
- Trip summary page with visual overview of destinations and trip schedule

### *Bonus features*
- Daily schedule page showing a day-by-day itinerary
- Add and remove suggested activities from your plan
- browse and add accommodations from hotels.com or AirBnb APIs
- Browse flights to and from destination via a flights API
- Generate an estimated cost of trip including accommodation and flight
- Choose a customized vacation plan based on popular categories

## Technologies and Technical Challenges
Backend: MongoDB, 
Frontend: (Pending decision on UI Framework) 

## Things Accomplished Over the Weekend

## Group Members and Work Breakdown
Cacacho, Taran
Jaffe, Micah
Inouye, I
Stroud, Josh


(Delete before official proposal submission)
==============================
UI Frameworks/Libraries:
Material UI https://v0.material-ui.com
Pros
Thorough and simple to understand documentation
Allows theme-ing (dark mode, light mode, etc)
Allows for a lot of customization
A lot of subtle animations are standard
A lot of components have beautiful box shadows and 3d styling
Cons
Bloats the application
React Bootstrap https://react-bootstrap.github.io
Pros
The most well known JavaScript Framework (it was the first)
Decent UI
A lot of standard components
Moderate Customization
Cons
Bloats application
OK Documentation
Few animations
A lot of components are flat (2d)
Semantic UI React https://react.semantic-ui.com
Pros
More welcoming UI (colors, font, buttons) than Bootstrap
A lot more components to choose from
Good animations
Good Documentation
Cons
Bloats application
A lot of components are flat (2d)
Limited Customization
React Styled Components https://www.styled-components.com/
Pros
Stops the effects of cascading styles from component to component
Complete customization of component styles
Allows reuse of component styles from component to component
Recommended by React Developers
No bloating of application
Cons
Styles will need to be created from scratch
React Emotion https://emotion.sh/
Pros
Stops the effects of cascading styles from component to component
Complete customization of component styles
Allows reuse of component styles from component to component
Faster/lighter than Styled Components
Cons
Less Documentation than Styled components

React Emotion vs. Styled Components
In summary, there really isn't much of a difference between the 2.  Emotion is slightly faster/lighter and able to be used with other frameworks/libraries.  Styled Components has a larger community and can be used with React Native.
https://npmcharts.com/compare/emotion,styled-components
From a Styled Components Developer 3 months ago
With v4 we are about as fast at mounting and faster at updating dynamic styles than react-emotion, so the performance argument no longer holds up
emotion offers multiple different APIs to style your app, ranging from the `css` prop to the styled-components-like API. We aim to let users fall down the pit of success by only exposing a single, recommended way of doing things that'll usually mean you end up with "good code". As far as I understand emotion is more focused on letting you ship as quickly as possible. That being said, our users have built tons of different libraries on top of styled-components that expose different APIs, like styled-system to get a "css-prop-like" API.
emotion's CSS insertion core can be used outside of React, where styled-components is only focused on usage with React
emotion generates source maps for the generated CSS in development mode, we don't (yet, but it's one of our next priorities after this release)
Bundle size wise, a lot of the "extra" code in styled-components is to make sure we insert classes in the right order to avoid specificity issues. (although our bundle size isn't much bigger anymore) react-emotion delegates that to userland and expects you to compose classes in the right order and to make sure you don't have specificity issues. That's how they can ship less code overall, they just don't handle that case at all. (see this issue in the emotion repo)
styled-components has a much bigger community, more contributors, more usage and thus a richer ecosystem (tbf most of the packages are also compatible with emotion by aliasing though). That in turn means we've covered every imaginable edge case and getting help is as simple as posting in the dedicated community with 4,200 members in it. The bus factor of styled-components is also somewhere in the dozens, where emotion is mainly built by two people.
