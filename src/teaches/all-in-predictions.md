# All In: Predictions

### Overview
- [ ] Poker-hand-building game with predictions
- [ ] Each round: play cards to shape your 5-card hand, then everyone predicts who has the best hand
- [ ] Earn Runes from hand rank + from the pot if your prediction is correct
- [ ] Most Runes after 3 rounds wins

### Round Flow
- [ ] Turn overview: Play a Card, Pass, or Go All In
- [ ] Round ends when the display fills up → Prediction phase

### Turn Actions

**Play a Card**
- [ ] Play any card face up, resolve effects top → bottom
  - [ ] ★ effect is mandatory; all others optional
- [ ] Place the played card into the display (leftmost available space)
- [ ] Discard excess if hand > 5 after effects; hand must end at exactly 5
  - [ ] Discarding multiple: show all, place in order of your choice

**Pass**
- [ ] Add top card of deck face up to display; still take turns later

**Go All In**
- [ ] Put your hand face down; add 2 cards from deck to display
- [ ] From then on, auto-pass each turn
- [ ] Protected from Hypnosis and All-Seeing Eye for the rest of the round
- [ ] Only 1 player can Go All In per round

### The Display
- [ ] Cards always placed on leftmost available space
- [ ] Row 2 splays on top of row 1; buried cards are locked (can't be taken)

### Prediction Phase
- [ ] Triggered when display reaches its card limit
- [ ] Starting with the player after the one who filled the display, each player places their token on whoever they think has the best hand (can be yourself)

### Scoring (The Unfolding)
1. **Pot**: correct predictors split the pot equally; remainder carries to next round; all wrong → entire pot carries
2. **Hands**: each player earns Runes = their hand's rank value (see chart)
3. **Rune cards**: +2 Runes each; never count toward hand rank
Tied ranks: Highest card (Full House: compare 3-of-a-kind), suit: Spade > Heart > Scarab > Tree

### Round End
- [ ] Starting player: fewest Runes (tie: worst hand last round)
- [ ] 3rd round -> most Runes wins
- [ ] Tie: highest hand at end of round 3
