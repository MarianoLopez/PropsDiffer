const newLine = "\n";

export const mapToProperties = (map) => {
    return Array.from(map.entries()).reduce((accumulator, currentValue) => {
        let [key, value] = currentValue;
        return accumulator + buildPropertyEntry(key, value);
    }, "")
};

export const mapToDiffProperties = (map) => {
    return Array.from(map.entries()).reduce((accumulator, currentValue) => {
        let key = currentValue[0];
        let [current, old] = currentValue[1];
        return accumulator + buildPropertyEntry(key, current) + buildPropertyEntry(key, old);
    }, "")
};

const buildPropertyEntry = (key, value) => key.toString() + "=" + value.toString() + newLine;