import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { membershipInfo } from "../utils/membershipInfo.js";

const MembershipCards = ({paypalInfoClickHandler}) => {
   
    // const paypalInfoClickHandler = (event) => {
    //     const paypalTotal = event.target.value;
    //     return paypalTotal;
    // }


  return (
    <div id='membership-cards'>
      {membershipInfo.map((info) => 
        (
          <Card key={info.title} className="center info-card">
            <Card.Header style={{fontSize: '1.2rem', fontWeight: 'bold', margin: '.4rem'}}>{info.title}</Card.Header>
            <Card.Body>
              <Card.Title>{info.cost}</Card.Title>
              <Card.Text className="justify info-card-text">{info.description}</Card.Text>
              <Button variant="primary" value={info.paypalVar} onClick={paypalInfoClickHandler}>Select</Button>
            </Card.Body>
          </Card>
        ))}
    </div>
  );
};

export default MembershipCards;
