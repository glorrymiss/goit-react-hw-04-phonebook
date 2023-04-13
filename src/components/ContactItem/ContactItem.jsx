import { Item, Button } from './ContactItem.styled';
import PropTypes from 'prop-types';

export function ContactItem({ name, number, onDelete, id }) {
  return (
    <Item>
      {name}: {number}
      <Button
        type="button"
        onClick={() => {
          onDelete(id);
        }}
      >
        Delete
      </Button>
    </Item>
  );
}

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};
