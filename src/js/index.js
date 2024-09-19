const btn = document.querySelector('.advice-update')
const id = document.querySelector('.advice-id')
const description = document.querySelector('.advice-description')

const fetchApi = async () => {
    try {
        const result = await fetch(`https://api.adviceslip.com/advice`)
        const data = await result.json()
        console.log(data);
        return data
    } catch (error) {
        console.error('Failed to fetch advice:', error);
    }
}

btn.addEventListener('click', async () => {
    const result = await fetchApi()
    id.textContent = `ADVICE #${result.slip.id}`
    description.textContent = `"${result.slip.advice}"`
})