var storageManager = function(storage_name) {
    this._storage_name = storage_name;
    this._storage_data = this.getAll();
}

storageManager.prototype.set = function(key, value) {
    this._storage_data[key] = value;
    window.localStorage.setItem(this._storage_name, JSON.stringify(this._storage_data));
}

storageManager.prototype.get = function(key) {
    return this._storage_data[key];
}

storageManager.prototype.getAll = function() {
    var str_data = window.localStorage[this._storage_name];
    var parsed_data;

    try {
        if (str_data) {
            parsed_data = JSON.parse(str_data);
            return parsed_data;
        }
    } catch (e) {
        cosnole.log("parse error occurred...");
    }

    return {};
}

storageManager.prototype.deleteAll = function() {
    this._storage_data = {};
    window.localStorage.setItem(this._storage_name, JSON.stringify(this._storage_data));
}
