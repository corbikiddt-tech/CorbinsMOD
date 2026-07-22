// ============================================================
// CORBIN'S MOD - Game Database
// ============================================================

// ---- Main Games (always installed) ----
const BASE_GAMES = [
    { 
        id: 'CM_-3', 
        name: 'CM_-3', 
        icon: 'games/icon/CM_-3.png', 
        file: 'games/game/CM_-3.html', 
        tag: 'Sandbox',
        category: 'Sandbox',
        author: 'Corbin',
        downloads: 15420,
        rating: 4.9,
        date: '2024-01-15'
    },
    { 
        id: 'CM_baldi', 
        name: 'CM_baldi', 
        icon: 'games/icon/CM_baldi.png', 
        file: 'games/game/CM_baldi.html', 
        tag: 'Sandbox',
        category: 'Sandbox',
        author: 'Corbin',
        downloads: 8320,
        rating: 4.7,
        date: '2024-02-20'
    },
    { 
        id: 'CM_badtime', 
        name: 'CM_badtime', 
        icon: 'games/icon/CM_badtime.png', 
        file: 'games/game/CM_badtime.html', 
        tag: 'Survival',
        category: 'Survival',
        author: 'Corbin',
        downloads: 12450,
        rating: 4.8,
        date: '2024-03-10'
    },
    { 
        id: 'CM_cookieclicker', 
        name: 'CM_cookieclicker', 
        icon: 'games/icon/CM_cookieclicker.png', 
        file: 'games/game/CM_cookieclicker.html', 
        tag: 'Sandbox',
        category: 'Sandbox',
        author: 'Corbin',
        downloads: 5670,
        rating: 4.5,
        date: '2024-04-01'
    },
    { 
        id: 'GN-Math', 
        name: 'GN-Math', 
        icon: 'icons/gnmath.jpg', 
        file: 'https://genizymath.github.io/', 
        tag: 'Library',
        category: 'Library',
        author: 'GN-Math Team',
        downloads: 99999,
        rating: 4.9,
        date: '2024-07-20',
        description: 'Massive game library with hundreds of browser games'
    }
];

// ---- Workshop Games (available to subscribe to) ----
const WORKSHOP_GAMES = [
    { 
        id: 'CM_freddy1', 
        name: 'CM_freddy1', 
        icon: 'games/game/workshop/wicon/CM_freddy1.png', 
        file: 'games/game/workshop/CM_freddy1.html', 
        tag: 'Survival',
        category: 'Survival',
        featured: true,
        author: 'Corbin',
        downloads: 1247,
        rating: 4.8,
        date: '2024-05-15',
        description: 'Survive against Freddy Fazbear in this intense horror experience'
    },
    { 
        id: 'CM_freddy2', 
        name: 'CM_freddy2', 
        icon: 'games/game/workshop/wicon/CM_freddy2.png', 
        file: 'games/game/workshop/CM_freddy2.html', 
        tag: 'Survival',
        category: 'Survival',
        featured: true,
        author: 'Corbin',
        downloads: 892,
        rating: 4.6,
        date: '2024-06-01',
        description: 'The nightmare continues with new horrors'
    },
    { 
        id: 'CM_badtime', 
        name: 'CM_badtime', 
        icon: 'games/game/workshop/wicon/CM_badtime.png', 
        file: 'games/game/workshop/CM_badtime.html', 
        tag: 'Survival',
        category: 'Survival',
        featured: false,
        author: 'Community',
        downloads: 3420,
        rating: 4.7,
        date: '2024-07-05',
        description: 'Face your worst nightmare in this challenging survival experience'
    },
    { 
        id: 'CM_cookieclicker', 
        name: 'CM_cookieclicker', 
        icon: 'games/game/workshop/wicon/CM_cookieclicker.png', 
        file: 'games/game/workshop/CM_cookieclicker.html', 
        tag: 'Sandbox',
        category: 'Sandbox',
        featured: false,
        author: 'Community',
        downloads: 2150,
        rating: 4.4,
        date: '2024-07-10',
        description: 'Click your way to cookie domination in this addictive sandbox'
    }
];

// ---- Workshop Categories ----
const WORKSHOP_CATEGORIES = [
    'All',
    'Sandbox',
    'Survival'
];

const WORKSHOP_SORTS = [
    'Most Popular',
    'Top Rated All Time',
    'Most Recent'
];

// ---- Export for use in index.html ----
if (typeof window !== 'undefined') {
    window.CORBINS_MOD = {
        BASE_GAMES: BASE_GAMES,
        WORKSHOP_GAMES: WORKSHOP_GAMES,
        WORKSHOP_CATEGORIES: WORKSHOP_CATEGORIES,
        WORKSHOP_SORTS: WORKSHOP_SORTS
    };
}