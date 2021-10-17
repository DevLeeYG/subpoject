import React from 'react';
import Button from '../Components/common/Button';
import kakaoB from '../Img/kakao.png';
import naverB from '../Img/naver.png';
import googleB from '../Img/google.png';

const SignIn = () => {
  return (
    <div className="Auth">
      <div className="AuthPage-1">
        <div className="AuthPage-2">
          <h1>Login</h1>
          <input className="email" placeholder="email"></input>
          <input className="password" placeholder="password"></input>
          <Button
            className="loginButton"
            style={{
              background: 'purple',
              color: 'black',
              width: '60%',
              height: '50px',
            }}
          >
            로그인
          </Button>
          <div className="socialB">
            <div className="socialtag">소셜로그인</div>

            <img className="socialBt" src={kakaoB}></img>

            <img className="socialBt" src={naverB}></img>

            <img className="socialBt" src={googleB}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
