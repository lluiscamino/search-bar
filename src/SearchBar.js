import React, { useState } from 'react';
import SuggestionsList from './SuggestionsList.js';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    successMessage: {
        fontWeight: '500',
        backgroundColor: '#4caf50'
    }
}));

function SearchBar(props) {

    const classes = useStyles();
    const [input, setInput] = useState('');
    const [displaySuggestions, setDisplaySuggestions] = useState(true);
    const [success, setSuccess] = useState({ success: false });

    const inputFormatted = input.trim().toLowerCase();
    const emptyInput = inputFormatted === '';

    return (
        <>
            <Snackbar open={success.success} autoHideDuration={6000} onClose={() => setSuccess({ success: false })}>
                <MuiAlert onClose={() => setSuccess({ success: false })} severity="success">
                    {success.word} was added to the word list.
                </MuiAlert>
            </Snackbar>
            <Card component="form" className={classes.root} onSubmit={(e) => {
                const w = inputFormatted;
                props.trie.addWord(w);
                setSuccess({ success: true, word: w });
                e.preventDefault();
            }}>
                <IconButton style={{ padding: 5 }} aria-label="menu">
                </IconButton>
                <InputBase
                    className={classes.input}
                    placeholder="Search a word..."
                    inputProps={{ 'aria-label': 'search a word' }}
                    onChange={e => setInput(e.target.value)}
                    value={input}
                />
                <Divider className={classes.divider} orientation="vertical" />
                <IconButton color="primary" className={classes.iconButton}
                    aria-label="directions" title="Add word" type="submit"
                    disabled={emptyInput}>
                    <AddCircleIcon />
                </IconButton>
                <IconButton className={classes.iconButton} aria-label="menu" color="primary"
                    title={displaySuggestions ? 'Hide suggestions' : 'Display suggestions'}
                    onClick={() => setDisplaySuggestions(!displaySuggestions)}
                    disabled={emptyInput}>
                    <MenuIcon />
                </IconButton>
                <div style={{
                    width: '100%'
                }}>
                    {displaySuggestions &&
                        <SuggestionsList input={inputFormatted} trie={props.trie}
                            setInput={setInput}></SuggestionsList>
                    }
                </div>
            </Card>
        </>
    );
}

export default SearchBar;