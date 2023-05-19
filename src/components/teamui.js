import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function TeamUi(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.teamImg}/>
      <Card.Body>
        <Card.Title>{props.teamName}</Card.Title>
        <Card.Text>
            Team Capain : {props.captain+'\n'}
            Team Champions: { props.champions.length!=0 ? props.champions.map((e)=>e+' , '):
            "No Tropies \n"}
            {'\n No of Tropies:'+ props.champions.length}
        </Card.Text>
        <Button variant="primary">Know More about</Button>
      </Card.Body>
    </Card>
  );
}

export default TeamUi;