insert into cart(board_id, quantity)
values ($1, 1);

select * from cart
join board on board.id = cart.board_id
order by board.id;