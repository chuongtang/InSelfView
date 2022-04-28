import React from 'react'
import Recorder from '../Protected/Recorder'
import Questions from './Questions'
import Header from '../Header'
import { useDispatch, useSelector } from "react-redux";

const ProtectedPage = () => {

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  console.log(userInfo);
  const dispatch = useDispatch();

  return (
    <div>
      <Header />
      <h1>{userInfo}</h1>
      <p>hosfojrfoijrfoaijerfoieajfroeiaj</p>
      <Recorder />
      <Questions />
    </div>
  )
}

export default ProtectedPage