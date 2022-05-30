import styled from 'styled-components'; 

export const DropDownMenuCorp = styled.div`
    margin-top: 100px;
    position: static;
    min-width: 250px;
    min-height: 700px;
    display: inline-block;

    margin-left: ${(props) => (props.NavVisible ? '0' : '-250px')};
    font-size: 18px;
    // margin-left:20px;
    color: #000000;
    -webkit-transition: all 0.4s ease-out 0s;
    -moz-transition: all 0.4s ease-out 0s;
    -ms-transition: all 0.4s ease-out 0s;
    -o-transition: all 0.4s ease-out 0s;
    transition: all 0.4s ease-out 0s;
    background-color: #eaf2f5;

    @media screen and (max-width: 767px) {
        overflow: hidden;
        min-width: 100%;
        margin-left: ${(props) => (props.NavVisible ? '0' : '-100%')};
    }
`;


export const SideHeader = styled.div`
  height: 50px;

  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: row;
`;

export const SideCompanyName = styled.text`
    color: white;
    font-weight: bold;
    text-align: center;
    flex: 10;

`;
export const SideMenuButton = styled.div`

    color: white;
    display: none;
    @media screen and (max-width: 767px) {
        display: inline-block;
    }
`;

export const SideBody = styled.div`

    text-align: center;
    height: 100%;
`;

export const ProfileBlock = styled.div`
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;
export const ProfileUserName = styled.div`
    font-size: 18px;
    color: #1e2f68;
    font-weight: bold;
`;

export const ProfileUserDept = styled.div`
    font-size: 10px;
    color: #1e2f68;
`;

// 드롭다운 메뉴

export const DropDownBlock = styled.div`
  line-height: 20px;
`;

export const MenuItemHaveList = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: center;

  &:hover {
    color: black;
  }
  cursor: pointer;

  background-color: ${(props) => (props.isVisible ? '#f1f3f5' : 'none')};
  font-weight: ${(props) => (props.isVisible ? 'bold' : 'none')};
  margin: 1rem 1rem;
`;

export const MenuItemUl = styled.ul`
  color: #848b7d;
  text-align: center;

  display: block;
  &:hover {
    color: black;
  }
  list-style: none;
  padding-left: 0;

  //드롭다운 구성
  overflow: hidden;
  height: ${(props) => (props.isVisible ? `${props.count * 25}px` : '0px')};
  -webkit-transition: all 0.3s ease-out 0s;
  -moz-transition: all 0.3s ease-out 0s;
  -ms-transition: all 0.3s ease-out 0s;
  -o-transition: all 0.3s ease-out 0s;
  transition: all 0.3s ease-out 0s;
`;

export const MenuItemli = styled.li`
  line-height: 25px;
  color: #adb5bd;
  text-align: center;

  &:hover {
    color: black;
  }
  font-size: 14px;
  padding: 0;
  cursor: pointer;
`;

export const MenuItem = styled.div`
  margin-bottom: 2rem;
  color: #848b7d;
  text-align: center;
  &:hover {
    color: black;
  }
  cursor: pointer;
`;
