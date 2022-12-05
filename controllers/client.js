import Client from "../models/client.js";

export const create = async (req, res) => {
    try {
        const { 
            name,
            title,
            company,
            address,
            email,
            photo,
            user
        } = req.body;
        if (!name.trim()) {
            return res.json({ error: "Name is required"});
        }
        if (!title.trim()) {
            return res.json({ error: "Title is required"});
        }
        if (!email.trim()) {
            return res.json({ error: "Email is required"});
        }
        const existingClient = await Client.findOne({ email });
        if (existingClient) {
            return res.json({ error: "Already exists"});
        }
        if (!company) {
            return res.json({ error: "Company is required"});
        }
        if (!address) {
            return res.json({ error: "Address is required"});
        }
        if (!user) {
            return res.json({ error: "User is required"});
        }
        const client = await new Client({ 
            name,
            title,
            company,
            address,
            email,
            photo,
            user,
        }).save();
        res.json(client);
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

export const update = async (req, res) => {
    try {
        const { 
            name,
            title,
            company,
            address,
            email,
            photo,
            user,
        } = req.body;
        if (!name.trim()) {
            return res.json({ error: "Name is required"});
        }
        if (!title.trim()) {
            return res.json({ error: "Title is required"});
        }
        if (!email.trim()) {
            return res.json({ error: "Email is required"});
        }
        const existingClient = await Client.findOne({ email });
        if (existingClient) {
            return res.json({ error: "Already exists"});
        }
        if (!company) {
            return res.json({ error: "Company is required"});
        }
        if (!address) {
            return res.json({ error: "Address is required"});
        }
        if (!user) {
            return res.json({ error: "User is required"});
        }
        const { clientId } = req.params;
        const client = await Client.findByIdAndUpdate(
            clientId,
            { 
                name,
                title,
                company,
                address,
                email,
                photo,
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
        const removed = await Client.findByIdAndDelete(req.params.clientId);
        res.json(removed);
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

export const list = async (req, res) => {
    try {
        const all = await Client.find({});
        res.json(all) 
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

export const read = async (req, res) => {
    try {
        const client = await Client.findOne({ _id });
        res.json(client);
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

export const paid = async (req, res) => {
    try {
        const all = await Client.find({balance: req.params.order.balance === 0});
        res.json(all) 
    } catch (error) {
        return res.status(400).json(error.message)
    }
}

export const pending = async (req, res) => {
    try {
        const all = await Client.find({balance: req.params.order.balance !== 0});
        res.json(all) 
    } catch (error) {
        return res.status(400).json(error.message)
    }
}