import { Team } from '@types/team'

export const noLive = [
    'Team16-0',
    'Team18-0',
    'Team11-0', // duplicate video
    'Team08-1' // duplicate entry
]

export const staffTeams: Team[] = [
    {
        id: 'staff1',
        color: '#d7fc70',
        name: 'dtinth',
        members: ['104986860236877824'],
        projects: [
            {
                name: 'misheard',
                description: 'โปรแกรมแชทหัวร้อน',
                link: 'https://youtu.be/2JE3DETHTQo'
            }
        ]
    }
]
