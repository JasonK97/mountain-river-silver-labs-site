import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { getFirebase } from "../firebase";
import { Messaging } from 'react-cssfx-loading/lib'
import { Link } from "react-router-dom";

const Post = ({ match }) => {
  const [loading, setLoading] = useState(true)
  const [currentPost, setCurrentPost] = useState()

  useEffect(() => {
    const slug = match.params.slug;

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
    return <Redirect to="/404" />;
  }

  
  return (
    <>
      <img src={currentPost.coverImage} alt={currentPost.coverImageAlt} />
      <div 
        style={{ 
          display: 'flex', 
          alignItems: 'center', 
          margin: '6px 0',
          justifyContent: 'space-between'
        }}>
        <h1>{currentPost.title}</h1>
        <Link
          to={`/edit/${currentPost.slug}`}
          style={{
            border: "none",
            color: "#fff",
            backgroundColor: "#039be5",
            borderRadius: "4px",
            padding: "8px 12px",
            marginLeft: '24px',
            fontSize: "0.9rem",
            textDecoration: 'none'
          }}
        >
          Edit Post
        </Link>
      </div>
      <em>{currentPost.datePretty}</em>
      <p style={{ marginTop: '12px' }} dangerouslySetInnerHTML={{ __html: currentPost.content }}></p>
    </>
  );
};

export default Post;
