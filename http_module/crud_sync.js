function getUser(id, callback){
    setTimeout(() => {
        console.log("User Fetched");
        const user={
            id: 101,
            username: "aryan"
        }
        callback(null, user)
    }, 1000);
}
function getProfile(id, callback){
    setTimeout(() => {
        console.log("Profile Fetched")
        const profile={
            username: "aryan",
            location: "DELHI"
        }
        callback(null, profile)
    }, 1000);
}

function getPosts(username, callback){
    setTimeout(() => {
        console.log("Posts Fetched");
        const posts=["post1", "post2", "post3"];
        callback(null, posts);
    }, 1000);
}

getUser(1, function(error, user){
    if(error){
        console.error(error);
        return;
    }
    getProfile(user.id, function(error, profile){
        if(error){
            return;
        }
        getPosts(profile.username, function(error, posts){
            if(error){
                console.error(error);
                return;
            }
            console.log(`Fetched Posts ${posts}`);
        });
    });
});