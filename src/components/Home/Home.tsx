import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import "./Home.scss";
import { Link } from "react-router-dom";
import INavigationItem from "../../interfaces/INavigationItem";
import * as navigation from "../../assets/content/navigationItems.json";
import Grid from "@mui/material/Grid";
import { ImageMap } from "../../assets/images/ImageMap";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

class Home extends Component {
  render() {
    const navItems = JSON.parse(
      JSON.stringify(navigation)
    ) as INavigationItem[];

    return (
      <div className="Home">
        <Grid
          container
          spacing={{ xs: 2, sm: 2, md: 2, lg: 2 }}
          columns={{ xs: 12, sm: 12, md: 12, lg: 12 }}
        >
          {Array.from(navItems).map((item, index) => (
            <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
              <Box className={"NavItem"}>
                <Link to={item.path}>
                  <Card>
                    <CardMedia
                      component="img"
                      height="194"
                      src={ImageMap[item.imageId]}
                    />{" "}
                    <CardHeader
                      title={
                        <FormattedMessage
                          id={item.name}
                          defaultMessage={item.name}
                        />
                      }
                    />
                  </Card>
                </Link>
              </Box>
            </Grid>
          ))}
        </Grid>

        
      </div>
    );
  }
}

export default Home;
