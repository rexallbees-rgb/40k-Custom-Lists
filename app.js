// Ability database with descriptions
const abilityDatabase = {
    'For the Greater Good': 'When this unit is selected to shoot or fight, you can select one friendly T\'AU EMPIRE unit within 6" of this unit. That unit can shoot or fight instead of this unit.',
    'Markerlight': 'In your Shooting phase, you can select one enemy unit within 36" of and visible to this unit. Until the end of the phase, each time a friendly T\'AU EMPIRE unit makes a ranged attack against that enemy unit, improve the Armour Penetration characteristic of that attack by 1 (to a maximum of -3) and the Damage characteristic of that attack by 1.',
    'Recon Sweep': 'At the end of your Movement phase, if this unit did not Fall Back or Advance this phase, you can select one enemy unit within 18" of this unit. Until the start of your next Movement phase, each time a friendly T\'AU EMPIRE unit makes a ranged attack against that enemy unit, the target does not receive the benefits of cover against that attack.',
    'Devilfish': 'This unit can transport 12 T\'AU EMPIRE INFANTRY models. Each TERMINATOR or JUMP PACK model takes the space of 2 models.',
    'Manta Strike': 'During deployment, you can set this unit up in high orbit instead of placing it on the battlefield. If you do, at the end of any of your Movement phases, this unit can use a Deep Strike move.',
    'Multi-spectrum Sensor Suite': 'Each time this unit makes a ranged attack, you can ignore any or all modifiers to the hit roll.',
    'Stealth Field Generator': 'Each time a ranged attack is made against this unit, if the attacker is more than 12" away, subtract 1 from the hit roll.',
    'Homing Beacon': 'Once per battle, in your Movement phase, you can select one enemy unit within 18" of this unit. Until the start of your next Movement phase, each time a friendly T\'AU EMPIRE unit declares a charge against that enemy unit, you can re-roll the charge roll.',
    'Stabilizing Anchors': 'This unit can only Advance or Fall Back if every model in this unit ends that move within 6" of an objective marker.',
    'Nova Reactor': 'Once per battle, at the start of your Shooting phase, this unit can use its Nova Reactor. If it does, until the end of the phase, the Damage characteristic of ranged weapons this unit is equipped with is increased by 1.',
    'Ion Accelerator Overcharge': 'Once per battle, at the start of your Shooting phase, this unit can use its Ion Accelerator Overcharge. If it does, until the end of the phase, the Strength and Damage characteristics of ion accelerator weapons this unit is equipped with are increased by 1.',
    'Wisdom of the Guides': 'While this unit contains a Guide, each time a friendly T\'AU EMPIRE unit within 6" of this unit makes a ranged attack, you can re-roll the hit roll.',
    'Fail-Safe Detonator': 'When this unit is destroyed, roll one D6 before removing it from the battlefield. On a 4+, the closest enemy unit within 6" suffers D3 mortal wounds.',
    'Master of the Elements': 'While this unit contains a XV8 Crisis Shas\'vre, each time this unit makes a ranged attack, you can ignore any or all modifiers to the hit roll.',
    'Exemplar of the Mont\'ka': 'Each time this unit makes a ranged attack, you can re-roll the hit roll.',
    'Precision of the Patient Hunter': 'Each time this unit makes a ranged attack, you can re-roll the wound roll.',
    'Hover Tank': 'Distances are measured to and from either this unit\'s hull or its base, whichever is closer.',
    'Railgun': 'Each time this unit makes a ranged attack with a railgun, if the target is within half range, add 1 to the wound roll.',
    'Transport': 'This unit can transport 12 T\'AU EMPIRE INFANTRY models. Each TERMINATOR or JUMP PACK model takes the space of 2 models.',
    'Shield Generator': 'This unit has a 4+ invulnerable save.',
    'Stealthy': 'Each time a ranged attack is made against this unit, if the attacker is more than 12" away, subtract 1 from the hit roll.',
    'Krootox Rider': 'This unit can only Advance or Fall Back if every model in this unit ends that move within 6" of an objective marker.',
    'Neurotoxin': 'Each time this unit makes a ranged attack with a ranged weapon, an unmodified wound roll of 6 inflicts 1 mortal wound on the target in addition to any normal damage.',
    'Seeker Missile': 'Each time this unit makes a ranged attack with a seeker missile, you can select one enemy unit within 12" of the target and visible to this unit. That enemy unit suffers 1 mortal wound.',
    'Fast Attack': 'This unit is eligible to declare a charge in a turn in which it Advanced.',
    'Supersonic': 'Each time this unit ends a Normal, Advance or Fall Back move, you can select one enemy unit it moved across during that move. That enemy unit must take a Desperate Escape test.',
    'Heavy Ion Cannon': 'Each time this unit makes a ranged attack with a heavy ion cannon, if the target is within half range, add 1 to the wound roll.',
    'Longshot': 'Each time this unit makes a ranged attack with a longshot pulse rifle, if the target is within half range, add 1 to the wound roll.',
    'Pulse Accelerator': 'Each time this unit makes a ranged attack with a pulse accelerator, if the target is within half range, add 1 to the wound roll.',
    'Fusion Collider': 'Each time this unit makes a ranged attack with a fusion collider, if the target is within half range, add 1 to the wound roll.',
    'Includes 2 Stealth Drones': 'This unit includes 2 Stealth Drones that can be deployed separately or attached to this unit.',
    'And They Shall Know No Fear': 'This unit can re-roll a failed Morale test. If it is a CHARACTER unit, it can also re-roll one failed hit roll in the Fight phase.'
};

