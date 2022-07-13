import React, { useState, useContext } from 'react';
import PostsContext from '../components/PostContext';
import AddForm from '../components/PostNew/PostNew';

export default function NewPostPage({ history }) {
  const { handlePush } = useContext(PostsContext);

  const [value, setValue] = useState('');

  const handleSubmit = () => {
    handlePush({ content: value });
    history.push('/');
  };

  return (
    <PostNew
      fields={[{ name: 'content', label: 'Создать пост:', value: value }]}
      onChange={(_, value) => setValue(value)}
      onSubmit={handleSubmit}
    />
  );
}
