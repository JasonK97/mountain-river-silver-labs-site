import React, { useState, useEffect } from 'react'
import { getFirebase } from "../firebase";
import { Messaging } from 'react-cssfx-loading/lib';

const labelStyles = {
  display: "block",
  marginBottom: 4
};

const inputStyles = {
  width: "100%",
  height: "2rem",
  lineHeight: "2rem",
  verticalAlign: "middle",
  fontSize: "1rem",
  marginBottom: "1.5rem",
  padding: "0 0.25rem"
};

const inputStyleReadOnly = {
  width: "100%",
  height: "2rem",
  lineHeight: "2rem",
  verticalAlign: "middle",
  fontSize: "1rem",
  marginBottom: "1.5rem",
  padding: "0 0.25rem",
  color: 'gray'
}

const Edit = ({ match, history }) => {
  const [loading, setLoading] = useState(true);
  const [currentPost, setCurrentPost] = useState({});
  const [slug, setSlug] = useState(match.params.slug);

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

  const [title, setTitle] = useState(currentPost.title);
  const [coverImage, setCoverImage] = useState(currentPost.coverImage);
  const [coverImageAlt, setCoverImageAlt] = useState(currentPost.coverImageAlt);
  const [content, setContent] = useState(currentPost.content);

  const editPost = () => {
    const updatePost = {
      title: title || currentPost.title,
      dateFormatted: currentPost.dateFormatted,
      datePretty: currentPost.datePretty,
      slug,
      coverImage: coverImage || currentPost.coverImage,
      coverImageAlt: coverImageAlt || currentPost.coverImageAlt,
      content: content || currentPost.content
    };
    getFirebase()
      .database()
      .ref()
      .child(`posts/${slug}`)
      .update(updatePost)
      .then(() => history.push(`/blog/${slug}`));
  };

  const deletePost = () => {
    getFirebase()
      .database()
      .ref(`/posts/${currentPost.slug}`)
      .remove()
      .then(() => {
        history.push('/blog')
      })
  }

  if (loading) {
    return <Messaging className='loading' color='black' />
  }

  return (
    <div className='blog'>
      <div style={{ 
        display: 'flex', 
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <h1>Edit post</h1>
        <button
          style={{
            border: "none",
            color: "#fff",
            backgroundColor: "#e50303",
            borderRadius: "4px",
            padding: "8px 12px",
            fontSize: "0.9rem"
          }}
          onClick={deletePost}
        >
          Delete Post
        </button>
      </div>
      <section style={{ margin: "2rem 0" }}>
        <label style={labelStyles} htmlFor="title-field">
          Title
        </label>
        <input
          style={inputStyles}
          id="title-field"
          type="text"
          value={title || currentPost.title}
          onChange={({ target: { value } }) => {
            setTitle(value);
          }}
        />

        <label style={labelStyles} htmlFor="slug-field">
          Slug
        </label>
        <input
          style={inputStyleReadOnly}
          id="slug-field"
          type="text"
          value={slug}
          readOnly
        />

        <label style={labelStyles} htmlFor="cover-image-field">
          Cover image
        </label>
        <input
          style={inputStyles}
          id="cover-image-field"
          type="text"
          value={coverImage || currentPost.coverImage}
          onChange={({ target: { value } }) => {
            setCoverImage(value);
          }}
        />

        <label style={labelStyles} htmlFor="cover-image-alt-field">
          Cover image alt
        </label>
        <input
          style={inputStyles}
          id="cover-image-alt-field"
          type="text"
          value={coverImageAlt || currentPost.coverImageAlt}
          onChange={({ target: { value } }) => {
            setCoverImageAlt(value);
          }}
        />

        <label style={labelStyles} htmlFor="content-field">
          Content
        </label>
        <textarea
          style={{ ...inputStyles, height: 200, verticalAlign: "top" }}
          id="content"
          type="text"
          value={content || currentPost.content}
          onChange={({ target: { value } }) => {
            setContent(value);
          }}
        />
        <div style={{ textAlign: "right" }}>
          <button
            style={{
              border: "none",
              color: "#fff",
              backgroundColor: "#039be5",
              borderRadius: "4px",
              padding: "8px 12px",
              fontSize: "0.9rem"
            }}
            onClick={editPost}
          >
            Save Post
          </button>
        </div>
      </section>
    </div>
  );
}

export default Edit
