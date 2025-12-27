import React from 'react';
import { PostContext } from '../../context/PostContext';

const TodoInput = () => {
    const {popup} = usePostsContext()
  return (
    <section>
      <button onClick={popup}>Klik saya</button>
    </section>
  );
};

export default TodoInput;
