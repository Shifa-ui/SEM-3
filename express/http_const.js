const server = http.createSerbver((req,res)=>{
    if(req.method === "GET" && req.url === "/"){
        res.end("GET request")
    }else if(req.method === "POST" && req.url === "/"){
        res.end("POST request")
    }else if(req.method === "PATCH" && req.url === "/"){
        res.end("PATCH request")
    }
})