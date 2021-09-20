import { PostCard } from '../PostCard';

import './styles.css'

export const Post = (posts) => {

  posts = posts.posts

  return(
    <div className="posts">
      {posts.map(post => (
        <PostCard key={post.id} post={post}> </PostCard>
        )
      )}
    </div>
  );
}