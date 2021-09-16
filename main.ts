import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const result: User = await prisma.user.create({
    data: {
      email: 'laurean.bahala@quasset.com',
      name: 'Laurean Ray'
    }
  })
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })