import Store from "../models/store.js";
import slugify from "slugify";

export const create = async (req, res) => {
    try {
        const { 
            name,
            description,
            phone,
            address,
            logo,
            cover,
            category,
            user
        } = req.body;
        if (!name.trim()) {
            return res.json({ error: "Name is required"});
        }
        const existingStore = await Store.findOne({ name });
        if (existingStore) {
            return res.json({ error: "Already exists"});
        }
        if (!description) {
            return res.json({ error: "Description is required"});
        }
        if (!phone) {
            return res.json({ error: "Contact isquired"});
        }
        if (!address) {
            return res.json({ error: "Address is required"});
        }
        if (!category) {
            return res.json({ error: "Category is required"});
        }
        const store = await new Store({ 
            name, 
            slug: slugify(name),
            description,
            phone,
            address,
            logo,
            cover,
            category,
            user
        }).save();
        res.json(store);
    } catch (error) {
        return res.status(400).json(error)
    }
}

export const update = async (req, res) => {
    try {
        const { 
            name,
            description,
            phone,
            address,
            logo,
            cover,
            category,
            user
        } = req.body;
        if (!name.trim()) {
            return res.json({ error: "Name is required"});
        }
        const existingStore = await Store.findOne({ name });
        if (existingStore) {
            return res.json({ error: "Already exists"});
        }
        if (!description) {
            return res.json({ error: "Description is required"});
        }
        if (!phone) {
            return res.json({ error: "Contact isquired"});
        }
        if (!address) {
            return res.json({ error: "Address is required"});
        }
        if (!category) {
            return res.json({ error: "Category is required"});
        }
        const { storeId } = req.params;
        const store = await Store.findByIdAndUpdate(
            storeId,
            { 
                name, 
                slug: slugify(name), 
                description,
                phone,
                address,
                logo,
                cover,
                category,
                user
            },
            { new: true }
        );
        res.json(store)
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

export const remove = async (req, res) => {
    try {
        const removed = await Store.findByIdAndDelete(req.params.storeId);
        res.json(removed);
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

export const list = async (req, res) => {
    try {
        const all = await Store.find({});
        res.json(all) 
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

export const read = async (req, res) => {
    try {
        const store = await Store.findOne({ slug: req.params.slug });
        res.json(store);
    } catch (error) {
        return res.status(400).json(error.message)
    }
}