import Order from "../models/order.js";

export const create = async (req, res) => {
    try {
        const { product, status, user } = req.body;
        const order = await new Order({ 
            product, status, user
        }).save();
        res.json(order);
    } catch (error) {
        return res.status(400).json(error)
    }
}

export const update = async (req, res) => {
    try {
        const { product, status, user } = req.body;
        const { orderId } = req.params;
        const order = await Order.findByIdAndUpdate(
            orderId,
            { product, status, user },
            { new: true }
        );
        res.json(order)
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

export const remove = async (req, res) => {
    try {
        const removed = await Order.findByIdAndDelete(req.params.orderId);
        res.json(removed);
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

export const list = async (req, res) => {
    try {
        const all = await Order.find({});
        res.json(all) 
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

export const read = async (req, res) => {
    try {
        const order = await Order.findOne({ slug: req.params.slug });
        res.json(order);
    } catch (error) {
        return res.status(400).json(error.message)
    }
}