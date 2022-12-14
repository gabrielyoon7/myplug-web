import { useEffect, useRef, useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Fab, Snackbar } from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import CloseIcon from '@mui/icons-material/Close';
import { DrawerHeader } from './components/DrawerHeader';
import { Main } from './components/Main';
import { drawerWidth } from './utils/constants';
import EvMap from './containers/EvMap';
import TestPanel from './containers/TestPanel';
import * as API from './utils/API';

const actions = [
  { icon: <FileCopyIcon />, name: 'Copy' },
  { icon: <SaveIcon />, name: 'Save' },
  { icon: <PrintIcon />, name: 'Print' },
  { icon: <ShareIcon />, name: 'Share' },
];

export default function App() {
  const theme = useTheme();

  // panel
  const [open, setOpen] = useState(false);

  // snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');

  // ev-map
  const mapRef = useRef();
  const { kakao } = window;
  const [state, setState] = useState({
    // 지도의 초기 위치
    center: { lat: 33.452613, lng: 126.570888 },
    // 지도 위치 변경시 panto를 이용할지에 대해서 정의
    isPanto: false,
  });

  // stations
  const [stations, setStations] = useState([]);
  const [chargers, setChargers] = useState([]);
  const [mapLocation, setMapLocation] = useState(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  /**
   * Snackbar Code Start
   */

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setSnackbarOpen(false);
  };

  const snackbarAction = (
    <>
      {/* <Button color="secondary" size="small" onClick={handleClose}>
        닫기
      </Button> */}
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>
  );
  /**
   * Snackbar Code End
   */

  const setEvStations = async (position) => {
    const result = await API.getRegionData({
      latitude: position.center.lat,
      longitude: position.center.lng,
      latitudeDelta: position.center.latitudeDelta,
      longitudeDelta: position.center.longitudeDelta,
    });
    // const result = await getAllStationData();
    setStations(result[0]);
    setChargers(result[1]);
    setSnackbarOpen(true);
    setSnackbarMessage(`충전소 : ${result[0].length}, 충전기 : ${result[1].length}`);
  };

  useEffect(() => {
    console.log(JSON.stringify(mapLocation));
    if (mapLocation) {
      if ((mapLocation.center.latitudeDelta < 0.05 && mapLocation.center.longitudeDelta < 0.05)) {
        setEvStations(mapLocation);
      } else {
        setSnackbarOpen(true);
        setSnackbarMessage('거리가 너무 멉니다.');
        setStations([]);
      }
    }
  }, [mapLocation]);

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
          <DrawerHeader theme={theme}>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <TestPanel
            mapLocation={mapLocation}
            setState={setState}
            stations={stations}
            chargers={chargers}
          />
        </Drawer>
        <Main open={open} theme={theme}>
          {
            !open
            && (
            <>
              <Fab
                onClick={handleDrawerOpen}
                color="primary"
                aria-label="add"
                sx={{ position: 'absolute', top: 16, left: 16 }}
              >
                <QuestionMarkIcon />
              </Fab>
              <SpeedDial
                ariaLabel="SpeedDial basic example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon />}
              >
                {actions.map((action) => (
                  <SpeedDialAction
                    key={action.name}
                    icon={action.icon}
                    tooltipTitle={action.name}
                    tooltipOpen
                  />
                ))}
              </SpeedDial>
            </>
            )
          }

          <EvMap
            stations={stations}
            chargers={chargers}
            state={state}
            setMapLocation={setMapLocation}
            mapRef={mapRef}
            kakao={kakao}
          />
        </Main>

        <Snackbar
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
          open={snackbarOpen}
          autoHideDuration={1000}
          onClose={handleClose}
          message={snackbarMessage}
          action={snackbarAction}
        />

      </Box>
    </Box>

  );
}
