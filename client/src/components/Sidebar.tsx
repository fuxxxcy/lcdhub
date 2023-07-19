import styled from "styled-components";

const SidebarLayout = styled.div`
    position: fixed;
    left: 100vw;
    top: 36px;
    height: calc(100svh - 36px);
    width: 150px;

    background-color: var(--background);
    transition: 300ms;
    z-index: 2;
`;

interface SidebarProps {
    isVisible: boolean;
};

const Sidebar = ({ isVisible }: SidebarProps) => {
    return (
        <SidebarLayout style={{transform: isVisible ? "translateX(-100%)" : "translateX(0%)"}}>
            123
        </SidebarLayout>
    );
};

export default Sidebar;