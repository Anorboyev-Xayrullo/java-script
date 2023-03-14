const getData = async () => {
    const url = await fetch("http://localhost:3000/data")
    const json = await url.json()
    const list_group = document.querySelector(".list_group")
    json.map((res) => {
        list_group.innerHTML += `
            <li class="list-group-item"><b>Name: </b>${res.name} <br> <b>Comments:</b>${res.comment}</li>
        `
    })
}
getData()
const btn = document.querySelector(".postData")
btn.onclick = (e) => {
    e.preventDefault()
    postData()
}
const postData = () => {
    const inp = document.querySelector(".form-control")
    const comment = document.querySelector(".comment")
    let value = inp.value
    console.log(value);
    let comValue =comment.value
    console.log(comValue);
    if (value === "" || comValue === "") {
        inp.style.border = "2px solid red"
        comment.style.border = "2px solid red"
        alert("To'ldiring")
    }else {
        fetch("http://localhost:3000/data", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: value ,comment: comValue})
        }).then((msg) => alert(msg.statusText))
    }
}

