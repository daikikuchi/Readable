import React from 'react'
import {Link} from 'react-router-dom';

const Post_404 = () => {
  return (
  <div clasName="deletedPost">
    <h2>
       [Error] : Bad URL:
       This Post has been deleted!!
    </h2>
    <Link to="/" className="btn btn-danger">
      Cancel
    </Link>
  </div>
  );
}

export default Post_404;
