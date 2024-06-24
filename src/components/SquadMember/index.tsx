import React from 'react';

type SquadMemberProps = {
    id: string;
    name: string;
    image: string;
    role: string;
};

const SquadMember: React.FC<SquadMemberProps> = ({ id, name, image, role }) => {
    return (
        <div className="card shadow--md margin--md">
            <div className="card__image">
                <a href={`/docs/squad/${id}`}><img src={image} alt={`${name}'s picture`} /></a>
            </div>
            <div className="card__body">
                <h4 className='margin-bottom--xs'>{name}</h4>
                <p>{role}</p>
            </div>
            <div className="card__footer">
                <a href={`/docs/squad/${id}`} className="button button--block button--secondary">More</a>
            </div>
        </div>
    );
};

export default SquadMember;
