
const path = (path) => {
    const title = path.replace(/-|\//g, ' ').substring(0, 50)
    return title.replace(/\w\S*/g, 
        function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
        }    
    )
}

export default path