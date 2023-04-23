// Declare all ENV variables in here

namespace NodeJS {
  interface Global {
    prisma: PrismaClient;
  }
  interface ProcessEnv {
    PORT: number;
    ORIGIN: string;
  }
}
