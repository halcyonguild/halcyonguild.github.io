"use strict";

document.addEventListener("DOMContentLoaded", function() { // on document load
    /* Array of world-ranks */
    const worldRanks = document.getElementById('kill-count-table').getElementsByClassName('world-rank');

    /* Loop through all ranks */
    for (let i = 0; i < worldRanks.length; i++) {
        const rank = worldRanks[i].innerHTML; //the actual world-rank value
        worldRanks[i].classList.add('rank-' + determineClassColor(rank));
    }

    /**
     * determines a class for rank
     * @param rank number
     */
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


function openTier(element) {
    element.parentNode.parentNode.classList.add('open');
}

function closeTier(element) {
    element.parentNode.parentNode.classList.remove('open');
}