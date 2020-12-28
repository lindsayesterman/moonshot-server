CREATE TYPE project_topic AS ENUM (
    'Academic',
    'Athletics',
    'Art',
    'Community Service',
    'Computer/Technology',
    'Culture',
    'Environmental',
    'Music',
    'Science/Math',
    'Social Justice',
    'Work',
    'Other'
);

ALTER TABLE projects
  ADD COLUMN
    topic project_topic;