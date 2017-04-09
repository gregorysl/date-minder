const db = function () {
    let localData = JSON.parse(localStorage.getItem("data"));
    return localData || { index: 0, items: [] };
};
const save = function (data) {
    localStorage.setItem("data", JSON.stringify(data));
};
let server = {
    add(item) {
        const data = db();
        item.id = data.index;
        data.index++;
        data.items.push(item);
        save(data);
        return data;
    },
    update(item) {
        const id = item.id;
        const data = db();
        for (let i in data.items) {
            if (data.items[i].id == id) {
                data.items[id] = item;
            }
        }
        save(data);
        return data;
    },
    delete(id) {
        const data = db();
        for (let i in data.items) {
            if (data.items[i].id == id) {
                delete data.items[id];
            }
        }
        save(data);
        return data;
    },
    getData() {
        return db();
    }
};

export default server;