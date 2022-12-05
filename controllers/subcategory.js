import SubCategory from "../models/subcategory.js";
import slugify from "slugify";

export const create = async (req, res) => {
    try {
        const { name, category } = req.body;
        if (!name.trim()) {
            return res.json({ error: "Name is required"});
        }
        const existingSubCategory = await SubCategory.findOne({ name });
        if (existingSubCategory) {
            return res.json({ error: "Already exists"});
        }
        const subcategory = await new SubCategory({ 
            name, 
            slug: slugify(name),
            category
        }).save();
        res.json(subcategory);
    } catch (error) {
        return res.status(400).json(error)
    }
}

export const update = async (req, res) => {
    try {
        const { name, category } = req.body;
        const { subcategoryId } = req.params;
        const subcategory = await SubCategory.findByIdAndUpdate(
            subcategoryId,
            { name, slug: slugify(name) },
            category,
            { new: true }
        );
        res.json(subcategory)
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

export const remove = async (req, res) => {
    try {
        const removed = await SubCategory.findByIdAndDelete(req.params.subcategoryId);
        res.json(removed);
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

export const list = async (req, res) => {
    try {
        const all = await SubCategory.find({});
        res.json(all) 
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

export const read = async (req, res) => {
    try {
        const subcategory = await SubCategory.findOne({ slug: req.params.slug });
        res.json(subcategory);
    } catch (error) {
        return res.status(400).json(error.message)
    }
}