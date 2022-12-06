import styled from "@emotion/styled";
import { drawerWidth } from "../utils/constants";

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: `calc(100% - ${open ? drawerWidth : 0}px)`,
        height: '100%',
        position: 'absolute',
        flexGrow: 1,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: '0px',
        ...(open && {
            transition: theme.transitions.create(['margin', 'width'], {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: drawerWidth,
        }),
    }),
);

export { Main }