import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  background: {
    background: `no-repeat center center fixed`,
    backgroundSize: "cover",
    height: "calc(100vh - 72px)"
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
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "10px"
  },
  button: {
    marginTop: "15px",
    fontSize: "24px",
    color: 'white',
    fontSize: '16px',
    fontWeight: '400'
  }
});

class PlanShowHero extends React.Component {
  render() {
    return (
      <section
        className={this.props.classes.background}
        style={{
          background: `url(${
            this.props.city.photos[0]
          }) no-repeat center center fixed`
        }}
      >
        {`${this.props.city.photos[0]}`}
        <div className={this.props.classes.contentContainer}>
          <div className={this.props.classes.headerContainer}>
            <Typography color="textPrimary"
              className={this.props.classes.headerText}
              component="h3"
              variant="h1"
            >
              {this.props.city.name}
            </Typography>
          </div>
          <div className={this.props.classes.buttonContainer}>
            <Button
              component={Link}
              to="/"
              color="primary"
              variant="contained"
              align="center"
              className={this.props.classes.button}
              size="lg"
            >
              Return Home
            </Button>
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(PlanShowHero);
