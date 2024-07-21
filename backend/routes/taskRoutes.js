const router = require("express").Router();
const Task = require("../models/task");
const User = require("../models/user");
const { authenticateToken } = require("./auth");

//Create Task
router.post("/create-task", authenticateToken, async(req, res)=>{
    try {
        const { title, description } = req.body;
        const { id } = req.headers;
        const newTask = new Task({ title: title, description: description });
        const saveTask = await newTask.save();
        const taskId = saveTask._id;
        await User.findByIdAndUpdate(id, { $push: { tasks: taskId._id}});
        res.status(200).json({ message: "Task Created!" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Internal Server Error" });
    }
});

//Get all Tasks
router.get("/get-all-tasks", authenticateToken, async(req, res)=>{
    try {
        const { id } = req.headers;
        const userData = await User.findById(id).populate({
            path: "tasks",
            options: { sort: { createdAt: -1 }}
        });
        res.status(200).json({ data:userData });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Internal Server Error" });
    }
});

//Delete a task
router.delete("/delete-task/:id", authenticateToken, async(req, res)=>{
    try {
        const { id } = req.params;
        const userId = req.headers.id;
        await Task.findByIdAndDelete(id);
        await User.findByIdAndUpdate(userId, {$pull :{tasks: id}});
        res.status(200).json({ message: "Task Deleted Successfully!" });
    } catch (error) {
        console.log(error); 
        res.status(400).json({ message: "Internal Server Error" });
    }
});

//Update a Task
router.put("/update-task/:id", authenticateToken, async(req, res)=>{
    try {
        const { id } = req.params;
        const { title, description } = req.body;
        await Task.findByIdAndUpdate(id, {title: title, description: description});
        res.status(200).json({ message: "Task Updated Successfully!" });
    } catch (error) {
        console.log(error); 
        res.status(400).json({ message: "Internal Server Error" });
    }
});

//Update-Important-status of a Task
router.put("/update-imp-task/:id", authenticateToken, async(req, res)=>{
    try {
        const { id } = req.params;
        const TaskData = await Task.findById(id);
        const ImpTask = TaskData.important;
        await Task.findByIdAndUpdate(id, {important: !ImpTask});
        res.status(200).json({ message: "Task Status Updated Successfully!" });
    } catch (error) {
        console.log(error); 
        res.status(400).json({ message: "Internal Server Error" });
    }
});


//Update-Complete-status of a Task
router.put("/update-comp-task/:id", authenticateToken, async(req, res)=>{
    try {
        const { id } = req.params;
        const TaskData = await Task.findById(id);
        const CompTask = TaskData.complete;
        await Task.findByIdAndUpdate(id, {complete: !CompTask});
        res.status(200).json({ message: "Task Status Updated Successfully!" });
    } catch (error) {
        console.log(error); 
        res.status(400).json({ message: "Internal Server Error" });
    }
});

//Get all Important Tasks
router.get("/get-imp-tasks", authenticateToken, async(req, res)=>{
    try {
        const { id } = req.headers;
        const Data = await User.findById(id).populate({
            path: "tasks",
            match: { important: true },
            options: { sort: { createdAt: -1 }}
        });
        const ImpTaskData = Data.tasks;
        res.status(200).json({ data: ImpTaskData });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Internal Server Error" });
    }
});

//Get all Completed Tasks
router.get("/get-comp-tasks", authenticateToken, async(req, res)=>{
    try {
        const { id } = req.headers;
        const Data = await User.findById(id).populate({
            path: "tasks",
            match: { complete: true },
            options: { sort: { createdAt: -1 }}
        });
        const CompTaskData = Data.tasks;
        res.status(200).json({ data: CompTaskData });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Internal Server Error" });
    }
});

//Get all Incompleted Tasks
router.get("/get-incomp-tasks", authenticateToken, async(req, res)=>{
    try {
        const { id } = req.headers;
        const Data = await User.findById(id).populate({
            path: "tasks",
            match: { complete: false },
            options: { sort: { createdAt: -1 }}
        });
        const IncompTaskData = Data.tasks;
        res.status(200).json({ data: IncompTaskData });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: "Internal Server Error" });
    }
});

module.exports = router;