// Unit database for each faction
const unitDatabase = {
    'space-marines': [
        { 
            id: 1, 
            name: 'Tactical Squad', 
            points: 90, 
            models: 10,
            stats: { m: 6, t: 4, sv: 3, w: 1, ld: 8, oc: 1 },
            weapons: [
                { name: 'Bolter (included)', cost: 0, range: 24, a: 1, bs: 4, s: 4, ap: 0, d: 1 },
                { name: 'Plasma Gun', cost: 15, range: 12, a: 1, bs: 4, s: 7, ap: -3, d: 1 },
                { name: 'Meltagun', cost: 15, range: 12, a: 1, bs: 4, s: 9, ap: -4, d: 2 }
            ]
        },
        { 
            id: 2, 
            name: 'Terminator Squad', 
            points: 180, 
            models: 5,
            stats: { m: 4, t: 4, sv: 2, w: 2, ld: 8, oc: 2 },
            weapons: [
                { name: 'Storm Bolter (included)', cost: 0, range: 24, a: 2, bs: 4, s: 4, ap: 0, d: 1 },
                { name: 'Heavy Flamer', cost: 20, range: 12, a: 2, bs: 4, s: 5, ap: -1, d: 1 },
                { name: 'Assault Cannon', cost: 25, range: 24, a: 3, bs: 4, s: 6, ap: -1, d: 1 }
            ]
        },
        { 
            id: 3, 
            name: 'Scout Squad', 
            points: 65, 
            models: 5,
            stats: { m: 6, t: 4, sv: 4, w: 1, ld: 7, oc: 1 },
            weapons: [
                { name: 'Bolter (included)', cost: 0, range: 24, a: 1, bs: 4, s: 4, ap: 0, d: 1 },
                { name: 'Sniper Rifle', cost: 10, range: 36, a: 1, bs: 4, s: 4, ap: 0, d: 1 }
            ]
        },
        { 
            id: 4, 
            name: 'Devastator Squad', 
            points: 95, 
            models: 10,
            stats: { m: 6, t: 4, sv: 3, w: 1, ld: 8, oc: 1 },
            weapons: [
                { name: 'Bolter (included)', cost: 0, range: 24, a: 1, bs: 4, s: 4, ap: 0, d: 1 },
                { name: 'Lascannon', cost: 40, range: 48, a: 1, bs: 4, s: 9, ap: -3, d: 3 },
                { name: 'Missile Launcher', cost: 35, range: 48, a: 2, bs: 4, s: 8, ap: -2, d: 2 }
            ]
        },
        { 
            id: 5, 
            name: 'Assault Squad', 
            points: 90, 
            models: 10,
            stats: { m: 8, t: 4, sv: 3, w: 1, ld: 8, oc: 1 },
            weapons: [
                { name: 'Chainsword + Bolt Pistol (included)', cost: 0, range: 12, a: 2, bs: 4, s: 4, ap: 0, d: 1 },
                { name: 'Plasma Pistol', cost: 10, range: 12, a: 1, bs: 4, s: 7, ap: -3, d: 1 }
            ]
        },
        { 
            id: 6, 
            name: 'Land Raider', 
            points: 245, 
            models: 1,
            stats: { m: 10, t: 8, sv: 2, w: 16, ld: 9, oc: 4 },
            weapons: [
                { name: 'Twin Lascannon (included)', cost: 0, range: 48, a: 2, bs: 4, s: 9, ap: -3, d: 3 },
                { name: 'Twin Heavy Bolter', cost: 25, range: 36, a: 4, bs: 4, s: 5, ap: 0, d: 1 }
            ]
        },
        { 
            id: 7, 
            name: 'Rhino', 
            points: 80, 
            models: 1,
            stats: { m: 12, t: 7, sv: 3, w: 10, ld: 8, oc: 1 },
            weapons: [
                { name: 'Storm Bolter (included)', cost: 0, range: 24, a: 2, bs: 4, s: 4, ap: 0, d: 1 }
            ]
        },
        { 
            id: 8, 
            name: 'Captain', 
            points: 70, 
            models: 1,
            stats: { m: 6, t: 4, sv: 2, w: 4, ld: 10, oc: 1 },
            weapons: [
                { name: 'Power Sword + Bolt Pistol (included)', cost: 0, range: 12, a: 3, bs: 4, s: 5, ap: -3, d: 1 },
                { name: 'Relic Blade', cost: 25, range: 0, a: 4, bs: 0, s: 6, ap: -3, d: 2 },
                { name: 'Storm Shield', cost: 15, range: 0, a: 0, bs: 0, s: 0, ap: 0, d: 0 }
            ]
        },
        { 
            id: 9, 
            name: 'Librarian', 
            points: 75, 
            models: 1,
            stats: { m: 6, t: 4, sv: 2, w: 4, ld: 9, oc: 1 },
            weapons: [
                { name: 'Force Staff + Bolt Pistol (included)', cost: 0, range: 12, a: 2, bs: 4, s: 5, ap: -1, d: 2 },
                { name: 'Force Sword', cost: 10, range: 0, a: 3, bs: 0, s: 5, ap: -1, d: 2 }
            ]
        },
        { 
            id: 10, 
            name: 'Dreadnought', 
            points: 110, 
            models: 1,
            stats: { m: 6, t: 7, sv: 2, w: 8, ld: 8, oc: 1 },
            weapons: [
                { name: 'Multi-melta + Storm Bolter (included)', cost: 0, range: 12, a: 2, bs: 4, s: 8, ap: -4, d: 2 },
                { name: 'Plasma Cannon', cost: 15, range: 24, a: 1, bs: 4, s: 7, ap: -3, d: 1 },
                { name: 'Autocannon', cost: 10, range: 48, a: 2, bs: 4, s: 7, ap: -1, d: 1 }
            ]
        },
        {
            id: 11,
            name: 'Intercessor Squad',
            points: 120,
            models: 10,
            stats: { m: 6, t: 4, sv: 3, w: 1, ld: 8, oc: 1 },
            weapons: [
                { name: 'Bolt Rifle (included)', cost: 0, range: 24, a: 1, bs: 4, s: 4, ap: 0, d: 1 },
                { name: 'Auto Bolt Rifle', cost: 10, range: 24, a: 1, bs: 4, s: 4, ap: 0, d: 1 },
                { name: 'Bolt Rifle w/ Grenade Launcher', cost: 15, range: 24, a: 1, bs: 4, s: 4, ap: 0, d: 1 },
                { name: 'Hand Flamer', cost: 10, range: 8, a: 1, bs: 4, s: 4, ap: 0, d: 1 },
                { name: 'Plasma Pistol', cost: 10, range: 12, a: 1, bs: 4, s: 7, ap: -3, d: 1 },
                { name: 'Bolt Pistol', cost: 0, range: 12, a: 1, bs: 4, s: 4, ap: 0, d: 1 },
                { name: 'Astartes Chainsword', cost: 0, range: 0, a: 2, bs: 0, s: 4, ap: 0, d: 1 },
                { name: 'Power Weapon', cost: 5, range: 0, a: 2, bs: 0, s: 5, ap: -3, d: 1 },
                { name: 'Power Fist', cost: 20, range: 0, a: 2, bs: 0, s: 5, ap: -3, d: 2 },
                { name: 'Thunder Hammer', cost: 25, range: 0, a: 2, bs: 0, s: 5, ap: -4, d: 2 }
            ],
            abilities: ['And They Shall Know No Fear'],
            keywords: ['ADEPTUS ASTARTES', 'INFANTRY', 'CORE']
        },
        {
            id: 12,
            name: 'Jump Pack Intercessors',
            points: 135,
            models: 5,
            stats: { m: 12, t: 4, sv: 3, w: 1, ld: 8, oc: 1 },
            weapons: [
                { name: 'Bolt Rifle (included)', cost: 0, range: 24, a: 1, bs: 4, s: 4, ap: 0, d: 1 },
                { name: 'Plasma Pistol', cost: 10, range: 12, a: 1, bs: 4, s: 7, ap: -3, d: 1 }
            ],
            abilities: ['And They Shall Know No Fear']
        },
        {
            id: 13,
            name: 'Aggressors',
            points: 150,
            models: 3,
            stats: { m: 6, t: 5, sv: 2, w: 3, ld: 8, oc: 2 },
            weapons: [
                { name: 'Auto Boltstorm Gauntlets (included)', cost: 0, range: 18, a: 2, bs: 4, s: 5, ap: -1, d: 1 },
                { name: 'Heavy Boltstorm Gauntlets', cost: 15, range: 18, a: 3, bs: 4, s: 5, ap: -1, d: 1 }
            ],
            abilities: ['And They Shall Know No Fear']
        },
        {
            id: 14,
            name: 'Eliminators',
            points: 120,
            models: 3,
            stats: { m: 6, t: 4, sv: 3, w: 1, ld: 8, oc: 1 },
            weapons: [
                { name: 'Heavy Bolt Sniper Rifle (included)', cost: 0, range: 30, a: 1, bs: 4, s: 4, ap: 0, d: 1 },
                { name: 'Bolt Pistol', cost: 0, range: 12, a: 1, bs: 4, s: 4, ap: 0, d: 1 }
            ],
            abilities: ['And They Shall Know No Fear']
        },
        {
            id: 15,
            name: 'Inceptors',
            points: 135,
            models: 3,
            stats: { m: 12, t: 4, sv: 3, w: 1, ld: 9, oc: 1 },
            weapons: [
                { name: 'Assault Bolter (included)', cost: 0, range: 24, a: 1, bs: 4, s: 4, ap: 0, d: 1 },
                { name: 'Plasma Exterminator', cost: 15, range: 12, a: 1, bs: 4, s: 7, ap: -3, d: 1 }
            ],
            abilities: ['And They Shall Know No Fear']
        },
        {
            id: 16,
            name: 'Suppressors',
            points: 150,
            models: 3,
            stats: { m: 12, t: 4, sv: 3, w: 1, ld: 9, oc: 1 },
            weapons: [
                { name: 'Heavy Intercessor Bolt Rifle (included)', cost: 0, range: 30, a: 1, bs: 4, s: 4, ap: 0, d: 1 },
                { name: 'Plasma Exterminator', cost: 15, range: 12, a: 1, bs: 4, s: 7, ap: -3, d: 1 }
            ],
            abilities: ['And They Shall Know No Fear']
        }
    ],
    'chaos': [
        { 
            id: 1, 
            name: 'Chaos Cultists', 
            points: 70, 
            models: 10,
            stats: { m: 6, t: 3, sv: 5, w: 1, ld: 7, oc: 1 },
            weapons: [
                { name: 'Autogun (included)', cost: 0, range: 24, a: 1, bs: 3, s: 3, ap: 0, d: 1 },
                { name: 'Heavy Stubber', cost: 10, range: 36, a: 3, bs: 3, s: 4, ap: 0, d: 1 }
            ]
        },
        { 
            id: 2, 
            name: 'Chaos Space Marines', 
            points: 120, 
            models: 10,
            stats: { m: 6, t: 4, sv: 3, w: 1, ld: 8, oc: 1 },
            weapons: [
                { name: 'Bolter (included)', cost: 0, range: 24, a: 1, bs: 4, s: 4, ap: 0, d: 1 },
                { name: 'Plasma Gun', cost: 15, range: 12, a: 1, bs: 4, s: 7, ap: -3, d: 1 },
                { name: 'Meltagun', cost: 15, range: 12, a: 1, bs: 4, s: 9, ap: -4, d: 2 }
            ]
        },
        { 
            id: 3, 
            name: 'Terminators', 
            points: 200, 
            models: 5,
            stats: { m: 4, t: 4, sv: 2, w: 2, ld: 8, oc: 2 },
            weapons: [
                { name: 'Combi-bolter (included)', cost: 0, range: 24, a: 2, bs: 4, s: 4, ap: 0, d: 1 },
                { name: 'Heavy Flamer', cost: 20, range: 12, a: 2, bs: 4, s: 5, ap: -1, d: 1 }
            ]
        },
        { 
            id: 4, 
            name: 'Havocs', 
            points: 130, 
            models: 5,
            stats: { m: 6, t: 4, sv: 3, w: 1, ld: 8, oc: 1 },
            weapons: [
                { name: 'Bolter (included)', cost: 0, range: 24, a: 1, bs: 4, s: 4, ap: 0, d: 1 },
                { name: 'Lascannon', cost: 40, range: 48, a: 1, bs: 4, s: 9, ap: -3, d: 3 },
                { name: 'Missile Launcher', cost: 35, range: 48, a: 2, bs: 4, s: 8, ap: -2, d: 2 }
            ]
        },
        { 
            id: 5, 
            name: 'Possessed', 
            points: 115, 
            models: 5,
            stats: { m: 6, t: 4, sv: 3, w: 1, ld: 8, oc: 1 },
            weapons: [
                { name: 'Melee Weapons (included)', cost: 0, range: 0, a: 2, bs: 0, s: 5, ap: 0, d: 1 }
            ]
        },
        { 
            id: 6, 
            name: 'Rhino', 
            points: 75, 
            models: 1,
             stats: { m: 12, t: 7, sv: 3, w: 10, ld: 8, oc: 1 },
            weapons: [
                { name: 'Combi-bolter (included)', cost: 0, range: 24, a: 2, bs: 4, s: 4, ap: 0, d: 1 }
            ]
        },
        { 
            id: 7, 
            name: 'Chaos Lord', 
            points: 85, 
            models: 1,
            stats: { m: 6, t: 4, sv: 2, w: 4, ld: 10, oc: 1 },
            weapons: [
                { name: 'Power Sword + Bolt Pistol (included)', cost: 0, range: 12, a: 3, bs: 4, s: 5, ap: -3, d: 1 },
                { name: 'Daemon Weapon', cost: 30, range: 0, a: 4, bs: 0, s: 6, ap: -3, d: 2 },
                { name: 'Storm Shield', cost: 15, range: 0, a: 0, bs: 0, s: 0, ap: 0, d: 0 }
            ]
        },
        { 
            id: 8, 
            name: 'Dark Apostle', 
            points: 80, 
            models: 1,
            stats: { m: 6, t: 4, sv: 2, w: 4, ld: 9, oc: 1 },
            weapons: [
                { name: 'Crozius Arcanus (included)', cost: 0, range: 0, a: 3, bs: 0, s: 5, ap: -1, d: 2 }
            ]
        },
        { 
            id: 9, 
            name: 'Helbrute', 
            points: 120, 
            models: 1,
            stats: { m: 6, t: 7, sv: 2, w: 8, ld: 8, oc: 1 },
            weapons: [
                { name: 'Multi-melta + Power Fist (included)', cost: 0, range: 12, a: 2, bs: 4, s: 8, ap: -4, d: 2 },
                { name: 'Plasma Cannon', cost: 15, range: 24, a: 1, bs: 4, s: 7, ap: -3, d: 1 }
            ]
        }
    ],
    'necrons': [
        { 
            id: 1, 
            name: 'Necron Warriors', 
            points: 100, 
            models: 10,
            stats: { m: 6, t: 4, sv: 4, w: 1, ld: 10, oc: 1 },
            weapons: [
                { name: 'Gauss Rifle (included)', cost: 0, range: 24, a: 1, bs: 4, s: 5, ap: -1, d: 1 }
            ]
        },
        { 
            id: 2, 
            name: 'Immortals', 
            points: 140, 
            models: 5,
            stats: { m: 6, t: 4, sv: 3, w: 1, ld: 10, oc: 1 },
            weapons: [
                { name: 'Gauss Blaster (included)', cost: 0, range: 24, a: 1, bs: 4, s: 5, ap: -2, d: 1 },
                { name: 'Tesla Carbine', cost: 5, range: 24, a: 2, bs: 4, s: 5, ap: 0, d: 1 }
            ]
        },
        { 
            id: 3, 
            name: 'Decon Tomb Blades', 
            points: 120, 
            models: 3,
            stats: { m: 8, t: 4, sv: 4, w: 2, ld: 10, oc: 2 },
            weapons: [
                { name: 'Gauss Blaster (included)', cost: 0, range: 24, a: 1, bs: 4, s: 5, ap: -2, d: 1 },
                { name: 'Tesla Carbine', cost: 8, range: 24, a: 2, bs: 4, s: 5, ap: 0, d: 1 }
            ]
        },
        { 
            id: 4, 
            name: 'Heavy Destroyers', 
            points: 90, 
            models: 3,
            stats: { m: 8, t: 4, sv: 3, w: 2, ld: 10, oc: 1 },
            weapons: [
                { name: 'Gauss Cannon (included)', cost: 0, range: 36, a: 1, bs: 4, s: 7, ap: -3, d: 2 }
            ]
        },
        { 
            id: 5, 
            name: 'Overlord', 
            points: 90, 
            models: 1,
            stats: { m: 6, t: 5, sv: 2, w: 4, ld: 10, oc: 1 },
            weapons: [
                { name: 'Resurrection Orb (included)', cost: 0, range: 0, a: 0, bs: 0, s: 0, ap: 0, d: 0 },
                { name: 'Rod of Covenant', cost: 25, range: 0, a: 0, bs: 0, s: 0, ap: 0, d: 0 }
            ]
        },
        { 
            id: 6, 
            name: 'Royal Warden', 
            points: 65, 
            models: 1,
            stats: { m: 6, t: 4, sv: 3, w: 3, ld: 10, oc: 1 },
            weapons: [
                { name: 'Gauss Blaster (included)', cost: 0, range: 24, a: 1, bs: 4, s: 5, ap: -2, d: 1 }
            ]
        },
        { 
            id: 7, 
            name: 'Ghost Ark', 
            points: 120, 
            models: 1,
            stats: { m: 10, t: 6, sv: 3, w: 10, ld: 10, oc: 2 },
            weapons: [
                { name: 'Tesla Cannon (included)', cost: 0, range: 24, a: 3, bs: 4, s: 6, ap: -1, d: 1 }
            ]
        },
        { 
            id: 8, 
            name: 'Monolith', 
            points: 300, 
            models: 1,
            stats: { m: 8, t: 8, sv: 2, w: 20, ld: 10, oc: 3 },
            weapons: [
                { name: 'Gauss Flux Arc (included)', cost: 0, range: 24, a: 3, bs: 4, s: 6, ap: -1, d: 2 }
            ]
        }
    ],
    'tyrannids': [
        { 
            id: 1, 
            name: 'Termagants', 
            points: 75, 
            models: 10,
            stats: { m: 6, t: 3, sv: 5, w: 1, ld: 5, oc: 1 },
            weapons: [
                { name: 'Fleshborer (included)', cost: 0, range: 18, a: 1, bs: 4, s: 4, ap: 0, d: 1 },
                { name: 'Devourer', cost: 5, range: 18, a: 3, bs: 4, s: 4, ap: 0, d: 1 },
                { name: 'Spike Rifle', cost: 2, range: 24, a: 1, bs: 4, s: 4, ap: 0, d: 1 }
            ]
        },
        { 
            id: 2, 
            name: 'Hormagaunts', 
            points: 80, 
            models: 10,
            stats: { m: 8, t: 3, sv: 5, w: 1, ld: 5, oc: 1 },
            weapons: [
                { name: 'Scything Talons (included)', cost: 0, range: 0, a: 2, bs: 0, s: 4, ap: -1, d: 1 }
            ]
        },
        { 
            id: 3, 
            name: 'Genestealers', 
            points: 120, 
            models: 5,
            stats: { m: 8, t: 3, sv: 5, w: 1, ld: 8, oc: 1 },
            weapons: [
                { name: 'Rending Claws (included)', cost: 0, range: 0, a: 2, bs: 0, s: 4, ap: -1, d: 1 }
            ]
        },
        { 
            id: 4, 
            name: 'Tyranid Warriors', 
            points: 140, 
            models: 3,
            stats: { m: 6, t: 4, sv: 4, w: 2, ld: 8, oc: 1 },
            weapons: [
                { name: 'Devourer (included)', cost: 0, range: 18, a: 3, bs: 4, s: 4, ap: 0, d: 1 },
                { name: 'Barbed Strangler', cost: 10, range: 36, a: 2, bs: 4, s: 5, ap: -1, d: 1 },
                { name: 'Venom Cannon', cost: 15, range: 36, a: 2, bs: 4, s: 6, ap: -2, d: 2 }
            ]
        },
        { 
            id: 5, 
            name: 'Carnifex', 
            points: 200, 
            models: 1,
            stats: { m: 8, t: 6, sv: 3, w: 12, ld: 8, oc: 2 },
            weapons: [
                { name: 'Scything Talons (included)', cost: 0, range: 0, a: 4, bs: 0, s: 6, ap: -2, d: 2 },
                { name: 'Bio-plasma', cost: 20, range: 18, a: 2, bs: 4, s: 6, ap: -2, d: 2 },
                { name: 'Heavy Venom Cannon', cost: 25, range: 36, a: 3, bs: 4, s: 7, ap: -2, d: 2 }
            ]
        },
        { 
            id: 6, 
            name: 'Hive Tyrant', 
            points: 180, 
            models: 1,
            stats: { m: 8, t: 6, sv: 2, w: 12, ld: 9, oc: 2 },
            weapons: [
                { name: 'Monstrous Scything Talons (included)', cost: 0, range: 0, a: 5, bs: 0, s: 7, ap: -2, d: 2 },
                { name: 'Heavy Venom Cannon', cost: 20, range: 36, a: 3, bs: 4, s: 7, ap: -2, d: 2 },
                { name: 'Wings', cost: 30, range: 0, a: 0, bs: 0, s: 0, ap: 0, d: 0 }
            ]
        },
        { 
            id: 7, 
            name: 'Neurothrope', 
            points: 140, 
            models: 1,
            stats: { m: 6, t: 5, sv: 3, w: 6, ld: 9, oc: 1 },
            weapons: [
                { name: 'Psychic Scream (included)', cost: 0, range: 0, a: 0, bs: 0, s: 0, ap: 0, d: 0 }
            ]
        },
        { 
            id: 8, 
            name: 'Harpy', 
            points: 185, 
            models: 1,
            stats: { m: 12, t: 6, sv: 3, w: 10, ld: 8, oc: 2 },
            weapons: [
                { name: 'Stinger Salvo (included)', cost: 0, range: 24, a: 4, bs: 4, s: 5, ap: 0, d: 1 },
                { name: 'Heavy Venom Cannon', cost: 20, range: 36, a: 3, bs: 4, s: 7, ap: -2, d: 2 }
            ]
        }
    ],
    'orks': [
        { 
            id: 1, 
            name: 'Boyz Mob', 
            points: 90, 
            models: 20,
            stats: { m: 6, t: 4, sv: 5, w: 1, ld: 6, oc: 1 },
            weapons: [
                { name: 'Slugga + Choppa (included)', cost: 0 },
                { name: 'Shoota', cost: 2 }
            ]
        },
        { 
            id: 2, 
            name: 'Burnas', 
            points: 80, 
            models: 5,
            stats: { m: 6, t: 4, sv: 5, w: 1, ld: 6, oc: 1 },
            weapons: [
                { name: 'Burna + Choppa (included)', cost: 0 }
            ]
        },
        { 
            id: 3, 
            name: 'Lootas', 
            points: 85, 
            models: 5,
            stats: { m: 6, t: 4, sv: 5, w: 1, ld: 6, oc: 1 },
            weapons: [
                { name: 'Deffgun (included)', cost: 0 },
                { name: 'Rokkit Launcha', cost: 12 }
            ]
        },
        { 
            id: 4, 
            name: 'Nobs', 
            points: 110, 
            models: 5,
            stats: { m: 6, t: 4, sv: 4, w: 2, ld: 7, oc: 1 },
            weapons: [
                { name: 'Slugga + Choppa (included)', cost: 0 },
                { name: 'Power Klaw', cost: 8 }
            ]
        },
        { 
            id: 5, 
            name: 'Warboss', 
            points: 110, 
            models: 1,
            stats: { m: 6, t: 5, sv: 4, w: 5, ld: 9, oc: 1 },
            weapons: [
                { name: 'Power Klaw + Slugga (included)', cost: 0 },
                { name: 'Kombi-rokkit', cost: 15 }
            ]
        },
        { 
            id: 6, 
            name: 'Big Mek', 
            points: 85, 
            models: 1,
            stats: { m: 6, t: 5, sv: 4, w: 4, ld: 8, oc: 1 },
            weapons: [
                { name: 'Kustom Mega-blasta (included)', cost: 0 },
                { name: 'Shokk Attack Gun', cost: 30 }
            ]
        },
        { 
            id: 7, 
            name: 'Battlewagon', 
            points: 140, 
            models: 1,
            stats: { m: 10, t: 7, sv: 4, w: 12, ld: 7, oc: 2 },
            weapons: [
                { name: 'Big Shoota (included)', cost: 0 },
                { name: 'Rokkit Launcha', cost: 15 }
            ]
        },
        { 
            id: 8, 
            name: 'Stompa', 
            points: 500, 
            models: 1,
            stats: { m: 8, t: 9, sv: 2, w: 18, ld: 8, oc: 4 },
            weapons: [
                { name: 'Mega Liftas + Saws (included)', cost: 0 }
            ]
        }
    ],
    'eldar': [
        { 
            id: 1, 
            name: 'Guardsmen Squad', 
            points: 50, 
            models: 10,
            stats: { m: 6, t: 3, sv: 5, w: 1, ld: 7, oc: 1 },
            weapons: [
                { name: 'Lasgun (included)', cost: 0 },
                { name: 'Lascarbine', cost: 2 }
            ]
        },
        { 
            id: 2, 
            name: 'Veteran Squad', 
            points: 80, 
            models: 10,
            stats: { m: 6, t: 3, sv: 5, w: 1, ld: 8, oc: 1 },
            weapons: [
                { name: 'Lasgun (included)', cost: 0 },
                { name: 'Plasma Gun', cost: 20 }
            ]
        },
        { 
            id: 3, 
            name: 'Heavy Weapon Team', 
            points: 55, 
            models: 3,
            stats: { m: 6, t: 3, sv: 5, w: 1, ld: 7, oc: 1 },
            weapons: [
                { name: 'Lascannon (included)', cost: 0 },
                { name: 'Autocannon', cost: 10 }
            ]
        },
        { 
            id: 4, 
            name: 'Cadian Shock Troops', 
            points: 75, 
            models: 10,
            stats: { m: 6, t: 3, sv: 5, w: 1, ld: 7, oc: 1 },
            weapons: [
                { name: 'Lasgun (included)', cost: 0 },
                { name: 'Flamer', cost: 5 }
            ]
        },
        { 
            id: 5, 
            name: 'Officer of the Fleet', 
            points: 40, 
            models: 1,
            stats: { m: 6, t: 3, sv: 5, w: 2, ld: 9, oc: 1 },
            weapons: [
                { name: 'Laspistol + Sword (included)', cost: 0 }
            ]
        },
        { 
            id: 6, 
            name: 'Leman Russ Tank', 
            points: 185, 
            models: 1,
            stats: { m: 10, t: 8, sv: 2, w: 12, ld: 8, oc: 2 },
            weapons: [
                { name: 'Battle Cannon (included)', cost: 0 },
                { name: 'Lascannon', cost: 25 }
            ]
        },
        { 
            id: 7, 
            name: 'Basilisk', 
            points: 175, 
            models: 1,
            stats: { m: 8, t: 8, sv: 2, w: 12, ld: 8, oc: 1 },
            weapons: [
                { name: 'Earthshaker Cannon (included)', cost: 0 }
            ]
        }
    ],
    'tau': [
    { 
        id: 1, 
        name: 'Fire Warriors', 
        points: 105, 
        models: 10,
        stats: { m: 6, t: 3, sv: 4, w: 1, ld: 7, oc: 1 },
        weapons: [
            { name: 'Pulse Rifle (included)', cost: 0, range: 30, a: 1, bs: 4, s: 5, ap: 0, d: 1 },
            { name: 'Pulse Carbine', cost: 3, range: 18, a: 1, bs: 4, s: 5, ap: 0, d: 1 },
            { name: 'Photon Grenades', cost: 0, range: 6, a: 1, bs: 4, s: 3, ap: 0, d: 1 }
        ],
        abilities: ['For the Greater Good', 'Markerlight'],
        keywords: ['T\'AU EMPIRE', 'INFANTRY']
    },
    { 
        id: 2, 
        name: 'Pathfinders', 
        points: 75, 
        models: 5,
        stats: { m: 6, t: 3, sv: 4, w: 1, ld: 7, oc: 1 },
        weapons: [
            { name: 'Pulse Carbine (included)', cost: 0, range: 18, a: 1, bs: 4, s: 5, ap: 0, d: 1 },
            { name: 'Pulse Rifle', cost: 3, range: 30, a: 1, bs: 4, s: 5, ap: 0, d: 1 },
            { name: 'Rail Carbine', cost: 8, range: 24, a: 1, bs: 4, s: 6, ap: -2, d: 1 },
            { name: 'Photon Grenades', cost: 0, range: 6, a: 1, bs: 4, s: 3, ap: 0, d: 1 }
        ],
        abilities: ['For the Greater Good', 'Recon Sweep', 'Devilfish'],
        keywords: ['T\'AU EMPIRE', 'INFANTRY']
    },
    { 
        id: 3, 
        name: 'Crisis Battlesuits', 
        points: 65, 
        models: 3,
        stats: { m: 8, t: 4, sv: 3, w: 2, ld: 7, oc: 1 },
        weapons: [
            { name: 'Burst Cannon (included)', cost: 0, range: 18, a: 3, bs: 4, s: 5, ap: 0, d: 1 },
            { name: 'Plasma Rifle', cost: 12, range: 24, a: 1, bs: 4, s: 7, ap: -3, d: 1 },
            { name: 'Missile Pod', cost: 10, range: 24, a: 2, bs: 4, s: 7, ap: -1, d: 2 },
            { name: 'Flamer', cost: 8, range: 12, a: 1, bs: 4, s: 4, ap: 0, d: 1 },
            { name: 'Fusion Blaster', cost: 15, range: 12, a: 1, bs: 4, s: 9, ap: -4, d: 2 },
            { name: 'Cyclic Ion Blaster', cost: 13, range: 24, a: 2, bs: 4, s: 6, ap: -1, d: 1 }
        ],
        abilities: ['For the Greater Good', 'Manta Strike', 'Multi-spectrum Sensor Suite'],
        keywords: ['T\'AU EMPIRE', 'BATTLESUIT', 'JETBIKE', 'FLY']
    },
    { 
        id: 4, 
        name: 'Stealth Suits', 
        points: 80, 
        models: 3,
        stats: { m: 8, t: 3, sv: 2, w: 2, ld: 7, oc: 1 },
        weapons: [
            { name: 'Burst Cannon (included)', cost: 0, range: 18, a: 3, bs: 4, s: 5, ap: 0, d: 1 },
            { name: 'Fusion Blaster', cost: 8, range: 12, a: 1, bs: 4, s: 9, ap: -4, d: 2 },
            { name: 'Plasma Rifle', cost: 10, range: 24, a: 1, bs: 4, s: 7, ap: -3, d: 1 },
            { name: 'Photon Grenades', cost: 0, range: 6, a: 1, bs: 4, s: 3, ap: 0, d: 1 }
        ],
        abilities: ['For the Greater Good', 'Stealth Field Generator', 'Homing Beacon'],
        keywords: ['T\'AU EMPIRE', 'BATTLESUIT', 'JETBIKE', 'FLY']
    },
    { 
        id: 5, 
        name: 'Broadsides', 
        points: 160, 
        models: 2,
        stats: { m: 6, t: 4, sv: 2, w: 3, ld: 7, oc: 2 },
        weapons: [
            { name: 'Rail Rifle (included)', cost: 0, range: 30, a: 1, bs: 4, s: 7, ap: -2, d: 2 },
            { name: 'Smart Missile System', cost: 12, range: 24, a: 2, bs: 4, s: 5, ap: 0, d: 1 },
            { name: 'Plasma Rifle', cost: 10, range: 24, a: 1, bs: 4, s: 7, ap: -3, d: 1 },
            { name: 'Fusion Blaster', cost: 14, range: 12, a: 1, bs: 4, s: 9, ap: -4, d: 2 }
        ],
        abilities: ['For the Greater Good', 'Stabilizing Anchors'],
        keywords: ['T\'AU EMPIRE', 'BATTLESUIT']
    },
    { 
        id: 6, 
        name: 'Riptide', 
        points: 195, 
        models: 1,
        stats: { m: 8, t: 6, sv: 2, w: 7, ld: 8, oc: 2 },
        weapons: [
            { name: 'Ion Accelerator (included)', cost: 0, range: 36, a: 2, bs: 4, s: 8, ap: -2, d: 3 },
            { name: 'Smart Missile System', cost: 15, range: 24, a: 2, bs: 4, s: 5, ap: 0, d: 1 },
            { name: 'Twin Plasma Rifle', cost: 25, range: 24, a: 2, bs: 4, s: 7, ap: -3, d: 1 },
            { name: 'Fusion Blaster', cost: 18, range: 12, a: 1, bs: 4, s: 9, ap: -4, d: 2 }
        ],
        abilities: ['For the Greater Good', 'Nova Reactor', 'Ion Accelerator Overcharge'],
        keywords: ['T\'AU EMPIRE', 'BATTLESUIT', 'MONSTER', 'FLY']
    },
    { 
        id: 7, 
        name: 'Ethereal', 
        points: 55, 
        models: 1,
        stats: { m: 6, t: 3, sv: 5, w: 2, ld: 10, oc: 1 },
        weapons: [
            { name: 'Honour Blade (included)', cost: 0, range: 0, a: 2, bs: 0, s: 4, ap: 0, d: 1 },
            { name: 'Pulse Pistol', cost: 0, range: 12, a: 1, bs: 4, s: 5, ap: 0, d: 1 },
            { name: 'Photon Grenades', cost: 0, range: 6, a: 1, bs: 4, s: 3, ap: 0, d: 1 }
        ],
        abilities: ['For the Greater Good', 'Wisdom of the Guides', 'Fail-Safe Detonator'],
        keywords: ['T\'AU EMPIRE', 'INFANTRY', 'CHARACTER']
    },
    { 
        id: 8, 
        name: 'Cadre Fireblade', 
        points: 50, 
        models: 1,
        stats: { m: 6, t: 3, sv: 4, w: 2, ld: 8, oc: 1 },
        weapons: [
            { name: 'Pulse Rifle (included)', cost: 0, range: 30, a: 1, bs: 4, s: 5, ap: 0, d: 1 },
            { name: 'Pulse Pistol', cost: 0, range: 12, a: 1, bs: 4, s: 5, ap: 0, d: 1 },
            { name: 'Photon Grenades', cost: 0, range: 6, a: 1, bs: 4, s: 3, ap: 0, d: 1 }
        ],
        abilities: ['For the Greater Good', 'Master of the Elements'],
        keywords: ['T\'AU EMPIRE', 'INFANTRY', 'CHARACTER']
    },
    { 
        id: 9, 
        name: 'Commander (Coldstar)', 
        points: 90, 
        models: 1,
        stats: { m: 10, t: 4, sv: 2, w: 4, ld: 9, oc: 1 },
        weapons: [
            { name: 'Fusion Blaster x2 (included)', cost: 0, range: 12, a: 1, bs: 4, s: 9, ap: -4, d: 2 },
            { name: 'Cyclic Ion Blaster', cost: 15, range: 24, a: 2, bs: 4, s: 6, ap: -1, d: 1 },
            { name: 'Missle Pod', cost: 12, range: 24, a: 2, bs: 4, s: 7, ap: -1, d: 2 },
            { name: 'Plasma Rifle', cost: 12, range: 24, a: 1, bs: 4, s: 7, ap: -3, d: 1 }
        ],
        abilities: ['For the Greater Good', 'Exemplar of the Mont\'ka', 'Precision of the Patient Hunter'],
        keywords: ['T\'AU EMPIRE', 'BATTLESUIT', 'CHARACTER', 'JETBIKE', 'FLY']
    },
    { 
        id: 10, 
        name: 'Hammerhead Gunship', 
        points: 140, 
        models: 1,
        stats: { m: 10, t: 6, sv: 2, w: 10, ld: 8, oc: 2 },
        weapons: [
            { name: 'Rail Gun (included)', cost: 0, range: 36, a: 1, bs: 4, s: 10, ap: -4, d: 3 },
            { name: 'Ion Cannon', cost: 20, range: 30, a: 2, bs: 4, s: 8, ap: -2, d: 3 },
            { name: 'Smart Missile System x2', cost: 18, range: 24, a: 2, bs: 4, s: 5, ap: 0, d: 1 },
            { name: 'Burst Cannon x2', cost: 12, range: 18, a: 3, bs: 4, s: 5, ap: 0, d: 1 }
        ],
        abilities: ['For the Greater Good', 'Hover Tank', 'Railgun'],
        keywords: ['T\'AU EMPIRE', 'VEHICLE', 'TANK']
    },
    { 
        id: 11, 
        name: 'Devilfish Transport', 
        points: 85, 
        models: 1,
        stats: { m: 12, t: 5, sv: 3, w: 8, ld: 8, oc: 1 },
        weapons: [
            { name: 'Pulse Cannon (included)', cost: 0, range: 24, a: 2, bs: 4, s: 6, ap: -1, d: 1 },
            { name: 'Smart Missile System x2', cost: 16, range: 24, a: 2, bs: 4, s: 5, ap: 0, d: 1 },
            { name: 'Burst Cannon x2', cost: 12, range: 18, a: 3, bs: 4, s: 5, ap: 0, d: 1 }
        ],
        abilities: ['For the Greater Good', 'Transport'],
        keywords: ['T\'AU EMPIRE', 'VEHICLE', 'TRANSPORT']
    },
    { 
        id: 12, 
        name: 'Gun Drones', 
        points: 30, 
        models: 2,
        stats: { m: 10, t: 3, sv: 4, w: 1, ld: 6, oc: 1 },
        weapons: [
            { name: 'Burst Cannon x2 (included)', cost: 0, range: 18, a: 3, bs: 4, s: 5, ap: 0, d: 1 },
            { name: 'Photon Grenades', cost: 0, range: 6, a: 1, bs: 4, s: 3, ap: 0, d: 1 }
        ],
        abilities: ['For the Greater Good', 'Shield Generator'],
        keywords: ['T\'AU EMPIRE', 'DRONE']
    },
    { 
        id: 13, 
        name: 'Kroot Carnivores', 
        points: 60, 
        models: 10,
        stats: { m: 7, t: 3, sv: 5, w: 1, ld: 6, oc: 1 },
        weapons: [
            { name: 'Kroot Rifle (included)', cost: 0, range: 22, a: 1, bs: 3, s: 4, ap: 0, d: 1 },
            { name: 'Kroot Pistol', cost: 2, range: 12, a: 1, bs: 3, s: 3, ap: 0, d: 1 },
            { name: 'Kroot Melee Weapon', cost: 0, range: 0, a: 2, bs: 0, s: 4, ap: 0, d: 1 }
        ],
        abilities: ['For the Greater Good', 'Stealthy', 'Krootox Rider'],
        keywords: ['T\'AU EMPIRE', 'INFANTRY']
    },
    { 
        id: 14, 
        name: 'Vespid Stingwings', 
        points: 70, 
        models: 5,
        stats: { m: 8, t: 3, sv: 5, w: 1, ld: 6, oc: 1 },
        weapons: [
            { name: 'Neutron Blaster (included)', cost: 0, range: 18, a: 2, bs: 4, s: 4, ap: 0, d: 1 },
            { name: 'Stinger', cost: 0, range: 0, a: 1, bs: 0, s: 4, ap: -1, d: 1 }
        ],
        abilities: ['For the Greater Good', 'Neurotoxin'],
        keywords: ['T\'AU EMPIRE', 'FLY', 'JETBIKE']
    },
    { 
        id: 15, 
        name: 'Skyray Gunship', 
        points: 130, 
        models: 1,
        stats: { m: 10, t: 6, sv: 2, w: 10, ld: 8, oc: 2 },
        weapons: [
            { name: 'Missile Pod Launcher (included)', cost: 0, range: 36, a: 4, bs: 4, s: 7, ap: -1, d: 2 },
            { name: 'Smart Missile System x2', cost: 15, range: 24, a: 2, bs: 4, s: 5, ap: 0, d: 1 },
            { name: 'Burst Cannon x2', cost: 10, range: 18, a: 3, bs: 4, s: 5, ap: 0, d: 1 }
        ],
        abilities: ['For the Greater Good', 'Markerlight', 'Seeker Missile'],
        keywords: ['T\'AU EMPIRE', 'VEHICLE', 'FLY']
    },
    { 
        id: 16, 
        name: 'Piranhas', 
        points: 55, 
        models: 2,
        stats: { m: 14, t: 4, sv: 4, w: 3, ld: 7, oc: 1 },
        weapons: [
            { name: 'Burst Cannon (included)', cost: 0, range: 18, a: 3, bs: 4, s: 5, ap: 0, d: 1 },
            { name: 'Fusion Blaster', cost: 12, range: 12, a: 1, bs: 4, s: 9, ap: -4, d: 2 },
            { name: 'Plasma Rifle', cost: 10, range: 24, a: 1, bs: 4, s: 7, ap: -3, d: 1 }
        ],
        abilities: ['For the Greater Good', 'Fast Attack'],
        keywords: ['T\'AU EMPIRE', 'VEHICLE', 'FAST']
    },
    { 
        id: 17, 
        name: 'Tiger Shark', 
        points: 240, 
        models: 1,
        stats: { m: 14, t: 7, sv: 2, w: 14, ld: 8, oc: 3 },
        weapons: [
            { name: 'Heavy Ion Cannon (included)', cost: 0, range: 36, a: 3, bs: 4, s: 9, ap: -3, d: 4 },
            { name: 'Missile Pod Launcher', cost: 20, range: 36, a: 4, bs: 4, s: 7, ap: -1, d: 2 },
            { name: 'Smart Missile System x2', cost: 18, range: 24, a: 2, bs: 4, s: 5, ap: 0, d: 1 },
            { name: 'Burst Cannon x4', cost: 20, range: 18, a: 3, bs: 4, s: 5, ap: 0, d: 1 }
        ],
        abilities: ['For the Greater Good', 'Supersonic', 'Heavy Ion Cannon'],
        keywords: ['T\'AU EMPIRE', 'VEHICLE', 'AIRCRAFT', 'FLY']
    },
    { 
        id: 18, 
        name: 'Darkstrider', 
        points: 45, 
        models: 1,
        stats: { m: 6, t: 3, sv: 4, w: 2, ld: 8, oc: 1 },
        weapons: [
            { name: 'Pulse Rifle (included)', cost: 0, range: 30, a: 1, bs: 4, s: 5, ap: 0, d: 1 },
            { name: 'Pulse Pistol', cost: 0, range: 12, a: 1, bs: 4, s: 5, ap: 0, d: 1 },
            { name: 'Markerlight', cost: 0, range: 36, a: 1, bs: 4, s: 0, ap: 0, d: 0 }
        ],
        abilities: ['For the Greater Good', 'Longshot', 'Pulse Accelerator'],
        keywords: ['T\'AU EMPIRE', 'INFANTRY', 'CHARACTER']
    },
    { 
        id: 19, 
        name: 'Ghostkeel Battlesuit', 
        points: 125, 
        models: 1,
        stats: { m: 8, t: 5, sv: 2, w: 7, ld: 8, oc: 2 },
        weapons: [
            { name: 'Fusion Collider (included)', cost: 0, range: 18, a: 2, bs: 4, s: 9, ap: -4, d: 3 },
            { name: 'Cyclic Ion Raker', cost: 15, range: 24, a: 3, bs: 4, s: 6, ap: -1, d: 1 },
            { name: 'Flamer', cost: 8, range: 12, a: 1, bs: 4, s: 4, ap: 0, d: 1 },
            { name: 'Burst Cannon', cost: 10, range: 18, a: 3, bs: 4, s: 5, ap: 0, d: 1 },
            { name: 'Photon Grenades', cost: 0, range: 6, a: 1, bs: 4, s: 3, ap: 0, d: 1 }
        ],
        abilities: ['For the Greater Good', 'Stealth Field Generator', 'Fusion Collider', 'Includes 2 Stealth Drones'],
        keywords: ['T\'AU EMPIRE', 'BATTLESUIT', 'JETBIKE', 'FLY', 'GHOSTKEEL']
    }
]
};

