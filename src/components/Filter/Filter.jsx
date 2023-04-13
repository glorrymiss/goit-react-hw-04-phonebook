import { Input, Title } from './Filter.styled';
import PropTypes from 'prop-types';

export function Filter({ onChange, value }) {
  return (
    <>
      <Title>Find contacts by name</Title>
      <Input type="text" value={value} onChange={onChange} />
    </>
  );
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
