import React , { useState } from 'react'
import { ReactComponent as MenuIcon } from './images/menu.svg'
import { ReactComponent as HomeIcon } from './images/home.svg'
import { ReactComponent as ArrowForward } from './images/arrow_forward.svg'
import { ReactComponent as ArrowBack } from './images/arrow_back.svg'
import { ReactComponent as AboutIcon } from './images/about.svg'
import { ReactComponent as ResumeIcon } from './images/resume.svg'
import { CSSTransition } from 'react-transition-group'
import { Link, BrowserRouter as Router, Routes, Switch, Route } from 'react-router-dom';
import Home from './pages/Home.js'
import About from './pages/About.js'
import Resume from './pages/Resume.js'


function App() {
  return (
    <Router>
      <Navbar>
     {/*   <Link to='/home'> */ }
          <NavItem icon={<HomeIcon/>}/>
     {/*   </Link> */}
        <NavItem icon={<MenuIcon/>}>
          <DropdownMenu/>
        </NavItem>
      </Navbar>

      <Routes>
        <Route path='/home' element={<Home/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/resume' element={<Resume/>} />
      </Routes>
    </Router>
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
          <Link to='/resume'>
           <DropdownItem leftIcon={<ResumeIcon />}>Resume</DropdownItem>
          </Link>
          <DropdownItem goToMenu='freelance' leftIcon={<ArrowForward />}>Freelance</DropdownItem>
          <Link to='/about'>
            <DropdownItem leftIcon={<AboutIcon />}>About</DropdownItem>
          </Link>
        </div>
      </CSSTransition>

      <CSSTransition 
        in={activeMenu === 'freelance'} 
        unmountOnExit 
        timeout={500} 
        classNames='menu-secondary'
        onEnter={calcHeight}
      >
        <div className='menu'>
          <DropdownItem goToMenu='main' leftIcon={<ArrowBack />}>Back</DropdownItem>
          <Link to='/1'>
            <DropdownItem>1</DropdownItem>
          </Link>
          <Link to='/2'>
            <DropdownItem>2</DropdownItem>
          </Link>
          <Link to='/3'>
            <DropdownItem>3</DropdownItem>
          </Link>
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
