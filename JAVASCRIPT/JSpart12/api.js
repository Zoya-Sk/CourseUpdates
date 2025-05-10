let url = "https://catfact.ninja/fact";
fetch(url)
.then((Response)=>{
    console.log(Response);
    return Response.json();
})
.then((data)=>{
    console.log("data 1 : ",data.fact);
    return fetch(url);
})
.then((Response)=>{
    return Response.json();
})
.then((data2)=>{
    console.log("Data2 : ",data2.fact);
})
.catch((err)=>{
    console.log("Error", err);
})