import {AppProvider} from './provider';
import {AppRouter} from './route';

export const App = () => {
    return (
        <AppProvider>
            <AppRouter />
        </AppProvider>
    );
};
