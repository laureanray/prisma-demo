import { PrismaClient, User } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('main');

  const result: User = await prisma.user.create({
    data: {
      email: 'laurean.bahala@quasset.com',
      name: 'Laurean Ray'
    }
  })

  console.log('Created user', result);

}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })