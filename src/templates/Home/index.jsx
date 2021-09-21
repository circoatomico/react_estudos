import { Component } from 'react'; 

import { loadPosts } from '../../utils/load-posts';
import { Post } from '../../components/Post';

import './styles.css';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';

class Home extends Component {

  // Javascript class fields
  state = {
    page: 0,
    postsPerPage: 3,
    allPosts: [],
    posts: [],
    searchValue: "",
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

  handleChange = (e) => {
    const {value} = e.target
    this.setState({searchValue: value})
    
  }
  
  render() {
    
    // Desestruturação
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state
    const noMorePosts = page + postsPerPage >= allPosts.length

    const filteredPosts = !!searchValue ? 
      allPosts.filter(post => {
        return post.title.toLowerCase().includes(searchValue.toLowerCase())
      })
    : posts;

    return (
      <>
       <div className="App"> 
          <section className="container">

            {!!searchValue && (
              <>
                <h1>search value</h1>
              </>
            )}

            <TextInput
              searchValue={searchValue}
              handleChange={this.handleChange}
            />

            <br/>
            <br/>
 
            {filteredPosts.length > 0 && (
              <Post 
              posts={filteredPosts}
              />
            )}

            {filteredPosts.length === 0 && (
              <h2>Nenhum post encontrado</h2>
            )}

            <div className="button-container">
              {!searchValue && (
                <Button 
                text="Load More posts" 
                disabled={noMorePosts}
                onClick={this.loadMorePosts}
                />
              )}
            </div>
          </section> 
       </div>
     </>
    )
  }
}

export default Home;