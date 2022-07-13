import React, { useState, useContext } from 'react';
import PostContext from '../components/PostContext';
import PostNew from '../components/PostNew';

export default function NewPostPage({ history }) {
  const { handlePush } = useContext(PostContext);

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
