select * from cart
join board on board.id = cart.board_id
order by board.id