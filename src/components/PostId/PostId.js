/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import css from './PostId.module.css';

const PostId = ({ postId: { title, body, id }, onReturn, onRemove }) => {
  return (
    <div className={css.container}>
      <button type="button" onClick={onReturn} className={css.btn}>
        Return
      </button>
      <h2 className={css.title}>{title}</h2>
      <p className={css.text}>{body}</p>
      <button className={css.btn} type="button" onClick={() => onRemove(id)}>
        Delete
      </button>
    </div>
  );
};

PostId.propTypes = {
  onReturn: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default PostId;
