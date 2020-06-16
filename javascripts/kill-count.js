$().ready(() => {
	$('.kill-count-table tr').each((i, element) => {
		const boss = $(element).find('td:first-child');
		const rank = parseInt(boss.html());
		if (!isNaN(rank)) {
			boss.addClass('rank ' + getRankClass(rank));
		}
	});
	
	function getRankClass(rank) {
		if (rank <= 10) {
			return 'legendary';
		}
		if (rank <= 100) {
			return 'epic';
		}
		if (rank <= 250) {
			return 'rare';
		}
		return 'uncommon';
	}
});