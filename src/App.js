import * as React from 'react';
import { useRef, useState } from "react";
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TestPanel from './containers/TestPanel';
import EvMap from './containers/EvMap';
import { Fab } from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


const drawerWidth = 300;

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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function App() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  // ev-map start
  const mapRef = useRef();
  const { kakao } = window;
  const [state, setState] = useState({
    // 지도의 초기 위치
    center: { lat: 33.452613, lng: 126.570888 },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: false,
  })
  const [level, setLevel] = useState(3);
  const [info, setInfo] = useState();
  const [position, setPosition] = useState();


  return (
    <Box sx={{ height: '100%' }}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <TestPanel
            setState={setState}
            level={level}
            setLevel={setLevel}
            mapRef={mapRef}
            info={info}
            setInfo={setInfo}
            position={position}
          />
        </Drawer>
        <Main open={open}>
          <Fab
            onClick={handleDrawerOpen}
            color="primary"
            aria-label="add"
            sx={{ position: 'absolute', top: 16, left: 16 }}
          >
            <QuestionMarkIcon />
          </Fab>
          <Fab
            onClick={handleDrawerOpen}
            color="primary"
            aria-label="add"
            sx={{ position: 'absolute', top: 16, right: 16 }}
          >
            <QuestionMarkIcon />
          </Fab>
          <EvMap
            drawerWidth={drawerWidth}
            open={open}
            state={state}
            level={level}
            setPosition={setPosition}
            mapRef={mapRef}
            kakao={kakao}
          />
        </Main>
      </Box>
    </Box>

  );
}