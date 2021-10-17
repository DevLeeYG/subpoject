/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import '../App.css';

const Nav = () => {
  const history = useHistory();
  return (
    <nav id="navbar">
      <Link to="/">
        <a className="Logo-name">GEARLOG</a>
      </Link>
      <div className="nav-userinfo">
        <div>
          <a className="help">고객센터</a>
        </div>

        <div className="nav-userinfo-service">
          <span>검색</span>
          <a onClick={() => history.push('/login')}>로그인</a>
          <a>회원가입</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
