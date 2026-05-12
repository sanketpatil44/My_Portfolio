import React from 'react'
import styled from 'styled-components'
import { education } from '../../data/constants';
import EducationCard from '../Cards/EducationCard';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        padding: 24px 0 0;
    }
`;

const Title = styled.div`
    font-size: 44px;
    text-align: center;
    font-weight: 700;
    margin-top: 20px;
    color: ${({ theme }) => theme.text_primary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 34px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 680px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const CardsSection = styled.div`
    position: relative;
    width: 100%;
    max-width: 1100px;
    margin-top: 40px;
    padding: 0 0 40px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 28px;

    @media (max-width: 960px) {
        max-width: 100%;
        padding: 0 16px 40px;
        gap: 20px;
    }
`;

const Education = () => {
    return (
        <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc>
                    My education has been a journey of self-discovery and growth. Here is a modern showcase of my academic accomplishments.
                </Desc>
                <CardsSection>
                    {education.map((item) => (
                        <EducationCard key={item.id ?? item.school} education={item} />
                    ))}
                </CardsSection>
            </Wrapper>
        </Container>
    )
};

export default Education;