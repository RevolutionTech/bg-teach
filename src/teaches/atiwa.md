# Atiwa

### Overview
- [ ] Theme & vibe: eco-friendly worker placement set in Ghana
    - [ ] Overview: grow communities, protect fruit bats, avoid pollution
- [ ] Objective: most points at end of round 7

### Round Structure
- [ ] Round overview: Work Phase (x3), Maintenance Phase
- [ ] Work Phase: clockwise, one turn at a time; each turn = mandatory Worker Action + optional Fruit Bat Action

### Worker Action
- [ ] Place 1 worker on any unoccupied action space, carry out its actions immediately
- [ ] Each action space has 2 associated actions: the tile on top + the printed action below it
  - [ ] Current round's space has no tile but still has 2 actions (family + printed below)
- [ ] Actions can be taken in any order; you can take fewer tokens than offered; you can skip actions entirely
- [ ] Nature icon (leaf) actions scale with how many nature icons are on your terrain cards
  - [ ] Nature icons represent absence of habitable houses
- [ ] Bonus action (shown below a "4 terrain cards" threshold): available once if you have ≥4 terrain cards in tableau
- [ ] 4P only: two "gold × nature" spaces cannot both be occupied by the same player in one round

### Fruit Bat Action (Optional)
- [ ] After each worker action, you may take one fruit bat action if you have: ≥3 fruit bats + ≥1 fruit in tableau + ≥1 tree on supply board + room for a tree
- [ ] To do: move 3 fruit bats from tableau → night card; spend 1 fruit; collect 1 tree
- [ ] Fruit bats on night card return in Maintenance step 3
- [ ] Can use fruit bats just collected this turn

### Cards & Tableau
- [ ] All tokens (except gold) must be placed on cards — no card space, no token
- [ ] Two card types: **location** (cost trees + gold; always have house spaces) and **terrain** (free; rarely have houses)
- [ ] Cards placed face-up below your supply board, orthogonally adjacent to existing cards, facing upright
  - [ ] Max 4 cards per row; can start new rows at any time; no need to complete rows
- [ ] You may not rotate cards
- [ ] Where you place a card matters for pollution order

### Token Placement Rules
- [ ] Resources can generally only go on indicated spaces
  - [ ] Families start out untrained
  - [ ] Fruit can go on trees
  - [ ] Bats can go on trained families
  - [ ] Some location/terrain cards have more exceptions

### Blank Spaces
- [ ] Blank spaces accept any token type except family, but only if that token type is already on that card
- [ ] Clarification: "tree with fruit" action can go on a blank space if any tree is already on the card

### Families & Training
- [ ] Untrained families: go mining → draw 1 pollution marker per untrained family; no bonus points at scoring
- [ ] Trained families: earn 1 gold income flat; hold 1 fruit bat; enable fruit bats on blank spaces; +1 bonus point at scoring; cannot feed fruit bats
- [ ] Training action: flip an untrained family to trained side
  - [ ] Rounds I and VI: the round space combines a family + training action, so you can place a family already trained
- [ ] Fruit bats in houses: special tile action only; places 1 fruit bat per unoccupied house (incl. uninhabitable houses on #16/#28)
  - [ ] If a family moves into a bat-occupied house, bat returns to supply unless you train that family immediately (only possible Rounds I & VI)
  - [ ] Once a bat leaves a house, it cannot return

### Tokens: Limits & Spending
- [ ] Hard limits: 8 wild animals, 13 trees, 8 fruit, 13 families, 7 goats; gold and fruit bats are unlimited
- [ ] Tokens on supply board do NOT belong to you — only tokens on cards (and gold beside tableau) can be spent
- [ ] Spending animals/trees/fruit/goats: return to rightmost empty space on supply board
- [ ] Spending gold/fruit bats: return to general supply
- [ ] Spending a tree with fruit: fruit returns to supply board for free (no compensation)
- [ ] Cannot rearrange tokens on cards; cannot voluntarily discard tokens (except via Fruit Bat Action)

### Start Player Marker
- [ ] Gained whenever you acquire a location card (not terrain)
- [ ] Changes hands during the work phase but only matters at end of work phase — the last holder becomes start player for the maintenance phase onward

### Maintenance Phase (7 steps in order)

**Step 1 – Income**
- [ ] Trained family → +1 gold each
- [ ] Untrained family → draw 1 pollution marker (blind); collect depicted gold if any; flip to polluted side; place on tableau
- [ ] Pollution placement order: top-middle of each card left→right, then top-right of each card left→right, then middle row spaces, then bottom row spaces
  - [ ] Pollution destroys any tokens on that space (bats → general supply; rest → supply board)
  - [ ] Pollution is permanent; blocks that space forever

**Step 2 – Wild Animals, Trees, and Fruit**
- [ ] Read rightmost empty space of wild animal row → collect that many new trees immediately
- [ ] Then read rightmost empty space of tree row (including trees just gained) → collect that many new fruit
- [ ] Then read rightmost empty space of fruit row (including fruit just gained) → collect that many new fruit bats
- [ ] Each sub-step feeds into the next; take only what you have room for

**Step 3 – Fruit Bats**
- [ ] Return all fruit bats from night card to tableau; must place as many as possible; any with no room go back to general supply

**Step 4 – Feeding**
- [ ] Food demand = rightmost empty space of family row − rightmost empty space of goat row
- [ ] If demand > 0, must spend tokens for food: goat = 3, wild animal = 2, fruit/gold = 1
- [ ] Fruit bats = 1 food each, but only up to your number of untrained families; fully-trained players cannot feed bats
- [ ] Must spend tokens if you can; cannot voluntarily take the penalty
- [ ] Food shortage: −2 points per missing food
- [ ] Don't recalculate demand after spending a goat/wild animal; no "overspend refund"

**Step 5 – Breeding**
- [ ] Round space lists up to 3 conditions; if you meet the threshold in your tableau and have room, collect exactly 1 of that token
- [ ] Each condition applies at most once per round regardless of how many you have

**Step 6 – Workers**
- [ ] Return all workers from the action board to your supply

**Step 7 – Preparation**
- [ ] Discard remaining face-up terrain cards; draw new ones above action spaces
- [ ] Shift the upcoming round's action space tile one space left (covers current round, reveals next)

### Scoring
- [ ] Gold: 1 pt each
- [ ] Cards: sum point values printed top-left (some terrain = negative!)
- [ ] Supply board: number on rightmost empty space of each row (max: 2 wild animals, 6 trees, 3 fruit, 25 families, 7 goats; full row = 0)
- [ ] Trained families: 1 pt each
- [ ] Fruit bats: (total fruit bats) − 10, minimum 0 (only scores if you have >10)
- [ ] Missing food: total negative points accrued during game
- [ ] Tiebreaker: fewer pollution markers
