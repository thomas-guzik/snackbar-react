import {UseSnackbarContext} from './Snackbar';

export const Hello = () => {
    const {triggerSnackbar} = UseSnackbarContext();
    
    return <button onClick={() => {triggerSnackbar('snackbar', 'red')}}>Hello</button>;
}