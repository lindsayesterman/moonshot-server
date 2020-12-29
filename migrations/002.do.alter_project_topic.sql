CREATE TYPE project_topic AS ENUM (
    'Academic',
    'Athletics',
    'Art/Music',
    'Community Service',
    'Computer/Technology',
    'Social Justice',
    'Work',
    'Other'
);

ALTER TABLE projects
  ADD COLUMN
    topic project_topic;