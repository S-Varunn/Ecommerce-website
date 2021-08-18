import React, {Component} from "react";
import {Menu} from "./Menu";
import Button from "../Button";
import "./navbar.css";
class Navbar extends Component {
  state = {clicked: false};
  handleClick = () => {
    this.setState({clicked: !this.state.clicked});
  };
  render() {
    return (
      <nav className="Nbar">
        <h1 className="logo">
          Bubbles<i class="fas fa-biohazard"></i>
        </h1>

        <div className="menuIcon" onClick={this.handleClick}>
          <i
            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
          ></i>
        </div>
        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {Menu.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
        <React.Fragment>
          <Button />
        </React.Fragment>
      </nav>
    );
  }
}

export default Navbar;
