CREATE TYPE project_topic AS ENUM (
    'academic',
    'athletics',
    'art',
    'community',
    'tech',
    'social',
    'work',
    'other'
);

ALTER TABLE projects
  ADD COLUMN
    topic project_topic;