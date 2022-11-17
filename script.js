const container = document.querySelector('.container')

let carnes = [
    'Bacon','Costela','Forever', 'Stupendo',
    'Cheddar', 'Elite', 'Buffalo', 'Wolf', 
    'Choripan', 'Blumenau', 'Junior', 'Cordeiro',
    'especial'
]

const getItem = event => {
   insertSelect(event)
}

const insertSelect = event => {
    const parent = event.target.parentNode
    const item = document.querySelector(`.${parent.className.slice(5)}`)
    const select = createSelect()
    if(item.childElementCount < 2 ){
        item.appendChild(select)
    }
    select.classList.add('hide')
    console.log(item)
    
}

const createSelect = () =>{
    const select = document.createElement('select')
    select.id = 'myselect'
    select.name = 'myselect'
    const options =  createOptions(select)
    return options
}

const createOptions = select =>{
    carnes.forEach(item =>{
        select.options[select.options.length] = new Option(`${item}`, `${item}`)
    })
    return select
}

container.addEventListener('click', getItem)

 