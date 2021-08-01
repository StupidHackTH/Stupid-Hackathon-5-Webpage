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
        color: 'd7fc70',
        name: 'dtinth',
        members: ['dtinth'],
        projects: [
            {
                name: 'misheard',
                description:
                    'โปรแกรมแชทหัวร้อน — A stupid chat application in which you could not type your message but must rely on speech-to-text to transcribe what you wish to convey.',
                link: 'https://youtu.be/2JE3DETHTQo'
            }
        ]
    },
    {
        id: 'staff2',
        color: '4daaa4',
        name: 'natthanat',
        members: ['natthanat'],
        projects: [
            {
                name: 'TV Station Simulator',
                description:
                    'A virtual world role play as TV Station operators  with AI watching for virtual rating.',
                link: 'https://www.youtube.com/watch?v=iSVvLDotKd4'
            }
        ]
    }
]
