import React, { useState } from 'react';

import Form from './components/Form';
import Results from './components/Results';

function App() {
  const [showForm, setShowForm] = useState(true);
  const [showResults, setShowResults] = useState(false);
  const [name, setName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [repos, setRepos] = useState([]);

  const handleSubmit = (formData) => {
    setName(formData.get('name'));
    fetch(`https://api.github.com/users/${formData.get('name')}`)
      .then((response) => response.json())
      .then((data) => {
        setAvatarUrl(data.avatar_url);
        setLocation(data.location);
        setBio(data.bio);
        fetch(data.repos_url)
          .then((response) => response.json())
          .then((data) => setRepos(data));
      });
    setShowForm(false);
    setShowResults(true);
  };

  const handleReset = () => {
    setShowForm(true);
    setShowResults(false);
  };

  return (
    <div>
      {showForm && <Form onSubmit={handleSubmit} />}
      {showResults && (
        <Results
          name={name}
          avatarUrl={avatarUrl}
          location={location}
          bio={bio}
          repos={repos}
          onReset={handleReset}
        />
      )}
    </div>
  );
}

export default App;
