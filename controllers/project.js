import Project from "../models/project.js";
import slugify from "slugify";

export const create = async (req, res) => {
    try {
        const { 
            title,
            description,
            photo,
            price,
            status,
            category,
            user
        } = req.body;
        if (!title.trim()) {
            return res.json({ error: "Title is required"});
        }
        const existingProject = await Project.findOne({ title });
        if (existingProject) {
            return res.json({ error: "Already exists"});
        }
        if (!description) {
            return res.json({ error: "Description is required"});
        }
        if (!category) {
            return res.json({ error: "Category is required"});
        }
        const project = await new Project({ 
            title, 
            slug: slugify(title),
            description,
            photo,
            price,
            status,
            category,
            user
        }).save();
        res.json(project);
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

export const update = async (req, res) => {
    try {
        const { 
            title,
            description,
            photo,
            price,
            status,
            category,
            user
        } = req.body;
        if (!title.trim()) {
            return res.json({ error: "Title is required"});
        }
        const existingProject = await Project.findOne({ title });
        if (existingProject) {
            return res.json({ error: "Already exists"});
        }
        if (!description) {
            return res.json({ error: "Description is required"});
        }
        if (!category) {
            return res.json({ error: "Category is required"});
        }
        const { projectId } = req.params;
        const project = await Project.findByIdAndUpdate(
            projectId,
            { 
                title, 
                slug: slugify(title),
                description,
                photo,
                price,
                status,
                category,
                user
            },
            { new: true }
        );
        res.json(project)
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

export const remove = async (req, res) => {
    try {
        const removed = await Project.findByIdAndDelete(req.params.projectId);
        res.json(removed);
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

export const list = async (req, res) => {
    try {
        const all = await Project.find({});
        res.json(all) 
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

export const read = async (req, res) => {
    try {
        const project = await Project.findOne({ slug: req.params.slug });
        res.json(project);
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

export const completed = async (req, res) => {
    try {
        const all = await Project.find({category: req.params.categoryId});
        res.json(all) 
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

export const inprogress = async (req, res) => {
    try {
        const all = await Project.find({sold: true});
        res.json(all) 
    } catch (error) {
        return res.status(400).json(error.message)
    }
}