// State management
let currentFaction = null;
let armyList = [];
let selectedArmySide = 'player';

// DOM elements
const factionSelect = document.getElementById('factionSelect');
const unitsList = document.getElementById('unitsList');
const armyListDiv = document.getElementById('armyList');
const enemyArmyListDiv = document.getElementById('enemyArmyList');
const totalPointsSpan = document.getElementById('totalPoints');
const unitCountSpan = document.getElementById('unitCount');
const modelCountSpan = document.getElementById('modelCount');
const enemyTotalPointsSpan = document.getElementById('enemyTotalPoints');
const enemyUnitCountSpan = document.getElementById('enemyUnitCount');
const enemyModelCountSpan = document.getElementById('enemyModelCount');
const exportBtn = document.getElementById('exportBtn');
const clearBtn = document.getElementById('clearBtn');
const rollBtn = document.getElementById('rollBtn');
const diceCountInput = document.getElementById('diceCount');
const diceSidesSelect = document.getElementById('diceSides');
const rollResultsDiv = document.getElementById('rollResults');
const unitSideInputs = document.querySelectorAll('input[name="unitSide"]');

// Event listeners
factionSelect.addEventListener('change', handleFactionChange);
exportBtn.addEventListener('click', exportList);
clearBtn.addEventListener('click', clearList);
rollBtn.addEventListener('click', rollDice);
unitSideInputs.forEach(input => input.addEventListener('change', (e) => {
    selectedArmySide = e.target.value;
}));

