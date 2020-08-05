"use strict";

document.addEventListener("DOMContentLoaded", function() {
    /* Array of world-ranks */
    let worldRanks = document.getElementById('kill-count-table').getElementsByClassName('world-rank');

    /* Loop through ranks & add a class depending on value */
    for (let i = 0; i < worldRanks.length; i++) {
        const rank = worldRanks[i].innerHTML; //the actual world-rank value
        worldRanks[i].classList.add('rank-' + determineClassColor(rank));
    }

    function determineClassColor(rank) {
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