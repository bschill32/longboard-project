insert into users(name, email, password)
values ($1, $2, $3);

returning id, name, email;

-- select id, name, email
-- from users
-- where email = $2