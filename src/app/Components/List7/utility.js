
const compare = (cur, next)  => {
    try {
        if (JSON.stringify(cur) === JSON.stringify(next)) {
            return true;
        }
    } catch (ex) {
    }
    return false;
}

export {
    compare
};