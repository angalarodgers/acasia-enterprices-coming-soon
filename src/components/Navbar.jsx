import React from "react";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-transparent navbar-fixed-top"
      role="navigation">
      <div className="container">
        {/* Brand and toggle get grouped for better mobile display */}
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
        </div>
        {/* Collect the nav links, forms, and other content for toggling */}
        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                <img src="images/flags/US.png" />
                English(US)
                <b className="caret" />
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a href="#">
                    <img src="images/flags/DE.png" /> Deutsch
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/flags/GB.png" /> English(UK)
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/flags/FR.png" /> Français
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/flags/RO.png" /> Română
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/flags/IT.png" /> Italiano
                  </a>
                </li>
                <li className="divider" />
                <li>
                  <a href="#">
                    <img src="images/flags/ES.png" /> Español{" "}
                    <span className="label label-default">soon</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/flags/BR.png" /> Português{" "}
                    <span className="label label-default">soon</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/flags/JP.png" /> 日本語{" "}
                    <span className="label label-default">soon</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="images/flags/TR.png" /> Türkçe{" "}
                    <span className="label label-default">soon</span>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#">
                <i className="fa fa-facebook-square" />
                Like
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter" />
                Tweet
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-gittip" />
                Gittip
              </a>
            </li>
          </ul>
        </div>
        {/* /.navbar-collapse */}
      </div>
      {/* /.container */}
    </nav>
  );
};

export default Navbar;
