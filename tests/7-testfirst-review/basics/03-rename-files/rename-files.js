function renameFiles(names) {
    const nameCount = {}; 
    const result = [];

    for (let name of names) {
        if (nameCount[name] === undefined) {
            nameCount[name] = 1;
            result.push(name);
        } else {
            let newName;
            let count = nameCount[name];

            while (nameCount[`${name}(${count})`] !== undefined) {
                count++;
            }

            newName = `${name}(${count})`;
            result.push(newName);

            nameCount[name]++;
            nameCount[newName] = 1;
        }
    }

    return result;
}
