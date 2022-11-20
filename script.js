const container = document.querySelector('.container')

let meat = [
    'Bacon','Costela','Forever', 'Stupendo',
    'Cheddar', 'Elite', 'Buffalo', 'Wolf', 
    'Choripan', 'Blumenau', 'Junior', 'Cordeiro',
    'especial'
];

let MeatPoint = ['Bem', 'Ponto', 'Mal']


const insertSelect = event => {
    const parent = event.target.parentNode

    hideIcon(event)
    createSelect(parent)
}

const createSelect = item =>{
    const select = document.createElement('select')
    select.id = 'myselect'
    select.name = 'myselect'
    select.setAttribute('onchange', 'getMeat(this)')

    const selectOptions =  createOptions(select)

    if(item.childElementCount < 3 ){
        item.appendChild(selectOptions)
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
}


// const createPointTimer = currentDiv =>{
//     const select = document.createElement('select')
//     select.id = 'selectPointMeat'
//     select.name = 'selectPointMeat'
//     select.setAttribute('onchange', 'getPoint(this.value)')
//     MeatPoint.forEach(item =>{
//         select.options[select.options.length] = new Option(`${item}`, `${item}`)
//     })
//     currentDiv.append(select)
// }

const getPoint = point =>{
    const pointMeat = point.value
    const currentDiv = point.parentNode
    let timerPoint;
    console.log(pointMeat)
    if( pointMeat == 'mal'){
        timerPoint = 10
    }
    if( pointMeat == 'ponto'){
        timerPoint = 20
    }
    if(pointMeat == 'bem'){
        timerPoint = 30
    }
    console.log(timerPoint)
    createTimerDiv(timerPoint, currentDiv)

    point.style.display = 'none'
}

const createTimerDiv = (timer, currentDiv) =>{
    const timerDiv = document.createElement('div')
    timerDiv.id = 'timer'
    timerDiv.name = 'timer'

    startTimer(timer, timerDiv)

    const dynamicDiv = currentDiv.querySelector('#dynamicContent')
    dynamicDiv.appendChild(timerDiv)

    console.log(dynamicDiv)
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


