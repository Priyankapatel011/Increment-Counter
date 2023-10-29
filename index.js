const counters = document.querySelectorAll('.counter')
// node list -> similar to array

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        // console.log(typeof target, target)

        const c = +counter.innerText

        const increment = target / 200

        if(c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
        }
        else{
            counter.innerText = target 
        }

    }
    updateCounter()
})