function handleFactionChange(e) {
    currentFaction = e.target.value;
    updateUI();
}

function getUnitOwner(unit) {
    return unit.owner === 'enemy' ? 'enemy' : 'player';
}

function displayUnits() {
    unitsList.innerHTML = '';
    
    if (!currentFaction) {
        unitsList.innerHTML = '<p class="placeholder">Select a faction to view units</p>';
        return;
    }

    const units = unitDatabase[currentFaction];
    units.forEach(unit => {
        const statsStr = `M${unit.stats.m}" T${unit.stats.t} Sv${unit.stats.sv}+ W${unit.stats.w} Ld${unit.stats.ld} OC${unit.stats.oc}`;
        const unitCard = document.createElement('div');
        unitCard.className = 'unit-card';
        unitCard.innerHTML = `
            <div class="unit-info">
                <h3>${unit.name}</h3>
                <p class="stats">${statsStr}</p>
                <p class="points">${unit.points}pts | ${unit.models}M</p>
                <p class="weapons" style="font-size: 0.75em; color: #4ecdc4; margin-top: 4px;">
                    ${unit.weapons.map(w => `${w.name}`).join(', ')}
                </p>
            </div>
            <button class="btn btn-add" data-unit-id="${unit.id}">Add</button>
        `;
        
        const addBtn = unitCard.querySelector('.btn-add');
        addBtn.addEventListener('click', () => addUnitToArmy(unit));
        
        unitsList.appendChild(unitCard);
    });
}

