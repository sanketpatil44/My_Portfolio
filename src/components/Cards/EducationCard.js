import React, { useState } from 'react'
import styled from 'styled-components'

const Card = styled.div`
    width: 100%;
    max-width: 650px;
    border-radius: 28px;
    background: rgba(11, 15, 29, 0.88);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(133, 76, 230, 0.22);
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

    @media only screen and (max-width: 768px) {
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

const SchoolGroup = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 16px;
    min-width: 0;
`;

const SchoolLogo = styled.div`
    width: 56px;
    height: 56px;
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, rgba(133, 76, 230, 0.18), rgba(91, 69, 224, 0.12));
    border: 1px solid rgba(133, 76, 230, 0.20);
    color: #F5E7FF;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    position: relative;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
    }
`;

const TitleGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    min-width: 0;
`;

const Name = styled.div`
    font-size: 21px;
    font-weight: 700;
    color: ${({ theme }) => theme.text_primary + 'ff'};
    line-height: 1.3;
    @media only screen and (max-width: 768px) {
        font-size: 18px;
    }
`;

const Degree = styled.div`
    font-size: 15px;
    color: ${({ theme }) => theme.text_secondary + 'dd'};
    line-height: 1.7;
    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const DateTag = styled.div`
    padding: 10px 16px;
    border-radius: 999px;
    background: rgba(133, 76, 230, 0.14);
    color: #F5E7FF;
    font-size: 13px;
    font-weight: 600;
    white-space: nowrap;
    @media only screen and (max-width: 768px) {
        font-size: 12px;
        padding: 8px 14px;
    }
`;

const Grade = styled.div`
    display: inline-flex;
    align-items: center;
    padding: 12px 18px;
    border-radius: 999px;
    background: linear-gradient(135deg, rgba(169, 108, 255, 0.20), rgba(91, 69, 224, 0.12));
    color: #F5E7FF;
    font-size: 14px;
    font-weight: 600;
    width: fit-content;
    @media only screen and (max-width: 768px) {
        font-size: 13px;
        padding: 10px 16px;
    }
`;

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 'cc'};
    line-height: 1.8;
    @media only screen and (max-width: 768px) {
        font-size: 14px;
    }
`;

const Span = styled.span`
    display: block;
`;

const getInitials = (text) => {
    return text
        .split(' ')
        .filter(Boolean)
        .slice(0, 2)
        .map((word) => word[0].toUpperCase())
        .join('');
};

const EducationCard = ({ education }) => {
    const [logoVisible, setLogoVisible] = useState(true);

    return (
        <Card>
            <HeaderRow>
                <SchoolGroup>
                   
                    <TitleGroup>
                        <Name>{education.school}</Name>
                        <Degree>{education.degree}</Degree>
                    </TitleGroup>
                </SchoolGroup>
                <DateTag>{education.date}</DateTag>
            </HeaderRow>

            <Grade>Grade: {education.grade}</Grade>
            <Description>
                <Span>{education.desc}</Span>
            </Description>
        </Card>
    )
};

export default EducationCard