INSERT INTO users (name, email) VALUES
('Demo User', 'demo@calendly.com');

INSERT INTO events (user_id, name, duration, slug) VALUES
(1, '15 Minute Call', 15, '15-min-call'),
(1, '30 Minute Meeting', 30, '30-min-meeting');
