import {database} from "../database/config"

export function startAddingPost(post)
{
    return (dispatch) => {
        return database.ref('posts').update({[post.id]: post}).then (() =>
        {
            dispatch(addPost(post))
        } )
    }  
}

export function startLoadingPost()
{
    return (dispatch) => 
    {
        return database.ref('posts').once('value').then((snapshot) => 
        {
            let posts = []
            snapshot.forEach((childSnapshot) => 
            {
                posts.push(childSnapshot.val())
            })
            dispatch(loadPost(posts))  
            
        } )
    }

}

export function startRemovingPost(index, id)
{
    return (dispatch) => 
    {
        return database.ref(`posts/${id}`).remove().then(() => 
        {
            dispatch(removePost(index))
        } )
    }
}


export function removePost(index)
{
    return {
        type: "REMOVE_POST",
        index:index
    }
} 

export function addPost(post)
{
    return {
        type: "ADD_POST",
        post:post
    }
} 

export function addComment(comment, postID)
{
    return {
        type: "ADD_COMMENTS",
        comment: comment,
        postID: postID
    }
} 

export function loadPost(posts)
{
    return {
        type: "LOAD_POSTS",
        posts:posts
    }
}