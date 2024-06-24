import React from 'react';
import SquadMember from '../SquadMember';

type Member = {
    id: string;
    name: string;
    image: string;
    role: string;
};

type SquadProps = {
};

const members: Member[] = [
    {
        id: 'aisha',
        name: 'Aisha Mohammed',
        image: '/img/aisha-mohammed.jpeg',
        role: 'Junior Web3 Developer'
    },
    {
        id: 'aria',
        name: 'Aria Patel',
        image: '/img/aria-patel.jpeg',
        role: 'Data Scientist'
    },
    {
        id: 'elena',
        name: 'Elena Petrova',
        image: '/img/elena-petrova.jpeg',
        role: 'Senior Web3 Developer'
    },
    {
        id: 'galal',
        name: 'Galal Essam',
        image: '/img/galal-essam.jpeg',
        role: 'AI Researcher'
    },
    {
        id: 'juan',
        name: 'Juan Martinez',
        image: '/img/juan-martinez.jpeg',
        role: 'Web3 Developer'
    },
    {
        id: 'lucas',
        name: 'Lucas Müller',
        image: '/img/lucas-muller.jpeg',
        role: 'Software Engineer'
    },
    {
        id: 'mei',
        name: 'Mei Wong',
        image: '/img/mei-wong.jpeg',
        role: 'Product Manager'
    },
    {
        id: 'sofia',
        name: 'Sofia Rodriguez',
        image: '/img/sofia-rodriguez.jpeg',
        role: 'UX/UI Designer'
    },
];

const Squad: React.FC<SquadProps> = () => {
    return (
        <div className="container">
            <div className="row">
                {members.map((member) => (
                    <div className="col col--3" key={member.name}>
                        <SquadMember {...member} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Squad;
