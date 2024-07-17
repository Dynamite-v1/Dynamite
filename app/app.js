const item = {name : 'ali'}

function localStorageHandler (item){
    localStorage.setItem('usersName',JSON.stringify(item))
}

window.addEventListener('load', function(){
    if (JSON.stringify(JSON.parse(localStorage.getItem('usersName'))) !== JSON.stringify([])) {
        console.log(JSON.parse(localStorage.getItem('usersName')));
    }
})
// localStorageHandler(item)