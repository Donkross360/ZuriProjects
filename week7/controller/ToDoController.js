const ToDoModel = require('../models/ToDoModel')

exports.getToDo = async (req, res) => {
    try {
        if (!null) {
            const toDo = await ToDoModel.find()
            res.status(200).json(toDo)
        }
    } catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }
}

exports.createToDo = async (req, res) => {
    try {
        //console.log(req.body)
        let body = await req.body ;
        let created = await ToDoModel.create(body);
        if (!created)
            return res.status(400).json({
                message: 'Faliled!',
                success: false,
            })
        return res.status(200).send(created)
        
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

exports.updateToDo = async (req, res) => {
    try {
        let id = { _id: req.params.id };
        let body = await req.body;
        let updated = await ToDoModel.findOneAndUpdate(id, body, { new: true });
        if (!updated) 
            return res.status(400).json({
                success: false,
                message: err.message,
            })
        
        return res.status(200).json({
            success: true,
            message: 'Updated...'
        })

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}

exports.deleteToDo = async (req, res) => {
    try {
        let id = { _id: req.params.id };
        let body = await req.body;
        let removed = await ToDoModel.findOneAndRemove(id);
        if (!removed) 
            return res.status(400).json({
                success: false,
                message: err.message,
            })
        
        return res.status(200).json({
            success: true,
            message: 'Removed...'
        })

    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
}