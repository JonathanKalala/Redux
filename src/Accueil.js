import React, { Component } from 'react';
import { connect } from "react-redux";

class Accueil extends Component {
    render(){
        const { posts } =this.props;
        const postData = posts.length ? (
            posts.map(post => {
                return (
                    <div className="base" key ={post.id}>
                         <h2>{post.title}</h2>
                         <p>{post.body}</p>
                     </div>
                 );
            })
        ) : (
            <p>Aucun article pour le moment !</p>
        );
        return (
            <div className="accueil">
                <h4>Page d'accueil</h4>
                <p>{ postData }</p> 
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        posts: state.posts
    }
}


export default connect(mapStateToProps)(Accueil);
