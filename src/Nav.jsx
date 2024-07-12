import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext, { DataProvider } from './context/DataContext'

const Nav = () => {
  const {search,setSearch} = useContext(DataContext)
  return (
    <nav className='Nav'>
        <form className='searchForm'>
            <label htmlFor='search'>search</label>
            <input 
               id='search'
               type='text'
               placeholder='Search Post'
               required
               value={search}
               onChange={(e) => setSearch(e.target.value)} />

        </form>
        <ul>
            <li><Link to ="/">Home</Link></li>
            <li><Link to ="post">Post</Link></li>
            <li><Link to ="about">About</Link></li>
        </ul>
    </nav>
  )
}

export default Nav