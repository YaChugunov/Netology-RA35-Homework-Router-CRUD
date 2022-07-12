import React, { useState, useContext, useEffect } from 'react';
import PostsContext from '../../contexts/PostsContext';
import Card from './components/Post';
import Page404 from './pages/404';

export default function ViewPostPage({ match, history }) {
  const { posts, handleRemove } = useContext(PostsContext);
  const { id } = match.params;

  const [post, setPost] = useState();

  useEffect(() => {
    if (posts) setPost(posts.find((o) => String(o.id) === id));
    return () => {};
  }, [posts, id]);

  const handleClose = () => {
    handleRemove(id);
    history.push('/');
  };

  return (post && <Post data={post} onClose={handleClose} />) || <Page404 />;
}
