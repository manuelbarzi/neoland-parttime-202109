
function UserPosts({ user, refreshPosts }) {



    return  <div>
    {
        posts.length ?
            <ul> {posts.map(post => <li key={post.id}> <Post post={post} user={user} /></li>)}
            </ul> :
            <p>Sorry, there are no posts to show</p>
    }
</div>
}

export default UserPosts