function addUnitToArmy(unit) {
    const existingUnit = armyList.find(u => u.id === unit.id && u.faction === currentFaction && getUnitOwner(u) === selectedArmySide);
    
    if (existingUnit) {
        existingUnit.count++;
    } else {
        armyList.push({
            ...unit,
            faction: currentFaction,
            owner: selectedArmySide,
            count: 1,
            selectedWeapon: unit.weapons ? unit.weapons[0] : null
        });
    }
    
    updateUI();
}

function removeUnitFromArmy(unitId) {
    armyList = armyList.filter(u => u.id !== unitId);
    updateUI();
}

function decrementUnit(unitId) {
    const unit = armyList.find(u => u.id === unitId);
    if (unit && unit.count > 1) {
        unit.count--;
    } else {
        removeUnitFromArmy(unitId);
    }
    updateUI();
}

function displayArmyList() {
    const playerUnits = armyList.filter(u => getUnitOwner(u) === 'player');
    const enemyUnits = armyList.filter(u => getUnitOwner(u) === 'enemy');

    if (playerUnits.length === 0) {
        armyListDiv.innerHTML = '<p class="empty-message">No units selected yet</p>';
    } else {
        armyListDiv.innerHTML = '';
        playerUnits.forEach(unit => {
            const index = armyList.indexOf(unit);
            const unitBaseTotal = unit.customPoints !== undefined ? unit.customPoints * unit.count : unit.points * unit.count;
            const totalUnitPoints = unitBaseTotal;
            const totalModels = unit.models * unit.count;
            
            const statsStr = `M${unit.stats.m}" T${unit.stats.t} Sv${unit.stats.sv}+ W${unit.stats.w} Ld${unit.stats.ld} OC${unit.stats.oc}`;
            
            const armyItem = document.createElement('div');
            armyItem.className = 'army-item';
            armyItem.id = `unit-${index}`;
            armyItem.innerHTML = `
                <div class="item-header">
                    <h4>${unit.name}</h4>
                    <span class="item-count">x${unit.count}</span>
                </div>
                <div class="item-stats">
                    <span class="stat-line">${statsStr}</span>
                </div>
                <div class="item-weapons">
                    <strong style="color: #4ecdc4; font-size: 0.85em;">Weapon:</strong>
                    <div class="weapon-options" id="weapons-${index}">
                        ${unit.weapons.map((weapon, idx) => `
                            <button class="weapon-btn ${unit.selectedWeapon === weapon ? 'active' : ''}" 
                                    onclick="changeWeapon(${index}, ${idx})">
                                ${weapon.name} - ${weapon.range ? `R${weapon.range}" A${weapon.a} S${weapon.s} AP${weapon.ap} D${weapon.d}` : 'Melee'}
                            </button>
                        `).join('')}
                    </div>
                </div>
                ${unit.abilities ? `
                <div class="item-abilities">
                    <strong style="color: #ff8c00; font-size: 0.85em;">Abilities:</strong>
                    <div class="ability-list">
                        ${unit.abilities.map(ability => `<span class="ability-tag" onclick="showAbilityTooltip('${ability}', event)">${ability}</span>`).join('')}
                    </div>
                </div>
                ` : ''}
                ${unit.keywords ? `
                <div class="item-keywords">
                    <strong style="color: #4ecdc4; font-size: 0.85em;">Keywords:</strong>
                    <div class="keyword-list">
                        ${unit.keywords.map(keyword => `<span class="keyword-tag">${keyword}</span>`).join('')}
                    </div>
                </div>
                ` : ''}
                <div class="item-details">
                    <span class="pts-per-model">${unit.customPoints !== undefined ? unit.customPoints : unit.points}pts/model</span>
                    <span>${totalModels} models</span>
                </div>
                <div class="item-total">
                    <strong>${totalUnitPoints}pts</strong>
                </div>
                <div class="item-controls">
                    <button class="btn btn-sm" onclick="decrementUnitAtIndex(${index})">−</button>
                    <button class="btn btn-sm" onclick="incrementUnitAtIndex(${index})">+</button>
                    <button class="btn btn-sm btn-edit" onclick="editUnit(${index})">Edit</button>
                    <button class="btn btn-sm btn-remove" onclick="removeUnitAtIndex(${index})">Remove</button>
                </div>
            `;
            
            armyListDiv.appendChild(armyItem);
        });
    }

    if (enemyUnits.length === 0) {
        enemyArmyListDiv.innerHTML = '<p class="empty-message">No opponent units selected yet</p>';
    } else {
        enemyArmyListDiv.innerHTML = '';
        enemyUnits.forEach(unit => {
            const index = armyList.indexOf(unit);
            const unitBaseTotal = unit.customPoints !== undefined ? unit.customPoints * unit.count : unit.points * unit.count;
            const totalUnitPoints = unitBaseTotal;
            const totalModels = unit.models * unit.count;
            
            const statsStr = `M${unit.stats.m}" T${unit.stats.t} Sv${unit.stats.sv}+ W${unit.stats.w} Ld${unit.stats.ld} OC${unit.stats.oc}`;
            
            const armyItem = document.createElement('div');
            armyItem.className = 'army-item';
            armyItem.id = `unit-${index}`;
            armyItem.innerHTML = `
                <div class="item-header">
                    <h4>${unit.name}</h4>
                    <span class="item-count">x${unit.count}</span>
                </div>
                <div class="item-stats">
                    <span class="stat-line">${statsStr}</span>
                </div>
                <div class="item-weapons">
                    <strong style="color: #4ecdc4; font-size: 0.85em;">Weapon:</strong>
                    <div class="weapon-options" id="weapons-${index}">
                        ${unit.weapons.map((weapon, idx) => `
                            <button class="weapon-btn ${unit.selectedWeapon === weapon ? 'active' : ''}" 
                                    onclick="changeWeapon(${index}, ${idx})">
                                ${weapon.name} - ${weapon.range ? `R${weapon.range}" A${weapon.a} S${weapon.s} AP${weapon.ap} D${weapon.d}` : 'Melee'}
                            </button>
                        `).join('')}
                    </div>
                </div>
                ${unit.abilities ? `
                <div class="item-abilities">
                    <strong style="color: #ff8c00; font-size: 0.85em;">Abilities:</strong>
                    <div class="ability-list">
                        ${unit.abilities.map(ability => `<span class="ability-tag" onclick="showAbilityTooltip('${ability}', event)">${ability}</span>`).join('')}
                    </div>
                </div>
                ` : ''}
                ${unit.keywords ? `
                <div class="item-keywords">
                    <strong style="color: #4ecdc4; font-size: 0.85em;">Keywords:</strong>
                    <div class="keyword-list">
                        ${unit.keywords.map(keyword => `<span class="keyword-tag">${keyword}</span>`).join('')}
                    </div>
                </div>
                ` : ''}
                <div class="item-details">
                    <span class="pts-per-model">${unit.customPoints !== undefined ? unit.customPoints : unit.points}pts/model</span>
                    <span>${totalModels} models</span>
                </div>
                <div class="item-total">
                    <strong>${totalUnitPoints}pts</strong>
                </div>
                <div class="item-controls">
                    <button class="btn btn-sm" onclick="decrementUnitAtIndex(${index})">−</button>
                    <button class="btn btn-sm" onclick="incrementUnitAtIndex(${index})">+</button>
                    <button class="btn btn-sm btn-edit" onclick="editUnit(${index})">Edit</button>
                    <button class="btn btn-sm btn-remove" onclick="removeUnitAtIndex(${index})">Remove</button>
                </div>
            `;
            
            enemyArmyListDiv.appendChild(armyItem);
        });
    }
}

// Ability tooltip functionality
function showAbilityTooltip(abilityName, event) {
    // Remove any existing tooltip
    const existingTooltip = document.querySelector('.ability-tooltip');
    if (existingTooltip) {
        existingTooltip.remove();
    }

    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.className = 'ability-tooltip';
    tooltip.innerHTML = `
        <div class="tooltip-header">${abilityName}</div>
        <div class="tooltip-content">${abilityDatabase[abilityName] || 'Description not available'}</div>
    `;

    // Position tooltip
    const rect = event.target.getBoundingClientRect();
    tooltip.style.left = `${rect.left + window.scrollX}px`;
    tooltip.style.top = `${rect.bottom + window.scrollY + 5}px`;

    // Add to document
    document.body.appendChild(tooltip);

    // Add click outside to close
    setTimeout(() => {
        document.addEventListener('click', function closeTooltip(e) {
            if (!tooltip.contains(e.target)) {
                tooltip.remove();
                document.removeEventListener('click', closeTooltip);
            }
        });
    }, 10);
}

