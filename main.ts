import { PrismaClient, User, Post } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {

  // Create
  const user = await prisma.user.create({
    data: {
      email: 'example@example.com',
      name: 'John Doe'
    }
  })


  console.log('Created user', user);









  // Create + Connect to existing record
  // const post = await prisma.post.create({
  //   data: {
  //     title: 'Prisma is dope!',
  //     content: 'Some content',
  //     published: true,
  //     author: {
  //       connect: {
  //         id: user.id
  //       }
  //     }
  //   }
  // })
  // console.log('Created post', post);















  // Nested writes
  // const user1 = await prisma.user.create({
  //   data: {
  //     email: 'laurean.bahala@quasset.com',
  //     name: 'Laurean Ray',
  //     posts: {
  //       create: [
  //         {
  //           title: 'Prisma is cool',
  //           content: 'Some content',
  //           published: true
  //         },
  //         {
  //           title: 'Make database easy with Prisma',
  //           content: 'Some content',
  //           published: true
  //         }
  //       ]
  //     }
  //   }
  // })
  // console.log('Created user with post', user1);



























  // Get record by unique identifier
  // const user2 = await prisma.user.findUnique({
  //   where: {
  //     id: user.id
  //   }
  // })
  // console.log('Found user', user2);

  



















  // Update record
  // const updatedUser = await prisma.user.update({
  //   where: {
  //     email: 'laurean.bahala@quasset.com'
  //   },
  //   data: {
  //     name: 'LR'
  //   }
  // })
  // console.log('Updated user', updatedUser);
}

main()
  .catch((e) => {
    throw e
  })
  .finally(async () => {
    await prisma.$disconnect()
  })