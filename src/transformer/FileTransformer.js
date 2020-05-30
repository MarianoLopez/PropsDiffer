export const fileToMap = (file) => {
    return new Map(
        file.split(/\r\n|\n/)
            .filter(line => line !== "" && line.includes("="))
            .map(line => {
                let keyValue = line.split('=');
                return [keyValue[0], keyValue[1]]
            })
    );
};