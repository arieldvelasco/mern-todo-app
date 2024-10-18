export const saveData = {
    setItem: (key, value) => {
        localStorage.setItem(key, JSON.stringify(value))
    }
}

export const getData = {
    fetchItem: (key) => {
        return JSON.parse(localStorage.getItem(key))
    }
}