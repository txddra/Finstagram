import * as api from '../api';

// api.fetchPosts

//Action Creators
//function that returns an action
export const  getPosts =()=>async(dispatch)=>{

    try{
        const {data} = await api.fetchPosts();
 
        dispatch({type: 'FETCH', payload:data})

    }catch(error){
        console.log(error.message)
    }
//     const action = {type: 'FETCH', payload:[]}

//     dispatch(action)
// }}
}