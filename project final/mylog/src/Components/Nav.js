/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import React from 'react';

import '../App.css';

const Nav = () => {
  return (
    <nav id="navbar">
      <a className="Logo-name">GEARLOG</a>
      <div className="nav-userinfo">
        <div>
          <a className="help">고객센터</a>
        </div>

        <div className="nav-userinfo-service">
          <span>검색</span>
          <a>로그인</a>
          <a>회원가입</a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
