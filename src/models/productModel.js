import { PrismaClient } from "../generated/prisma/index.js"

const prisma = new PrismaClient()

export async function create(dados) {
    return await prisma.product.create({
        data: dados
    })
}

export async function list() {
    return await prisma.product.findMany()
}

export async function getProduto(id) {
    return await prisma.product.findUnique({
        where: { id: Number(id) }
    })
}

export async function update(id, dados) {
    return await prisma.product.update({
        where: { id: Number(id) },
        data: dados
    })
}

export async function remove(id) {
    return await prisma.product.delete({
        where: { id: Number(id) }
    })
}
