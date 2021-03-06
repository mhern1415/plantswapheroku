import React from 'react';
import { getPosts } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../post.css';
import Counter from './Counter'
class PostAll extends React.Component {

    constructor (props) {
      super(props) 
      this.state = {counter: 0}
    }

   

    componentDidMount(){
        this.props.getPosts();
    }

    renderList = () => {
        const message = "Hello. I am interested in purchasing your "
        const message2 = " that is listed on Plant Swap SF."
        const sortedPosts = this.props.posts.sort((a, b) => b.id - a.id);
        return sortedPosts.map(post => {
            return (
                <div className="column" key={post.id}>
                    <div className="content">
                        <p>{post.date}</p>
                        <div id="title">                            
                        <div><Link to={`/posts/${post.id}`}>{post.title}</Link></div>
                            <br></br> 
                            <button className="ui button">
                            < a target="_blank" href={`https://garden.org/plants/search/text.php?q=${post.title}`}><i className="info circle icon"></i>Plants Database Info</a>
                            </button>
                            <br></br>  
                            <br></br>                     
                            <div className="itemPrice">Price: ${post.price}</div>
                            <br></br>
                            <div>Description: {post.description}</div>
                            <br></br>
                            <button className="ui button">
                            < a target="_blank" href={`https://www.unitedstateszipcodes.org/${post.zip_code}/`}><i className="map marker alternate icon"></i>{post.zip_code}</a>
                            </button>
                            <br></br>
                            <br></br>
                            <div>Plant Type: {post.plant_type}</div>
                            <br></br>
                            <div><Link to={`/posts/${post.id}`}><img className="ui fluid image" src={post.image_url} alt={`${this.props.title}`}  className="img-responsive" /></Link></div>
                            <br></br>
                            <button className="ui button">
                            <div><a href={"mailto:" + post.contact + "?subject=" + post.title + " - Plant Swap SF" + "&body=" + message + post.title + message2} target="_blank"><i className="envelope outline icon"></i>
                            Email Seller</a></div>
                            </button>
                            < Counter />
                        </div>
                    </div>
                </div>
            )  
        })
    }



    render() {
        return (
            <div className="ui four column relaxed grid">
                {this.renderList()}
            </div>
        )
    }
}

    const mapStateToProps = state => {
        return {
            posts: state.postReducer.posts,
            currentUserId: state.auth.userId
        }
    }




export default connect(mapStateToProps, {getPosts})(PostAll);