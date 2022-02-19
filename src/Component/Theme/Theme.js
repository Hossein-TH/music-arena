import {createMuiTheme} from '@material-ui/core/styles';



const theme = (props) => createMuiTheme({
    palette: {
        type: props.type || "light",
        primary: {
            main: props.type === "dark" ? "#115293" : "#3f51b5",

        },
        secondary: {
            main: props.type === "dark" ? "#9a0036" : "#f50057",
        },
        error: {
            light: "#e57373",
            main: "#f44336",
            dark: "#d32f2f"
        },
        warning: {
            light: "#ffb74d",
            main: "#ff9800",
            dark: "#f57c00"
        },
        info: {
            light: "#64b5f6",
            main: "#2196f3",
            dark: "#1976d2"
        },
        success: {
            main: props.type === "dark" ? "#f50057" : "#32d482",
        },
        text: {
            primary: props.type === "dark" ? "#fff" : "rgba(0, 0, 0, 0.87)",
            secondary: props.type === "dark" ? "rgba(255, 255, 255, 0.7)" : "#00a9a7",
            main: props.type === "dark" ? "rgba(255, 255, 255, 0.7)" : "#808081",
            HomeText: props.type === "dark" ? "#fff" : "#fff",
        },
        background: {
            paper: props.type === "dark" ? "#424242" : "#fff",
            default: props.type === "dark" ? "#303030" : "#fafafa",
            Home: props.type === "dark" ? "#303030" : "rgba(23,33,76)",
            Home2: props.type === "dark" ? "#303030" : "#e5e5e5",
        }
    },
});

export default theme;