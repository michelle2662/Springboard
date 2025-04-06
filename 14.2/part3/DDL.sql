-- write your queries here

Part one: Medical Center


CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    specialty VARCHAR(100)
);

CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);
CREATE TABLE doctors_patients (
    id SERIAL PRIMARY KEY,
    doctor_id INTEGER NOT NULL REFERENCES employees(id),
    patient_id INTEGER NOT NULL REFERENCES patients(id)
);

CREATE TABLE diagnosis (
    id SERIAL PRIMARY KEY,
    disease VARCHAR(100) NOT NULL
);

CREATE TABLE patient_diagnosis (
    id SERIAL PRIMARY KEY,
    patient_id INTEGER NOT NULL REFERENCES patients(id),
    disease_id INTEGER NOT NULL REFERENCES diagnosis(id)
);


part 2: Craiglist

CREATE TABLE regions (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    email VARCHAR(100) NOT NULL UNIQUE,
    preferred_region_id INTEGER REFERENCES regions(id)
);
CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);
CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(200) NOT NULL,
    body TEXT NOT NULL,
    user_id INTEGER NOT NULL REFERENCES users(id),
    region_id INTEGER NOT NULL REFERENCES regions(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE post_categories (
    post_id INTEGER NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
    category_id INTEGER NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    PRIMARY KEY (post_id, category_id)
);

part3: Soccer League
CREATE TABLE leagues (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE seasons (
    id SERIAL PRIMARY KEY,
    league_id INTEGER NOT NULL REFERENCES leagues(id),
    start_date DATE NOT NULL,
    end_date DATE NOT NULL
);

CREATE TABLE teams (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    league_id INTEGER NOT NULL REFERENCES leagues(id)
);

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    team_id INTEGER NOT NULL REFERENCES teams(id)
);


CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    home_team_id INTEGER NOT NULL REFERENCES teams(id),
    away_team_id INTEGER NOT NULL REFERENCES teams(id),
    season_id INTEGER NOT NULL REFERENCES seasons(id),
    game_date DATE NOT NULL,
    home_score INTEGER DEFAULT 0,
    away_score INTEGER DEFAULT 0
);

CREATE TABLE referees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50)
);

CREATE TABLE game_referees (
    game_id INTEGER NOT NULL REFERENCES games(id) ON DELETE CASCADE,
    referee_id INTEGER NOT NULL REFERENCES referees(id) ON DELETE CASCADE,
    PRIMARY KEY (game_id, referee_id)
);

CREATE TABLE goals (
    id SERIAL PRIMARY KEY,
    player_id INTEGER NOT NULL REFERENCES players(id),
    game_id INTEGER NOT NULL REFERENCES games(id),
    minute_scored INTEGER CHECK (minute_scored >= 0 AND minute_scored <= 120)
);
