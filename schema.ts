import * as path from 'path'
import { prismaObjectType, makePrismaSchema } from 'nexus-prisma'
import datamodelInfo from './generated/nexus-prisma'
import { prisma } from './generated/prisma-client'

const Query = prismaObjectType({
    name: 'Query',
    definition (t) {
        t.prismaFields(['*'])
    },
})

const Mutation = prismaObjectType({
    name: 'Mutation',
    definition (t) {
        t.prismaFields(['*'])
    },
})

const schema = makePrismaSchema({
    types: [Query, Mutation],

    prisma: {
        datamodelInfo,
        client: prisma,
    },

    outputs: {
        schema: path.join(__dirname, './generated/schema.graphql'),
        typegen: path.join(__dirname, './generated/nexus.ts'),
    },
})

export default schema

