import React from 'react';
import Button from "@material-ui/core/Button";
import ScheduleShow from './schedule_show';

export default class PlanShow extends React.Component {
  componentDidMount() {
    const { fetchPlan, planId } = this.props;
    fetchPlan(planId);
  }

  render() {
    const styles = {
      imgContainer: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        background: 'url("https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415__340.jpg") no-repeat center center fixed',
        backgroundSize: 'cover'
      },
      buttonContainer: {
        display: 'flex',
        justifyContent: 'space-evenly',
        margin: '0 auto',
        padding: '40px',
        width: '50%'
      },
      button:  {
        width: '150px',
      },
      infoContainer: {
        width: '50%',
        margin: '0 auto',
        marginTop: '100px',
        background: 'white',
        height: '500px'
      }
    };

    return (
      <div style={styles.imgContainer}>
        <div style={{ height: '50px', background: 'gray' }}>Nav Bar Placeholder</div>
        {/* <div style={styles.infoContainer}>Schedule/Map Placeholder</div> */}
        <ScheduleShow style={styles.infoContainer}/>
        <div style={styles.buttonContainer}>
          <Button 
            color="primary"
            variant="contained"
            style={styles.button}            
          >
            Save
          </Button>
          <Button
            color="primary"
            variant="contained"
            style={styles.button}   
          >
            New Plan
          </Button>
        </div>
      </div>
    );
  }
};