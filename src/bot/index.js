function api_key(){
    const key = process.env.SECRET_MESSAGE
    return key;
}

module.exports = api_key;