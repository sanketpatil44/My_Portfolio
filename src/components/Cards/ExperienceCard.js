import React, { useState } from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 100%;
    max-width: 650px;
    border-radius: 28px;
    background: rgba(11, 15, 29, 0.88);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(91, 69, 224, 0.23);
    box-shadow: 0px 24px 70px rgba(0, 0, 0, 0.24);
    padding: 28px;
    display: flex;
    flex-direction: column;
    gap: 18px;
    transition: transform 0.35s ease, box-shadow 0.35s ease;
    position: relative;
    overflow: hidden;

    &:hover {
        transform: translateY(-10px);
        box-shadow: 0px 42px 120px rgba(0, 0, 0, 0.30);
    }

    @media only screen and (max-width: 768px){
        padding: 22px;
        gap: 16px;
    }
`;

const HeaderRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 18px;
    flex-wrap: wrap;
`;

const CompanyGroup = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 16px;
    min-width: 0;
`;

const LogoBadge = styled.div`
    width: 80px;
    height: 60px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(91, 69, 224, 0.18), rgba(169, 108, 255, 0.14));
    border: 1px solid rgba(133, 76, 230, 0.20);
    color: #F5E7FF;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 6px;
`

const Role = styled.div`
    font-size: 21px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary + 'ff'};
    line-height: 1.3;
    @media only screen and (max-width: 768px){
        font-size: 18px;
    }
`;

const Company = styled.div`
    font-size: 15px;
    color: ${({ theme }) => theme.text_secondary + 'dd'};
    line-height: 1.6;
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`;

const Date = styled.div`
    font-size: 13px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary + 'cc'};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`;

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 'cc'};
    line-height: 1.8;
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`;

const SkillRow = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
`

const SkillTag = styled.div`
    padding: 10px 14px;
    border-radius: 999px;
    background: rgba(133, 76, 230, 0.14);
    color: #F5E7FF;
    font-size: 13px;
    font-weight: 500;
    white-space: nowrap;
`;

const getInitials = (text) => {
    return text
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0].toUpperCase())
        .join('');
}

const ExperienceCard = ({ experience }) => {
    const [logoVisible, setLogoVisible] = useState(true);

    return (
        <Card>
            <HeaderRow>
                <CompanyGroup>
                    <LogoBadge>
                        {experience.img && logoVisible ? (
                            <img
                                src={experience.img}
                                alt={experience.company}
                                onError={() => setLogoVisible(false)}
                            />
                        ) : (
                            getInitials(experience.company)
                        )}
                    </LogoBadge>
                    <Body>
                        <Role>{experience.role}</Role>
                        <Company>{experience.company}</Company>
                        <Date>{experience.date}</Date>
                    </Body>
                </CompanyGroup>
            </HeaderRow>

            <Description>
                {experience?.desc && <span>{experience.desc}</span>}
                {experience?.skills && (
                    <SkillRow>
                        {experience.skills.map((skill, index) => (
                            <SkillTag key={`${skill}-${index}`}>{skill}</SkillTag>
                        ))}
                    </SkillRow>
                )}
            </Description>
        </Card>
    )
}

export default ExperienceCard