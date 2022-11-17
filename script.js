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
    const select = createSelect()
    if(item.childElementCount < 2 ){
        item.appendChild(select)
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

  const parentDiv = container.addEventListener('click', (e)=>{
    return (e.target.parentNode)
  })
  console.log(parentDiv)
}

container.addEventListener('click', getItem)

 