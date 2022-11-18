const container = document.querySelector('.container')

let meat = [
    'Bacon','Costela','Forever', 'Stupendo',
    'Cheddar', 'Elite', 'Buffalo', 'Wolf', 
    'Choripan', 'Blumenau', 'Junior', 'Cordeiro',
    'especial'
];


const getItem = event => {
    insertSelect(event)
    hideIcon(event)
}

const insertSelect = event => {
    const parent = event.target.parentNode
    const item = document.querySelector(`.${parent.className.slice(5)}`)
    const selectOptions = createSelect()
    if(item.childElementCount < 2 ){
        item.appendChild(selectOptions)
    }
}

const createSelect = () =>{
    const select = document.createElement('select')
    select.id = 'myselect'
    select.name = 'myselect'
    select.setAttribute('onchange', 'insertMeat(this.value)')
    const options =  createOptions(select)
    return options
}

const createOptions = select =>{
    meat.forEach(item =>{
        select.options[select.options.length] = new Option(`${item}`, `${item}`)
    })
    return select
}

const hideIcon = meat =>{
    const icon = meat.target
    const iconClass = meat.target.className
    if(iconClass == 'fa-solid fa-play'){
        icon.style.display = 'none'
    }
}

const insertMeat = meat =>{

    container.addEventListener('click', e =>{
    const parentDiv = e.target.parentNode
    insertDisplay()
    // parentDiv.innerHTML = createTimerDiv()
  })
  
}

const insertDisplay = ()=>{
    const timerDiv = createTimerDiv()
    console.log(timerDiv);
    container.appendChild(timerDiv)
}

const createTimerDiv = ()=>{
    const timerDiv = document.createElement('div')
    timerDiv.id = 'timer'   
    const duration = 60 * 3
    startTimer(duration, timerDiv)
    return timerDiv
}

const startTimer = (duration, display)=>{
    let timer = duration, minutes, seconds

    setInterval(()=>{
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)

        minutes = minutes < 10 ? '0'+ minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        console.log(minutes)

        display.textContent = minutes + ":" + seconds

        if(--timer < 0){
            timer = duration
        }

    },1000)
}

container.addEventListener('click', getItem)

 