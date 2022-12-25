const convertCase = (type) => {
    let retType = ""
    for (let index = 0; index < type.length; index++) {
        retType += index === 0 ? type[index].toUpperCase(): type[index].toLowerCase()
    }
    return retType
}

const createGithubusercontentUrl = (type) => {
    return `https://raw.githubusercontent.com/github/gitignore/main/${type}.gitignore`
}


console.log(createGithubusercontentUrl(convertCase("nODE")))