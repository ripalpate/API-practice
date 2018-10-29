const loadjokes = ()=>{
    return new Promise((resolve,reject)=>{
        $.ajax({
            url: 'https://icanhazdadjoke.com/',
            headers: {accept: 'application/json'}
        })
        .done((data)=>{
            // console.log(data);
            resolve(data);
            $('#jokes').html(data.joke);
        }).fail((error)=>{
            reject(error);
        })
    })
}

loadjokes();