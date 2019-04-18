update cart
set quantity = $2
where board_id = $1;

select * from cart
join board on board.id = cart.board_id
order by board.id