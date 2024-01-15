import React from 'react';
import PropTypes from 'prop-types';

function Results(props) {
  const { name, avatarUrl, location, bio, repos, onReset } = props;

  return (
    <div>
      <img src={avatarUrl} alt='Avatar' />
      <h1>{name}</h1>
      <h2>{location}</h2>
      <h2>{bio}</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>{repo.name}</li>
        ))}
      </ul>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

Results.propTypes = {
  name: PropTypes.string,
  avatarUrl: PropTypes.string,
  location: PropTypes.string,
  bio: PropTypes.string,
  repos: PropTypes.array,
  onReset: PropTypes.func,
};

export default Results;
