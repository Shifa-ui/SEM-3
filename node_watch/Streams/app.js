// READABLE STREAMS
import fs from 'fs'
const readStream  = fs.createReadStream("input.txt", {encoding: 'utf-8'
})
readStream.on("data", (chunk) => {
    console.log("data recieved");
        console.log("data:",chunk)
    }
)
readStream.on("end", ()=> {
    console.log("END")
})
readStream.on("error", (error)=>{
    console.log("error:", error.message)
})

const writeStream = fs.createWriteStream("output.txt")
writeStream.write("Hello\n")

writeStream.on("finish",()=> {
    console.log("data has been written")
})
writeStream.on("error", (error)=>{
    console.log("error:", error)
})
read