import React, { useState } from "react";
import Styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import Close from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);

    return (
        <Container>
            <LeftLogo>
                <a>
                    <img src="/images/logo.svg" alt="" />
                </a>
            </LeftLogo>
            <Menu>
                {cars &&
                    cars.map((car, index) => (
                        <a key={index} href="#">
                            {car}
                        </a>
                    ))}
            </Menu>
            <Right>
                <MenuItem>
                    <a href="#">SHOP</a>
                </MenuItem>
                <MenuItem>
                    <a href="#">TESLA ACCOUNT</a>
                </MenuItem>
                <MenuItem>
                    <CustomMenu onClick={() => setBurgerStatus(true)} />
                </MenuItem>
            </Right>

            <BurgerNav show={burgerStatus}>
                <CloseWrapper>
                    <CustomCloseBtn onClick={() => setBurgerStatus(false)} />
                </CloseWrapper>
                {cars &&
                    cars.map((car, index) => (
                        <li key={index}>
                            <a href="#">{car}</a>
                        </li>
                    ))}
                <li>
                    <a href="#">Existing Inventory</a>
                </li>
                <li>
                    <a href="#">Used Inventory</a>
                </li>
                <li>
                    <a href="#">Trade-In</a>
                </li>
                <li>
                    <a href="#">Cybertruck</a>
                </li>
                <li>
                    <a href="#">Roadster</a>
                </li>
                <li>
                    <a href="#">Charging</a>
                </li>
                <li>
                    <a href="#">Commercial Energy</a>
                </li>
                <li>
                    <a href="#">Powerwall</a>
                </li>
                <li>
                    <a href="#">Utilities</a>
                </li>
            </BurgerNav>
        </Container>
    );
}

export default Header;

const Container = Styled.div`
    min-height:60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 20px;
    width: 100%;
    justify-content: center;
    z-index:1;
`;

const LeftLogo = Styled.div`
    flex:1;
`;

const Menu = Styled.nav`
    display:flex;
    align-items: center;
    justify-content: center;
    flex: 2;
    a{
      text-decoration:none;
      font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex: 1;
    }

    @media(max-width: 768px){
        display: none;
    }
    
`;

const Right = Styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex:1;
     a{
      text-decoration:none;
      font-weight: 600;
      text-transform: uppercase;
      
    }
`;

const MenuItem = Styled.div`
    margin-left: 15px;
`;

const CustomMenu = Styled(MenuIcon)`
    cursor: pointer;
`;

const BurgerNav = Styled.div`
    background-color: white;
    width: 300px;
    position: fixed;
    z-index: 10;
    top: 0; 
    bottom:0;
    right:0;
    list-style: none;
    padding: 20px 0;
    transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
    transition: transform .350s ease-in-out;

    
    li{
        margin-left: 43px;
        padding: 15px;
        border-bottom:1px solid rgba(0, 0, 0, .2)
    }
    a{
       text-decoration: none;
       font-weight:500;
    }
`;

const CloseWrapper = Styled.div`
    display: flex;
    justify-content: flex-end;
`;

const CustomCloseBtn = Styled(Close)`
    margin-right:20px;
    cursor: pointer;
`;
