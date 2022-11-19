const container = document.querySelector('.container')

let meat = [
    'Bacon','Costela','Forever', 'Stupendo',
    'Cheddar', 'Elite', 'Buffalo', 'Wolf', 
    'Choripan', 'Blumenau', 'Junior', 'Cordeiro',
    'especial'
];

let MeatPoint = ['Bem', 'Ponto', 'Mal']


const insertSelect = event => {
    hideIcon(event)
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
    const selectOptions =  createOptions(select)
    return selectOptions
}

const createOptions = select =>{
    meat.forEach(item =>{
        select.options[select.options.length] = new Option(`${item}`, `${item}`)
    })
    return select
}

const hideIcon = meat =>{
    const icon = meat.target
    const iconClass = icon.className
    if(iconClass == 'fa-solid fa-play'){
        icon.style.display = 'none'
    }
}

const insertMeat = value =>{
    
    container.addEventListener('click', e =>{
    const parentDiv = e.target.parentNode
    const selectCurrent = parentDiv.querySelector('#myselect')
    parentDiv.removeChild(selectCurrent)
    dynamicContent(value,parentDiv) 
  })
  
}

const dynamicContent = (value, currentDiv) => {
    
    const displayShow = document.createElement('div')
    displayShow.id = 'elementShow'

    const textValue = document.createElement('p')
    textValue.innerText = value
    
    displayShow.append(textValue)

    currentDiv.appendChild(displayShow)

    createPointTimer(currentDiv)
}


const createPointTimer = currentDiv =>{
    const select = document.createElement('select')
    select.id = 'selectPointMeat'
    select.name = 'selectPointMeat'
    select.setAttribute('onchange', 'getPoint(this.value)')
    MeatPoint.forEach(item =>{
        select.options[select.options.length] = new Option(`${item}`, `${item}`)
    })
    currentDiv.append(select)
}

const getPoint = point =>{
    let timerPoint;

    if( point == 'mal'){
        timerPoint = 10
    }
    if( point=='ponto'){
        timerPoint = 20
    }
    if(point = 'bem'){
        timerPoint = 30
    }

    container.addEventListener('click', e =>{
        const currentDiv = e.target.parentNode
        const selectCurrent = currentDiv.querySelector('#selectPointMeat')
        currentDiv.removeChild(selectCurrent)

        createTimerDiv(timerPoint, currentDiv)
})
    
}

const createTimerDiv = (timer, currentDiv) =>{
    const timerDiv = document.createElement('div')
    timerDiv.id = 'timer'   
    const duration = timer
    startTimer(duration, timerDiv)
    currentDiv.appendChild(timerDiv)
    console.log(currentDiv)
}

const startTimer = (duration, display)=>{
    let timer = duration, minutes, seconds

    const meuInterval = setInterval(()=>{
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10)

        minutes = minutes < 10 ? '0'+ minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        display.textContent = minutes + ":" + seconds
      
        if(--timer < 0){
            timer = 0
        }

    },1000)

    if(timer == 0){
        clearInterval(meuInterval)
    }
}

container.addEventListener('click', insertSelect)


