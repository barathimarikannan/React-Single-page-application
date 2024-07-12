import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import DataContext, { DataProvider } from './context/DataContext';


const Postpage = () => {
  const {handleDelete , posts} = useContext(DataContext)
  const {id} =useParams();
    const post = posts.find(post =>(post.id).toString()===id);

  

  return (
    <main className='PostPage'>
      <article className='post'>
        {post && 
          <>
          <h2>{post.title}</h2>
          <p className='postDate'>{post.datetime}</p>
          <p className='postBody'>{post.body}</p>
          <Link to ={`/edit/${post.id}`} ><button className='editbutton'>Edit Post</button></Link>
          <button className='deletebutton' onClick={()=> handleDelete(post.id)}>delete post
            
          </button>
          
          </>
        }
        {
          !post && 
          <>
          <h2>Post not found</h2>
          <p> <Link to ='/'>vist our homepage</Link></p>
          
          </>
        }
      </article>

    </main>
   )
}
export default Postpage