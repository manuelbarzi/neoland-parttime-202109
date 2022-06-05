import './Post.css'


export default ({ post }) => {



    return <div className="post">
        <div className="post__header">
            <p>{post.userNickname}</p>
            <p>{post.subject}</p>
        </div>
        <div className="post__body">
            <h1 className="post__body-title">{post.title}</h1>
            <div className="post__body-description">
                {
                    post.image ?
                        (<p>{post.image}</p>)
                            (<p>{post.description}</p>)
                        :
                        <p>{post.description}</p>
                }
                <p>{post.address}</p>
            </div>
        </div>
        <div className="post__footer">
            <div className="post__footer-feedback">
                <div className="post__footer-feedback post__footer-feedback__likes">
                    <button >Likes</button>
                    {
                        post.likes ? <p>{post.likes}</p> : <p>0</p>
                    }
                </div>
                <div className="post__footer-feedback post__footer-feedback__dislikes">
                    <button>Dislikes</button>
                    {
                        post.dislikes ? <p>post.dislikes</p> : <p>0</p>
                    }
                </div>
            </div>
            <button className="post__footer--save" /*{</div>onClick={handleFavoritePosts}*/>SavePost</button>
        </div>

    </div>

}