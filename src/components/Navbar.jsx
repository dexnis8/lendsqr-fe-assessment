import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
 <div className='logo'>
            <img src="/images/logo.svg" alt="" />

        </div>
        <div className='search-bar'>
            <input type="text" placeholder='Search for anything'/>
            <div className='search-icon'>
            <img src="/images/search.svg" alt="search icon" />
            </div>
        </div>
        <div className='doc-notify-acct'>
            <div className='docs'>
            <a href="#">Docs</a>
            </div>
            <div className='notify-acct'>
                <div className='notify-icon'>
                    <img src="/images/notification.svg" alt="notification icon" />
                </div>
                <div className='acct'>
                    <div className='acct-img'>
                        <img src="/images/image 4.svg" alt="user avatar" />
                    </div>
                    <span className='userName'>Ayorinde</span>
                    <div className='acct-dropdown'>
                        <img src="/images/dropdown.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar