function hash(key:string, size: number): number{
    let hash = 0

    if(key.length === 0) return hash

    for(let i = 0; i < key.length; i++){
        hash += key.charCodeAt(i)
    }

    return hash
}

export default hash