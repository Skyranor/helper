import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import logo from '.././assets/img/logo.svg';
import {
  Async,
  Components,
  Events,
  Home,
  Fragment,
  Keys,
  Lifecycle,
  Props,
  ReactMemo,
  Refs,
  State,
  Context,
  UseEffect,
  VirtualDom,
  Router,
  Form
} from '../components';
import React from 'react';

interface INavigationItems {
  path: string;
  component: React.ComponentType;
  title: string;
}

const { Header, Content, Footer } = Layout;

export const navigationItems: INavigationItems[] = [
  { title: 'Home', path: 'home', component: Home },
  { title: 'Components', path: 'components', component: Components },
  { title: 'Props', path: 'props', component: Props },
  { title: 'State', path: 'state', component: State },
  { title: 'Lifecycle', path: 'lifecycle', component: Lifecycle },
  { title: 'Events', path: 'events', component: Events },
  { title: 'Keys', path: 'keys', component: Keys },
  { title: 'Refs', path: 'refs', component: Refs },
  { title: 'Async', path: 'async', component: Async },
  { title: 'Virtual Dom', path: 'Virtual-Dom', component: VirtualDom },
  { title: 'Fragment', path: 'fragment', component: Fragment },
  { title: 'React.memo', path: 'React-memo', component: ReactMemo },
  { title: 'useEffect', path: 'useEffect', component: UseEffect },
  { title: 'Router', path: 'router', component: Router },
  { title: 'Context', path: 'Context', component: Context },
  { title: 'Form', path: 'form', component: Form }
];

export const MainLayout: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <Layout className="layout">
      <Header>
        <div className="logo">
          <img className="logo-img" src={logo} alt={logo} />
          <span className="logo-title">React</span>
        </div>
        <Menu
          onClick={({ key }) => navigate(key)}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={[pathname.slice(1)]}
          items={navigationItems.map((elem, index) => {
            return {
              key: elem.path,
              label: elem.title
            };
          })}
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center' }}>App ©2022 Created by Skyranor</Footer>
    </Layout>
  );
};
