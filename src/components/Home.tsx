import React from 'react';
import roadMapImg from '../assets/img/roadmap.jpeg';
import 'antd/dist/antd.css';
import { Image } from 'antd';
import Title from 'antd/lib/typography/Title';

export const Home: React.FC = () => {
  return (
    <div className="site-layout-content">
      <Title className="title">Основная теория по библиотеке React</Title>
      <Image className="home-img" src={roadMapImg} alt="logo"></Image>
    </div>
  );
};
