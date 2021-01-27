module.exports = (prefix, text) => {
    return [CMD_NAME, ...args] = text.trim().substring(prefix.length).split(/\s+/)
}