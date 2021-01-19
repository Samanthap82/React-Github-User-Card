import React, { Component } from "react";
import axios from "axios";
import UserDetails from "..UserDetails/components/UserDetails";
export default class UserProfile extends Component {
  state = {
    user: {},
    followers: [],
  };
  componentDidMount() {
    axios
      .get("https://api.github.com/users/Samanthap82")
      .then((res) => {
        this.setState({ user: res.data });
        // fetchFollower{res.data}
      })
      //    console.log(res))
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("https://api.github.com/users/Samanthap82/followers")
      .then((res) => {
        this.setState({ followers: res.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div>
        <UserDetails user={this.state.user} />
        <Followers followers={this.state.followers} />
        {/* someFunc={this.someFunc}  */}
      </div>
    );
  }
}
