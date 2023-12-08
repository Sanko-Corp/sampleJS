const express = require('express');
const MemoManager = require('./MemoManager');
const Memo = require('./Memo');
const app = express();

app.use(express.json());

const manager = new MemoManager();

app.post('/memo', (req, res) => {
    const memo = manager.createMemo(req.body.content);
    res.status(201).json(memo.toJSON());
});

app.get('/memo', (req, res) => {
    res.json(manager.getAllMemos().map(memo => memo.toJSON()));
});

app.get('/memo/:id', (req, res) => {
    const memo = manager.getMemo(req.params.id);
    if (memo) {
        res.json(memo.toJSON());
    } else {
        res.status(404).send('Memo not found');
    }
});

app.put('/memo/:id', (req, res) => {
    const updatedMemo = manager.updateMemo(req.params.id, req.body.content);
    if (updatedMemo) {
        res.json(updatedMemo.toJSON());
    } else {
        res.status(404).send('Memo not found');
    }
});

app.delete('/memo/:id', (req, res) => {
    if (manager.deleteMemo(req.params.id)) {
        res.status(200).send(`Memo ${req.params.id} deleted`);
    } else {
        res.status(404).send('Memo not found');
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
