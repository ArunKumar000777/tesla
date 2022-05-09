import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({ title, description, backgroundImg, leftBtnText, rightBtnText }) {
    return (
        <Wrap bgImg={backgroundImg}>
            <Fade bottom>
                <ItemText>
                    <h1>{title}</h1>
                    <p>{description}</p>
                </ItemText>
            </Fade>
            <Fade bottom>
                <ButtoGroup>
                    <LeftButton>{leftBtnText}</LeftButton>
                    {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
                </ButtoGroup>
            </Fade>
            <DownArrow src="/images/down-arrow.svg" />
        </Wrap>
    );
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    background-image: ${(props) => `url("/images/${props.bgImg}")`};
`;

const ItemText = styled.div`
    text-align: center;
    padding-top: 15vh;
`;

const ButtoGroup = styled.div`
    width: 100%;
    height: 55px;
    display: flex;
    justify-content: center;
    margin-top: 400px;
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;

const LeftButton = styled.button`
    color: white;
    border: none;
    width: 256px;
    border-radius: 18px;
    margin: 10px;
    padding: 10px 40px;
    cursor: pointer;
    background-color: #3e4145;
    height: 40px;
    font-weight: bold;
    letter-spacing: 1.05px;
`;

const RightButton = styled(LeftButton)`
    background-color: #e7e7e6;
    color: #393c41;
`;

const DownArrow = styled.img`

    height: 25px;
    margin-top: 60px;
    animation: animateDown infinite 1.5s;
`;
