import { Navigate, Route, Routes } from 'react-router-dom';
import { MainLayout, navigationItems } from './layouts/MainLayout';

const App: React.FC = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      {navigationItems.map((navigation) => (
        <Route key={navigation.path} path={navigation.path} element={<navigation.component />} />
      ))}
      <Route path="" element={<Navigate to="home" />} />
    </Route>
  </Routes>
);

export default App;
