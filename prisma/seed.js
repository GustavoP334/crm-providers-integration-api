import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    console.log('Starting seed...');

    const plans = ['Basic', 'Plus', 'Premium'];
    const statuses = ['active', 'suspended', 'cancelled'];
    const domains = ['gmail.com', 'yahoo.com', 'outlook.com'];

    const customers = Array.from({ length: 50 }).map((_, i) => ({
        name: `Client ${i + 1}`,
        email: `client${i + 1}@${domains[i % domains.length]}`,
        plan: plans[i % plans.length],
        status: statuses[i % statuses.length],
        purchaseDate: new Date(Date.now() - i * 86400000)
    }));

    await prisma.customer.createMany({
        data: customers,
        skipDuplicates: true
    });

    console.log('Seed has finished!');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
