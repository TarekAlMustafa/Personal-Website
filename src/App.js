import React , { useState } from 'react'
import { ReactComponent as MenuIcon } from './images/menu.svg'
import { CSSTransition } from 'react-transition-group'



function App() {
  return (
    <Navbar>
      <NavItem icon={<MenuIcon/>}>
        <DropdownMenu></DropdownMenu>
      </NavItem>
    </Navbar>
  )
}

function DropdownMenu() {

  const [activeMenu, setActiveMenu] = useState('main'); // settings, animals
  const [menuHeight, setMenuHeight] = useState(null);

  function calcHeight(el){
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return(
      <a href='#' className='menu-item' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className='icon-button'> {props.leftIcon} </span>
        {props.children}
        <span className='icon-right'> {props.rightIcon} </span>
      </a>
    )
  }

  return(
    <div className='dropdown' style={{ height: menuHeight }}>
      <CSSTransition 
        in={activeMenu === 'main'} 
        unmountOnExit 
        timeout={500} 
        classNames='menu-primary'
        onEnter={calcHeight}
      >
        <div className='menu'>

          <DropdownItem>Resume</DropdownItem>
          <DropdownItem goToMenu='hobbies'>Hobbies</DropdownItem>
          <DropdownItem>About</DropdownItem>
        </div>
      </CSSTransition>

      <CSSTransition 
        in={activeMenu === 'hobbies'} 
        unmountOnExit 
        timeout={500} 
        classNames='menu-secondary'
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem goToMenu='main'>Back</DropdownItem>
          <DropdownItem>1</DropdownItem>
          <DropdownItem>2</DropdownItem>
          <DropdownItem>3</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  )
}

function Navbar( props ) {
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>
        { props.children }
      </ul>
    </nav>
  )
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className='nav-item'>
      <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  )
}

export default App;
