import { Container, Typography } from '@mui/material';
import MyForm from './components/form';
import './App.css';

function App() {
  return (
    <Container maxWidth={'xl'}>
      <Typography variant="h3">React Hook Form</Typography>
      <MyForm />
    </Container>
  );
}

export default App;
