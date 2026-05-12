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
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    position: relative;
    width: 100%;
    max-width: 1300px;
    margin-top: 30px;
    padding: 20px 0 40px;
    display: grid;
    row-gap: 48px;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 2px;
        height: 100%;
        background: #854CE6;
        opacity: 0.75;
    }

    @media (max-width: 960px) {
        max-width: 100%;
        padding: 20px 16px 40px;
    }

    @media (max-width: 660px) {
        &::before {
            left: 30px;
        }
    }
`;

const TimelineItemRow = styled.div`
    align-items: start;
    gap: 20px;
    width: 100%;
    position: relative;

    @media (max-width: 960px) {
        grid-template-columns: 60px 1fr;
    }
`;

const TimelineContentWrapper = styled.div`
    grid-column: ${({ isLeft }) => (isLeft ? '1 / 2' : '3 / 4')};
    justify-self: ${({ isLeft }) => (isLeft ? 'end' : 'start')};
    width: min(650px, 100%);

    @media (max-width: 960px) {
        grid-column: 2 / 3;
        justify-self: stretch;
        width: 100%;
    }
`;

const TimelineDotWrapper = styled.div`
    grid-column: 2 / 3;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 2;

    &::before {
        content: '';
        width: 18px;
        height: 18px;
        border: 2px solid #854CE6;
        border-radius: 50%;
        background-color: #0b0f1f;
        display: block;
    }
`;


const Education = () => {
    return (
        <Container id="education">
            <Wrapper>
                <Title>Education</Title>
                <Desc>
                    My education has been a journey of self-discovery and growth. My educational details are as follows.
                </Desc>
                <TimelineSection>
                    {education.map((item, index) => {
                        const isLeft = index % 2 === 0;
                        return (
                            <TimelineItemRow key={item.id ?? item.school + index}>
                                <TimelineContentWrapper isLeft={isLeft}>
                                    <EducationCard education={item} />
                                </TimelineContentWrapper>
                                <TimelineDotWrapper />
                            </TimelineItemRow>
                        );
                    })}
                </TimelineSection>
            </Wrapper>
        </Container>
    )
};

export default Education;