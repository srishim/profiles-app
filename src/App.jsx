import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileCard from './components/ProfileCard.jsx';
import { profiles } from './data/profiles.js';

export default function App() {
  const [people, setPeople] = useState(profiles);

  const handleLike = (id) => {
    setPeople(ps =>
      ps.map(p => (p.id === id ? { ...p, likes: p.likes + 1 } : p))
    );
  };

  return (
    <Container className="py-4">
      <h1 className="mb-4 text-center">Profiles</h1>
      <Row xs={1} md={2} lg={3} className="justify-content-center g-7">
        {people.map(p => (
          <Col key={p.id} className="d-flex justify-content-center">
            <ProfileCard
              name={p.name}
              likes={p.likes}
              onLike={() => handleLike(p.id)}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
