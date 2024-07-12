import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import Feed from './Feed'
import DataContext, { DataProvider } from './context/DataContext'

const Home = () => {
  const {searchResults} = useContext(DataContext);
  return (

   <main className='Home'>
        {searchResults.length ? (
            <Feed searchResults={searchResults} />
        ):(
          <p style={{marginTop:"2rem"}}> no posts yet</p>
        )
        }
   </main>
    
    
  )
}

export default Home