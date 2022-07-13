import React, { useState, useContext } from 'react';
import PostContext from '../components/PostContext';
import CreatePost from '../components/CreatePost';

export default function New({ history }) {
  const { handlePushA } = useContext(PostContext);

  const [value, setValue] = useState('');

  const handleSubmitA = () => {
    handlePushA({ content: value });
    history.push('/');
  };

  return (
    <CreatePost
      fields={[{ name: 'content', label: 'Создать пост:', value: value }]}
      onChange={(_, value) => setValue(value)}
      onSubmit={handleSubmitA}
    />
  );
}
