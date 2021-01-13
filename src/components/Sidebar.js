import React from 'react'
import { IoMdClose } from 'react-icons/io'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <Wrapper>
        <div className={`sidebar ${isOpen ? "showSidebar" : ''} `}>
          <button className='close-btn' onClick={toggle}>
            <IoMdClose />
          </button>
          <div className="sidebar-container">
            <ul className="sidebar-links">
                <li className="link-about" onClick={toggle}>
                  <Link to="/" >
                  Home.
                  </Link>
                </li>
                <li className="link-about" onClick={toggle}>
                  <Link to="/about" >
                    About.
                  </Link>
                </li>
                <li className="link-work" onClick={toggle}>
                  <Link to="/work" >
                    Work.
                  </Link>
                </li>
                <li className="link-contact" onClick={toggle}>
                  <Link to="/contact" >
                    Contact.
                  </Link>
                </li>
              </ul>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #000;
    transition: all 0.3s linear;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 2rem;
    z-index: 999;
    transform: translateX(-100%);
    visibility: hidden;
    margin: 0;
    color: #d8d8d8;
    font-size: 1.5rem;
    font-weight: 700;
    padding: 0 0 0 3rem;
    cursor: pointer;
  }
  .showSidebar {
    transform: translateX(0);
    visibility: visible;
  }
  .sidebar-links li {
    margin-bottom: 1.5rem;
  }
  .sidebar-links .link-about, .link-work, .link-contact {
    font-size: 4rem;
    display: block;
    color: #d8d8d8;
    font-weight: 700;
  }
  
  .link-about:hover {
  color: #e775fc;
  }

  .link-work:hover {
    color: #01cab9;
  }

  .link-contact:hover {
    color: #ffc77d;
  }
  
  .close-btn {
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: #fff;
    background: transparent;
    border: transparent;
    font-size: 3rem;
    cursor: pointer;
  }
`

export default Sidebar
