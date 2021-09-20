import { Component } from 'react'; 

import { loadPosts } from '../../utils/load-posts';
import { Post } from '../../components/Post';

import './styles.css';
import { Button } from '../../components/Button';

class Home extends Component {

  // Javascript class fields
  state = {
    page: 0,
    postsPerPage: 3,
    allPosts: [],
    posts: []
  }
  
  loadPosts = async () => {

    const {page, postsPerPage} = this.state
    const postsAndPhotos = await loadPosts();
    
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos
    })

    console.log(this.state.posts)

  }

  loadMorePosts = () => {

    const { page, postsPerPage, allPosts, posts } = this.state
    
    const nextPage = page + postsPerPage

    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);

    // spread operator
    posts.push(...nextPosts);

    this.setState({posts, page: nextPage})

    console.log('Load more posts chamado')
  }

  async componentDidMount() {
    await this.loadPosts();
  }
  
  render() {
    
    // Desestruturação
    const { posts, page, postsPerPage, allPosts } = this.state
    const noMorePosts = page + postsPerPage >= allPosts.length
    return (
      <>
       <div className="App">
         <header className="App-header">
            <section className="container">
              <Post 
                posts={posts}
              />
              <div className="button-container">
                <Button 
                  text="Load More posts" 
                  disabled={noMorePosts}
                  onClick={this.loadMorePosts}
                  />
              </div>
            </section>
         </header>
       </div>
     </>
    )
  }
}

export default Home;