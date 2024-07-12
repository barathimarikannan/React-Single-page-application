import React, { useContext, useEffect } from 'react'
import { useParams,Link } from 'react-router-dom';
import DataContext, { DataProvider } from './context/DataContext';

const EditPost = () => {
     const {posts ,handleEdit,editTitle,setEditTitle,editBody,setEditBody} = useContext(DataContext)
    const {id} =useParams();
    const post = posts.find(post =>(post.id).toString()===id);

    useEffect(()=>{
        if(post) {
            setEditTitle(post.titel);
            setEditBody(post.body);
        }
    },[post,setEditTitle,setEditBody])

  return (
    <main className='NewPost'>
        
          
                <h2>Edit Post</h2>
                <form className='newPostForm' onSubmit={(e) => e.preventDefault()}>
                    <label htmlFor='postTitle'>Title:</label>
                    <input  
                        id="postTitle"
                        type="text"
                        required
                        value={editTitle || ""}
                        onChange={(e)=>setEditTitle(e.target.value )}
                     />
                    <label htmlFor='postBody'>Post:</label>
                    <textarea 
                        id='postBody'
                        type='text'
                        required
                        value={editBody || ""}
                        onChange={(e)=>setEditBody(e.target.value )} 
                    />
                    <button 
                       type='submit'
                       onClick={()=>handleEdit(post.id) }>
                        Submit
                    </button>
                </form>
            
            
          
          
        
    </main>
  )
}

export default EditPost