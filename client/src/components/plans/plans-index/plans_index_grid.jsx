import React from 'react';
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import GridCard from "./plans_index_grid_item";

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`
  },
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];


class PlansIndexGrid extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div className={classNames(classes.layout, classes.cardGrid)}>
          <Grid container spacing={40}>
            {cards.map(card => (
              <Grid item key={card} sm={6} md={6} lg={3}>
                <GridCard/>
              </Grid>
            ))}
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}

PlansIndexGrid.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PlansIndexGrid);