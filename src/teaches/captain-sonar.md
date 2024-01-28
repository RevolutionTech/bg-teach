# Captain Sonar

### Overview

- [ ] Theme & vibe
- [ ] 2 teams with 4 roles each: Captain, First Mate, Engineer, and Radio Operator
- [ ] Real-time
- [ ] Game end: first team to take 4 damage to their submarine loses

### Captain

- [ ] Marks initial starting location with an "X" (not shown to enemy team)
- [ ] Each turn, announces a course loudly and clearly (eg. HEAD NORTH)
  - [ ] Cannot cross your own path
  - [ ] Cannot move into an island
  - [ ] Cannot enter location of your own mine
- [ ] Captain waits for First Mate and Engineer to say "OK" before taking next turn
- [ ] If Captain cannot move, she must surface instead

### Radio Operator

- [ ] Tracks the course of the other team by listening carefully to the enemy Captain
- [ ] Can move transparent sheet around to find a valid location
- [ ] Captain should leverage Radio Operator's work to determine enemy location
- [ ] If lost, it's a good idea to erase everything and start over

### First Mate

- [ ] Each turn, marks an empty space on any gauge
- [ ] When a gauge is full, the First Mate loudly announces (eg. MINE READY)
- [ ] Also tracks the submarine's damage

### Engineer

- [ ] Each turn, chooses equipment to breakdown corresponding to the declared course
- [ ] If any equipment of a system is broken down, that system cannot be activated
  - [ ] Red = Mine + Torpedo
  - [ ] Green = Drone + Sonar
  - [ ] Yellow = Silence + Scenario
  - [ ] Radiation symbols have no effect on their own
- [ ] Submarine takes damage if all radiation equipment is broken down or an entire area is broken down
  - [ ] Either way, Engineer announces "DAMAGE" and all breakdowns are reset
- [ ] Engineer can self-repair systems that are connected by breaking down all of the connected equipment
- [ ] All breakdowns can also be reset by surfacing

### Surfacing

- [ ] Captain announces "SURFACE" and starts erasing the route on her sheet
  - [ ] The Captain maintains the current position and position of mines
- [ ] Each crew member draws a line around one of the sections of the submarine and initialing it, starting with the Engineer
  - [ ] Once complete, the enemy Engineer must validate
  - [ ] Then the Engineer can erase all these lines and all breakdowns and announces "READY TO DIVE"
  - [ ] The captain announces "DIVE" and play resumes

### Systems

- [ ] The Captain can activate any system, the First Mate can activate the Drone + Sonar systems
- [ ] Before activating. check with the Engineer that no breakdowns are affecting the system
- [ ] To activate, first announce "STOP" and all play pauses
- [ ] Torpedo: launches 1-4 spaces away (no diagonals) and announces location (eg. "TORPEDO LAUNCHED IN C6")
- [ ] Dropping mine: Captain draws M on adjacent space and announces "MINE DROPPED"
- [ ] Triggering mine: Captain announces (eg. "TRIGGERING A MINE AT G7")
- [ ] Torpedo or mine: Enemy Captain responds "DIRECT HIT" (2 damage), "INDIRECT HIT" (1 damage), or "ALL CLEAR" (no damage)
- [ ] Drone: Captain asks other team Captain a sector (eg. "ARE YOU IN SECTOR 5?")
- [ ] Sonar: Enemy Captain provides 2 pieces of information of row, column, and sector; 1 piece is true, 1 piece is false
- [ ] Silence: Captain announces "ACTIVATING SILENCE" and can move 0-4 spaces in a valid straight line indicating to her team silently the decision
  - [ ] If the Captain moves, the First Mate and Engineer must take a normal turn
- [ ] Scenario
- [ ] After activating, First Mate clears the gauge for the activated system and play resumes

### Setup

- [ ] When teams are ready, Captain marks starting location and shouts "DIVE"
