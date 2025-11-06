import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function ProfileCard({ name, likes, onLike }) {
  return (
    <Card
      className="mb-4 shadow-sm text-center"
      style={{ maxWidth: '22rem', width: '100%' }}  // a bit wider, but responsive
    >
      <Card.Body className="p-4">
        <Card.Title className="h5 mb-3">{name}</Card.Title>
        <Button size="sm" onClick={onLike} className="me-2">Like</Button>
        <Card.Text className="d-inline mb-0">Likes: {likes}</Card.Text>
      </Card.Body>
    </Card>
  );
}
