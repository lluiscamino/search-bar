import React from 'react';
import SearchBar from './SearchBar';
import trie from './words';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <Container maxWidth="sm" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '20px'
    }}>
        <SearchBar trie={trie} />
        <footer id="name">
        Created by <a href="https://github.com/lluiscamino">Lluís Camino</a>
        </footer>
    </Container>
  );
}

export default App;
