const Memo = require('./Memo');

class MemoManager {
    constructor() {
        this.memos = [
            new Memo('Hello World'),
            new Memo('Hello World2')
        ];
    }

    createMemo(content) {
        const memo = new Memo(content);
        this.memos.push(memo);
        return memo;
    }

    getMemo(id) {
        return this.memos[id];
    }

    getAllMemos() {
        return Object.values(this.memos);
    }

    updateMemo(id, content) {
        if (this.memos[id]) {
            this.memos[id].content = content;
            return this.memos[id];
        }
        return null;
    }

    deleteMemo(id) {
        if (this.memos[id]) {
            delete this.memos[id];
            return true;
        }
        return false;
    }
}

module.exports = MemoManager;
