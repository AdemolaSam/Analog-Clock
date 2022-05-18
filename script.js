document.addEventListener('DOMContentLoaded', () => {
    let sec = document.querySelector('.second')
    let h = document.querySelector('.hour')
    let m = document.querySelector('.minute')
    
    function updateTime(){
        let CurrDate = new Date()
    let hour = CurrDate.getHours()
    let minute = CurrDate.getMinutes()
    let second = CurrDate.getSeconds()
    hourRotation = (hour/2) * 30
    minuteRotation = (minute/5)*30
    secondRotation = (second/5)*30
    
    h.style.transform = 'rotate('+hourRotation+'deg)'
    m.style.transform = 'rotate('+minuteRotation+'deg)'
    sec.style.transform = 'rotate('+secondRotation+'deg)' 
    }
    setInterval(updateTime, 1000)
    updateTime()
})