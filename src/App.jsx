import React, { useState, useEffect } from 'react' 
import axios from 'axios'; 
import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {
  const [posts, setPosts ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [ postsPerPage ] = useState(10);
  
  useEffect(() => { // roda quando é montado e quando é atualizado

    const fetchPosts = async () => { 
      setLoading(true);
      const response =  await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(response.data);
      setLoading(false);
  
    }

    fetchPosts();
    
  },[]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // change page 
  const paginate = (pageNumber) =>  setCurrentPage(pageNumber)
 
  return (
    <div className="container mt-5">
      <h1 className='text-primary mb-3'>My blog</h1>
      <Posts posts={currentPosts}  loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate}/>
    </div>
  )
}

export default App

// tutorial: https://www.youtube.com/watch?v=IYCa1F-OWmk