CREATE TABLE feedback (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  description TEXT NOT NULL,
  status TEXT DEFAULT 'suggestion'
);

CREATE TABLE comments (
  id SERIAL PRIMARY KEY,
  feedback_id INTEGER REFERENCES feedback(id),
  text TEXT NOT NULL
);
