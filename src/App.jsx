import React, { useEffect, useState } from "react"
import Header from "./Header"
import Home from "./Home"
import Newpost from "./Newpost"
import Postpage from "./Postpage"
import About from "./About"
import Footer from "./Footer"

import { Route,Routes, useNavigate } from "react-router-dom"
import Nav from "./Nav"
import Missing from "./Missing"

import EditPost from "./EditPost"
 
import { DataProvider } from "./context/DataContext"



function App() {
 
 



  return(
    < div className="App">
      <DataProvider>

     
          <Header title="Social media "/>
         
          <Nav />

          <Routes>
              <Route path="/" element={<Home />} /> 
                  
              <Route path="/post/" >
                    <Route index element={<Newpost />}/>
                    <Route path=":id" element={<Postpage />} />  
               </Route>
              <Route path="/edit/:id" element={<EditPost />  } />
              <Route path="about"  element={<About/>}/>
              <Route path="*" element={<Missing/>}/>            
                    
           </Routes>
          <Footer/>             
                    
      </DataProvider>

    </div>
  )
}

export default App       
                     
                  
                     
                    
              
            
          
          
      

