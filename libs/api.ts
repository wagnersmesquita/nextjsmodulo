import prisma from "./prisma";

export default {
    getALLUsers: async (page: number) => {
        let take = 2;
        let skip = 0;
        if (page) {
            skip = (page - 1) * take
        }


        const users = await prisma.user.findMany({
            skip,
            take,
            where: {
                active: true
            },
            select: {
                id: true,
                name: true,
                email: true
            },
            orderBy: {
                id: 'asc'
            }
        });
        return users;
    },
    addUser: async (name: string, email: string) => {
        return await prisma.user.create({
            data: { name, email }
        });
    },
    getUser: async (id: number) => {
        const user = await prisma.user.findFirst({
            where: { id, active: true }
        });
        return user;
    },
    updateUser: async (id: number, name?: string, active?: string) => {

        let data: {
            name?: string;
            active?: boolean;
        } = {};

        if (name) {
            data.name = name;
        }

        if (active) {
            switch (active) {
                case 'true':
                case '1':
                    data.active = true;
                    break;
                case 'false':
                case '0':
                    data.active = false;
                    break;
            }
        }

        const updatedUser = await prisma.user.update({
            where: { id },
            data
        });
        return updatedUser;
    },
    deleteUser: async (id: number) => {
        return await prisma.user.delete({
            where: { id }
        })
    }
}