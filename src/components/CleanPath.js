
const path = (path) => {
    const title = path.replace(/-|\//g, ' ').substring(0, 50)
    return title
}

export default path