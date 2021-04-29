// initial value are going to be an array, the state will always be posts
export default ( posts=[], action)=>{
    switch(action.type){
        case 'FETCH':
            return action.payload;
        case 'CREATE':
            return posts;
        default:
            return posts;

}
}

// export default (posts =[], action)=>{
//     switch(action.type){
//         case 'FETCH':
//             return posts;
//         default:
//             return posts;    
//     }
// }