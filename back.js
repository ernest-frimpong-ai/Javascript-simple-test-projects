const btnClick = document.querySelector('#btnClick')
const btnColor = document.querySelector('#btnColor')

// const colors=['red','green','blue','yellow','black']
const colors=['a','b','c','d','d','e','f',0,1,2,3,4,5,6,7,8,9]

btnClick.addEventListener('click', ()=>{
    let color = '#'
    for(let i=0;i<6;i++){
        // generate a random number between 0 and array length
    let generated = Math.floor(Math.random() * colors.length)

        // Find the corresponding colors from the generated
    let generatedColor = colors[generated]
    color += generatedColor
    }

    document.body.style.backgroundColor=color

    // document.body.style.backgroundColor='blue'

    // generate a random number between 0 and array length
    // let generated = Math.floor(Math.random() * colors.length)

    // // Find the corresponding colors from the generated
    // let generatedColor = colors[generated]

    // set the body tag to the generated color
    // document.body.style.backgroundColor=generatedColor
    
    // console.log(generated)
})

btnColor.addEventListener('input', ()=>{ 
    document.body.style.backgroundColor=btnColor.value
})

btnColor.addEventListener('change', ()=>{ 
    document.body.style.backgroundColor=btnColor.value
})