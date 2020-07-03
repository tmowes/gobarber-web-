import styled, { keyframes } from 'styled-components'
import { shade } from 'polished'

import signInBackgroundImg from '../../assets/sign-in-background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 320px;
  @media (max-width: 930px) {
    width: 320px;
  }
`
const appearFromLeft = keyframes`
  from {
    opacity:0;
    transform: translateX(-50px)
  }
  to{
    opacity:1;
    transform: translateX(0px)
  }
`
export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: ${appearFromLeft} 1s;
  form {
    margin: 48px 0;
    width: 288px;
    @media (max-width: 930px) {
      margin: 16px 0;
    }
    text-align: center;
    h1 {
      font-size: 24px;
      margin-bottom: 24px;
      @media (max-width: 930px) {
        margin-bottom: 8px;
      }
    }
    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      @media (max-width: 930px) {
        margin-top: 8px;
      }
      text-decoration: none;
      transition: color 0.2s;
      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
    > img {
      @media (max-width: 930px) {
        height: 128px;
      }
    }
  }
  > a {
    color: #ff9000;
    display: flex;
    align-items: center;
    margin-top: 24px;
    @media (max-width: 930px) {
      margin-top: 8px;
    }

    text-decoration: none;
    transition: color 0.2s;
    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
    svg {
      margin-right: 16px;
    }
  }
`
export const Background = styled.div`
  flex: 1;
  background: url(${signInBackgroundImg}) no-repeat center;
  background-size: cover;
`
