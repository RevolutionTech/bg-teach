# 51st State

### Overview
- [ ] Post-apocalyptic engine builder: build a State by controlling Locations
- [ ] Objective: most VPs
- [ ] End trigger: any player hits 25 VPs → finish round, then +1 VP per Location in your State (Ruins = 0)
- [ ] TBs: most total Goods, most Locations

### Card Anatomy
- [ ] Each card = a Location; has Distance, Spoils, Deal field, Category (Production / Feature / Action), Type(s)
- [ ] Category → which row it lives in (Production = top, Feature = middle, Action = bottom)
- [ ] Types matter for Developing; cards can have 2 types (only need 1 to match)

### Resources & Tokens
- [ ] 4 Resources: Fuel, Iron, Gun, Brick
- [ ] Ammo = wild Resource when spending (not the other way around)
- [ ] 3 Contact token colors: Grey (Build), Blue (Deal), Red (Raze)
- [ ] Universal Contact = any color

### Round Structure
1. Lookout → 2. Production → 3. Action → 4. Cleanup

### 1. Lookout Phase
- [ ] Reveal top of each Connection pile (Blue + Red)
- [ ] Draw players+1 cards face-up; clockwise pick 1 each → discard remaining
- [ ] Repeat with another players+1 cards, counter-clockwise; discard remaining
- [ ] No hand limit

### 2. Production Phase
- [ ] Gain from: Faction board → Deals → Production Locations (this order matters for cards that depend on current Goods)

### 3. Action Phase
- [ ] Clockwise, 1 action at a time; pass = no more actions this round
- [ ] Once passed: immune to all interaction (can't be Razed, Open Productions can't be used)
- [ ] No limit on number or type of actions

#### Build: Construct
- [ ] Spend Grey tokens = Distance; place card in appropriate row
- [ ] Production Locations produce immediately when built

#### Build: Develop
- [ ] Discard 1 Brick (or 1 Dev token) + a Location in your State that shares ≥1 Type with card in hand
- [ ] Place hand card in appropriate row; gain 1 VP
  - [ ] Dev token: types don't need to match
  - [ ] Ruins = any Type; cards with no Type = any Type
  - [ ] New card can go in a different row than the card it replaced
  - [ ] Goods on activated card → return to supply; stored Goods → keep
  - [ ] No Contact tokens needed

#### Make a Deal
- [ ] Spend Blue tokens = Distance; slide card under Faction board so only blue Deal field shows
- [ ] Take the depicted Good immediately; Deal produces each Production phase going forward

#### Raze: From hand
- [ ] Discard Red tokens = Distance; take Spoils

#### Raze: Opponent's Location
- [ ] Spend Red tokens = Defense value (Prod = 3, Feature = 4, Action = 5)
  - [ ] +1 Red if Shield token on the Location
- [ ] You take Spoils; opponent takes Deal Good; Location flips face-down → Ruins
- [ ] Can't Raze your own Locations; can't Raze a passed player's Locations
- [ ] Tokens placed for activation are returned to supply when Razed; stored tokens → owner keeps

#### Use Action (Location or Faction board)
- [ ] Spend indicated Goods; place them on the card to mark it used
- [ ] Once per round unless card says otherwise; if activatable multiple times, can do all at once or across turns

#### Open Production (opponent's)
- [ ] Place your Worker on their card; take Production Goods; they gain 1 Worker
- [ ] Can't use your own Open Productions this way

#### Connection Cards
- [ ] Take: spend 2 Workers → take 1 face-up Connection card to hand (can't play same turn)
- [ ] Play: discard from hand → take depicted Goods (1 action)

#### Shield Tokens
- [ ] Anytime during your turn: place 1 Shield on one of your Locations (free; not an action)
- [ ] +1 Defense; max 1 per Location; discarded when Location is Razed or Developed

### 4. Cleanup Phase
- [ ] Storage abilities fire first (save specified Goods on card)
- [ ] Discard all remaining Resources, Workers, Contact tokens, Shields to supply
- [ ] Discard face-up Connection cards not taken
- [ ] Keep: cards in hand (no limit)
- [ ] Pass First Player token left

### Setup
- [ ] Each player: draw 6 cards, keep 4, discard 2
