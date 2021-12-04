import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { getFirebase } from '../firebase'
import { Messaging } from 'react-cssfx-loading/lib'
import { Link } from 'react-router-dom'



const Post = ({ match }) => {
  const [loading, setLoading] = useState(true)
  const [currentPost, setCurrentPost] = useState()
  const [user, setUser] = useState()

  useEffect(() => {
    const slug = match.params.slug

    getFirebase()
      .database()
      .ref(`/posts/${slug}`)
      .once('value')
      .then(snapshot => {
        if (snapshot.val()) {
          setCurrentPost(snapshot.val())
        }
        setLoading(false)
      })
  }, [match])

  if (loading) {
    return <Messaging className='loading' color='black' />
  }

  const postDoesNotExist = !currentPost
  if (postDoesNotExist) {
    return <Redirect to='/404' />
  }

  getFirebase()
    .auth()
    .onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      }
    })

  if (user) {
    return (
      <div className='blog'>
        <img src={currentPost.coverImage} alt={currentPost.coverImageAlt} className='postImage' />
          <div className='post-content'>
            <h1>{currentPost.title}</h1>
            <Link
              to={`/edit/${currentPost.slug}`}
              className='blog-button'
            >
              Edit Post
            </Link>
          </div>
        <em>{currentPost.datePretty}</em>
        <p style={{ marginTop: '12px' }} dangerouslySetInnerHTML={{ __html: currentPost.content }}></p>
        <Link
              to={`/blog`}
              className='blog-button'
            >
              Back to list ...
            </Link>
      </div>
    )
  }

  
  return (
    <div className='blog'>
      <img src={currentPost.coverImage} alt={currentPost.coverImageAlt} className='postImage' />
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          margin: '6px 0',
          justifyContent: 'space-between'
        }}>
        <h1>{currentPost.title}</h1>
      </div>
      <em>{currentPost.datePretty}</em>
      <p style={{ marginTop: '12px' }} dangerouslySetInnerHTML={{ __html: currentPost.content }}></p>
      <Link
        to={`/blog`}
        className='blog-button'
      >
        Back to list ...
      </Link>
    </div>
  )
}

export default Post
