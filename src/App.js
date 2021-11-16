import { ThemeProvider } from 'styled-components';
import Header from './components/Header'
import GlobalStyles from './components/styledComponents/Global'
import Navbar from './components/Navbar'
import { BrowserRouter as Router } from 'react-router-dom';

const theme = {
  colors: {
    header:'#d9d9d9', 
    body:'#404040',
    footer:'#d9d9d9',
    headerBackground: '#404040',
    bodyBackground: '#d9d9d9',
    hover: '#595959'
  },
}

function App(){
  return (
    <ThemeProvider theme = {theme}>
     <>
      <GlobalStyles />
      <Header/>
      <Router>
        <Navbar/>
      </Router>
     </>
    </ThemeProvider>
  );
}

export default App;
