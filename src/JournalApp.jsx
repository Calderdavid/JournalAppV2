import { AppRouter } from "./router/AppRouter"
import {BrowserRouter as Router} from "react-router-dom";
import { AppTheme } from "./theme";

export const JournalApp = () => {
    return (
        <AppTheme>
            <Router>
                <AppRouter />
            </Router>
        </AppTheme>
    )
}

