import { createMuiTheme } from '@material-ui/core/styles';
import 'typeface-montserrat';

export const pxToRem = (fontSize) => {
    return `${fontSize / 16}rem`;
};

// A custom theme for this app
const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#5ac568',
            contrastText: '#ffffff',
        },
        secondary: {
            main: '#9bbdcb',
            dark: '#91DDC3',
        },
        warning: {
            main: '#ffae42',
        },
        success: {
            main: '#44a45f',
        },
        common: {
            black: '#212121', //fix
            white: '#ffffff',
        },
        error: {
            main: '#e50000',
        },
        background: {
            default: '#fafbfc',
            paper: '#ffffff',
        },
        text: {
            primary: '#344563',
            secondary: '#5e6c84',
            hint: '#979da9',
        },
        grey: {
            100: '#f5f8fa',
            200: '#eaf0f6',
            300: '#dfe3eb',
            400: '#cbd6e2',
            500: '#99acc2',
            600: '#7c98b6',
            700: '#516f90',
            800: '#425b76',
            900: '#2d3e50',
            A100: '#2d3e50b3', // transparent grey overlay
        },
        action: {
            hover: '#eeeeee',
            hoverOpacity: 0.2,
        },
        status: {
             info: '#ff902a'
          },
    },
    spacing: 4,
    shadows: [
        'none',
        '0 2px 4px 0 rgba(48, 49, 51, 0.1)', // paper
        '0 1px 3px 0 rgba(48, 49, 51, 0.1)', // button
        '0 1px 3px 0 rgba(0, 0, 0, 0.04)', // paper
        '0 1px 2px 0 rgba(0, 0, 0, 0.08)', // outlined button
        '1px 0 0 0 #f1f1f3',
        '0 1px 0 0 #eaedf3', //menu item
        '0 2px 8px 0 rgba(0, 0, 0, 0.06), 0 2px 4px 0 rgba(0, 0, 0, 0.02)', //card
        '0 1px 1px 0 rgba(19,31,21,0.1)',
        '0 0 11px rgb(158,158,158)', //card - hover
        '0 4px 8px 0 rgba(48,49,51,0.1)', //resource-card hover
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '',
    ],
    transitions: {
        duration: {
            enteringScreen: 700,
            leavingScreen: 500,
        },
    },
    typography: {
        fontFamily: 'montserrat',
        h1: {
            fontSize: pxToRem(47),
            fontWeight: 600,
            fontStyle: 'normal',
            lineHeight: 1.3,
            letterSpacing: '0.2px',
            color: '#324552',
        },
        h2: {
            fontFamily: 'montserrat',
            fontWeight: '500',
            fontSize: '16px',
            letterSpacing: '0.1px',
            color: '#19293b',
            paddingBottom: '8px'
        },
        h3: {
            fontSize: pxToRem(25),
            fontWeight: 600,
            letterSpacing: 'normal',
            fontStyle: 'normal',
            lineHeight: '37px',
            color: "#19293b",
            textAlign: "center",
            fontFamily: "montserrat",
        },
        h4: {
            fontFamily: 'montserrat',
            fontWeight: '500',
            letterSpacing: "0.1px",
        },
        h5: {
            // todo
            fontSize: pxToRem(20),
            fontWeight: 'bold',
            letterSpacing: 'normal',
            fontStyle: 'normal',
            lineHeight: '1.5',
            color: "#19293b",
            textAlign: "center",
            fontFamily: "montserrat",
        },
        h6: {
            fontFamily: 'montserrat',
            height: '26px',
            fontWeight: '600',
            fontSize: '20px',
            letterSpacing: '0.2px',
            color: '#324552',
        },
        subtitle1: {
            fontFamily: 'montserrat',
            fontSize: '18px',
            fontWeight: 600,
            lineHeight: '28px',
            letterSpacing: '0.2px',
        },
        subtitle2: {
            fontFamily: 'montserrat',
            fontWeight: '500',
            fontSize: '12px',
            letterSpacing: '0.2px',
            color: '#5f7381'
        },
        body1: {
            fontSize: pxToRem(16),
            fontWeight: 'normal',
            fontStyle: 'normal',
            lineHeight: '24px',
            letterSpacing: 'normal',
        },
        body2: {
            fontFamily: 'montserrat',
            fontWeight: '500',
            fontSize: '14px',
            letterSpacing: '0.1px',
            color: '#19293b'
        },
        caption: {
            fontSize: pxToRem(12),
            fontWeight: 500,
            fontStyle: 'normal',
            lineHeight: 1.5,
            letterSpacing: 'normal',
        },
        overline: {
            fontSize: pxToRem(10),
            fontWeight: 500,
            fontStyle: 'normal',
            lineHeight: '15px',
            letterSpacing: 'normal',
            textTransform: 'inherit',
        },
        button: {
            fontSize: '14px',
            fontWeight: 'normal',
            fontStyle: 'normal',
            lineHeight: '1.57',
            letterSpacing: 'normal',
        },
        navtab: {
            fontFamily: 'montserrat',
            fontSize: "16px",
            fontWeight: 500,
            letterSpacing: "0.1px",
        }
    },
    overrides: {
        MuiDivider: {
            root: {
                backgroundColor: '#eaf0f6',
            },
        },
        MuiChip: {
            sizeSmall: {
                height: '19px',
            },
            labelSmall: {
                padding: '0 4px',
            },
        },
        MuiButton: {
            root: {
                textTransform: 'capitalize',
            },
        },
        MuiTooltip: {
            arrow: {
                color: '#2d3e50',
            },
            tooltip: {
                backgroundColor: '#2d3e50',
                maxWidth: '216px',
            },
        },
    },
});

export default theme;

export const indicator = '#ff902a';

export const extraColors = {
    orange: '#F6AB2F',
    lightGreen: '#d1f7c4',
    lightBlue: '#d0f0fd',
};
