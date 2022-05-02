import React from 'react'
import { useSelector } from "react-redux";
import MainScreen from '../components/Protected/MainScreen'
import InfoPage from './InfoPage'


const Home = () => {

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  return (
    userInfo ? <MainScreen/> : <InfoPage/>
  );
};

export default Home