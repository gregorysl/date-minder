const db = function () {
    let localData = JSON.parse(localStorage.getItem("data"));
    return localData || { index: 0 };
};
const save = function (data) {
    localStorage.setItem("data", JSON.stringify(data));
};
let server = {
    add(item) {
        const data = db();
        data.index++;
        item.id = data.index;
        data[data.index] = item;
        save(data);
        return data;
    },
    update(item) {
        const id = item.id;
        const data = db();
        data[id] = item;
        save(data);
        return data;
    },
    delete(id) {
        const data = db();
        delete data[id];
        save(data);
        return data;
    },
    getData() {
        return db();
    }
};

export default server;