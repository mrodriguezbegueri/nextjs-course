interface SeedData {
    entries: SeedEntry[]
}


interface SeedEntry {
    description: string
    status: string
    createdAt: number
}


export const seedData: SeedData = {
    entries: [
        {
            description: 'PENDIENTE: Description 1',
            status: 'pending',
            createdAt: Date.now()
        },
        {
            description: 'EN-PROGRESO: Description 2',
            status: 'in-progress',
            createdAt: Date.now() - 1000000
        },
        {
            description: 'TERMINADA: Description 3',
            status: 'finished',
            createdAt: Date.now() - 100000
        },
    ]
}