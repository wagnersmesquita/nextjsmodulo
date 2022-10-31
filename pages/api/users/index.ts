import { NextApiHandler } from "next";
import api from '../../../libs/api';

const handlerGet: NextApiHandler = async (req, res) => {
    const { page } = req.query;
    const users = await api.getALLUsers(parseInt(page as string));
    res.json({ status: true, users });
}

const handlerPost: NextApiHandler = async (req, res) => {
    const { name, email } = req.body;

    const newUser = await api.addUser(name, email)
    .catch(() => {
        res.json({ error: 'Usuário já existe' })
    });

    if (newUser) {
        res.status(201).json({ status: true, user: newUser });
    }

}

const handler: NextApiHandler = (req, res) => {
    switch (req.method) {
        case 'GET':
            handlerGet(req, res)
            break;
        case 'POST':
            handlerPost(req, res)
    }

}

export default handler;