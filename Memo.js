class Memo {
    constructor(content) {
        this.id = crypto.randomUUID();
        this.content = content;
    }

    toJSON() {
        return {
            id: this.id,
            content: this.content
        };
    }
}

module.exports = Memo;
