import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  background: {
    background: `no-repeat center center fixed`,
    backgroundSize: "cover",
    height: "calc(100vh - 72px)",
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
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(PlanShowHero);
