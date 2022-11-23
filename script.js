const container = document.querySelector('.container')

let meat = [
    'BACOM ','COSTELA','FOREVER', 'STUPENDO',
    'CHEDDAR', 'ELITE', 'BUFALLO', 'WOLF', 
    'CHORIPAN', 'BLUMENAU', 'JUNIOR', 'CORDEIRO',
    'ESPECIAL'
];

let MeatPoint = ['BEM', 'PONTO', 'MAL']


const insertSelect = event => {
    const parent = event.target.parentNode

    if(parent.id == 'item'){
        hideIcon(event)
        createSelect(parent)
    }
}

const createSelect = item =>{
    const select = document.createElement('select')
    select.id = 'myselect'
    select.name = 'myselect'
    select.required
    select.setAttribute('onchange', 'getMeat(this)')
    
    const selectOptions =  createOptions(select)

    if(item.childElementCount < 3 ){
        item.appendChild(selectOptions)
        selectOptions.size = selectOptions.options.length

    }
    
    const selectPointMeat = document.createElement('select')
    selectPointMeat.id = 'selectPointMeat'
    selectPointMeat.name = 'selectPointMeat'
    selectPointMeat.setAttribute('onchange', 'getPoint(this)')
    MeatPoint.forEach(item =>{
        selectPointMeat.options[selectPointMeat.options.length] = new Option(`${item}`, `${item}`)
    })

    if(item.childElementCount == 3){
        item.appendChild(selectPointMeat)
        selectPointMeat.size = selectPointMeat.options.length
        selectPointMeat.style.display= 'none'
    }
}

const createOptions = select =>{
    meat.forEach(item =>{
        select.options[select.options.length] = new Option(`${item}`, `${item}`)
    })

    return select
}

const hideIcon = item =>{
    const icon = item.target
    const iconClass = icon.className

    if(iconClass == 'fa-solid fa-play'){
        icon.style.display = 'none'
    }
}

const getMeat = item =>{
    const selectedMeat = item.value
    const currentDiv = item.parentNode
    item.style.display = 'none'
    
    currentDiv.querySelector('#selectPointMeat').style.display='flex'

    insertTextContent(selectedMeat,currentDiv) 
}

const insertTextContent = (value, currentDiv) => {
    
    const displayShow = currentDiv.querySelector('#dynamicContent')

    const textValue = document.createElement('p')
        .innerText = value
    
    displayShow.append(textValue)

    currentDiv.appendChild(displayShow)

    resetBtn(currentDiv)
}

const getPoint = point =>{
    const pointMeat = point.value
    const currentDiv = point.parentNode
    let timerPoint;
 
    if( pointMeat == 'MAL'){
        timerPoint = 10
    }
    if( pointMeat == 'PONTO'){
        timerPoint = 20
    }
    if(pointMeat == 'BEM'){
        timerPoint = 30
    }
    console.log(timerPoint)
    createTimerDiv(pointMeat, timerPoint, currentDiv)

    point.style.display = 'none'
}

const createTimerDiv = (point, timer, currentDiv) =>{
    const timerDiv = document.createElement('div')
    timerDiv.id = 'timer'
    timerDiv.name = 'timer'

    const timerText = document.createElement('span')
    timerText.innerText = point
    
    startTimer(timer, timerDiv)

    const dynamicDiv = currentDiv.querySelector('#dynamicContent')
    dynamicDiv.appendChild(timerText)
    dynamicDiv.appendChild(timerDiv)
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

const resetBtn = item =>{
    const reset = document.createElement('button')
    reset.type = 'button'
    reset.id = 'resetBtn'
    reset.textContent = 'Reset'

    item.appendChild(reset)
    console.log(reset)
    console.log(item)
}


container.addEventListener('click', insertSelect)


