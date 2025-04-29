export default async function Test() {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve('delay')
        }, 2000)
    })
    return <h1>myblog</h1>
}
