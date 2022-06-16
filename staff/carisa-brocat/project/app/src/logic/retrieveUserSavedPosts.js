import { validators, errors } from 'commons'

const { ServerError, ClientError, NotFoundError, AuthError } = errors
const { validateToken } = validators

function retrieveUserSavedPosts(token) {
    validateToken(token)

    return fetch('http://localhost:8080/api/users', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
        .then(res => {
            const { status } = res

            if (status === 200) {
                return res.json()
                    .then(user => {

                        const { savedPosts = [] } = user

                        const posts = []

                        if (savedPosts.length) {
                            savedPosts.forEach(postId =>
                                fetch(`http://localhost:8080/api/posts/${postId}`)
                                    .then(res => {
                                        const { status } = res

                                        if (status >= 400 && status < 500)
                                            return res.json()
                                                .then(data => {
                                                    const { error: message } = data

                                                    if (status === 401)
                                                        throw new AuthError(message)
                                                    else if (status === 404) {
                                                        if (message === 'post not found') {
                                                            return
                                                        }
                                                        throw new NotFoundError(message)
                                                    }
                                                    else
                                                        throw new ClientError(message)
                                                })
                                        else if (status >= 500)
                                            return res.text()
                                                .then(text => {
                                                    throw new ServerError(text)
                                                })
                                        else if (status === 200)
                                            return res.json()
                                                .then(post => {

                                                    return posts.push(post)
                                                })
                                    })
                            )
                            return Promise.all(posts)
                        }
                        return []
                    })
            }
            else if (status >= 400 && status < 500)
                return res.json()
                    .then(data => {
                        const { error: message } = data

                        if (status === 401)
                            throw new AuthError(message)
                        else if (status === 404)
                            throw new NotFoundError(message)
                        else
                            throw new ClientError(message)
                    })
            else if (status >= 500)
                return res.text()
                    .then(text => {
                        throw new ServerError(text)
                    })
        })
}

export default retrieveUserSavedPosts
