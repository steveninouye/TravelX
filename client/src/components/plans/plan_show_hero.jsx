import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  background: {
    background: `url("https://cdn.pixabay.com/photo/2016/11/18/19/01/paris-1836415__340.jpg") no-repeat center center fixed`,
    backgroundSize: 'cover',
    height: "calc(100vh * 0.75)"
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%"
  },
  headerContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  headerText: { 
    color: "white",
    textTransform: "uppercase",
    fontWeight: "300"
  }
});

class PlanShowHero extends React.Component {
  render() {
    return (
      <section className={this.props.classes.background}>
        <div className={this.props.classes.contentContainer}>
          <div className={this.props.classes.headerContainer}>
            <Typography
              className={this.props.classes.headerText}
              component="h3"
              variant="h1"
            >
              {this.props.city}
            </Typography>
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(PlanShowHero);
