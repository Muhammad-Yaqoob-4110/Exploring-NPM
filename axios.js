const axios = require('axios');

// get method of axios
axios.get('https://jsonplaceholder.typicode.com/posts')
// .then(response => console.log(response.data));



axios.get('https://jsonplaceholder.typicode.com/posts/1')
// .then(response => console.log(response.data));

// post method of axios
axios.post('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
// .then(response => console.log(response.data));


// put method of axios
axios.put('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
// .then(response => console.log(response.data));


// patch method of axios
axios.patch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
        title: 'foo',
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
})
// .then(response => console.log(response.data));


// delete method of axios
axios.delete('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
})
// .then(response => console.log(response.data));