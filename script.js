const container = document.querySelector('.container')

let meat = [
    'Bacon','Costela','Forever', 'Stupendo',
    'Cheddar', 'Elite', 'Buffalo', 'Wolf', 
    'Choripan', 'Blumenau', 'Junior', 'Cordeiro',
    'especial'
]

const getItem = event => {
    insertSelect(event)
    insertMeat(event)
}

const insertSelect = event => {
    const parent = event.target.parentNode
    const item = document.querySelector(`.${parent.className.slice(5)}`)
    const select = createSelect()
    if(item.childElementCount < 2 ){
        item.appendChild(select)
    }
}

const createSelect = () =>{
    const select = document.createElement('select')
    select.id = 'myselect'
    select.name = 'myselect'
    select.setAttribute('onchange', 'getMeat(this.value)')
    const options =  createOptions(select)
    // console.log(options)
    return options
}

const createOptions = select =>{
    meat.forEach(item =>{
        select.options[select.options.length] = new Option(`${item}`, `${item}`)
    })
    return select
}

const insertMeat = meat =>{
    hideIcon(meat)

}

const hideIcon = meat =>{
    const icon = meat.target
    const iconClass = meat.target.className
    if(iconClass == 'fa-solid fa-play'){
        icon.style.display = 'none'
    }
}

const getMeat = meat =>{
    const meatTarget = meat.text
    console.log(meatTarget)
   
}

const inserInterface = ()=>{
    const displayDiv = document.createElement('div')
    // console.log(displayDiv)
}
container.addEventListener('click', getItem)

 