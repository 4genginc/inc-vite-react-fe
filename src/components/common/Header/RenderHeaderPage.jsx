// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const menuItems = [
  { key: '1', label: <Link to="/">Home</Link> },
  { key: '2', label: <Link to="/example-list">Example List</Link> },
  { key: '3', label: <Link to="/profile-list">Profile List</Link> },
  { key: '4', label: <Link to="/datavis">Data Visualization</Link> },
  { key: '5', label: <Link to="/images">Images</Link> },
];

function RenderHeaderPage() {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={menuItems} />
    </Header>
  );
}

export default RenderHeaderPage;
