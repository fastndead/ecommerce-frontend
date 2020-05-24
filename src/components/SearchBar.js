import React from "react";
import Input from "@material-ui/core/Input";
import Grid from "@material-ui/core/Grid";
import "./SearchBar.scss";
import Dropdown from "./Dropdown";
import Search from "../icons/search";

function NavBar() {
  return (
    <div className="SearchBar">
      <Grid container alignItems="flex-end" className="search-feild">
        <Grid item className="search-icon">
          {/* <img src="./assests/search.svg" alt="Loading"/> */}
          <Search />
        </Grid>
        <Grid item className="search-input" >
          <Input placeholder="Search"  />
          
        </Grid>
      </Grid>

      <Dropdown placeholder="Best match" options={[{
        value: 1,
        label: "Top rated"
      }]} />
    </div>
  );
}

export default NavBar;
