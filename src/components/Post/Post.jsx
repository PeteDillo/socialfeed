import "./Post.scss";
const Post = (prop) => {
  return (
    <div className="PostCard">
      <div className="PostBody">
        <p>{prop.post.body}</p>
      </div>
      <div className="PostUser">
        <p>{prop.post.user}</p>
      </div>
      <div className="PostDate">
        <p>{prop.post.date}</p>
      </div>
      <a>Like</a>
      <a>Dislike</a>
    </div>
  );
};

export default Post;
