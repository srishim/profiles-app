import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ProfileCard from './components/ProfileCard.jsx';
import { profiles } from './data/profiles.js';

export default function App() {
  const [people, setPeople] = useState(profiles);
  const [name, setName] = useState('');

  const trimmed = name.trim();
  const exists = people.some(
    p => p.name.trim() === trimmed
  );
  const isInvalid = (name !== '' && (trimmed === '' || exists));

  const handleLike = (id) => {
    setPeople(ps =>
      ps.map(p => (p.id === id ? { ...p, likes: p.likes + 1 } : p))
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trimmed === '' || exists) return;

  const nextId = people.length ? Math.max(...people.map(p => p.id)) + 1 : 1;
    setPeople(ps => [...ps, { id: nextId, name: trimmed, likes: 0 }]);
    setName(''); // clear input
  };

  return (
    <Container className="py-4">
      <h1 className="mb-4 text-center">Profiles</h1>
      {/* Add Profile Form */}
      <Form onSubmit={handleSubmit} className="mb-4" noValidate>
        <Row className="g-2 justify-content-center">
          <Col xs={22} sm={8} md={6} lg={5}>
            <Form.Label visuallyHidden>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter unique name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              isInvalid={isInvalid}
            />
            <Form.Control.Feedback type="invalid">
              {trimmed === '' ? 'Name is required.' : 'Name must be unique.'}
            </Form.Control.Feedback>
          </Col>
          <Col xs="auto">
            <Button type="submit" disabled={trimmed === '' || exists}>
              Add
            </Button>
          </Col>
        </Row>
      </Form>

      {/* Cards */}
      
      <Row xs={1} md={2} lg={3} className="justify-content-center g-3">
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
