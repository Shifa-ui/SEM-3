// function getUserid, callback){
//     setTimeout(()=> {
//         console.log("user fetched");
//         const user = {id: id, name: "shifa"};
//     })
// }
function getPosts(username, callback){
    setTimeout(() => {
        console.log("posts fetched")
        const posts = ["posts1", "posts2", "posts3"]
        callback(null, posts);
    }, 1000);
}
getUser(1, function(error, user){
    getProfile(user.id, function (error,profile){
        if(error){
            return;
        }
        getPosts(profile.username, function(error, posts){
            if(error){
                console.error(error);
                return;
            }
            console.log('fetched posts ${posts}');
        });
    });
});