/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { Component } from 'react';
import css from './PostNew.module.css';

export default class PostNew extends Component {
  state = {};

  render() {
    return (
      <>
        <form className={css.adForm}>
          <label>Title</label>
          <input
            placeholder="..."
            minLength="3"
            required
            type="text"
            name="title"
            value=""
          />
          <label>Description</label>
          <textarea
            placeholder="..."
            required
            minLength="3"
            name="description"
            value=""
          />
          {/* <label>Оберіть фото</label>
          <div className="wrap_img_add">
            <span id="outputMulti" />
          </div>
          <input
            type="file"
            id="fileMulti"
            name="images"
            multiple
            accept="image/x-png,image/gif,image/jpeg,image/jpg"
            value=""
          /> */}
          <button type="button">Create post</button>
        </form>
      </>
    );
  }
}
