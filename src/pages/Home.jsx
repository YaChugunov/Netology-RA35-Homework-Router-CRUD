import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import '../css/Home.css';

import PostContext from '../components/PostContext';
import SinglePost from '../components/SinglePost';

export default function Home({ history }) {
  const { posts, loading } = useContext(PostContext);

  return (
    <div className="home">
      <button className="new-post-btn">
        <Link to="/posts/new">{'Создать пост'}</Link>
      </button>
      <div className="body">
        {loading && <div>{'Loading...'}</div>}
        {posts.map((o) => (
          <SinglePost
            data={o}
            key={o.id}
            onClick={() => history.push(`/posts/${o.id}`)}
          />
        ))}
      </div>
    </div>
  );
}
