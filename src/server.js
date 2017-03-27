const db = function () {
    let localData = JSON.parse(localStorage.getItem("data"));
    return localData || { index: 0 };
};
let server = {
    add(item) {
        const data = db();
        data.index++;
        debugger;
        item.id = data.index;
        data[data.index] = item;
        localStorage.setItem("data", JSON.stringify(data));
        return data;
    },
    update(item) {
        const id = item.id;
        const data = db();
        data[id] = item;
        localStorage.setItem("data", JSON.stringify(data));
        return data;
    },
    delete(id) {
        const data = db();
        delete data[id];
        localStorage.setItem("data", JSON.stringify(data));
        return data;
    },
    getData(){
        return db();
    }
};

export default server;