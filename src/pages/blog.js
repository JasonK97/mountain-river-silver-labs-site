import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getFirebase } from "../firebase";
import { Messaging } from 'react-cssfx-loading/lib'

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    getFirebase()
      .database()
      .ref("/posts")
      .orderByChild("date")
      .once("value")
      .then(snapshot => {
        let posts = [];
        const snapshotVal = snapshot.val();
        for (let slug in snapshotVal) {
          posts.push(snapshotVal[slug]);
        }

        const newestFirst = posts.reverse();
        setBlogPosts(newestFirst);
        setLoading(false);
      });
  }, [])

  
  if (loading) {
    return <Messaging className='loading' color='black' />
  }

  return (
    <div className='blog'>
      <div
        style={{
          display: 'flex', 
          alignItems: 'center', 
          marginBottom: '6px',
          justifyContent: 'space-between'
        }}
      >
        <h1>Mountain River Silver Labs Blog</h1>
      </div>
      <p>
        Welcome to where you can read all about our litters and puppies.
      </p>
      {blogPosts.map(blogPost => (
        <section key={blogPost.slug} className="card">
          <img src={blogPost.coverImage} alt={blogPost.coverImageAlt} />
          <div className="card-content">
            <h2>
              {blogPost.title} &mdash;{" "}
              <span style={{ color: "#5e5e5e" }}>{blogPost.datePretty}</span>
            </h2>
            <p
              dangerouslySetInnerHTML={{
                __html: `${blogPost.content.substring(0, 200)}...`
              }}
            ></p>
            <Link to={`/blog/${blogPost.slug}`}>Continue reading ...</Link>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;
