/**
 * used to set something in the localstorage
 * @param {string} key - a key
 * @param {string} value - the value which can be retrieved by the key
 **/
export const setLocalstorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
};

/**
 * used to retrieve something from the localstorage by a key
 * @param {string} key - the key
 **/
export const getLocalstorage = (key: string): string => {
    return localStorage.getItem(key)!;
};
