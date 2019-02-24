import React from 'react';
import MenuConfig from '../../config/menuConfig';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';
import './index.less';
const SubMenu = Menu.SubMenu;

export default class NavLeft extends React.Component{
  
  componentWillMount() {
    // MenuConfig  
    const menuTreeNode = this.renderMenu(MenuConfig);
    this.setState({
      menuTreeNode,
    })
  }
  // 菜单渲染
  renderMenu = (data) => {
    return data.map((item) => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key}>
            {/* <NavLink to={item.key}> */}
              {this.renderMenu(item.children)}
            {/* </NavLink> */}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>
        <NavLink to={item.key}>
          {item.title}
        </NavLink>
      </Menu.Item>
    });
  };

  render() {
    return(
      <div>
        <div className="logo">
          <img src="/assets/logo-ant.svg" alt=""/>
          <h1>后台管理系统</h1>
        </div>
        <Menu theme="dark">
          {this.state.menuTreeNode}
        </Menu> 
      </div>
    )
  }
}