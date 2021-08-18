const greeting = document.querySelector('#greeting-text');
function greet(){
    let date = new Date().getHours()
    if(date >= 0 && date < 12){
        greeting.textContent = 'Good Morning'
    }else if (date >= 12 && date < 18){
        greeting.textContent = 'Good Afternoon'
    }else if (date >= 18){
        greeting.textContent = "Good Evening"
    }
}
greet();