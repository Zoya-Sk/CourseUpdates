let url = "https://catfact.ninja/fact";

async function getFacts() {
    try{
        let res = await fetch(url);
    let data = await res.json();
    // console.log(data);
    console.log(data.fact);

    let res2 = await fetch(url);
    let data2 = await res.json();
    console.log(data2.fact);
    // console.log(data2);
    } catch(e){
        console.log("Error ", e);
    }
}

getFacts();