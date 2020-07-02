// // var xhr = new XMLHttpRequest();

// // xhr.open('GET', 'https://api.github.com/users/diego3g');
// // xhr.send(null);

// // xhr.onreadystatechange = function() {
// //     if(xhr.readyState === 4){
// //         console.log(JSON.parse(xhr.responseText));
// //     }
// // }

// var minhaPromise = function() {
//     return new Promise(function (resolve, reject){
//         var xhr = new XMLHttpRequest();

//         xhr.open('GET', 'https://api.github.com/users/diego3g');
//         xhr.send(null);

//         xhr.onreadystatechange = function () {
//             if(xhr.readyState === 4){
//                 if(xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                     } else {
//                         reject('Erro na requisição');
//                     }
//                 }
//             }
//     });
// }

// axios.get('https://api.github.com/users/diego3g')
//     .then(function(response) {
//         console.log(response);
//         console.log(response.data.avatar_url);
//     })
//     .catch(function(error){
//         console.warn(error);
//     });


// var minhaPromise = function() {
//     return new Promise(function(resolve, reject ){
//         var xhr = new XMLHttpRequest();
//         xhr.open('GET', 'https://api.github.com/users/diego3g');
//         xhr.send(null);

//         xhr.onreadystatechange = function() {
//             if( xhr.readyState === 4){
//                 if(xhr.status === 200) {
//                     resolve(JSON.parse(xhr.responseText));
//                 }else {
//                     reject('Erro na requisição');
//                 }
//             }
//         }
//     });
// }

// minhaPromise()
// .then(function(response){
//     console.log(response);
// })
// .catch(function(error){
//     console.warn(error);
// });


function checaIdade(idade) {
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            return idade >= 18 ? resolve() : reject();

        }, 2000);
    });
}
checaIdade(20)
    .then(function(response) {
        console.log("Maior que 18");
    })
    .catch(function (error) {
        console.log("Menor que 18");
    });