function editUnit(index) {
    const unit = armyList[index];
    const currentPoints = unit.customPoints !== undefined ? unit.customPoints : unit.points;
    
    const unitDiv = document.getElementById(`unit-${index}`);
    
    // Create detailed edit interface
    let editHTML = `
        <div class="edit-panel">
            <div class="edit-section">
                <h5>Points & Stats</h5>
                <div class="edit-row">
                    <label>Points/Model:</label>
                    <input type="number" id="edit-points-${index}" value="${currentPoints}" min="0">
                </div>
                <div class="edit-stats">
                    <div class="stat-input">
                        <label>M:</label>
                        <input type="number" id="edit-m-${index}" value="${unit.stats.m}" min="0" max="20">
                    </div>
                    <div class="stat-input">
                        <label>T:</label>
                        <input type="number" id="edit-t-${index}" value="${unit.stats.t}" min="1" max="10">
                    </div>
                    <div class="stat-input">
                        <label>Sv:</label>
                        <input type="number" id="edit-sv-${index}" value="${unit.stats.sv}" min="1" max="6">
                    </div>
                    <div class="stat-input">
                        <label>W:</label>
                        <input type="number" id="edit-w-${index}" value="${unit.stats.w}" min="1" max="30">
                    </div>
                    <div class="stat-input">
                        <label>Ld:</label>
                        <input type="number" id="edit-ld-${index}" value="${unit.stats.ld}" min="1" max="10">
                    </div>
                    <div class="stat-input">
                        <label>OC:</label>
                        <input type="number" id="edit-oc-${index}" value="${unit.stats.oc}" min="0" max="10">
                    </div>
                </div>
            </div>
            
            <div class="edit-section">
                <h5>Weapons</h5>
                <div id="weapons-edit-${index}" class="weapons-edit">
                    ${unit.weapons.map((weapon, wIdx) => `
                        <div class="weapon-edit-row">
                            <input type="text" class="weapon-name" value="${weapon.name}" placeholder="Weapon name" style="flex: 1;">
                            <input type="number" class="weapon-stat" value="${weapon.cost}" placeholder="Cost" style="width: 50px;" data-stat="cost">
                            <input type="number" class="weapon-stat" value="${weapon.range || 0}" placeholder="R" style="width: 35px;" data-stat="range">
                            <input type="number" class="weapon-stat" value="${weapon.a || 0}" placeholder="A" style="width: 35px;" data-stat="a">
                            <input type="number" class="weapon-stat" value="${weapon.bs || 0}" placeholder="BS" style="width: 35px;" data-stat="bs">
                            <input type="number" class="weapon-stat" value="${weapon.s || 0}" placeholder="S" style="width: 35px;" data-stat="s">
                            <input type="number" class="weapon-stat" value="${weapon.ap || 0}" placeholder="AP" style="width: 40px;" data-stat="ap">
                            <input type="number" class="weapon-stat" value="${weapon.d || 0}" placeholder="D" style="width: 35px;" data-stat="d">
                            <button class="btn btn-sm btn-remove" onclick="removeWeapon(${index}, ${wIdx})">Remove</button>
                        </div>
                    `).join('')}
                </div>
                <button class="btn btn-sm" onclick="addWeapon(${index})">+ Add Weapon</button>
            </div>
            
            <div class="edit-actions">
                <button class="btn btn-save" onclick="saveUnitEdit(${index})">Save Changes</button>
                <button class="btn btn-cancel" onclick="cancelUnitEdit(${index})">Cancel</button>
            </div>
        </div>
    `;
    
    unitDiv.innerHTML = editHTML;
}

function addWeapon(index) {
    const weaponsDiv = document.getElementById(`weapons-edit-${index}`);
    const weaponRow = document.createElement('div');
    weaponRow.className = 'weapon-edit-row';
    weaponRow.innerHTML = `
        <input type="text" class="weapon-name" placeholder="Weapon name" style="flex: 1;">
        <input type="number" class="weapon-stat" value="0" placeholder="Cost" style="width: 50px;" data-stat="cost">
        <input type="number" class="weapon-stat" value="0" placeholder="R" style="width: 35px;" data-stat="range">
        <input type="number" class="weapon-stat" value="1" placeholder="A" style="width: 35px;" data-stat="a">
        <input type="number" class="weapon-stat" value="4" placeholder="BS" style="width: 35px;" data-stat="bs">
        <input type="number" class="weapon-stat" value="4" placeholder="S" style="width: 35px;" data-stat="s">
        <input type="number" class="weapon-stat" value="0" placeholder="AP" style="width: 40px;" data-stat="ap">
        <input type="number" class="weapon-stat" value="1" placeholder="D" style="width: 35px;" data-stat="d">
        <button class="btn btn-sm btn-remove" onclick="this.parentElement.remove()">Remove</button>
    `;
    weaponsDiv.appendChild(weaponRow);
}

function removeWeapon(index, weaponIndex) {
    // Mark for removal
    const rows = document.querySelectorAll(`#weapons-edit-${index} .weapon-edit-row`);
    if (rows[weaponIndex]) {
        rows[weaponIndex].style.display = 'none';
        rows[weaponIndex].dataset.removed = 'true';
    }
}

function saveUnitEdit(index) {
    const unit = armyList[index];
    
    // Save points
    const newPoints = parseInt(document.getElementById(`edit-points-${index}`).value);
    if (newPoints < 0) {
        alert('Points cannot be negative!');
        return;
    }
    unit.customPoints = newPoints;
    
    // Save stats
    const m = parseInt(document.getElementById(`edit-m-${index}`).value);
    const t = parseInt(document.getElementById(`edit-t-${index}`).value);
    const sv = parseInt(document.getElementById(`edit-sv-${index}`).value);
    const w = parseInt(document.getElementById(`edit-w-${index}`).value);
    const ld = parseInt(document.getElementById(`edit-ld-${index}`).value);
    const oc = parseInt(document.getElementById(`edit-oc-${index}`).value);
    
    unit.stats = { m, t, sv, w, ld, oc };
    
    // Save weapons
    const weaponRows = document.querySelectorAll(`#weapons-edit-${index} .weapon-edit-row`);
    const weapons = [];
    
    weaponRows.forEach(row => {
        if (!row.dataset.removed) {
            const name = row.querySelector('.weapon-name').value;
            const cost = parseInt(row.querySelector('.weapon-stat[data-stat="cost"]').value) || 0;
            const range = parseInt(row.querySelector('.weapon-stat[data-stat="range"]').value) || 0;
            const a = parseInt(row.querySelector('.weapon-stat[data-stat="a"]').value) || 1;
            const bs = parseInt(row.querySelector('.weapon-stat[data-stat="bs"]').value) || 4;
            const s = parseInt(row.querySelector('.weapon-stat[data-stat="s"]').value) || 3;
            const ap = parseInt(row.querySelector('.weapon-stat[data-stat="ap"]').value) || 0;
            const d = parseInt(row.querySelector('.weapon-stat[data-stat="d"]').value) || 1;
            
            if (name) {
                weapons.push({ name, cost, range, a, bs, s, ap, d });
            }
        }
    });
    
    if (weapons.length === 0) {
        alert('Every unit must have at least one weapon!');
        return;
    }
    
    // Update weapons and reset selected weapon to first one
    unit.weapons = weapons;
    unit.selectedWeapon = weapons[0];
    
    updateUI();
}

function cancelUnitEdit(index) {
    updateUI();
}

function changeWeapon(unitIndex, weaponIndex) {
    armyList[unitIndex].selectedWeapon = armyList[unitIndex].weapons[weaponIndex];
    updateStats();
    displayArmyList();
}

function incrementUnitAtIndex(index) {
    armyList[index].count++;
    updateUI();
}

function decrementUnitAtIndex(index) {
    if (armyList[index].count > 1) {
        armyList[index].count--;
    } else {
        removeUnitAtIndex(index);
    }
    updateUI();
}

function removeUnitAtIndex(index) {
    armyList.splice(index, 1);
    updateUI();
}

function updateUI() {
    displayUnits();
    displayArmyList();
    updateStats();
}

function updateStats() {
    const playerUnits = armyList.filter(u => getUnitOwner(u) === 'player');
    const enemyUnits = armyList.filter(u => getUnitOwner(u) === 'enemy');

    const playerPoints = playerUnits.reduce((sum, unit) => {
        const unitPoints = unit.customPoints !== undefined ? unit.customPoints : unit.points;
        const unitTotal = unitPoints * unit.count;
        return sum + unitTotal;
    }, 0);
    const playerUnitCount = playerUnits.reduce((sum, unit) => sum + unit.count, 0);
    const playerModelCount = playerUnits.reduce((sum, unit) => sum + (unit.models * unit.count), 0);

    const enemyPoints = enemyUnits.reduce((sum, unit) => {
        const unitPoints = unit.customPoints !== undefined ? unit.customPoints : unit.points;
        const unitTotal = unitPoints * unit.count;
        return sum + unitTotal;
    }, 0);
    const enemyUnitCount = enemyUnits.reduce((sum, unit) => sum + unit.count, 0);
    const enemyModelCount = enemyUnits.reduce((sum, unit) => sum + (unit.models * unit.count), 0);
    
    totalPointsSpan.textContent = playerPoints;
    unitCountSpan.textContent = playerUnitCount;
    modelCountSpan.textContent = playerModelCount;
    enemyTotalPointsSpan.textContent = enemyPoints;
    enemyUnitCountSpan.textContent = enemyUnitCount;
    enemyModelCountSpan.textContent = enemyModelCount;
}

function exportList() {
    if (armyList.length === 0) {
        alert('Your army list is empty!');
        return;
    }

    const factionName = factionSelect.options[factionSelect.selectedIndex].text;
    const totalPoints = armyList.reduce((sum, unit) => {
        const unitPoints = unit.customPoints !== undefined ? unit.customPoints : unit.points;
        const unitTotal = unitPoints * unit.count;
        return sum + unitTotal;
    }, 0);
    
    let exportText = `WARHAMMER 40K ARMY LIST\n`;
    exportText += `Faction: ${factionName}\n`;
    exportText += `=`.repeat(50) + `\n\n`;
    
    armyList.forEach(unit => {
        const unitPoints = unit.customPoints !== undefined ? unit.customPoints : unit.points;
        const unitBaseTotal = unitPoints * unit.count;
        const totalUnitPoints = unitBaseTotal;
        const statsStr = `M${unit.stats.m}" T${unit.stats.t} Sv${unit.stats.sv}+ W${unit.stats.w} Ld${unit.stats.ld} OC${unit.stats.oc}`;
        
        exportText += `${unit.name} x${unit.count}\n`;
        exportText += `  Stats: ${statsStr}\n`;
        exportText += `  Weapon: ${unit.selectedWeapon.name} (selected)\n`;
        exportText += `  Points: ${unitPoints}pts x${unit.count} = ${unitBaseTotal}pts = ${totalUnitPoints}pts total\n`;
        exportText += `  Models: ${unit.models * unit.count}\n`;
        if (unit.customPoints !== undefined) {
            exportText += `  [CUSTOM POINTS APPLIED]\n`;
        }
        exportText += `\n`;
    });
    
    exportText += `=`.repeat(50) + `\n`;
    exportText += `TOTAL POINTS: ${totalPoints}\n`;
    
    // Copy to clipboard
    navigator.clipboard.writeText(exportText).then(() => {
        alert('List copied to clipboard!');
    }).catch(() => {
        // Fallback: prompt user to copy
        const textarea = document.createElement('textarea');
        textarea.value = exportText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
        alert('List copied to clipboard!');
    });
}

function clearList() {
    if (armyList.length === 0) {
        alert('Army list is already empty!');
        return;
    }
    
    if (confirm('Are you sure you want to clear your entire army list?')) {
        armyList = [];
        updateUI();
    }
}

function rollDice() {
    const numDice = parseInt(diceCountInput.value);
    const diceSize = parseInt(diceSidesSelect.value);
    
    if (numDice < 1 || numDice > 50) {
        alert('Please enter a number between 1 and 50');
        return;
    }

    const rolls = [];
    let total = 0;

    for (let i = 0; i < numDice; i++) {
        const roll = Math.floor(Math.random() * diceSize) + 1;
        rolls.push(roll);
        total += roll;
    }

    displayRollResults(rolls, total, diceSize);
}

function displayRollResults(rolls, total, diceSize) {
    const sortedRolls = [...rolls].sort((a, b) => b - a);
    
    rollResultsDiv.innerHTML = `
        <div class="roll-result-header">
            <span class="roll-dice-type">${rolls.length}d${diceSize}</span>
            <span class="roll-total">Total: <strong>${total}</strong></span>
        </div>
        <div class="roll-list">
            ${sortedRolls.map((roll, i) => {
                let className = 'roll-item';
                if (diceSize === 6) {
                    if (roll === 6) className += ' roll-critical';
                    if (roll === 1) className += ' roll-fail';
                }
                return `<span class="${className}">${roll}</span>`;
            }).join('')}
        </div>
        <div class="roll-average">Average: ${(total / rolls.length).toFixed(2)}</div>
    `;
}

// Initialize UI
updateUI();

// Battlefield functionality
let battlefieldGrid = [];
let battlefieldSize = { width: 6, height: 6 };
let terrainDensity = 'medium';
let objectiveCountValue = 3;
let addTerrainMode = false;
let addObjectiveMode = false;
let draggedTerrain = null;
let activeMission = null;
let turnNumber = 0;
let currentSecondaryObjectives = [];

