import './App.css';
import Form from './components/Form/Form'
import Container from "@material-ui/core/Container"
import Typography from '@material-ui/core/Typography';
import 'fontsource-roboto';

function App() {
  return (
    <Container component="article" maxWidth="sm">

      <Typography variant="h6" component="h1">
        SING-IN
</Typography>

      <Form onSub={onSubForm} isIdValid={isIdValidForm} />

    </Container>
  );
}

function onSubForm(data) {
  console.log(data)
}

function isIdValidForm(id) {
if(id.length !== 11){
  return{status:false, text:"Id must have 11 numbers"}
}else{
  return{status:true, text:""}
}
}

export default App;
