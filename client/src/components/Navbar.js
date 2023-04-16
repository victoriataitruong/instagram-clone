import React from 'react';
const NavBar = () => {
  return (
    <nav>
      <div className="nav-wrapper white">
        <a href="/" className="brand-logo left">
          Victoria's Instagram
        </a>
        <ul id="nav-mobile" className="right">
          <li>
            <a href="/signin">Sign in</a>
          </li>
          <li>
            <a href="/signup">Sign up</a>
          </li>
          <li>
            <a href="/profile">Profile</a>
          </li>
          <li>
            <a href="/create">Create Post</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default NavBar;
