export const user = {
    avatar: 'https://randomuser.me/api/portraits/women/64.jpg',
    name: 'Judith Wilmers',
    role: 'Hotel Manager'
}

export const reviews = [
    {
        id: 1,
        user: {
            avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
            name: 'Crystal Lawson'
        },
        creation_date: '21 September 2016',
        title: 'Lovely place! Totally worth visiting.',
        like: 1,
        rate: 4,
        desc: 'Lorem ipsum dolor',
        comment: null
    },
    {
        id: 2,
        user: {
            avatar: 'https://randomuser.me/api/portraits/men/20.jpg',
            name: 'Leonard Kingsley'
        },
        creation_date: '21 September 2016',
        title: 'Lovely place! Totally worth visiting.',
        like: 0,
        rate: 2,
        desc: 'Lorem ipsum dolor',
        comment: {
            text: 'Lorem ipsum dolor',
            creation_date: '21 September 2016',
            user
        }
    },
    {
        id: 3,
        user: {
            avatar: 'https://randomuser.me/api/portraits/men/63.jpg',
            name: 'Freddie Miller Jr.'
        },
        creation_date: '21 September 2016',
        title: 'Lovely place! Totally worth visiting.',
        like: 1,
        rate: 4,
        desc: 'Lorem ipsum dolor',
        comment: null
    },
    {
        id: 4,
        user: {
            avatar: 'https://randomuser.me/api/portraits/women/50.jpg',
            name: 'Darlene Warren'
        },
        creation_date: '21 September 2016',
        title: 'Lovely place! Totally worth visiting.',
        like: 0,
        rate: 2,
        desc: 'Lorem ipsum dolor',
        comment: null
    }
]