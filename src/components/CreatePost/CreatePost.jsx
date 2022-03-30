import React, { useState, useEffect } from 'react';

const CreatePost = (props) => {

    const [user, setUser] = useState('');
    const [date, setDate] = useState("");
    const [body, setBody] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    let newPost = {
        body: body,
      date: date,
      user: user
    };
    console.log({ newPost });
    props.setPost(newPost);
  }

  return (
    <form className='PostForm' onSubmit={handleSubmit} >
      <div>
        <label>Whatcha wanna sayy ay?</label>
        <input
          className="form-control"
          type="text"
          value={body}
          onChange={(event) => setBody(event.target.value)}
        ></input>
      </div>
      <div>
        <label>Who wanna say it?</label>
        <input
          className="form-control"
          type="text"
          value={user}
          onChange={(event) => setUser(event.target.value)}
        ></input>
      </div>
      <div className="form-group">
        <label>Date</label>
        <input
          className="form-control"
          type="date"
          value={date}
          onChange={(event) => setDate(event.target.value)}
        ></input>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{ "margin-top": "1em" }}
      >
        Add
      </button>
    </form>
  );
};

export default CreatePost;
