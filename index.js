const axios = require('axios');
const fs = require('fs');

const convertCase = (type) => {
    let retType = ""
    for (let index = 0; index < type.length; index++) {
        retType += index === 0 ? type[index].toUpperCase(): type[index].toLowerCase()
    }
    return retType
}

const createGithubUserContentUrl = (type) => {
    return `https://raw.githubusercontent.com/github/gitignore/main/${type}.gitignore`
}


const getResponseForType = async (type) => {
    try {
        const response = await axios.get(createGithubUserContentUrl(convertCase(type)))
        if (response.status === 200) {
            return response.data
        }else {
            return null
        }
    } catch {
        return null
    }
}

const createOrAppendGitIgnore = async (type) => {
    const data = await getResponseForType(type)
    try {
        fs.appendFileSync('.gitignore', data)
        console.log('done!!!')
    } catch (error) {
        console.error(error)
    }
}

exports.run = createOrAppendGitIgnore