const missionDatabase = [
    {
        title: 'Capture and Control',
        description: 'Control at least three objectives by the end of turn 6. Hold ground and deny the enemy key positions.'
    },
    {
        title: 'Annihilation',
        description: 'Destroy at least 60% of the enemy army points. Focus on heavy targets and priority threats.'
    },
    {
        title: 'Linebreaker',
        description: 'Have a unit in the enemy deployment zone when the battle ends. Push forward aggressively and keep pressure on their rear lines.'
    },
    {
        title: 'Relic Recovery',
        description: 'Secure the relic and keep it controlled for two full turns. Use fast units to grab it and durable units to hold it.'
    },
    {
        title: 'Assassinate the Leader',
        description: 'Eliminate the enemy CHARACTER with the highest point value. Prioritize anti-character weapons and precision strikes.'
    },
    {
        title: 'Hold the Line',
        description: 'Defend your deployment zone and prevent enemy units from crossing into it for three turns.'
    },
    {
        title: 'Sabotage',
        description: 'Destroy two enemy terrain pieces or objective markers. Use ranged firepower and mobility to reach deep targets.'
    },
    {
        title: 'Recon Sweep',
        description: 'Reveal and control the most objectives during the game. Keep your fast units alive while moving them between objectives.'
    },
    {
        title: 'Shield Wall',
        description: 'Keep at least four units within 6" of one objective for two full turns to hold the line.'
    },
    {
        title: 'Flank and Disrupt',
        description: 'Use fast units to threaten enemy flank objectives while your main force holds the center.'
    }
];

const secondaryObjectiveDatabase = [
    {
        title: 'Kill an Enemy Character',
        description: 'Destroy an enemy CHARACTER unit during this turn.',
        points: 1
    },
    {
        title: 'Hold the Flank',
        description: 'Keep one unit within 6" of a battlefield edge objective for the turn.',
        points: 1
    },
    {
        title: 'Secure a Forward Objective',
        description: 'Control one objective marker in the enemy half at the end of the turn.',
        points: 2
    },
    {
        title: 'Deny an Objective',
        description: 'Prevent the enemy from controlling one objective you targeted this turn.',
        points: 1
    },
    {
        title: 'Destroy a Vehicle',
        description: 'Destroy one enemy vehicle or monster unit.',
        points: 2
    },
    {
        title: 'Keep a Unit Alive',
        description: 'Ensure one of your squads survives the turn without losing more than half of its models.',
        points: 1
    },
    {
        title: 'Push the Center',
        description: 'Move one unit into the center objective area and keep it there through the end of the turn.',
        points: 1
    },
    {
        title: 'Hold the Line',
        description: 'Keep a screening unit within 6" of your deployment zone boundary.',
        points: 1
    },
    {
        title: 'Harass Enemy Lines',
        description: 'Do at least one point of damage to two different enemy units.',
        points: 1
    },
    {
        title: 'Recover the Relic',
        description: 'Move a unit into range of the relic objective and keep it there for the turn.',
        points: 2
    }
];

// DOM elements for battlefield
const battlefieldGridDiv = document.getElementById('battlefieldGrid');
const battlefieldSizeSelect = document.getElementById('battlefieldSize');
const terrainDensitySelect = document.getElementById('terrainDensity');
const objectiveCountInput = document.getElementById('objectiveCount');
const generateBattlefieldBtn = document.getElementById('generateBattlefield');
const clearBattlefieldBtn = document.getElementById('clearBattlefield');
const addTerrainBtn = document.getElementById('addTerrain');
const addObjectiveBtn = document.getElementById('addObjective');
const clearTerrainBtn = document.getElementById('clearTerrain');
const playerDeploymentDiv = document.getElementById('playerDeployment');
const enemyDeploymentDiv = document.getElementById('enemyDeployment');
const strategyNotesTextarea = document.getElementById('strategyNotes');
const saveStrategyBtn = document.getElementById('saveStrategy');
const loadStrategyBtn = document.getElementById('loadStrategy');
const randomMissionBtn = document.getElementById('randomMissionBtn');
const nextTurnBtn = document.getElementById('nextTurnBtn');
const turnNumberSpan = document.getElementById('turnNumber');
const missionOutputDiv = document.getElementById('missionOutput');
const secondaryObjectivesOutputDiv = document.getElementById('secondaryObjectivesOutput');

// Event listeners for battlefield
generateBattlefieldBtn.addEventListener('click', generateBattlefield);
clearBattlefieldBtn.addEventListener('click', clearBattlefieldUnits);
addTerrainBtn.addEventListener('click', () => {
    addTerrainMode = !addTerrainMode;
    addObjectiveMode = false; // Turn off objective mode
    updateTerrainButtonStates();
});
addObjectiveBtn.addEventListener('click', () => {
    addObjectiveMode = !addObjectiveMode;
    addTerrainMode = false; // Turn off terrain mode
    updateTerrainButtonStates();
});
clearTerrainBtn.addEventListener('click', clearAllTerrain);
battlefieldSizeSelect.addEventListener('change', () => {
    battlefieldSize = getBattlefieldSize(battlefieldSizeSelect.value);
    generateBattlefield();
});
terrainDensitySelect.addEventListener('change', () => {
    terrainDensity = terrainDensitySelect.value;
    generateBattlefield();
});
objectiveCountInput.addEventListener('input', () => {
    objectiveCountValue = parseInt(objectiveCountInput.value) || 0;
    generateBattlefield();
});
saveStrategyBtn.addEventListener('click', saveStrategy);
loadStrategyBtn.addEventListener('click', loadStrategy);
randomMissionBtn.addEventListener('click', generateRandomMission);
nextTurnBtn.addEventListener('click', advanceTurn);

function getRandomMission() {
    return missionDatabase[Math.floor(Math.random() * missionDatabase.length)];
}

function setMissionOutput(mission) {
    if (!mission) {
        missionOutputDiv.innerHTML = '<p class="mission-placeholder">Generate a random mission to guide your game plan.</p>';
        return;
    }

    missionOutputDiv.innerHTML = `
        <div class="mission-title">${mission.title}</div>
        <div class="mission-description">${mission.description}</div>
    `;
}

function getRandomSecondaryObjectives(count = 2) {
    const shuffled = secondaryObjectiveDatabase
        .map(obj => ({ ...obj }))
        .sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

function setSecondaryObjectivesOutput() {
    if (!currentSecondaryObjectives.length) {
        secondaryObjectivesOutputDiv.innerHTML = '<p class="mission-placeholder">Press Next Turn to generate 2 secondary objectives.</p>';
        return;
    }

    secondaryObjectivesOutputDiv.innerHTML = currentSecondaryObjectives.map(obj => `
        <div class="secondary-objective-item">
            <div class="secondary-objective-title">${obj.title}</div>
            <div class="secondary-objective-points">${obj.points} VP</div>
            <div class="secondary-objective-description">${obj.description}</div>
        </div>
    `).join('');
}

function setTurnCounter() {
    turnNumberSpan.textContent = turnNumber;
}

function advanceTurn() {
    turnNumber += 1;
    currentSecondaryObjectives = getRandomSecondaryObjectives(2);
    setTurnCounter();
    setSecondaryObjectivesOutput();
}

function generateRandomMission() {
    activeMission = getRandomMission();
    setMissionOutput(activeMission);
}

// Initialize battlefield
function initBattlefield() {
    battlefieldSize = getBattlefieldSize(battlefieldSizeSelect.value);
    terrainDensity = terrainDensitySelect.value;
    objectiveCountValue = parseInt(objectiveCountInput.value) || 3;
    generateBattlefield();
    generateRandomMission();
    setTurnCounter();
    setSecondaryObjectivesOutput();
    updateDeploymentZones();
}

function getBattlefieldSize(sizeValue) {
    switch (sizeValue) {
        case 'small': return { width: 4, height: 4 };
        case 'medium': return { width: 6, height: 6 };
        case 'large': return { width: 8, height: 8 };
        case '22inch': return { width: 7, height: 7 };
        case '30inch': return { width: 10, height: 10 };
        case '22x30': return { width: 11, height: 15 };
        default: return { width: 6, height: 6 };
    }
}

function generateBattlefield() {
    // Reset modes
    addTerrainMode = false;
    addObjectiveMode = false;
    updateTerrainButtonStates();

    battlefieldGrid = [];
    battlefieldGridDiv.innerHTML = '';
    battlefieldGridDiv.style.gridTemplateColumns = `repeat(${battlefieldSize.width}, 1fr)`;
    battlefieldGridDiv.style.gridTemplateRows = `repeat(${battlefieldSize.height}, 1fr)`;

    // Calculate terrain density
    let terrainCount = 0;
    let objectiveCount = 0;

    switch (terrainDensity) {
        case 'low':
            terrainCount = Math.floor(battlefieldSize.width * battlefieldSize.height * 0.1);
            break;
        case 'medium':
            terrainCount = Math.floor(battlefieldSize.width * battlefieldSize.height * 0.15);
            break;
        case 'high':
            terrainCount = Math.floor(battlefieldSize.width * battlefieldSize.height * 0.25);
            break;
    }

    objectiveCount = objectiveCountValue;

    // Create grid cells
    for (let row = 0; row < battlefieldSize.height; row++) {
        battlefieldGrid[row] = [];
        for (let col = 0; col < battlefieldSize.width; col++) {
            const cell = document.createElement('div');
            cell.className = 'battlefield-cell';
            cell.dataset.row = row;
            cell.dataset.col = col;
            cell.addEventListener('click', () => handleCellClick(row, col));
            cell.addEventListener('dragover', handleDragOver);
            cell.addEventListener('drop', (e) => handleDrop(e, row, col));
            cell.addEventListener('dragstart', (e) => handleTerrainDragStart(e, row, col));
            cell.addEventListener('dragend', (e) => handleTerrainDragEnd(e, row, col));

            battlefieldGrid[row][col] = {
                element: cell,
                terrain: false,
                objective: false,
                occupied: false,
                unit: null
            };

            battlefieldGridDiv.appendChild(cell);
        }
    }

    // Add terrain
    for (let i = 0; i < terrainCount; i++) {
        let row, col;
        do {
            row = Math.floor(Math.random() * battlefieldSize.height);
            col = Math.floor(Math.random() * battlefieldSize.width);
        } while (battlefieldGrid[row][col].terrain || battlefieldGrid[row][col].objective);

        battlefieldGrid[row][col].terrain = true;
        battlefieldGrid[row][col].element.classList.add('terrain');
        battlefieldGrid[row][col].element.draggable = true;
    }

    // Add objectives with strategic distribution
    const totalObjectives = objectiveCount;
    let objectivesPlaced = 0;

    // Define deployment zones based on battlefield size
    const zoneDepth = Math.max(1, Math.floor(battlefieldSize.height / 3)); // Depth of each zone
    const playerZoneStart = battlefieldSize.height - zoneDepth;
    const enemyZoneEnd = zoneDepth - 1;
    const noMansLandStart = zoneDepth;
    const noMansLandEnd = battlefieldSize.height - zoneDepth - 1;

    // Allocate objectives to zones
    let playerObjectives, enemyObjectives, noMansLandObjectives;

    // For large battlefields (22x30" or larger), ensure at least 1 objective in each deployment zone
    const isLargeBattlefield = battlefieldSize.width >= 11 && battlefieldSize.height >= 15;

    if (isLargeBattlefield && totalObjectives >= 2) {
        playerObjectives = 1;
        enemyObjectives = 1;
        noMansLandObjectives = Math.max(0, totalObjectives - 2);
    } else {
        // Standard allocation
        playerObjectives = Math.min(2, Math.max(0, Math.floor(totalObjectives * 0.2)));
        enemyObjectives = Math.min(2, Math.max(0, Math.floor(totalObjectives * 0.2)));
        noMansLandObjectives = Math.max(0, totalObjectives - playerObjectives - enemyObjectives);
    }

    // Place objectives in player deployment zone
    for (let i = 0; i < playerObjectives && objectivesPlaced < totalObjectives; i++) {
        let row, col;
        let attempts = 0;
        do {
            row = playerZoneStart + Math.floor(Math.random() * zoneDepth);
            col = Math.floor(Math.random() * battlefieldSize.width);
            attempts++;
        } while ((battlefieldGrid[row][col].terrain || battlefieldGrid[row][col].objective) && attempts < 50);

        if (attempts < 50) {
            battlefieldGrid[row][col].objective = true;
            battlefieldGrid[row][col].element.classList.add('objective');
            battlefieldGrid[row][col].element.draggable = true;
            objectivesPlaced++;
        }
    }

    // Place objectives in enemy deployment zone
    for (let i = 0; i < enemyObjectives && objectivesPlaced < totalObjectives; i++) {
        let row, col;
        let attempts = 0;
        do {
            row = Math.floor(Math.random() * zoneDepth);
            col = Math.floor(Math.random() * battlefieldSize.width);
            attempts++;
        } while ((battlefieldGrid[row][col].terrain || battlefieldGrid[row][col].objective) && attempts < 50);

        if (attempts < 50) {
            battlefieldGrid[row][col].objective = true;
            battlefieldGrid[row][col].element.classList.add('objective');
            battlefieldGrid[row][col].element.draggable = true;
            objectivesPlaced++;
        }
    }

    // Place remaining objectives in no man's land
    for (let i = 0; i < noMansLandObjectives && objectivesPlaced < totalObjectives; i++) {
        let row, col;
        let attempts = 0;
        do {
            row = noMansLandStart + Math.floor(Math.random() * (noMansLandEnd - noMansLandStart + 1));
            col = Math.floor(Math.random() * battlefieldSize.width);
            attempts++;
        } while ((battlefieldGrid[row][col].terrain || battlefieldGrid[row][col].objective) && attempts < 50);

        if (attempts < 50) {
            battlefieldGrid[row][col].objective = true;
            battlefieldGrid[row][col].element.classList.add('objective');
            battlefieldGrid[row][col].element.draggable = true;
            objectivesPlaced++;
        }
    }

    // If we couldn't place all objectives due to conflicts, place remaining randomly
    while (objectivesPlaced < totalObjectives) {
        let row, col;
        let attempts = 0;
        do {
            row = Math.floor(Math.random() * battlefieldSize.height);
            col = Math.floor(Math.random() * battlefieldSize.width);
            attempts++;
        } while ((battlefieldGrid[row][col].terrain || battlefieldGrid[row][col].objective) && attempts < 100);

        if (attempts < 100) {
            battlefieldGrid[row][col].objective = true;
            battlefieldGrid[row][col].element.classList.add('objective');
            battlefieldGrid[row][col].element.draggable = true;
            objectivesPlaced++;
        } else {
            break; // Give up if we can't find a spot
        }
    }
}

function handleCellClick(row, col) {
    const cell = battlefieldGrid[row][col];

    if (addTerrainMode) {
        if (!cell.terrain && !cell.objective && !cell.occupied) {
            addTerrain(row, col);
        } else if (cell.terrain) {
            removeTerrain(row, col);
        }
        return;
    }

    if (addObjectiveMode) {
        if (!cell.terrain && !cell.objective && !cell.occupied) {
            addObjective(row, col);
        } else if (cell.objective) {
            removeObjective(row, col);
        }
        return;
    }

    if (cell.occupied) {
        // Remove unit from battlefield
        removeUnitFromBattlefield(row, col);
    }
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDrop(e, row, col) {
    e.preventDefault();
    const cell = battlefieldGrid[row][col];

    // Handle terrain/objective dragging
    if (draggedTerrain) {
        const fromRow = draggedTerrain.row;
        const fromCol = draggedTerrain.col;
        const fromCell = battlefieldGrid[fromRow][fromCol];

        if (fromCell.terrain && !cell.terrain && !cell.objective && !cell.occupied) {
            // Move terrain
            removeTerrain(fromRow, fromCol);
            addTerrain(row, col);
        } else if (fromCell.objective && !cell.terrain && !cell.objective && !cell.occupied) {
            // Move objective
            removeObjective(fromRow, fromCol);
            addObjective(row, col);
        }
        draggedTerrain = null;
        return;
    }

    // Handle unit drops
    const rawData = e.dataTransfer.getData('text/plain');
    const [owner, unitId] = rawData.split('|');
    const unit = armyList.find(u => getUnitOwner(u) === owner && u.id == unitId);

    if (unit && !cell.occupied && !cell.terrain) {
        placeUnitOnBattlefield(unit, row, col);
    }
}

function handleTerrainDragStart(e, row, col) {
    const cell = battlefieldGrid[row][col];
    if (cell.terrain || cell.objective) {
        draggedTerrain = { row, col, type: cell.terrain ? 'terrain' : 'objective' };
        e.dataTransfer.effectAllowed = 'move';
    }
}

function handleTerrainDragEnd(e, row, col) {
    draggedTerrain = null;
}

function addTerrain(row, col) {
    const cell = battlefieldGrid[row][col];
    if (!cell.terrain && !cell.objective && !cell.occupied) {
        cell.terrain = true;
        cell.element.classList.add('terrain');
        cell.element.draggable = true;
    }
}

function removeTerrain(row, col) {
    const cell = battlefieldGrid[row][col];
    if (cell.terrain) {
        cell.terrain = false;
        cell.element.classList.remove('terrain');
        cell.element.draggable = false;
    }
}

function addObjective(row, col) {
    const cell = battlefieldGrid[row][col];
    if (!cell.terrain && !cell.objective && !cell.occupied) {
        cell.objective = true;
        cell.element.classList.add('objective');
        cell.element.draggable = true;
    }
}

function removeObjective(row, col) {
    const cell = battlefieldGrid[row][col];
    if (cell.objective) {
        cell.objective = false;
        cell.element.classList.remove('objective');
        cell.element.draggable = false;
    }
}

function clearAllTerrain() {
    for (let row = 0; row < battlefieldSize.height; row++) {
        for (let col = 0; col < battlefieldSize.width; col++) {
            removeTerrain(row, col);
            removeObjective(row, col);
        }
    }
}

function updateTerrainButtonStates() {
    addTerrainBtn.classList.toggle('active', addTerrainMode);
    addObjectiveBtn.classList.toggle('active', addObjectiveMode);

    // Update battlefield grid classes for visual feedback
    battlefieldGridDiv.classList.toggle('adding-terrain', addTerrainMode);
    battlefieldGridDiv.classList.toggle('adding-objectives', addObjectiveMode);
}

function placeUnitOnBattlefield(unit, row, col) {
    const cell = battlefieldGrid[row][col];
    if (cell.occupied || cell.terrain) return;

    cell.occupied = true;
    cell.unit = unit;

    const unitElement = document.createElement('div');
    unitElement.className = `battlefield-unit ${unit.owner === 'enemy' ? 'enemy-unit' : 'player-unit'}`;
    unitElement.textContent = unit.name.length > 8 ? unit.name.substring(0, 8) + '...' : unit.name;
    unitElement.draggable = true;
    unitElement.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('text/plain', `${unit.owner}|${unit.id}`);
        e.dataTransfer.effectAllowed = 'move';
    });
    unitElement.addEventListener('dblclick', () => removeUnitFromBattlefield(row, col));

    cell.element.appendChild(unitElement);
    cell.element.classList.add('occupied');
}

