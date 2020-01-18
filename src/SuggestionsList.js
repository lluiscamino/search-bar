import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    suggestion: {
        "&:hover": {

        },
        cursor: 'pointer',
        paddingLeft: '40px',
    },
    list: {
        maxHeight: '180px',
        overflowY: 'auto'
    }
}));

function SuggestionsList(props) {

    const classes = useStyles();

    const suggestions = props.trie.search(props.input);
    const suggestionsList = [];

    suggestions.forEach((sugg, id) => {
        if (sugg === props.input) return;
        console.log();
        suggestionsList.push(<div key={id} className={classes.suggestion}
            onClick={() => props.setInput(sugg)}>
                {props.input}<b>{sugg.split(props.input)[1]}</b>
                </div>
        )
    });

    return (
        <div className={classes.list}>
            {suggestionsList}
        </div>
    );
}

export default SuggestionsList;