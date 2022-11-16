const container = document.querySelector('.container')



const getItem = e => {
    const parent = e.target.parentNode
    const item = document.querySelector(`.${parent.className.slice(5)}`)
    insertSelect(item)
}

const insertSelect = item => {
    const select = createSelect()
 
    item.appendChild(select)
    select.classList.add('hide')
    console.log(item)
    // insertOptions(item)
    
}

const insertOptions = item =>{
    // console.log(item)
}

const createSelect = () =>{
    const select = document.createElement('select')
    select.id = 'myselect'
    select.name = 'myselect'
    return select
}

container.addEventListener('click', getItem)

 