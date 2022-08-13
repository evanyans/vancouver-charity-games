import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';
const Sidebar = ({ isOpen, toggle }: { isOpen: boolean, toggle: React.MouseEventHandler<HTMLElement> }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='/' onClick={toggle}>
                        Home
                    </SidebarLink>
                    <SidebarLink to='/about' onClick={toggle}>
                        About
                    </SidebarLink>
                    <SidebarLink to='/events' onClick={toggle}>
                        Events
                    </SidebarLink>
                    <SidebarLink to='/sponsor' onClick={toggle}>
                        Sponsor
                    </SidebarLink>
                    <SidebarLink to='/contact' onClick={toggle}>
                        Contact
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to='/resume'>
                        Donate
                    </SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar