
let fatch_data = document.getElementById('fatch_data')
fatch_data.addEventListener('click', btn_handle)

let post_request = document.getElementById('post_request')
post_request.addEventListener('click', post_rq)


// get request
function btn_handle(){
    console.log("Button clicked!!");
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest();

    // open the object
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/comments', true)

    // on progress
    xhr.onprogress = function(){
        console.log("On progress")
    }

    // onload
    xhr.onload = function(){
        if(this.status === 200){
            console.log(this.responseText)
        }else{
            console.log("some error occured")
        }
    }

    // send request
    xhr.send()
}

// post request
function post_rq(){
    console.log("post_rq button clicked")
    // Instantiate an xhr object
    const xhr = new XMLHttpRequest()

    // open the object 
    xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts', true)
    xhr.setRequestHeader('Content-type', 'application/json');
    
    // on progress
    xhr.onprogress = function(){
        console.log("on progress")
    }

    // onload
    xhr.onload = function(){
        if (this.status === 200){
            console.log(this.responseText);
        }else{
            console.log("some error occured");
        }
    }

    // send request
    var data = {
        title: 'foo',
        body: 'bar',
        userId: 1,
      };

    xhr.send(JSON.stringify(data))

}