function removeUnitFromBattlefield(row, col) {
    const cell = battlefieldGrid[row][col];
    if (!cell.occupied) return;

    cell.occupied = false;
    cell.unit = null;
    cell.element.innerHTML = '';
    cell.element.classList.remove('occupied');
}

function clearBattlefieldUnits() {
    for (let row = 0; row < battlefieldSize.height; row++) {
        for (let col = 0; col < battlefieldSize.width; col++) {
            if (battlefieldGrid[row] && battlefieldGrid[row][col].occupied) {
                removeUnitFromBattlefield(row, col);
            }
        }
    }
}

function updateDeploymentZones() {
    const playerUnits = armyList.filter(u => getUnitOwner(u) === 'player');
    const enemyUnits = armyList.filter(u => getUnitOwner(u) === 'enemy');

    playerDeploymentDiv.innerHTML = '';
    enemyDeploymentDiv.innerHTML = '';

    playerUnits.forEach(unit => {
        const index = armyList.indexOf(unit);
        const unitElement = document.createElement('div');
        unitElement.className = 'deployment-unit';
        unitElement.style.cssText = `
            background: rgba(255, 140, 0, 0.8);
            color: #000;
            padding: 6px 8px;
            border-radius: 4px;
            margin: 4px;
            cursor: move;
            font-size: 0.8em;
            font-weight: bold;
            border: 1px solid #ff8c00;
        `;
        unitElement.textContent = `${unit.name} x${unit.count}`;
        unitElement.draggable = true;
        unitElement.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', `player|${unit.id}`);
            e.dataTransfer.effectAllowed = 'copy';
        });

        playerDeploymentDiv.appendChild(unitElement);
    });

    enemyUnits.forEach(unit => {
        const index = armyList.indexOf(unit);
        const unitElement = document.createElement('div');
        unitElement.className = 'deployment-unit';
        unitElement.style.cssText = `
            background: rgba(200, 50, 50, 0.85);
            color: #fff;
            padding: 6px 8px;
            border-radius: 4px;
            margin: 4px;
            cursor: move;
            font-size: 0.8em;
            font-weight: bold;
            border: 1px solid #ff5555;
        `;
        unitElement.textContent = `${unit.name} x${unit.count}`;
        unitElement.draggable = true;
        unitElement.addEventListener('dragstart', (e) => {
            e.dataTransfer.setData('text/plain', `enemy|${unit.id}`);
            e.dataTransfer.effectAllowed = 'copy';
        });

        enemyDeploymentDiv.appendChild(unitElement);
    });

    if (playerUnits.length === 0) {
        playerDeploymentDiv.innerHTML = '<p style="color: #777; font-style: italic; text-align: center;">No units to deploy</p>';
    }
    if (enemyUnits.length === 0) {
        enemyDeploymentDiv.innerHTML = '<p style="color: #777; font-style: italic; text-align: center;">No opponent units to deploy</p>';
    }
}

function saveStrategy() {
    const strategy = {
        notes: strategyNotesTextarea.value,
        mission: activeMission,
        turnNumber,
        secondaryObjectives: currentSecondaryObjectives,
        battlefield: {
            size: battlefieldSizeSelect.value,
            density: terrainDensity,
            objectiveCount: objectiveCountValue,
            units: [],
            terrain: [],
            objectives: []
        }
    };

    // Save unit positions
    for (let row = 0; row < battlefieldSize.height; row++) {
        for (let col = 0; col < battlefieldSize.width; col++) {
            if (battlefieldGrid[row] && battlefieldGrid[row][col].occupied) {
                strategy.battlefield.units.push({
                    unitId: battlefieldGrid[row][col].unit.id,
                    owner: battlefieldGrid[row][col].unit.owner,
                    row: row,
                    col: col
                });
            }
            if (battlefieldGrid[row] && battlefieldGrid[row][col].terrain) {
                strategy.battlefield.terrain.push({ row, col });
            }
            if (battlefieldGrid[row] && battlefieldGrid[row][col].objective) {
                strategy.battlefield.objectives.push({ row, col });
            }
        }
    }

    localStorage.setItem('w40kStrategy', JSON.stringify(strategy));
    alert('Strategy saved!');
}

function loadStrategy() {
    const savedStrategy = localStorage.getItem('w40kStrategy');
    if (!savedStrategy) {
        alert('No saved strategy found!');
        return;
    }

    const strategy = JSON.parse(savedStrategy);

    // Load notes
    strategyNotesTextarea.value = strategy.notes || '';

    // Load mission
    activeMission = strategy.mission || getRandomMission();
    setMissionOutput(activeMission);
    turnNumber = strategy.turnNumber || 0;
    currentSecondaryObjectives = strategy.secondaryObjectives || [];
    setTurnCounter();
    setSecondaryObjectivesOutput();

    // Load battlefield settings
    if (strategy.battlefield) {
        battlefieldSizeSelect.value = strategy.battlefield.size || 'medium';
        terrainDensitySelect.value = strategy.battlefield.density || 'medium';
        objectiveCountInput.value = strategy.battlefield.objectiveCount || 3;
        battlefieldSize = getBattlefieldSize(battlefieldSizeSelect.value);
        terrainDensity = terrainDensitySelect.value;
        objectiveCountValue = parseInt(objectiveCountInput.value) || 3;

        generateBattlefield();

        // Load unit positions
        if (strategy.battlefield.units) {
            strategy.battlefield.units.forEach(unitPlacement => {
                const unitOwner = unitPlacement.owner === 'enemy' ? 'enemy' : 'player';
                const unit = armyList.find(u => getUnitOwner(u) === unitOwner && u.id == unitPlacement.unitId);
                if (unit && unitPlacement.row < battlefieldSize.height && unitPlacement.col < battlefieldSize.width) {
                    placeUnitOnBattlefield(unit, unitPlacement.row, unitPlacement.col);
                }
            });
        }

        // Load terrain
        if (strategy.battlefield.terrain) {
            strategy.battlefield.terrain.forEach(terrainPos => {
                if (terrainPos.row < battlefieldSize.height && terrainPos.col < battlefieldSize.width) {
                    addTerrain(terrainPos.row, terrainPos.col);
                }
            });
        }

        // Load objectives
        if (strategy.battlefield.objectives) {
            strategy.battlefield.objectives.forEach(objectivePos => {
                if (objectivePos.row < battlefieldSize && objectivePos.col < battlefieldSize) {
                    addObjective(objectivePos.row, objectivePos.col);
                }
            });
        }
    }

    alert('Strategy loaded!');
}

// Override updateUI to also update deployment zones
const originalUpdateUI = updateUI;
updateUI = function() {
    originalUpdateUI();
    updateDeploymentZones();
};

// Initialize battlefield when page loads
document.addEventListener('DOMContentLoaded', initBattlefield);
