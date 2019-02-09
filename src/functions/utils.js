/* Retrieves the user's locale */
export let locale =
    (navigator.languages && navigator.languages[0])
    || navigator.language
    || navigator.userLanguage
    || 'en-US'

/* Translates the text  */
export function getTranslate(nestedMessages, prefix = '') {
    return Object.keys(nestedMessages).reduce((messages, key) => {
        let value = nestedMessages[key]
        let prefixedKey = prefix ? `${prefix}.${key}` : key
        if (typeof value === 'string') {
            messages[prefixedKey] = value
        } else {
            Object.assign(messages, getTranslate(value, prefixedKey))
        }
        return messages
    }, {})
}