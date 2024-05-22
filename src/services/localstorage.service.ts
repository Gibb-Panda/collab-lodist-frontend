export const setLocalstorage = (key: string, value: string) => {
    localStorage.setItem(key, value);
};

export const getLocalstorage = (key: string): string => {
    return localStorage.getItem(key)!;
};
